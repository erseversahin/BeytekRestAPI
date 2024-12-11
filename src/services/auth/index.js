import jwt from 'jsonwebtoken';

// Global storage for tokens (to manage logout functionality)
let tokens = [];

// Secret key for signing JWT
const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable in production

// Login a user and generate a JWT token
export const LOGIN = (req, res) => {
    const { email, password } = req.body;

    // Dummy user data for login simulation
    const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123' };

    // Check email and password
    if (email !== user.email || password !== user.password) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    // Store the token in the global tokens array
    tokens.push(token);

    res.status(200).json({ message: 'Login successful', token });
};

// Logout a user by invalidating their token
export const LOGOUT = (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    // Remove the token from the global tokens array
    tokens = tokens.filter(t => t !== token);

    res.status(200).json({ message: 'Logout successful' });
};

// Middleware to protect routes
export const AUTHENTICATE = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token is required in Bearer format' });
    }

    const token = authHeader.split(' ')[1];

    // Check if the token is invalidated
    if (!tokens.includes(token)) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }

    try {
        // Verify JWT token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach decoded user info to the request
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
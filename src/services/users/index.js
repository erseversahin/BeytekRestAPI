// Global users array
let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', password: 'password123' },
];

// Get all users
export const GET_USERS = (req, res) => {
    res.status(200).json(users);
};

// Get user by ID
export const GET_USER_BY_ID = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
};

// Create a new user
export const POST_USER = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { id, name, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update a user
export const PUT_USERS = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

    users[userIndex] = { ...users[userIndex], name, email };
    res.status(200).json(users[userIndex]);
};

// Delete a user
export const DELETE_USER = (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json(deletedUser[0]);
};
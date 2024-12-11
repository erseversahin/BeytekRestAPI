import express from 'express';
import userRoutes from './users.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

// Rotaları bağla
router.use('/users', userRoutes); // Kullanıcı rotaları
router.use('/auth', authRoutes); // Kimlik doğrulama rotaları

// Ana rota kontrolü (isteğe bağlı)
router.get('/test', (req, res) => {
    res.send('Welcome to Beytek REST API');
});

export default router;
import express from 'express';
import { LOGIN, LOGOUT, AUTHENTICATE } from '../services/auth/index.js';

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Kullanıcı girişi yap ve JWT oluştur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login başarılı
 *       401:
 *         description: Geçersiz email veya şifre
 */
router.post('/login', LOGIN);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Kullanıcıyı çıkış yaptır ve tokenı geçersiz kıl
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout başarılı
 *       400:
 *         description: Token eksik
 */
router.post('/logout', AUTHENTICATE, LOGOUT);

/**
 * @swagger
 * /auth/protected:
 *   get:
 *     summary: Korumalı bir rota (kimlik doğrulama gerektirir)
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Korumalı rotaya erişim sağlandı
 *       401:
 *         description: Yetkisiz erişim
 */
router.get('/protected', AUTHENTICATE, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
});

export default router;
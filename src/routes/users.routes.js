import express from 'express';
import * as SERVICES from '../services/users/index.js';
import { AUTHENTICATE } from '../services/auth/index.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Kullanıcı CRUD işlemleri
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Tüm kullanıcıları listele
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Kullanıcıların listesi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 */
router.get('/', AUTHENTICATE, SERVICES.GET_USERS);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Belirli bir kullanıcıyı getir
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kullanıcı ID'si
 *     responses:
 *       200:
 *         description: Kullanıcı bilgileri
 *       404:
 *         description: Kullanıcı bulunamadı
 */
router.get('/:id', AUTHENTICATE, SERVICES.GET_USER_BY_ID);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Yeni bir kullanıcı oluştur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Yeni kullanıcı oluşturuldu
 */
router.post('/', AUTHENTICATE, SERVICES.POST_USER);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Kullanıcı bilgilerini güncelle
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Güncellenecek kullanıcı ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Kullanıcı başarıyla güncellendi
 *       404:
 *         description: Kullanıcı bulunamadı
 */
router.put('/:id', AUTHENTICATE, SERVICES.PUT_USERS);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Kullanıcıyı sil
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Silinecek kullanıcı ID'si
 *     responses:
 *       200:
 *         description: Kullanıcı başarıyla silindi
 *       404:
 *         description: Kullanıcı bulunamadı
 */
router.delete('/:id', AUTHENTICATE, SERVICES.DELETE_USER);

export default router;
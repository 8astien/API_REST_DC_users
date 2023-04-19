import express from 'express';
import { generateUser, generateUsers } from '../controllers/UserController.js';

const router = express.Router();

// GET SINGLE USER
router.get('/', generateUser);

// GET 5 USERS
router.get('/list', generateUsers);

export default router;

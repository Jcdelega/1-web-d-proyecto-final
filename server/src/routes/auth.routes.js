import { Router } from 'express';
import { register, login, logout, session } from '../controllers/auth.controller.js';
import { authRequired } from '../middleware/validateToken.js';

const router = Router();

router.post('/register', register);
router.post('/login', login );
router.post('/logout', logout );
router.get('/session', authRequired, session)

export default router;
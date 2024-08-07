import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const router = Router();

// The app routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// New user route
router.post('/users', UsersController.postNew);

// Authentication route
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);

export default router;

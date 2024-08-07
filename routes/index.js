import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = Router();

// The routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// New user route
router.post('/users', UsersController.postNew);

export default router;

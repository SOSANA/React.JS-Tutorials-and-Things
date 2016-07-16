import { Router } from 'express';
import * as Authentication from '../controllers/authentication';
const router = new Router();

// definging a route the user can visit
router.route('/signup').post(Authentication.signup);

export default router;

import { Router } from 'express';
import passport from 'passport';
import * as Authentication from '../controllers/authentication';
import passportService from '../services/passport';

const router = new Router();
// any requests coming in, must pass this requireAuth step
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// definging a route handler for a get request for our root route
router.route('/').get(requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

// definging a route handler for a post request for our signup route
router.route('/signup').post(Authentication.signup);

// definging a route handler for a post request for our signin route
// 'requireSignin' will try to authenticate this user before the hit this route handler
router.route('/signin').post(requireSignin, Authentication.signup, requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

export default router;

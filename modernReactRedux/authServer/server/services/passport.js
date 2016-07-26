/**
 * Passport:
 *  - helps us authenticate a user when they attempt they attempt to visit
 *  	a route that requires authentication
 */

import passport from 'passport';
import User from '../models/user';
import jwtConfig from '../config/jwtConfig'; // importing our secret string
import { Strategy as JWTStrategy, ExtractJwt as extractJwt } from 'passport-jwt';

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: extractJwt.fromHeader('authorization'),
  secretOrKey: jwtConfig.secret,
};

// create JWT Strategy
const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
  // see if the user ID in the payload exists in our database. If it does, call
  // 'done' with that other. Otherwise, call done without a user
  User.findById(payload.sub, (err, user) => { // remember 'sub' coming from authentication.js
    // if we don't find a user, throw an error
    if (err) {
      console.error("error: don't have access to payload, cannot find user, they are not authenticated"); // eslint-disable-line no-console
      return done(err, false);
    }

    if (!user) {
      return done(null, false); // no error searching for user but we did not find a user, don't authenticate
    }

    return done(null, user); // if user exists do a callback with done
  });
});

// tell passport to use this Strategy
passport.use(jwtLogin);

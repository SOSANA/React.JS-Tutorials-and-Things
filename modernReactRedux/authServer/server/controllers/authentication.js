import User from '../models/user';

export function signup(req, res, next) {
  // in postman add raw to body with defaults to see log below
  // { "email": "test@example.com", "password": "test" }
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  // successfully backout if user does not provide email and password
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // see if a user with the given email exists
  return User.findOne({ email }, (err, existingUser) => {
    if (err) {
      console.error('error: User already exists'); // eslint-disable-line no-console
      return next(err);
    }

    // if a user with email does exist, return an error
    if (existingUser) {
      // '422' means unprocessable entity
      return res.status(422).send({ error: 'Email is in use' });
    }

    // if a user with a email does not exist, create and save user record
    const user = new User({
      email,
      password,
    });

    return user.save(() => {
      if (err) {
        console.error('error: User was not able to be saved to database'); // eslint-disable-line no-console
        return next(err);
      }

      // respond to request indicating the user was created
      return res.json({ success: true });
    });
  });
}

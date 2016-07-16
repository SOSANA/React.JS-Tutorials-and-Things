import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

// define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// on save hook, encrypt password
userSchema.pre('save', (next) => {
  const user = this;

  return bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error('error: bcrypt not salting password'); // eslint-disable-line no-console
      return next(err);
    }

    return bcrypt.hash(user.password, salt, null, (hash) => {
      if (err) {
        console.error('error: bcrypt not hashing password'); // eslint-disable-line no-console
        return next(err);
      }

      user.password = hash;
      return next();
    });
  });
});

// export our created model class
// loads schema into mongoDB and corresponds to a collection 'user'
export default mongoose.model('user', userSchema);

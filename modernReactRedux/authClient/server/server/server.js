// main starting point for app
import Express from 'express';
import bodyParser from 'body-parser'; // parsing incoming requests into json
import morgan from 'morgan'; // logging incoming requests
import mongoose from 'mongoose';
import cors from 'cors';

// initialize the express app
const app = new Express();

// import required modules
import userRoutes from './routes/user';
import serverConfig from './config/serverConfig';

// DB setup
mongoose.connect(serverConfig.mongoURL, (err) => {
  if (err) {
    console.error('error: Make sure Mongodb is running'); // eslint-disable-line no-console
    throw err;
  }
});

// app middleware setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use('/', userRoutes);

// start app
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${serverConfig.port}!`); // eslint-disable-line
  }
});

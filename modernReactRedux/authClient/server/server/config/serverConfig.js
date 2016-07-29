const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/auth',
  port: process.env.PORT || 8080,
};

export default serverConfig;

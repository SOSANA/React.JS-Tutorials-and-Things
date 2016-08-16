const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/auth',
  port: process.env.PORT || 8080,
  ROOT_URL: 'http://localhost:8080/api',
};

export default serverConfig;

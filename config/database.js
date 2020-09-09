const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ENV_MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, console.debug('MongoDB connected'));
 
module.exports = mongoose;
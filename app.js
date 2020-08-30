const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Message = require('./api/example/models/message'),
  bodyParser = require('body-parser');

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ENV_MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/example/routes/message');
routes(app);

app.listen(port);

console.log('TODO RESTful API server started on: ' + port);

module.exports = app;
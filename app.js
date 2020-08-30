const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  db = require('./config/database'),
  routes = require('./api/example/routes/message');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
db.config();

app.listen(port);

console.log('TODO RESTful API server started on: ' + port);

module.exports = app;
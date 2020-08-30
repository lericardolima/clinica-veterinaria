const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  db = require('./config/database'),
  routes = require('./api/routes');

// Definição do body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração de rotas
routes(app);

// Configuração do banco de dados
db.config();

// Start do servidor
app.listen(port);
console.log('TODO RESTful API server started on: ' + port);

module.exports = app;
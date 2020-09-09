const controller = require('../controllers/medico');

module.exports = (app) => {
    
    app.get('/api/medicos', controller.findAll);
    app.post('/api/medicos', controller.save);

}
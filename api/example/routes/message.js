const controller = require('../controllers/message');

module.exports = (app) => {
    app.route('/message')
    .get(controller.get);
}

const Message = require('../models/message');

exports.get = (req, res) => {
    Message.findOne((error, message) => {
        if (error) {
            res.send(error);
        }

        console.log(message);
        res.json(message).status(200);
    });
}

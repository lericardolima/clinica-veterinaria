const Medico = require('../models/medico');
const Especialidade = require('../models/especialidade');

exports.findAll = (req, res) => {
  Medico.find(
      (err, medico) => {
        res.send(medico).status(200);
      }
    );
};

exports.save = (req, res) => {

    const requestBody = req.body;
    const especialidade = new Especialidade(requestBody.especialidade);

    especialidade.save((err) => {

        const medico = new Medico(requestBody);
        medico.especialidade = especialidade;

        medico.save((error) => {
                if (err) {
                    return res.send(err).status(400);
                }
                return res.send(medico).status(201);
            })
        }
      );
  };
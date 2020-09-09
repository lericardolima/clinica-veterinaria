const mongoose = require('../../config/database');

const EspecialidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Especialidade', EspecialidadeSchema);

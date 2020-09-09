const mongoose = require('../../config/database');
const Especialidade = require('./especialidade');
const { Schema } = require('../../config/database');

const MedicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  especialidade: {
      type: Schema.Types.ObjectId,
      ref: 'Especialidade'
  }
});

module.exports = mongoose.model('Medico', MedicoSchema);

const db = require('../../config/database');


const EspecialidadeSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Especialidade', EspecialidadeSchema);

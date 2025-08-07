const mongoose = require('mongoose');

const pratoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String
});

const Prato = mongoose.model('Prato', pratoSchema);

module.exports = Prato;
  
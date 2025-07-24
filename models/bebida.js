const mongoose = require('mongoose');

const bebidaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String
});

const Bebida = mongoose.model('Bebida', bebidaSchema);
module.exports = Bebida;

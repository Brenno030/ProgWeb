const mongoose = require('mongoose');

const sobremesaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String
});

module.exports = mongoose.model('Sobremesa', sobremesaSchema);

const express = require('express');
const router = express.Router();
const Bebida = require('../models/bebida'); // modelo do MongoDB


router.get('/', async (req, res) => {
  try {
    const bebidas = await Bebida.find(); // busca as bebidas

   res.render('index', {
  title: 'Bebidas',
  content: 'pages/bebidas',
  bebidas,
  pratos: [],
  sobremesas: []
});
  } catch (error) {
    console.error('Erro ao buscar bebidas:', error);
    res.render('index', {
      title: 'Erro',
      content: 'pages/bebidas',
      bebidas: []
    });
  }
});


module.exports = router;

const express = require('express');
const router = express.Router();
const Prato = require('../models/pratos'); // modelo do MongoDB
const sobremesa = require('../models/sobremesa');


router.get('/', async (req, res) => {
  try {
    const pratos = await Prato.find(); // busca no MongoDB

    res.render('index', {
  title: 'Cardápio de Pratos',
  content: 'pages/pratos',
  pratos,
  bebidas: [],
  sobremesas: []
});
  } catch (error) {
    console.error('Erro ao buscar pratos:', error);
    res.render('index', {
      title: 'Erro',
      content: 'pages/pratos',
      pratos: [],
      bebidas:[],
      sobremesa:[]
    });
  }
});

module.exports = router;

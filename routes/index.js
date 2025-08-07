const express = require('express');
const router = express.Router();

const Prato = require('../models/pratos');
const Bebida = require('../models/bebida');
const Sobremesa = require('../models/sobremesa');

// rota principal do site
router.get('/', async (req, res) => {
  try {
    const pratos = await Prato.find();
    const bebidas = await Bebida.find();
    const sobremesas = await Sobremesa.find();

    res.render('index', { 
      title: 'Página Inicial',
      content: 'pages/pratos', // <- cliente vê pratos.ejs da pasta pages
      pratos,
      bebidas,
      sobremesas
    });
  } catch (error) {
    console.error('Erro ao carregar dados do cliente:', error);
    res.render('index', {
      title: 'Erro',
      content: 'pages/pratos',
      pratos: [],
      bebidas: [],
      sobremesas: []
    });
  }
});

module.exports = router;

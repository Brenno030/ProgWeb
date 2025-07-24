const express = require('express');
const router = express.Router();
const Prato = require('../models/pratos');
const Bebida = require('../models/bebida');
const Sobremesa = require('../models/sobremesa');

// Rota padrão do admin (exibe os pratos por padrão)
router.get('/', async (req, res) => {
  try {
    const pratos = await Prato.find();
    res.render('pages/admin', {
      title: 'Admin - Pratos',
      content: 'admin/cardPratos',
      pratos,
      bebidas: [],
      sobremesas: []
    });
  } catch (error) {
    console.error('Erro ao carregar dados do admin:', error);
    res.render('pages/admin', {
      title: 'Erro',
      content: 'admin/cardPratos',
      pratos: [],
      bebidas: [],
      sobremesas: []
    });
  }
});

// Rota para Pratos
router.get('/pratos', async (req, res) => {
  const pratos = await Prato.find();
  res.render('pages/admin', {
    title: 'Admin - Pratos',
    content: 'admin/cardPratos',
    pratos,
    bebidas: [],
    sobremesas: []
  });
});

// Rota para Bebidas
router.get('/bebidas', async (req, res) => {
  const bebidas = await Bebida.find();
  res.render('pages/admin', {
    title: 'Admin - Bebidas',
    content: 'admin/cardBebidas',
    pratos: [],
    bebidas,
    sobremesas: []
  });
});

// Rota para Sobremesas
router.get('/sobremesas', async (req, res) => {
  const sobremesas = await Sobremesa.find();
  res.render('pages/admin', {
    title: 'Admin - Sobremesas',
    content: 'admin/cardSobremesas',
    pratos: [],
    bebidas: [],
    sobremesas
  });
});

module.exports = router;

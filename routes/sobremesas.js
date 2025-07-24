const express = require('express');
const router = express.Router();
const Sobremesa = require('../models/sobremesa');

router.get('/', async (req, res) => {
  try {
    const sobremesas = await Sobremesa.find();

    res.render('index', {
  title: 'Sobremesas',
  content: 'pages/sobremesas',
  sobremesas,
  pratos: [],
  bebidas: []
});
  } catch (error) {
    console.error('Erro ao buscar sobremesas:', error);
    res.render('index', {
      title: 'Erro',
      content: 'pages/sobremesas',
      sobremesas: []
    });
  }
});

module.exports = router;

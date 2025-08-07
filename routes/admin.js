const express = require('express');
const router = express.Router();
const Prato = require('../models/pratos');
const Bebida = require('../models/bebida');
const Sobremesa = require('../models/sobremesa');
const upload = require('../config/uploadConfig');

// =======================
// ROTAS DE LISTAGEM
// =======================
router.get('/', async (req, res) => {
  const pratos = await Prato.find();
  res.render('pages/admin', {
    title: 'Admin - Pratos',
    content: 'admin/cardPratos',
    categoria: 'pratos',
    pratos,
    bebidas: [],
    sobremesas: []
  });
});

router.get('/pratos', async (req, res) => {
  const pratos = await Prato.find();
  res.render('pages/admin', {
    title: 'Admin - Pratos',
    content: 'admin/cardPratos',
    categoria: 'pratos',
    pratos,
    bebidas: [],
    sobremesas: []
  });
});

router.get('/bebidas', async (req, res) => {
  const bebidas = await Bebida.find();
  res.render('pages/admin', {
    title: 'Admin - Bebidas',
    content: 'admin/cardBebidas',
    categoria: 'bebidas',
    pratos: [],
    bebidas,
    sobremesas: []
  });
});

router.get('/sobremesas', async (req, res) => {
  const sobremesas = await Sobremesa.find();
  res.render('pages/admin', {
    title: 'Admin - Sobremesas',
    content: 'admin/cardSobremesas',
    categoria: 'sobremesas',
    pratos: [],
    bebidas: [],
    sobremesas
  });
});

// =======================
// CRIAR
// =======================
router.post('/pratos/criar', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const imagem = req.file ? `pratos/${req.file.filename}` : '';
  await new Prato({ nome, descricao, preco, imagem }).save();
  res.redirect('/admin/pratos');
});

router.post('/bebidas/criar', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const imagem = req.file ? `bebidas/${req.file.filename}` : '';
  await new Bebida({ nome, descricao, preco, imagem }).save();
  res.redirect('/admin/bebidas');
});

router.post('/sobremesas/criar', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const imagem = req.file ? `sobremesas/${req.file.filename}` : '';
  await new Sobremesa({ nome, descricao, preco, imagem }).save();
  res.redirect('/admin/sobremesas');
});

// =======================
// EDITAR
// =======================
router.post('/pratos/editar/:id', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco, imagemAntiga } = req.body;
  const imagem = req.file ? `pratos/${req.file.filename}` : imagemAntiga;
  await Prato.findByIdAndUpdate(req.params.id, { nome, descricao, preco, imagem });
  res.redirect('/admin/pratos');
});

router.post('/bebidas/editar/:id', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco, imagemAntiga } = req.body;
  const imagem = req.file ? `bebidas/${req.file.filename}` : imagemAntiga;
  await Bebida.findByIdAndUpdate(req.params.id, { nome, descricao, preco, imagem });
  res.redirect('/admin/bebidas');
});

router.post('/sobremesas/editar/:id', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco, imagemAntiga } = req.body;
  const imagem = req.file ? `sobremesas/${req.file.filename}` : imagemAntiga;
  await Sobremesa.findByIdAndUpdate(req.params.id, { nome, descricao, preco, imagem });
  res.redirect('/admin/sobremesas');
});

// =======================
// DELETAR
// =======================
router.post('/pratos/deletar/:id', async (req, res) => {
  await Prato.findByIdAndDelete(req.params.id);
  res.redirect('/admin/pratos');
});

router.post('/bebidas/deletar/:id', async (req, res) => {
  await Bebida.findByIdAndDelete(req.params.id);
  res.redirect('/admin/bebidas');
});

router.post('/sobremesas/deletar/:id', async (req, res) => {
  await Sobremesa.findByIdAndDelete(req.params.id);
  res.redirect('/admin/sobremesas');
});

module.exports = router;

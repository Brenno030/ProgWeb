const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Página Inicial',
    content: 'pages/pratos'
  });
});

module.exports = router;
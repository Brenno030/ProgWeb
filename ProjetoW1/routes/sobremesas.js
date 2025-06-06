const express = require('express');
const router = express.Router();

// sobremesas.js
// bebidas.js, pratos.js, sobremesas.js
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Cardápio de Sobremesas',  // Título dinâmico
        content: 'pages/sobremesas'       // Caminho sem .ejs (já adicionado no include)
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();

// pratos.js
// bebidas.js, pratos.js, sobremesas.js
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Cardápio de Pratos',  // Título dinâmico
        content: 'pages/pratos'       // Caminho sem .ejs (já adicionado no include)
    });
});
module.exports = router;
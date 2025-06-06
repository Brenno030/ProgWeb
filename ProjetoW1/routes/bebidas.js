const express = require('express');
const router = express.Router();

// bebidas.js
// bebidas.js, pratos.js, sobremesas.js
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Cardápio de Bebidas',  // Título dinâmico
        content: 'pages/bebidas'       // Caminho sem .ejs (já adicionado no include)
    });
});
module.exports = router;
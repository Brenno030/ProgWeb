const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota /about
app.get('/about', (req, res) => {
  res.send('Sobre nós');
});

// Rota /data (POST)
app.post('/data', (req, res) => {
  res.send('Dados recebidos via POST');
});

// Grupo de rotas /users
app.get('/users/:userid', (req, res) => {
  res.send(`Usuário ID: ${req.params.userid}`);
});

app.get('/users/signin', (req, res) => {
  res.send('Página de login');
});

app.get('/users/signup', (req, res) => {
  res.send('Página de cadastro');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

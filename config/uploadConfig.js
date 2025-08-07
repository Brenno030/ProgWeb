const multer = require('multer');
const path = require('path');
const fs = require('fs');

function criarPastaSeNaoExistir(pasta) {
  if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta, { recursive: true });
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let pastaCategoria = 'outros';

    const url = `${req.baseUrl}${req.path}`; // mais confiável
    if (url.includes('/pratos')) pastaCategoria = 'pratos';
    else if (url.includes('/bebidas')) pastaCategoria = 'bebidas';
    else if (url.includes('/sobremesas')) pastaCategoria = 'sobremesas';

    const pastaFinal = path.join('public', 'images', pastaCategoria);
    criarPastaSeNaoExistir(pastaFinal);
    cb(null, pastaFinal);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Apenas imagens são permitidas'));
  }
};

module.exports = multer({ storage, fileFilter });

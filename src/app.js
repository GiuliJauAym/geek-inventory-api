const express = require('express');
const sequelize = require('./config/database');
const { Categoria, Producto, VideoJuego, Prototipo } = require('./models/index');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.json({ status: 'ok', message: 'API funcionando con Express' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

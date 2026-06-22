const Categoria = require('./Categoria');
const Producto = require('./Producto');
const VideoJuego = require('./VideoJuego');
const Prototipo = require('./Prototipo');

// Cargar asociaciones
require('./associations');

module.exports = {
  Categoria,
  Producto,
  VideoJuego,
  Prototipo
};
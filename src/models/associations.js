const Categoria = require('./Categoria');
const Producto = require('./Producto');
const VideoJuego = require('./VideoJuego');
const Prototipo = require('./Prototipo');

// Asociaciones
// Categoria -> Producto (1 a muchos)
Categoria.hasMany(Producto, {
  foreignKey: 'idCategoria',
  as: 'productos'
});

Producto.belongsTo(Categoria, {
  foreignKey: 'idCategoria',
  as: 'categoria'
});

// VideoJuego -> Prototipo (1 a muchos)
VideoJuego.hasMany(Prototipo, {
  foreignKey: 'idVideojuego',
  as: 'prototipos'
});

Prototipo.belongsTo(VideoJuego, {
  foreignKey: 'idVideojuego',
  as: 'videojuego'
});

module.exports = {
  Categoria,
  Producto,
  VideoJuego,
  Prototipo
};
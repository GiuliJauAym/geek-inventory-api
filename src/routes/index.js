const express = require('express');
const router = express.Router();

const CategoriaRoutes = require('./CategoriaRoutes');
const ProductoRoutes = require('./ProductoRoutes');
const VideojuegoRoutes = require('./VideojuegoRoutes');
const PrototipoRoutes = require('./PrototipoRoutes');

router.use('/categorias', CategoriaRoutes);
router.use('/productos', ProductoRoutes);
router.use('/videojuegos', VideojuegoRoutes);
router.use('/prototipos', PrototipoRoutes);

module.exports = router;
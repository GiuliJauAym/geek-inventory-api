const express = require('express');
const router = express.Router();

const CategoriaRoutes = require('./CategoriaRoutes');
const ProductoRoutes = require('./ProductoRoutes');
const VideojuegoRoutes = require('./VideojuegoRoutes');
const PrototipoRoutes = require('./PrototipoRoutes');

router.use('/Categorias', CategoriaRoutes);
router.use('/Productos', ProductoRoutes);
router.use('/Videojuegos', VideojuegoRoutes);
router.use('/Prototipos', PrototipoRoutes);

module.exports = router;
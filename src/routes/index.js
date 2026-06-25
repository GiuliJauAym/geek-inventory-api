const express = require('express');
const router = express.Router();

const categoriaRoutes = require('./categoriaRoutes');
const productoRoutes = require('./productoRoutes');
const videojuegoRoutes = require('./videojuegoRoutes');
const prototipoRoutes = require('./prototipoRoutes');

// Vincular las rutas a sus endpoints base
router.use('/categorias', categoriaRoutes);
router.use('/productos', productoRoutes);
router.use('/videojuegos', videojuegoRoutes);
router.use('/prototipos', prototipoRoutes);

module.exports = router;
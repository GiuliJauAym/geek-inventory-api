const express = require('express');
const router = express.Router();
const VideoJuegoController = require('../controllers/VideoJuegoController');

router.get('/', VideoJuegoController.obtenerTodos);
router.get('/:id', VideoJuegoController.obtenerPorId);
router.post('/', VideoJuegoController.crear);
router.put('/:id', VideoJuegoController.actualizar);
router.delete('/:id', VideoJuegoController.eliminar);

module.exports = router;
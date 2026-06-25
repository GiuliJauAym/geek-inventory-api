const express = require('express');
const router = express.Router();
const PrototipoController = require('../controllers/PrototipoController');

router.get('/', PrototipoController.obtenerTodos);
router.get('/:id', PrototipoController.obtenerPorId);
router.post('/', PrototipoController.crear);
router.put('/:id', PrototipoController.actualizar);
router.delete('/:id', PrototipoController.eliminar);

module.exports = router;
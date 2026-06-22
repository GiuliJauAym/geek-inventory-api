const { Prototipo, VideoJuego } = require('../models/index');

class PrototipoController {
  // Obtener todos los prototipos
  static async obtenerTodos(req, res) {
    try {
      const prototipos = await Prototipo.findAll({
        include: [
          {
            model: VideoJuego,
            as: 'videojuego',
            attributes: ['id', 'titulo']
          }
        ]
      });
      res.status(200).json({
        success: true,
        data: prototipos,
        message: 'Prototipos obtenidos correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener prototipos',
        error: error.message
      });
    }
  }

  // Obtener un prototipo por ID
  static async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const prototipo = await Prototipo.findByPk(id, {
        include: [
          {
            model: VideoJuego,
            as: 'videojuego',
            attributes: ['id', 'titulo']
          }
        ]
      });

      if (!prototipo) {
        return res.status(404).json({
          success: false,
          message: 'Prototipo no encontrado'
        });
      }

      res.status(200).json({
        success: true,
        data: prototipo
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener prototipo',
        error: error.message
      });
    }
  }

  // Crear un nuevo prototipo
  static async crear(req, res) {
    try {
      const { titulo, descripcion, estado, idVideojuego, motor, inspiracion } = req.body;

      if (!titulo) {
        return res.status(400).json({
          success: false,
          message: 'El titulo es requerido'
        });
      }

       if (!estado) {
        return res.status(400).json({
          success: false,
          message: 'El estado es requerido'
        });
      }

      const nuevoPrototipo = await Prototipo.create({ titulo, descripcion, estado, idVideojuego, motor, inspiracion });

      res.status(201).json({
        success: true,
        data: nuevoPrototipo,
        message: 'Prototipo creado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear prototipo',
        error: error.message
      });
    }
  }

  // Actualizar un prototipo
  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descripcion, estado, idVideojuego, motor, inspiracion } = req.body;

      const prototipo = await Prototipo.findByPk(id);

      if (!prototipo) {
        return res.status(404).json({
          success: false,
          message: 'Prototipo no encontrado'
        });
      }

      await prototipo.update(req.body);

      res.status(200).json({
        success: true,
        data: prototipo,
        message: 'Prototipo actualizado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar prototipo',
        error: error.message
      });
    }
  }

  // Eliminar un prototipo
  static async eliminar(req, res) {
    try {
      const { id } = req.params;

      const prototipo = await Prototipo.findByPk(id);

      if (!prototipo) {
        return res.status(404).json({
          success: false,
          message: 'Prototipo no encontrado'
        });
      }

      await prototipo.destroy();

      res.status(200).json({
        success: true,
        message: 'Prototipo eliminado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar prototipo',
        error: error.message
      });
    }
  }
}

module.exports = PrototipoController;
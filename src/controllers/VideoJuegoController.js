const { VideoJuego } = require('../models/index');

class VideoJuegoController {
  // Obtener todos los videojuegos
  static async obtenerTodos(req, res) {
    try {
      const videojuegos = await VideoJuego.findAll();
      res.status(200).json({
        success: true,
        data: videojuegos,
        message: 'Videojuegos obtenidos correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener videojuegos',
        error: error.message
      });
    }
  }

  // Obtener un videojuego por ID
  static async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const videojuego = await VideoJuego.findByPk(id);

      if (!videojuego) {
        return res.status(404).json({
          success: false,
          message: 'Videojuego no encontrado'
        });
      }

      res.status(200).json({
        success: true,
        data: videojuego
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener videojuego',
        error: error.message
      });
    }
  }

  // Crear un nuevo videojuego
  static async crear(req, res) {
    try {
      const { titulo, descripcion, genero, estado } = req.body;

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

      const nuevoVideoJuego = await VideoJuego.create({ titulo, descripcion, genero, estado });

      res.status(201).json({
        success: true,
        data: nuevoVideoJuego,
        message: 'Videojuego creado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear videojuego',
        error: error.message
      });
    }
  }

  // Actualizar un videojuego
  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descripcion, genero, estado } = req.body;

      const videojuego = await VideoJuego.findByPk(id);

      if (!videojuego) {
        return res.status(404).json({
          success: false,
          message: 'Videojuego no encontrado'
        });
      }

      await videojuego.update(req.body);

      res.status(200).json({
        success: true,
        data: videojuego,
        message: 'Videojuego actualizado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar videojuego',
        error: error.message
      });
    }
  }

  // Eliminar un videojuego
  static async eliminar(req, res) {
    try {
      const { id } = req.params;

      const videojuego = await VideoJuego.findByPk(id);

      if (!videojuego) {
        return res.status(404).json({
          success: false,
          message: 'Videojuego no encontrado'
        });
      }

      await videojuego.destroy();

      res.status(200).json({
        success: true,
        message: 'Videojuego eliminado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar videojuego',
        error: error.message
      });
    }
  }
}

module.exports = VideoJuegoController;
const { Categoria } = require('../models/index');

class CategoriaController {
  // Obtener todas las categorías
  static async obtenerTodas(req, res) {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json({
        success: true,
        data: categorias,
        message: 'Categorías obtenidas correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener categorías',
        error: error.message
      });
    }
  }

  // Obtener una categoría por ID
  static async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({
          success: false,
          message: 'Categoría no encontrada'
        });
      }

      res.status(200).json({
        success: true,
        data: categoria
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener categoría',
        error: error.message
      });
    }
  }

  // Crear una nueva categoría
  static async crear(req, res) {
    try {
      const { nombre } = req.body;

      if (!nombre) {
        return res.status(400).json({
          success: false,
          message: 'El nombre es requerido'
        });
      }

      const nuevaCategoria = await Categoria.create({ nombre });

      res.status(201).json({
        success: true,
        data: nuevaCategoria,
        message: 'Categoría creada correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear categoría',
        error: error.message
      });
    }
  }

  // Actualizar una categoría
  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;

      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({
          success: false,
          message: 'Categoría no encontrada'
        });
      }

      await categoria.update({ nombre });

      res.status(200).json({
        success: true,
        data: categoria,
        message: 'Categoría actualizada correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar categoría',
        error: error.message
      });
    }
  }

  // Eliminar una categoría
  static async eliminar(req, res) {
    try {
      const { id } = req.params;

      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({
          success: false,
          message: 'Categoría no encontrada'
        });
      }

      await categoria.destroy();

      res.status(200).json({
        success: true,
        message: 'Categoría eliminada correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar categoría',
        error: error.message
      });
    }
  }
}

module.exports = CategoriaController;
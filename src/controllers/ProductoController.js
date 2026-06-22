const { Producto, Categoria } = require('../models/index');

class ProductoController {
  // Obtener todos los productos
  static async obtenerTodos(req, res) {
    try {
      const productos = await Producto.findAll({
        include: [
          {
            model: Categoria,
            as: 'categoria',
            attributes: ['id', 'nombre']
          }
        ]
      });
      res.status(200).json({
        success: true,
        data: productos,
        message: 'Productos obtenidos correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener productos',
        error: error.message
      });
    }
  }

  // Obtener un producto por ID
  static async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id, {
        include: [
          {
            model: Categoria,
            as: 'categoria',
            attributes: ['id', 'nombre']
          }
        ]
      });

      if (!producto) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado'
        });
      }

      res.status(200).json({
        success: true,
        data: producto
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener producto',
        error: error.message
      });
    }
  }

  // Crear un nuevo producto
  static async crear(req, res) {
    try {
      const { nombre, descripcion, precioUnitario, cantidad, idCategoria } = req.body;

      if (!nombre) {
        return res.status(400).json({
          success: false,
          message: 'El nombre es requerido'
        });
      }

      if (precioUnitario === undefined || precioUnitario === null) {
        return res.status(400).json({
        success: false,
        message: 'El precio unitario es requerido'
        });
      }

      if (cantidad === undefined || cantidad === null) {
        return res.status(400).json({
        success: false,
        message: 'La cantidad es requerida'
        });
      }

      if (!idCategoria) {
        return res.status(400).json({
          success: false,
          message: 'La categoría es requerida'
        });
      }
      const nuevoProducto = await Producto.create({ nombre, descripcion, precioUnitario, cantidad, idCategoria });

      res.status(201).json({
        success: true,
        data: nuevoProducto,
        message: 'Producto creado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear producto',
        error: error.message
      });
    }
  }

  // Actualizar un producto
  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre, descripcion, precioUnitario, cantidad, idCategoria } = req.body;

      const producto = await Producto.findByPk(id);

      if (!producto) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado'
        });
      }

      await producto.update(req.body);

      res.status(200).json({
        success: true,
        data: producto,
        message: 'Producto actualizado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar producto',
        error: error.message
      });
    }
  }

  // Eliminar un producto
  static async eliminar(req, res) {
    try {
      const { id } = req.params;

      const producto = await Producto.findByPk(id);

      if (!producto) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado'
        });
      }

      await producto.destroy();

      res.status(200).json({
        success: true,
        message: 'Producto eliminado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar producto',
        error: error.message
      });
    }
  }
}

module.exports = ProductoController;
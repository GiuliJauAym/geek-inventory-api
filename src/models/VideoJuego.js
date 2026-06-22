const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VideoJuego = sequelize.define('VideoJuego', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { notEmpty: true }
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'jugando', 'completado'),
    allowNull: false,
    defaultValue: 'pendiente',
  },
}, {
  tableName: 'videojuegos'
});

module.exports = VideoJuego;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prototipo = sequelize.define('Prototipo', {
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
    estado: {
        type: DataTypes.ENUM('idea', 'desarrollo', 'pausa', 'completado'),
        allowNull: false,
        defaultValue: 'idea',
    },
    Id_videojuego: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'videojuegos',
            key: 'id'
        }
    },
    fechaCreacion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: DataTypes.NOW,
    },
    motor: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    inspiracion: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }
}, {
    tableName: 'prototipos'
});

module.exports = Prototipo;
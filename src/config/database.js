require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 1433,
  dialect: 'mssql',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    options: {
      encrypt: false, 
      trustServerCertificate: true,
      connectTimeout: 30000,
    },
  },
});

// Prueba conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a BD exitosa'))
  .catch(err => console.error('❌ Error de conexión:', err.message));

// Sincroniza modelos
sequelize.sync({ alter: true })
  .then(() => console.log('✅ BD sincronizada'))
  .catch(err => console.error('❌ Error en sincronización:', err.message));

module.exports = sequelize;

const { Connection } = require('tedious');

const config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: '153759M',
    },
  },
  options: {
    database: 'GeekInventoryDB',
    port: 1433,
    encrypt: false,
    trustServerCertificate: true,
    instanceName: 'SQLEXPRESS',
    connectTimeout: 30000,
  },
};

const connection = new Connection(config);

connection.on('connect', () => {
  console.log('✅ Conexión exitosa con tedious');
  connection.close();
});

connection.on('error', (err) => {
  console.error('❌ Error:', err.message);
});

connection.connect();

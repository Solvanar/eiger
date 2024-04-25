const SequelizeConnection = require('./lib/sequelize.connection');
let connectionManager = new SequelizeConnection();

module.exports = connectionManager;

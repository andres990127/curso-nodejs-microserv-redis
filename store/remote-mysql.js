// Archivo para conexión a la base de datos remota (Microservicio MySQL)

const remote = require('./remote');

const config = require('../config');

module.exports = new remote(config.mysqlService.host, config.mysqlService.port)
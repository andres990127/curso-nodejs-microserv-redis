// Archivo para conexión al cache redis

const remote = require('./remote');

const config = require('../config');

module.exports = new remote(config.cacheService.host, config.cacheService.port)
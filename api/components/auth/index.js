// Archivo para gestionar los permisos de inicio de sesión de usuarios

// Se importa la base de datos
const store = require('../../../store/mysql');

// Se importa el controlador
const ctrl = require('./controller');

// Se le pasa al controlador la base de datos que se quiere usar
module.exports = ctrl(store);
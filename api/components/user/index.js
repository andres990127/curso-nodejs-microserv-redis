// Archivo para gestionar dinamicamente la base de datos que se quiera usar

// Se importa la base de datos
//const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');

// Se importa el controlador
const ctrl = require('./controller');

// Se le pasa al controlador la base de datos que se quiere usar
module.exports = ctrl(store);
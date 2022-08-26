// Archivo para gestionar dinamicamente la base de datos que se quiera usar

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require('../../../config');

// Se importa la base de datos
let store;
if (config.remoteDB === true){
    store = require('../../../store/remote-mysql');
} else{
    store = require('../../../store/mysql');
}

// Se importa el controlador
const ctrl = require('./controller');

// Se le pasa al controlador la base de datos que se quiere usar
module.exports = ctrl(store);
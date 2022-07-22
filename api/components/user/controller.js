// Archivo para gestión de capa de controlador de 'Usuarios'

// Se importa el modulo de acceso base de datos
const store = require('../../../store/dummy');

// Se declara el nombre de la tabla a buscar en base de datos
const TABLA = 'user';

/* ----------------------------------------------------------
----  Servicios disponibles para la capa de controlador  ----
-----------------------------------------------------------*/
function list(){
    return store.list(TABLA);
}

// Se exportan los servicios
module.exports = {
    list,
}
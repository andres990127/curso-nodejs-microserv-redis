// Archivo para gestión de capa de controlador de 'Usuarios'

// Se importa el modulo de acceso base de datos
const store = require('../../../store/dummy');

// Se declara el nombre de la tabla a buscar en base de datos
const TABLA = 'user';

/* ----------------------------------------------------------
----  Servicios disponibles para la capa de controlador  ----
-----------------------------------------------------------*/

// Se recibe la base de datos a utilizar
module.exports = function(injectedStore){
    
    // Se guarda la base de datos en 'store'
    let store = injectedStore; 

    // Si no se recibe base de datos se usa la dummy
    if(!store){
        store = require('../../../store/dummy');
    }

    // Función para obtener toda la información de la tabla
    async function list(){
        return store.list(TABLA);
    }

    // Función para obtener un registro de la tabla por id
    async function get(id){
        return store.get(TABLA, id);
    }

    // Función para obtener un registro de la tabla por id
    async function upsert(data){
        return store.upsert(TABLA, data);
    }

    // Función para obtener un registro de la tabla por id
    async function remove(id){
        return store.remove(TABLA, id);
    }

    return{
        list,
        get,
        upsert,
        remove
    };
}

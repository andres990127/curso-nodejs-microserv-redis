// Archivo para gestión de capa de controlador de 'Usuarios'

// Se importa modulo para creación de Id's
const nanoid = require('nanoid');

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
    async function upsert(body){
        const user = {
            name: body.name
        }

        if(body.id){
            user.id = body.id;
        }else {
            user.id = nanoId();
        }

        return store.upsert(TABLA, user);
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

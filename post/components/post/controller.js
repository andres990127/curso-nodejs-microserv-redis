// Archivo para gestión de capa de controlador de 'Post'

// Se importa modulo para creación de Id's
const { nanoid } = require('nanoid')

// Se importa le modulo de autenticación
const auth = require('../../../api/components/auth');

// Se declara el nombre de la tabla a usar en base de datos
const TABLA = 'post';

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

    return{
        list,
    };
}
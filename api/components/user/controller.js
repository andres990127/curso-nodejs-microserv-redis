// Archivo para gestión de capa de controlador de 'Usuarios'

// Se importa modulo para creación de Id's
const { nanoid } = require('nanoid')

// Se importa le modulo de autenticación
const auth = require('../auth');

// Se declara el nombre de la tabla a usar en base de datos
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

    // Función para insertar un registro a la tabla
    async function upsert(body){
        const user = {
            name: body.name,
            username: body.username
        }

        if(body.id){
            user.id = body.id;
        }else {
            user.id = nanoid();
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password
            })
        }

        return store.upsert(TABLA, user);
    }

    // Función para borrar un registro de la tabla por id
    async function remove(id){
        return store.remove(TABLA, id);
    }

    // Función para seguir un usuario
    async function follow(from, to){
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to,
        });
    }

    // Función para obtener cuantos seguidores tiene un usuario
    async function following(user){
        const join = {};
        join[TABLA] = 'user_to';
        const query = { user_from: user };

        return await store.query(TABLA + '_follow', query, join);
    }

    return{
        list,
        get,
        upsert,
        remove,
        follow,
        following
    };
}

// Archivo para gestión de capa de controlador de 'Auth'

// Se importa el modulo para hacer login
const auth = require('../../../auth');

// Se declara el nombre de la tabla a usar en base de datos
const TABLA = 'auth';

/* ----------------------------------------------------------
----  Servicios disponibles para la capa de controlador  ----
-----------------------------------------------------------*/

// Se recibe la base de datos a utilizar
module.exports = function (injectedStore) {

    // Se guarda la base de datos en 'store'
    let store = injectedStore;

    // Si no se recibe base de datos se usa la dummy
    if (!store) {
        store = require('../../../store/dummy');
    }

    // Función para comprobar existencia de usuario y contraseña en base de datos
    async function login(username, password){
        const data = await store.query(TABLA, { username: username });
        if(data.password = password){
            return auth.sign(data);
        } else{
            throw new Error('Información inválida');
        }
    }

    // Función para insertar un registro a la tabla
    async function upsert(data) {
        const authData = {
            id: data.id
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLA, authData);
    }

    return{
        upsert,
        login,
    };
}
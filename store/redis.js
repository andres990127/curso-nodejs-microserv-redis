// Archivo para gestión de redis [https://redislabs.com/]

// Importamos el modulo de redis
const redis = require('redis');

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require('../config');

// Se crea un nuevo cliente con las credenciales dadas
const client = redis.createClient({
    url: `redis://${config.redis.user}:${config.redis.password}@${config.redis.host}:${config.redis.port}`
});

// Se conecta a la base de datos redis
(async () => {
    await client.connect();
    console.log('Conectado a REDIS');
})();

// Función para obtener información de una tabla
async function list(table) {
    const value = await client.get(table);
    return JSON.parse(value);
}

// Función para obtener un registro de una tabla
async function get(table, id) {
    const value = await client.get(`${table}_${id}`);
    return JSON.parse(value);
}

// Función para actualizar o insertar dinamicamente
async function upsert(table, data) {
    let key = table;
    if (data && data.id) {
        key += '_' + data.id;
    }
    await client.set(key, JSON.stringify(data));
    return true;
}

// Se exportan las funciones
module.exports = {
    list,
    get,
    upsert
}

// Archivo para gestionar firmas y validaciones de JWT

// Se importa el modulo de JWT
const jwt = require('jsonwebtoken');

// Funcion que retorna un JWT con payload de la data entrante
function sign(data){
    return jwt.sign(data, 'MySecret');
}

// Se exportan los modulos
module.exports = {
    sign,
}
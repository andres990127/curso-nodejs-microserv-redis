// Archivo para gestionar firmas y validaciones de JWT

// Se importa el modulo de JWT
const jwt = require('jsonwebtoken');

// Se importa el modulo de variables de ambiente
const config = require('../config');

// Se importa el modulo para manejo de errores
const error = require('../utils/error');

// Se declara la variable con el secreto con el que se firman los JWT
const secret = config.jwt.secret;

// Funcion que retorna un JWT con payload de la data entrante
function sign(data){
    return jwt.sign(data, secret);
}

// Constante con funciones de autenticación
const check = {
    // Función que verifica que el id en el JWT sea el mismo que 'owner'
    own: function(req, owner){
        const decoded = decodeHeader(req);

        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401);
        }
    },
    // Función que verifica que exista JWT
    logged: function(req){
        const decoded = decodeHeader(req);
    },
}

// Función para obtener el JWT y retornar su payload desencriptado
function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

// Función para verificar que exista el JWT y sea tipo Bearer
function getToken(auth){
    if(!auth){
        throw error('No se está enviando token JWT', 401);
    }

    if(auth.indexOf('Bearer ') === -1){
        throw error('Formato inválido', 401);
    }

    let token = auth.replace('Bearer ','');

    return token;
}

// Función para verificar que el token si fue firmado por el back
function verify(token){
    return jwt.verify(token, secret);
}

// Se exportan los modulos
module.exports = {
    sign,
    check
}
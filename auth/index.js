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

const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req);

        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401);
        }
    }
}

function verify(token){
    return jwt.verify(token, secret);
}

function getToken(auth){
    if(!auth){
        throw new Error('No se está enviando token JWT');
    }

    if(auth.indexOf('Bearer ') === -1){
        throw new Error('Formato inválido');
    }

    let token = auth.replace('Bearer ','');

    return token;
}

function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

// Se exportan los modulos
module.exports = {
    sign,
    check
}
// Archivo para gestionar firmas y validaciones de JWT

// Se importa el modulo de JWT
const jwt = require('jsonwebtoken');

const config = require('../config');

const secret = config.jwt.secret;

// Funcion que retorna un JWT con payload de la data entrante
function sign(data){
    return jwt.sign(data, secret);
}

const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req);

        if (decoded.id !== owner) {
            throw new Error('No puedes hacer esto');
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
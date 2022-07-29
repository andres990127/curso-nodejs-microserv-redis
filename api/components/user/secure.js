// Archivo para gestionar middleware para verificar el JWT

const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    return function middleware(req, res, next) {
        switch(action){
            case 'update':
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;

            default:
                next();
        }
    }
}
// Archivo para gestion de codigos de errores al hacer un throw

function err(message, code){
    let e = new Error(message);

    if(code){
        e.statusCode = code
    }

    return e;
}

module.exports = err;
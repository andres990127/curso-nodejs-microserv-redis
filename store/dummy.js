// Archivo para gestionar una base de datos fake

// Se declara la base de datos fake
const db = {
    'user': [
        {
            id: 1,
            name: 'Andrés'
        }
    ]
};

// Función para mostrar todo el contenido de una tabla
function list(tabla){
    return db[tabla];
}

// Función para obtener el registro de una tabla
function get(tabla, id){
    let col = list(tabla);
    return col.filter( item => item.id === id )[0] || null;
}

// Función para ingresar datos a una tabla
function upsert(tabla, data){
    db[collection].push(data);
}

// Función para remover un dato de la tabla
function remove(tabla, id){
    return true;
}

// Se exportan las funciones
module.exports = {
    list,
    get,
    upsert,
    remove,
}
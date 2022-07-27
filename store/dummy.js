// Archivo para gestionar una base de datos fake

// Se declara la base de datos fake
const db = {
    'user': [
        {
            id: '1',
            name: 'Andrés'
        }
    ]
};

// Función para mostrar todo el contenido de una tabla
async function list(tabla){
    return db[tabla];
}

// Función para obtener el registro de una tabla
async function get(tabla, id){
    let col = await list(tabla);
    return col.filter( item => item.id === id )[0] || null;
}

// Función para ingresar datos a una tabla
async function upsert(tabla, data){
    db[tabla].push(data);
}

// Función para remover un dato de la tabla
async function remove(tabla, id){
    return true;
}

// Se exportan las funciones
module.exports = {
    list,
    get,
    upsert,
    remove,
}
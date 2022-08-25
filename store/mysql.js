// Archivo para gestion de base de datos MySQL [https://remotemysql.com/]

// Se importa el modulo de mysql
const mysql = require('mysql');

// Se importa el modulo de variables globales
const config = require('../config');

// Se crea una constante con la información necesaria para la conexión con la bd
const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};
let connection;

// Función para conectarse con la base de datos y reconectarse cada vez que se pierde conexión
function handleCon(){
    connection = mysql.createConnection(dbconf);
    connection.connect( err => {
        if (err){
            console.error('[DB error]', err);
            setTimeout(handleCon,200);
        } else {
            console.log('DB Connected');
        }
    })

    connection.on('error', err =>{
        console.error('[DB error]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleCon();
        } else{
            throw err;
        }
    })
}

// Se llama la función de conexión
handleCon();


/* ------------------------------------------------------
----  Servicios disponibles para la capa de STORAGE  ----
--------------------------------------------------------- */

// Función para obtener todos los datos
function list(table){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) =>{
            if(err) return reject(err);
            resolve(data);
        });
    })
}

// Función para obtener datos por ID
function get(table, id){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) =>{
            if(err) return reject(err);
            resolve(data);
        });
    })
}

// Función para insertar datos a la tabla
function insert (table, data){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data , (err, result) =>{
            if(err) return reject(err);
            resolve(result);
        });
    })
}

// Función para actualizar datos a la tabla
function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

// Función para actualizar o insertar dinamicamente un registro
async function upsert(table, data) {
    const row = await get(table, data.id);

    if (row.length === 0) {
      return insert(table, data);
    } else {
        
      return update(table, data);
    }
  }

function query(table, query, join) {
    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, query, (err, res) => {
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}

module.exports = {
    list,
    get,
    insert,
    upsert,
    //remove,
    query,
}
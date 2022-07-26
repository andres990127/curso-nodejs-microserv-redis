// Microservicio para base de datos

// Se importa el modulo para la creación del servicio web
const express = require ('express');

// Se importa el modulo para lecturas de JSON de lectura de body
const bodyParser = require ('body-parser');

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require ('../config');

// Se importa la capa de vista
const router = require('./network');

// Se crea la app inicializando express
const app = express();

// Se usa bodyParser para leer Json de los body
app.use(bodyParser.json());

// Se definen las rutas
app.use('/', router);

// Se define el puerto por el que escucha el servicio web
app.listen( config.mysqlService.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port)
})
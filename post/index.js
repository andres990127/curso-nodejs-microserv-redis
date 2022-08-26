// Archivo para gestión del microservicio para "Post"

// Se importa el modulo para la creación del servicio web
const express = require('express');

// Se importa el modulo para lecturas de JSON de lectura de body
const bodyParser = require('body-parser');

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require('../config.js');

// Se importa el componente 'Post'
const post = require('./components/post/network');

// Se importa el modulo para lanzamiento de errores
const errors = require('../network/errors');

// Se crea la app inicializando express
const app = express();

// Se usa bodyParser para leer Json de los body
app.use(bodyParser.json());

// Se definen las rutas
app.use('/api/post', post);

// Se define un middleware para manejo de errores
app.use(errors);

// Se define el puerto por el que escucha el servicio web
app.listen(config.post.port, () => {
    console.log('Servicio post escuchando en el puerto ' + config.post.port);
});
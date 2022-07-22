// Archivo para gestión de todos los microservicios

// Se importa el modulo para la creación del servicio web
const express = require('express');

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require('../config.js');

// Se importa el componente 'User'
const user = require('./components/user/network');

// Se crea la app inicializando express
const app = express();

// Se definen las rutas
app.use('/api/user', user);

// Se define el puerto por el que escucha el servicio web
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ' + config.api.port);
});
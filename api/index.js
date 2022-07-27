// Archivo para gestión de todos los microservicios

// Se importa el modulo para la creación del servicio web
const express = require('express');

// Se importa el modulo para lecturas de JSON de lectura de body
const bodyParser = require('body-parser');

// Se importa Swagger para documentación de endpoints
const swaggerUI = require('swagger-ui-express');

// Se importa el archivo de configuración para obtener variables de ambiente
const config = require('../config.js');

// Se importa el componente 'User'
const user = require('./components/user/network');

// Se crea la app inicializando express
const app = express();

// Se usa bodyParser para leer Json de los body
app.use(bodyParser.json());

// Se define el archivo Json que dibuja la página de Swagger
const swaggerDoc = require('./swagger.json');

// Se definen las rutas
app.use('/api/user', user);

// Se define un endpoint para la documentación de swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Se define el puerto por el que escucha el servicio web
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ' + config.api.port);
});
// Archivo para gestión de capa de vista de 'Usuarios'

// Se importa el modulo para utilizar el enrutador
const express = require('express');

// Se importa nuestro modulo de respuestas para Endpoints
const response = require('../../../network/response');

// Se importa el controlador para CRUD a base de datos
const controller = require('./controller');

// Se crea el router
const router = express.Router();

/* ----------------------------------------------------
----  Endpoints disponibles para la capa de vista  ----
-----------------------------------------------------*/
router.get('/', function(req, res){
    const lista = controller.list();
    response.success(req, res, lista, 200);
});

// Se exportan los Endpoints
module.exports = router;
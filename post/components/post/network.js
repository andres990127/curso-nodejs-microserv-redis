// Archivo para gestión de capa de vista de 'Post'

// Se importa el modulo para utilizar el enrutador
const express = require('express');

// Se importa nuestro modulo de respuestas para Endpoints
const response = require('../../../network/response');

// Se importa el controlador para CRUD a base de datos
const controller = require('./index');

// Se crea el router
const router = express.Router();

/* ----------------------------------------------------
----  Endpoints disponibles para la capa de vista  ----
-----------------------------------------------------*/
router.get("/", async (req, res) => {
    try {
        const list = await controller.list()
        response.success(req, res, list, 200)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

// Se exportan los Endpoints
module.exports = router;
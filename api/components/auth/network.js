// Archivo para gestión de capa de vista de 'Autenticación'

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

router.post("/login", async (req, res) => {
    try {
        const token = await controller.login(req.body.username, req.body.password);
        response.success(req, res, token, 200)    
    } catch (error) {
        response.error(req, res, error + "Información invalida", 400)
    }
})


// Se exportan los Endpoints
module.exports = router;
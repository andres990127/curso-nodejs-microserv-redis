// Archivo para gestión de capa de vista de 'Usuarios'

// Se importa el modulo para utilizar el enrutador
const express = require('express');

const secure = require('./secure');

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

router.get("/:id", async (req, res) => {
    try {
        const user = await controller.get(req.params.id)
        response.success(req, res, user, 200)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

router.post("/", async (req, res) => {
    try {
        const user = await controller.upsert(req.body)
        response.success(req, res, user, 201)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

router.post("/follow/:id", secure('follow'), async (req, res) => {
    try {
        const data = await controller.follow(req.user.id, req.params.id)
        response.success(req, res, data, 201)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

router.put("/", secure('update'), async (req, res) => {
    try {
        const user = await controller.upsert(req.body)
        response.success(req, res, user, 201)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const result = await controller.remove(req.params.id)
        response.success(req, res, result, 200)    
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})

// Se exportan los Endpoints
module.exports = router;
// Archivo para gestión de capa de vista del microservicio de base de datos 'Mysql'

// Se importa el modulo para utilizar el enrutador
const express = require('express');

// Se importa nuestro modulo de respuestas para Endpoints
const response = require('../network/response');

// Se importa el controlador para CRUD a base de datos
const Store = require('../store/mysql');

// Se crea el router
const router = express.Router();

/* ----------------------------------------------------
----  Endpoints disponibles para la capa de vista  ----
-----------------------------------------------------*/

router.get("/:table", async (req, res) => {
    try {
        const data = await Store.list(req.params.table);
        response.success(req, res, data, 200)    
    } catch (error) {
        response.error(req, res, error + "Información invalida", 400)
    }
})

router.get("/:table/:id", async (req, res) => {
    try {
        const data = await Store.get(req.params.table, req.params.id);
        response.success(req, res, data, 200)    
    } catch (error) {
        response.error(req, res, error + "Información invalida", 400)
    }
})

router.post("/:table", async (req, res) => {
    try {
        const data = await Store.insert(req.params.table, req.body);
        response.success(req, res, data, 201)    
    } catch (error) {
        response.error(req, res, error + "Información invalida", 400)
    }
})
router.put("/:table", async (req, res) => {
    try {
        const data = await Store.upsert(req.params.table, req.body);
        response.success(req, res, data, 201)    
    } catch (error) {
        response.error(req, res, error + "Información invalida", 400)
    }
})

// Se exportan los Endpoints
module.exports = router;
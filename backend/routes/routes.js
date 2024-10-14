const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controller.js')

router.get("/listar", controllers.mostraAlgo)

module.exports = router
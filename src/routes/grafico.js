var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

//Recebendo os dados graficoController.js
router.post("/cadastrar", function (req, res) {
    graficoController.cadastrar (req, res);
});

router.get("/grafico", function (req, res) {
    graficoController.grafico (req, res);
});

module.exports = router;


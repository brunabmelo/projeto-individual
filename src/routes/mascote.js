var express = require("express");
var router = express.Router();

var mascoteController = require("../controllers/mascoteController");

//Recebendo os dados graficoController.js
router.post("/cadastrar", function (req, res) {
    mascoteController.cadastrar (req, res);
});

router.get("/mascote", function (req, res) {
    mascoteController.mascote (req, res);
});

module.exports = router;
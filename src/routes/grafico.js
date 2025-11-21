var express = require("express");
var router = express.Router();

var graficoController = ("../controllers/graficoController");

router.get("/grafico", function (req, res) {
    graficoController.grafico (req, res);
})
module.exports = router;


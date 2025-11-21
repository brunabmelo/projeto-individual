var mascoteModel = require("../models/mascoteModel");

function mascote(req, res) {
    mascoteModel.mascote().then(function (resultado) {

        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
        console.log("Erro graficoController")
    })
}

function cadastrar(req, res) {
    var nivel = req.body.nivelVar;

    console.log('estou no graficoController')

    mascoteModel.cadastrar(nivel)
    .then(
        function (resposta) {
        res.status(200).send("Evolução registrada com sucesso");
    }).catch(
        function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    mascote,
    cadastrar
}
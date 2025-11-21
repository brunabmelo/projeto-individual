var graficoModel = require("../models/graficoModel");

function grafico(req, res) {
    graficoModel.grafico().then(function (resultado) {

        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
        console.log("Erro graficoController")
    })
}

function cadastrar(req, res) {
    var acao = req.body.acaoVar;
    var xp = req.body.xpVar;

    graficoModel.cadastrar(acao, xp)
    .then(
        function (resposta) {
        res.status(200).send("Evolução registrada com sucesso");
    }).catch(
        function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    grafico,
    cadastrar
}
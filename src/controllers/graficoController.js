var graficoModel = require("../models/graficoModel");

function grafico(req, res) {
    var idusuario = req.params.idusuario

    graficoModel.grafico(idusuario)
    .then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
        console.log("Erro graficoController")
    })
}

function cadastrar(req, res) {
    var acao = req.body.acaoVar;
    var xp = req.body.xpVar;
    var idusuario = req.body.idusuario;


    console.log('estou no graficoController')

    graficoModel.cadastrar(acao, xp, idusuario)
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
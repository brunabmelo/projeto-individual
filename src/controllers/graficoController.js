var graficoModel = require("../models/graficoModel");

function grafico(req, res) {
    graficoModel.grafico().then(function(resultado){

        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
        console.log("Erro graficoController")
    })
}

module.exports ={
    grafico
}
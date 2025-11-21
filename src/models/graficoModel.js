var database = require("../database/config")

function grafico() {
    var instrucao = `
        SELECT * FROM usuario ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico
};
var database = require("../database/config")

function grafico() {
    var instrucao = `
    SELECT COUNT(acao) AS clique, acao AS situacao FROM evolucao GROUP BY acao;
       
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(acao, xp) {
    var instrucao = `
        INSERT INTO evolucao (acao, xp, dtHora, fkmascote) VALUES ('${acao}', ${xp}, default, null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    grafico,
    cadastrar
};
var database = require("../database/config")

function grafico() {
    var instrucao = `
        SELECT * FROM evolucao ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(acao, xp) {
    var instrucao = `
        INSERT INTO evolucao (acao), (xp), (dtHora), (fkmascote) VALUES ('${acao}, ${xp}, default, null');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    grafico,
    cadastrar
};
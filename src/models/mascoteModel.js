var database = require("../database/config")

function mascote() {
    var instrucao = `
        SELECT * FROM mascote;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(nivel) {
    var instrucao = `
        INSERT INTO mascote (nome, xp, fkusuario) VALUES ('Eevee', ${nivel}, null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    mascote,
    cadastrar
};
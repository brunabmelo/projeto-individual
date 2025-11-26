var database = require("../database/config")

function grafico(idusuario) {
    var instrucao = `
      SELECT COUNT(acao) AS clique,  acao AS situacao FROM evolucao  JOIN usuario u  ON fkusuario = u.idusuario  WHERE u.idusuario = ${idusuario}  GROUP BY acao;
       
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(acao, xp, idusuario) {
    var instrucao = `
        INSERT INTO evolucao (acao, xp, dtHora, fkusuario) VALUES ('${acao}', ${xp}, default, ${idusuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    grafico,
    cadastrar
};
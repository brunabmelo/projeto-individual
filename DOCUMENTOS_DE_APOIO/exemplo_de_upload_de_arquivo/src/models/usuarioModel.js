const database = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into usuario (nome, email) values ('${usuario.nome}', '${usuario.email}'')`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao);
}

module.exports = { salvar, buscarUsuarioPeloId }
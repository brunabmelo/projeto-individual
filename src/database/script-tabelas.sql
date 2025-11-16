CREATE DATABASE myeevee;
USE myeevee;

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    sobrenome VARCHAR(100),
	email VARCHAR(100),
	senha VARCHAR(45)
);

CREATE TABLE mascote (
	idmascote INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	nivel INT,
	fkusuario INT,
    CONSTRAINT FkUsuarioMascote
		FOREIGN KEY (fkusuario)
		REFERENCES usuario(idusuario)
);

CREATE TABLE evolucao (
	idevolucao INT PRIMARY KEY AUTO_INCREMENT,
	acao VARCHAR(45),
	xp INT,
    dtHora DATETIME,
	fkmascote INT,
    CONSTRAINT FkEvolucaoMascote
		FOREIGN KEY (fkmascote)
		REFERENCES mascote(idmascote)
);
INSERT INTO usuario (nome, sobrenome, email, senha) VALUES
('Adm', 'Teste', 'adm@teste.com', 1234);

INSERT INTO mascote (nome, nivel, fkusuario) VALUES
('eevee', 1, 1);

SELECT u.*,
m.*
FROM usuario u
JOIN mascote m
ON idusuario = fkusuario;


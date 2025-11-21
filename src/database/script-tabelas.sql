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
    dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
	fkmascote INT,
    CONSTRAINT FkEvolucaoMascote
		FOREIGN KEY (fkmascote)
		REFERENCES mascote(idmascote)
);
INSERT INTO usuario (nome, sobrenome, email, senha) VALUES
('Adm', 'Teste', 'adm', 1234);

INSERT INTO mascote (nome, nivel, fkusuario) VALUES
('eevee', 1, 1);

INSERT INTO evolucao (acao, xp, dtHora, fkmascote) VALUES
('Comida', 10, default, 1),
('Água', 10, default, 1),
('Carinho', 10, default, 1),
('Comida', 10, default, 1);

SELECT u.*,
m.*,
e.*
FROM usuario u
JOIN mascote m
ON idusuario = fkusuario
JOIN evolucao e
ON idmascote = fkmascote;

SELECT u.idusuario,
m.idmascote,
m.nome,
m.nivel,
e.xp
FROM usuario u
JOIN mascote m
ON idusuario = fkusuario
JOIN evolucao e
ON idmascote = fkmascote;


SELECT COUNT(acao)
FROM evolucao
WHERE acao = 'Comida' AND fkmascote = 1;



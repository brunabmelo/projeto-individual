CREATE DATABASE myeevee;
USE myeevee;

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(100),
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(45) NOT NULL
);


CREATE TABLE evolucao (
	idevolucao INT PRIMARY KEY AUTO_INCREMENT,
	acao VARCHAR(45),
	xp INT,
    dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
	fkusuario INT,
    CONSTRAINT FkEvolucaoUsuario
		FOREIGN KEY (fkusuario)
		REFERENCES usuario(idusuario)
);
INSERT INTO usuario (nome, sobrenome, email, senha) VALUES
('Adm', 'Teste', 'adm', 1234);


INSERT INTO evolucao (acao, xp, dtHora, fkusuario) VALUES
('Comida', 10, default, 1),
('Água', 10, default, 1),
('Carinho', 10, default, 1),
('Comida', 10, default, 1);

-- VERIFICAÇÃO COMPLETA
SELECT 
u.*,
e.*
FROM usuario u
JOIN evolucao e
ON idusuario = fkusuario;


-- VERIFICAR QUANTIA DE COMIDA
SELECT 
COUNT(acao) Comida
FROM evolucao
WHERE acao = 'Comida'
GROUP BY 'Comida';

-- VERIFICAR QUANTIA DE ÁGUA
SELECT
COUNT(acao) Agua
FROM evolucao
WHERE acao = 'Água' AND fkmascote = 1
GROUP BY 'Água';

-- VERIFICAR QUANTIA DE CARINHO
SELECT 
COUNT(acao) Carinho
FROM evolucao
WHERE acao = 'Carinho'
GROUP BY 'Carinho';



-- SELECT DO GAFICO POR FK
 SELECT 
COUNT(acao) AS clique, 
acao AS situacao
FROM evolucao
JOIN usuario u
ON fkusuario = u.idusuario
WHERE u.idusuario = fkusuario
GROUP BY acao;

    
-- VERIFICAÇÃO SEPARADA
SELECT * FROM  evolucao;
SELECT * FROM  usuario;

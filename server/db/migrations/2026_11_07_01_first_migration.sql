-- ? Criação do banco de dados
CREATE TABLE cargos (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(45) NOT NULL,
  `access` json NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE usuarios (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `cargo_id` int NOT NULL,
  `cargo` json NOT NULL,
  PRIMARY KEY (`id`)
);

-- ? Inserção de dados
INSERT INTO cargos (id, cargo, access) VALUES (1, 'Admin', '{"nome":"Admin"}');
INSERT INTO usuarios (nome, email, senha, cargo_id, cargo) VALUES ('Admin', 'admin@aloha.com', '123', 1, '{"nome":"Admin"}');

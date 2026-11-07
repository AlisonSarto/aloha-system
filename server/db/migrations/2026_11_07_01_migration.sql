CREATE TABLE cargos (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE usuarios (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `cargo_id` int NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO cargos (id, cargo) VALUES (1, 'Admin');

INSERT INTO usuarios (nome, email, senha, cargo_id)
VALUES ('Admin', 'admin@aloha.com', '123', 1);

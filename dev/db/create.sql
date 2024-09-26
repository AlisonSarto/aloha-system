-- ? Criação do banco de dados
CREATE TABLE cargos (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(45) NOT NULL,
  `acess` json NOT NULL,
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

CREATE TABLE sabores (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sabor` VARCHAR(45) NOT NULL,
  `formula` INT NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `emoji` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE concentrados (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sabor_id` INT NOT NULL,
  `sabor` VARCHAR(45) NOT NULL,
  `qtd` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE marcas (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sabores_id` VARCHAR(45) NOT NULL,
  `formula` INT NOT NULL,
  `logo` LONGBLOB NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE embalagens (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marca_id` INT NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `sabor_id` VARCHAR(45) NOT NULL,
  `sabor` VARCHAR(45) NOT NULL,
  `qtd` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE pacotes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marca_id` INT NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `sabor_id` VARCHAR(45) NOT NULL,
  `sabor` VARCHAR(45) NOT NULL,
  `qtd` INT NOT NULL,
  `integration` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE mov (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `qtd_mov` INT NOT NULL,
  `qtd_final` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `produto_tipo` VARCHAR(45) NOT NULL,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE logs (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mensagem` json NOT NULL,
  `arquivo` VARCHAR(200) NOT NULL,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE turnos (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `inicio` VARCHAR(45) NOT NULL,
  `fim` VARCHAR(45) NOT NULL,
  `inicio_sab` VARCHAR(45) NOT NULL,
  `fim_sab` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE entradas (
  `id` INT NOT NULL AUTO_INCREMENT,
  `qtd` VARCHAR(45) NOT NULL,
  `pacote_id` VARCHAR(45) NOT NULL,
  `turno_id` VARCHAR(45) NOT NULL,
  `turno` VARCHAR(45) NOT NULL,
  `turno_dia` VARCHAR(45) NOT NULL,
  `modo_id` INT NOT NULL DEFAULT 0,
  `modo` VARCHAR(45) NOT NULL,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
); 

CREATE TABLE saidas (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_pedido` INT NOT NULL,
  `marca_id` INT NOT NULL,
  `pedido` JSON NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE funcionarios (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `turno_id` INT NOT NULL,
  `pontuacao` INT NOT NULL DEFAULT '0',
  `gerente` VARCHAR(45) NOT NULL DEFAULT 'false',
  `usuario_id` INT NOT NULL DEFAULT '0',
  `ativo` VARCHAR(45) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`id`)
);

CREATE TABLE mov_pontuacao (
  `id` INT NOT NULL AUTO_INCREMENT,
  `funcionario_id` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `obs` VARCHAR(225) NOT NULL,
  `pontuacao_mov` INT NOT NULL,
  `pontuacao_final` INT NOT NULL,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE grupos_situacoes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE situacoes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `grupo_id` INT NOT NULL,
  `pontuacao` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE modos (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(225) NOT NULL,
  `minimo` INT NOT NULL,
  `meta` INT NOT NULL,
  `ativo` VARCHAR(45) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`id`)
);

CREATE TABLE controle_fabricacao (
  `id` INT NOT NULL AUTO_INCREMENT,
  `situacao` VARCHAR(45) NOT NULL,
  `turno_id` INT NOT NULL,
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE automacoes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ativo` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(225) NOT NULL,
  `pontuacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE vendas_gc (
  `codigo` INT NOT NULL,
  PRIMARY KEY (`codigo`)
);

CREATE TABLE proxima_bonificacao (
  `dia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dia`)
);

CREATE TABLE tarefas (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ativo` VARCHAR(45) NOT NULL DEFAULT 'false',
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(225) NOT NULL,
  `intervalo` INT NOT NULL,
  `prazo` INT NOT NULL,
  `pontuacao` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE controle_tarefas (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tarefa_id` INT NOT NULL,
  `prazo` VARCHAR(45) NOT NULL,
  `prox_intervalo` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'Em andamento',
  `notificacao_status` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ? Inserção de dados
INSERT INTO cargos (id, cargo, acess) VALUES (1, 'Admin', '{"nome":"Admin"}');
INSERT INTO usuarios (nome, email, senha, cargo_id, cargo) VALUES ('Admin', 'admin@aloha.com', '123', 1, '{"nome":"Admin"}');
INSERT INTO automacoes (id, ativo, nome, descricao, pontuacao) VALUES (1, 'false', 'Bater meta de produção', 'Caso uma equipe bata a meta estabelacida pela meta do modo', '0');
INSERT INTO proxima_bonificacao (dia) VALUES ('2020-01-01 00:00:00');
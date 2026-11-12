CREATE TABLE estoque_movimentos (
  `id` int NOT NULL AUTO_INCREMENT,
  `fabrica_id` int NOT NULL,
  `marca_id` int NOT NULL,
  `operacao` varchar(40) NOT NULL,
  `produto_id` varchar(50) NOT NULL,
  `produto_nome` varchar(150) NOT NULL,
  `quantidade` decimal(12,3) NOT NULL,
  `estoque_anterior` decimal(12,3) NOT NULL,
  `estoque_atual` decimal(12,3) NOT NULL,
  `usuario_id` int NOT NULL,
  `registrado_em` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `estoque_movimentos_fabrica_operacao` (`fabrica_id`, `operacao`, `registrado_em`),
  KEY `estoque_movimentos_marca` (`marca_id`),
  CONSTRAINT `estoque_movimentos_fabrica_fk` FOREIGN KEY (`fabrica_id`) REFERENCES `fabricas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `estoque_movimentos_marca_fk` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`),
  CONSTRAINT `estoque_movimentos_usuario_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO permissoes (pagina, funcao) VALUES
  ('estoque', 'visualizar'),
  ('estoque', 'adicionar');

INSERT INTO cargos (cargo)
SELECT 'Gerente'
WHERE NOT EXISTS (SELECT 1 FROM cargos WHERE cargo = 'Gerente');

INSERT IGNORE INTO cargo_permissoes (cargo_id, permissao_id)
SELECT c.id, p.id
FROM cargos c
INNER JOIN permissoes p ON p.pagina = 'estoque'
WHERE c.cargo = 'Gerente';

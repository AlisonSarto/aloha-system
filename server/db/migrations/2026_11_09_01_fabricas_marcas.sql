CREATE TABLE fabricas (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `access_token` text NOT NULL,
  `secret_access_token` text NOT NULL,
  `loja_id` varchar(50) NOT NULL,
  `loja_nome` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE marcas (
  `id` int NOT NULL AUTO_INCREMENT,
  `fabrica_id` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `grupo_pacotes_id` varchar(50) NOT NULL,
  `grupo_pacotes_nome` varchar(150) NOT NULL,
  `grupo_bobinas_id` varchar(50) NOT NULL,
  `grupo_bobinas_nome` varchar(150) NOT NULL,
  `grupo_concentrados_id` varchar(50) NOT NULL,
  `grupo_concentrados_nome` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `marcas_fabrica` (`fabrica_id`),
  CONSTRAINT `marcas_fabrica_fk` FOREIGN KEY (`fabrica_id`) REFERENCES `fabricas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE fabrica_usuarios (
  `fabrica_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`fabrica_id`, `usuario_id`),
  KEY `fabrica_usuarios_usuario` (`usuario_id`),
  CONSTRAINT `fabrica_usuarios_fabrica_fk` FOREIGN KEY (`fabrica_id`) REFERENCES `fabricas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fabrica_usuarios_usuario_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

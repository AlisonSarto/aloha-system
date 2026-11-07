<?php

//? Migra as permissões dos cargos para tabelas relacionais
return [
  'up' => function (PDO $pdo): void {

    $pdo->exec("CREATE TABLE IF NOT EXISTS permissoes (
      id INT NOT NULL AUTO_INCREMENT,
      pagina VARCHAR(45) NOT NULL,
      funcao VARCHAR(45) NOT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY permissao_unica (pagina, funcao)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

    $pdo->exec("CREATE TABLE IF NOT EXISTS cargo_permissoes (
      cargo_id INT NOT NULL,
      permissao_id INT NOT NULL,
      PRIMARY KEY (cargo_id, permissao_id),
      CONSTRAINT cargo_permissoes_cargo FOREIGN KEY (cargo_id) REFERENCES cargos(id) ON DELETE CASCADE,
      CONSTRAINT cargo_permissoes_permissao FOREIGN KEY (permissao_id) REFERENCES permissoes(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

    //? Catálogo inicial: novas permissões devem entrar em uma migration
    $permissoes = [
      'usuarios' => ['visualizar', 'adicionar', 'editar', 'deletar'],
      'cargos' => ['visualizar', 'adicionar', 'editar', 'deletar'],
    ];

    $insertPermissao = $pdo->prepare(
      'INSERT IGNORE INTO permissoes (pagina, funcao) VALUES (?, ?)'
    );

    foreach ($permissoes as $pagina => $funcoes) {
      foreach ($funcoes as $funcao) {
        $insertPermissao->execute([$pagina, $funcao]);
      }
    }
  },
];

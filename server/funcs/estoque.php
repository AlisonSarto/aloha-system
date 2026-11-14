<?php

  function estoqueFabricaAtual($conn) {
    $usuarioId = (int) ($_SESSION['id'] ?? 0);
    if ($usuarioId < 1) send(['status' => 401, 'message' => 'Faça login para acessar o estoque']);

    $fabricaId = (int) ($_SESSION['fabrica_id'] ?? 0);
    if ($fabricaId < 1 && fabricaAdmin()) {
      $res = $conn->query('SELECT id FROM fabricas ORDER BY id LIMIT 1');
      $fabrica = $res ? $res->fetch_assoc() : null;
      $fabricaId = (int) ($fabrica['id'] ?? 0);
    }
    if ($fabricaId < 1) send(['status' => 403, 'message' => 'Selecione uma fábrica associada ao usuário']);

    $fabrica = fabricaCarregar($conn, $fabricaId, fabricaAdmin() ? null : $usuarioId);
    if (!$fabrica) send(['status' => 403, 'message' => 'Você não tem acesso a esta fábrica']);
    $_SESSION['fabrica_id'] = $fabricaId;
    return $fabrica;
  }

  function estoqueCategoria($operacao) {
    $categorias = [
      'entrada_carrinho' => 'pacotes',
      'saida_concentrado' => 'concentrados',
      'saida_bobina' => 'bobinas'
    ];
    return $categorias[$operacao] ?? null;
  }

  function estoqueGrupoMarca($marca, $categoria) {
    $grupos = [
      'pacotes' => 'grupo_pacotes_id',
      'bobinas' => 'grupo_bobinas_id',
      'concentrados' => 'grupo_concentrados_id'
    ];
    return isset($grupos[$categoria]) ? $marca[$grupos[$categoria]] : null;
  }

  function estoqueMarcaCarregar($conn, $marcaId, $fabricaId) {
    $marcaId = (int) $marcaId;
    $fabricaId = (int) $fabricaId;
    $res = $conn->query("SELECT * FROM marcas WHERE id = $marcaId AND fabrica_id = $fabricaId LIMIT 1");
    return $res ? $res->fetch_assoc() : null;
  }

  function estoqueProdutosDaMarca($marca, $fabrica, $categoria) {
    $grupoId = estoqueGrupoMarca($marca, $categoria);
    if (!$grupoId) return ['ok' => false, 'message' => 'O grupo de produtos não está configurado para esta marca'];
    return fabricaTodosProdutosGestaoClick($fabrica, $grupoId);
  }

?>

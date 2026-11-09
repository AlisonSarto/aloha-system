nav<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('contexto', 'visualizar');
  if (empty($_SESSION['id'])) send(['status' => 401, 'message' => 'Faça login para consultar produtos']);

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);
  $marcaId = (int) ($_GET['marca_id'] ?? 0);
  $categoria = $_GET['categoria'] ?? '';
  $grupos = [
    'pacotes' => 'grupo_pacotes_id',
    'bobinas' => 'grupo_bobinas_id',
    'concentrados' => 'grupo_concentrados_id'
  ];
  if (!isset($grupos[$categoria])) send(['status' => 400, 'message' => 'Categoria inválida']);

  $marcaRes = $conn->query("SELECT * FROM marcas WHERE id = $marcaId LIMIT 1");
  $marca = $marcaRes ? $marcaRes->fetch_assoc() : null;
  if (!$marca) send(['status' => 404, 'message' => 'Marca não encontrada']);
  $fabrica = fabricaCarregar($conn, $marca['fabrica_id'], (int) $_SESSION['id']);
  if (!$fabrica) send(['status' => 403, 'message' => 'Você não tem acesso a esta fábrica']);

  $res = fabricaTodosProdutosGestaoClick($fabrica, $marca[$grupos[$categoria]]);
  if (!$res['ok']) send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);
  send([
    'status' => 200,
    'categoria' => $categoria,
    'grupo_id' => $marca[$grupos[$categoria]],
    'produtos' => $res['data']
  ]);

?>

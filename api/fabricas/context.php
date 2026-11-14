<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('contexto', 'visualizar');
  if (empty($_SESSION['id'])) send(['status' => 401, 'message' => 'Faça login para selecionar uma fábrica']);

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuarioId = (int) $_SESSION['id'];
    $res = $conn->query("SELECT f.id, f.nome FROM fabricas f INNER JOIN fabrica_usuarios fu ON fu.fabrica_id = f.id WHERE fu.usuario_id = $usuarioId ORDER BY f.nome");
    if (!$res) send(['status' => 500, 'message' => 'Erro ao consultar fábricas']);
    $fabricas = [];
    while ($fabrica = $res->fetch_assoc()) $fabricas[] = $fabrica;
    if (!$fabricas) send(['status' => 403, 'message' => 'Nenhuma fábrica foi associada ao seu usuário']);

    $fabricaId = (int) ($_GET['fabrica_id'] ?? $_SESSION['fabrica_id'] ?? 0);
    if (!fabricaTemAcesso($conn, $fabricaId, $usuarioId)) $fabricaId = (int) $fabricas[0]['id'];
    $_SESSION['fabrica_id'] = $fabricaId;
    unset($_SESSION['marca_id']);
    send(['status' => 200, 'fabricas' => $fabricas, 'fabrica_id' => $fabricaId]);
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuarioId = (int) $_SESSION['id'];
    $fabricaId = (int) ($_POST['fabrica_id'] ?? 0);
    if (!fabricaTemAcesso($conn, $fabricaId, $usuarioId)) send(['status' => 403, 'message' => 'Você não tem acesso a esta fábrica']);
    $_SESSION['fabrica_id'] = $fabricaId;
    unset($_SESSION['marca_id']);
    send(['status' => 200, 'message' => 'Fábrica ativa atualizada']);
  }

  send(['status' => 405, 'message' => 'Método não aceitado']);

?>

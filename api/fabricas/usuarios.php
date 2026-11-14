<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'editar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuariosRes = $conn->query("SELECT id, nome, email FROM usuarios ORDER BY nome");
    $fabricasRes = $conn->query("SELECT id, nome FROM fabricas ORDER BY nome");
    if (!$usuariosRes || !$fabricasRes) send(['status' => 500, 'message' => 'Erro ao consultar acessos']);
    $usuarios = [];
    while ($usuario = $usuariosRes->fetch_assoc()) {
      $usuario['fabricas'] = [];
      $associacoes = $conn->query("SELECT fabrica_id FROM fabrica_usuarios WHERE usuario_id = " . (int) $usuario['id']);
      while ($associacao = $associacoes->fetch_assoc()) $usuario['fabricas'][] = (int) $associacao['fabrica_id'];
      $usuarios[] = $usuario;
    }
    $fabricas = [];
    while ($fabrica = $fabricasRes->fetch_assoc()) $fabricas[] = $fabrica;
    send(['status' => 200, 'usuarios' => $usuarios, 'fabricas' => $fabricas]);
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuarioId = (int) ($_POST['usuario_id'] ?? 0);
    $fabricaIds = $_POST['fabrica_ids'] ?? [];
    if (!is_array($fabricaIds)) $fabricaIds = [];
    $usuarioRes = $conn->query("SELECT id FROM usuarios WHERE id = $usuarioId");
    if (!$usuarioRes || $usuarioRes->num_rows === 0) send(['status' => 404, 'message' => 'Usuário não encontrado']);
    $conn->begin_transaction();
    $conn->query("DELETE FROM fabrica_usuarios WHERE usuario_id = $usuarioId");
    foreach ($fabricaIds as $fabricaId) {
      $fabricaId = (int) $fabricaId;
      if ($fabricaId > 0) $conn->query("INSERT IGNORE INTO fabrica_usuarios (fabrica_id, usuario_id) VALUES ($fabricaId, $usuarioId)");
    }
    $conn->commit();
    send(['status' => 200, 'message' => 'Acessos às fábricas atualizados']);
  }

  send(['status' => 405, 'message' => 'Método não aceitado']);

?>

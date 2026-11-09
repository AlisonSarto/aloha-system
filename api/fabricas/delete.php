<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'deletar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $id = (int) ($_POST['id'] ?? 0);
  $res = $conn->query("SELECT id FROM fabricas WHERE id = $id");
  if (!$res || $res->num_rows === 0) send(['status' => 404, 'message' => 'Fábrica não encontrada']);

  $stmt = $conn->prepare('DELETE FROM fabricas WHERE id = ?');
  $stmt->bind_param('i', $id);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Erro ao excluir a fábrica']);

  send(['status' => 200, 'message' => 'Fábrica excluída com sucesso']);

?>

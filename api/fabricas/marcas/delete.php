<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'deletar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);
  $id = (int) ($_POST['id'] ?? 0);
  $stmt = $conn->prepare('DELETE FROM marcas WHERE id = ?');
  $stmt->bind_param('i', $id);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Erro ao excluir a marca']);
  if ($stmt->affected_rows === 0) send(['status' => 404, 'message' => 'Marca não encontrada']);
  send(['status' => 200, 'message' => 'Marca excluída com sucesso']);

?>

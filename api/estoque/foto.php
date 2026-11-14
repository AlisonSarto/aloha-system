<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque_foto', 'visualizar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  $movimentoId = (int) ($_GET['id'] ?? 0);
  if ($movimentoId < 1) send(['status' => 404, 'message' => 'Foto não encontrada']);

  $fabrica = estoqueFabricaAtual($conn);
  $usuarioId = (int) $_SESSION['id'];
  $admin = fabricaAdmin();
  $sql = 'SELECT foto_carrinho FROM estoque_movimentos WHERE id = ? AND fabrica_id = ?';
  if (!$admin) $sql .= ' AND usuario_id = ?';
  $sql .= ' LIMIT 1';
  $stmt = $conn->prepare($sql);
  if (!$stmt) send(['status' => 500, 'message' => 'Não foi possível preparar a consulta da foto']);
  $fabricaId = (int) $fabrica['id'];
  if ($admin) $stmt->bind_param('ii', $movimentoId, $fabricaId);
  else $stmt->bind_param('iii', $movimentoId, $fabricaId, $usuarioId);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Não foi possível carregar a foto']);
  $registro = $stmt->get_result()->fetch_assoc();
  if (!$registro || empty($registro['foto_carrinho'])) send(['status' => 404, 'message' => 'Foto não encontrada']);

  $caminhoSalvo = $registro['foto_carrinho'];
  if (!str_starts_with($caminhoSalvo, '/uploads/estoque/carrinhos/')) send(['status' => 404, 'message' => 'Foto não encontrada']);
  $pastaFotos = realpath($_SERVER['DOCUMENT_ROOT'] . '/uploads/estoque/carrinhos');
  $caminhoFoto = realpath($_SERVER['DOCUMENT_ROOT'] . $caminhoSalvo);
  if (!$pastaFotos || !$caminhoFoto || !str_starts_with($caminhoFoto, $pastaFotos . DIRECTORY_SEPARATOR) || !is_file($caminhoFoto)) {
    send(['status' => 404, 'message' => 'Foto não encontrada']);
  }

  $finfo = new finfo(FILEINFO_MIME_TYPE);
  $mime = $finfo->file($caminhoFoto);
  if (!in_array($mime, ['image/jpeg', 'image/png', 'image/webp'], true)) send(['status' => 415, 'message' => 'Formato de foto não permitido']);

  header('Content-Type: ' . $mime);
  header('Content-Length: ' . filesize($caminhoFoto));
  header('Cache-Control: private, no-store');
  header('X-Content-Type-Options: nosniff');
  readfile($caminhoFoto);

?>

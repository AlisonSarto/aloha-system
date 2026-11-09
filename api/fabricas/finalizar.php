<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'adicionar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);
  if (empty($_SESSION['fabrica_pendente'])) send(['status' => 409, 'message' => 'A etapa de validação expirou. Comece novamente']);

  $lojaId = trim($_POST['loja_id'] ?? '');
  $pendente = $_SESSION['fabrica_pendente'];
  $lojaNome = '';
  foreach ($pendente['lojas'] as $loja) {
    if ((string) ($loja['id'] ?? '') === $lojaId) {
      $lojaNome = $loja['nome'] ?? '';
      break;
    }
  }
  if ($lojaId === '' || $lojaNome === '') send(['status' => 400, 'message' => 'Selecione uma loja disponível']);

  $nome = $pendente['nome'];
  $accessToken = $pendente['access_token'];
  $secretAccessToken = $pendente['secret_access_token'];
  $conn->begin_transaction();
  $stmt = $conn->prepare('INSERT INTO fabricas (nome, access_token, secret_access_token, loja_id, loja_nome) VALUES (?, ?, ?, ?, ?)');
  $stmt->bind_param('sssss', $nome, $accessToken, $secretAccessToken, $lojaId, $lojaNome);
  if (!$stmt->execute()) {
    $conn->rollback();
    send(['status' => 500, 'message' => 'Erro ao salvar a fábrica']);
  }

  $fabricaId = $conn->insert_id;
  $usuarioId = (int) $_SESSION['id'];
  $stmtUsuario = $conn->prepare('INSERT INTO fabrica_usuarios (fabrica_id, usuario_id) VALUES (?, ?)');
  $stmtUsuario->bind_param('ii', $fabricaId, $usuarioId);
  if (!$stmtUsuario->execute()) {
    $conn->rollback();
    send(['status' => 500, 'message' => 'Erro ao vincular a fábrica ao usuário atual']);
  }
  $conn->commit();
  unset($_SESSION['fabrica_pendente']);
  send(['status' => 200, 'message' => 'Fábrica configurada com sucesso', 'fabrica_id' => $fabricaId]);

?>

<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'adicionar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $nome = trim($_POST['nome'] ?? '');
  $accessToken = trim($_POST['access_token'] ?? '');
  $secretAccessToken = trim($_POST['secret_access_token'] ?? '');
  $lojaId = trim($_POST['loja_id'] ?? '');

  if ($nome === '' || $accessToken === '' || $secretAccessToken === '' || $lojaId === '') {
    send(['status' => 400, 'message' => 'Preencha todos os campos e selecione uma loja']);
  }

  $res = fabricaLojasGestaoClick($accessToken, $secretAccessToken);
  if (!$res['ok']) {
    send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);
  }

  $lojaNome = '';
  foreach ($res['data'] as $loja) {
    if ((string) ($loja['id'] ?? '') === $lojaId) {
      $lojaNome = $loja['nome'] ?? '';
      break;
    }
  }
  if ($lojaNome === '') {
    send(['status' => 400, 'message' => 'A loja selecionada não está disponível para esses tokens']);
  }

  $stmt = $conn->prepare('INSERT INTO fabricas (nome, access_token, secret_access_token, loja_id, loja_nome) VALUES (?, ?, ?, ?, ?)');
  $stmt->bind_param('sssss', $nome, $accessToken, $secretAccessToken, $lojaId, $lojaNome);
  if (!$stmt->execute()) {
    send(['status' => 500, 'message' => 'Erro ao salvar a fábrica']);
  }
  $fabricaId = $conn->insert_id;
  $usuarioId = (int) $_SESSION['id'];
  $conn->query("INSERT IGNORE INTO fabrica_usuarios (fabrica_id, usuario_id) VALUES ($fabricaId, $usuarioId)");

  send(['status' => 200, 'message' => 'Fábrica configurada com sucesso', 'fabrica_id' => $fabricaId]);

?>

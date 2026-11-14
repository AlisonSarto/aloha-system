<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'editar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $id = (int) ($_POST['id'] ?? 0);
  $nome = trim($_POST['nome'] ?? '');
  $accessToken = trim($_POST['access_token'] ?? '');
  $secretAccessToken = trim($_POST['secret_access_token'] ?? '');
  $lojaId = trim($_POST['loja_id'] ?? '');
  $fabrica = fabricaCarregar($conn, $id);

  if (!$fabrica) send(['status' => 404, 'message' => 'Fábrica não encontrada']);
  if ($nome === '') send(['status' => 400, 'message' => 'Informe o nome da fábrica']);
  if ($accessToken === '') $accessToken = $fabrica['access_token'];
  if ($secretAccessToken === '') $secretAccessToken = $fabrica['secret_access_token'];
  if ($lojaId === '') $lojaId = $fabrica['loja_id'];

  $res = fabricaLojasGestaoClick($accessToken, $secretAccessToken);
  if (!$res['ok']) send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);

  $lojaNome = '';
  foreach ($res['data'] as $loja) {
    if ((string) ($loja['id'] ?? '') === $lojaId) {
      $lojaNome = $loja['nome'] ?? '';
      break;
    }
  }
  if ($lojaNome === '') send(['status' => 400, 'message' => 'A loja selecionada não está disponível para esses tokens']);

  $stmt = $conn->prepare('UPDATE fabricas SET nome = ?, access_token = ?, secret_access_token = ?, loja_id = ?, loja_nome = ? WHERE id = ?');
  $stmt->bind_param('sssssi', $nome, $accessToken, $secretAccessToken, $lojaId, $lojaNome, $id);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Erro ao atualizar a fábrica']);

  send(['status' => 200, 'message' => 'Fábrica atualizada com sucesso']);

?>

<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'adicionar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);

  $nome = trim($_POST['nome'] ?? '');
  $accessToken = trim($_POST['access_token'] ?? '');
  $secretAccessToken = trim($_POST['secret_access_token'] ?? '');
  if ($nome === '' || $accessToken === '' || $secretAccessToken === '') {
    send(['status' => 400, 'message' => 'Preencha o nome e os dois tokens']);
  }

  unset($_SESSION['fabrica_pendente']);

  $res = fabricaLojasGestaoClick($accessToken, $secretAccessToken);
  if (!$res['ok']) send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);
  if (empty($res['data'])) send(['status' => 422, 'message' => 'Os tokens foram aceitos, mas nenhuma loja está disponível para esta integração']);

  $_SESSION['fabrica_pendente'] = [
    'nome' => $nome,
    'access_token' => $accessToken,
    'secret_access_token' => $secretAccessToken,
    'lojas' => $res['data']
  ];
  send(['status' => 200, 'message' => 'Tokens validados', 'lojas_disponiveis' => count($res['data'])]);

?>

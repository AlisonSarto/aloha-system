<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'visualizar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $accessToken = trim($_POST['access_token'] ?? '');
  $secretAccessToken = trim($_POST['secret_access_token'] ?? '');
  $fabricaId = (int) ($_POST['fabrica_id'] ?? 0);

  if ($fabricaId > 0) {
    $fabrica = fabricaCarregar($conn, $fabricaId);
    if (!$fabrica) {
      send(['status' => 404, 'message' => 'Fábrica não encontrada']);
    }
    if ($accessToken === '') $accessToken = $fabrica['access_token'];
    if ($secretAccessToken === '') $secretAccessToken = $fabrica['secret_access_token'];
  }

  if ($accessToken === '' || $secretAccessToken === '') {
    send(['status' => 400, 'message' => 'Informe os dois tokens do Gestão Click']);
  }

  $res = fabricaLojasGestaoClick($accessToken, $secretAccessToken);
  if (!$res['ok']) {
    send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);
  }

  send(['status' => 200, 'lojas' => $res['data']]);

?>

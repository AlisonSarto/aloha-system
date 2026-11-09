<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'visualizar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $fabricaId = (int) ($_GET['fabrica_id'] ?? 0);
  $fabrica = fabricaCarregar($conn, $fabricaId);
  if (!$fabrica) {
    send(['status' => 404, 'message' => 'Fábrica não encontrada']);
  }

  $res = fabricaGruposGestaoClick($fabrica['access_token'], $fabrica['secret_access_token']);
  if (!$res['ok']) {
    send(['status' => $res['code'] ?? 502, 'message' => $res['message']]);
  }

  send(['status' => 200, 'grupos' => $res['data']]);

?>

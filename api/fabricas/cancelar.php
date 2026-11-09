<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'adicionar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);
  unset($_SESSION['fabrica_pendente']);
  send(['status' => 200, 'message' => 'Cadastro de fábrica cancelado']);

?>

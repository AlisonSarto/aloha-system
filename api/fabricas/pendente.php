<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'visualizar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);
  if (empty($_SESSION['fabrica_pendente'])) send(['status' => 404, 'message' => 'Não há uma fábrica aguardando a seleção da loja']);

  $pendente = $_SESSION['fabrica_pendente'];
  send([
    'status' => 200,
    'nome' => $pendente['nome'],
    'lojas' => $pendente['lojas']
  ]);

?>

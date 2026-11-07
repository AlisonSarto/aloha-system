<?php

//? Lista o catálogo de permissões disponível no banco
include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
accessApi('cargos', 'adicionar');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  send(['status' => 405, 'message' => 'Método não aceitado']);
}

$res = $conn->query('SELECT pagina, funcao FROM permissoes ORDER BY pagina, id');
$pages = [];
while ($permission = $res->fetch_assoc()) {
  $pages[$permission['pagina']]['title'] = ucfirst($permission['pagina']);
  $pages[$permission['pagina']]['func'][] = ucfirst($permission['funcao']);
}

send(['status' => 200, 'permissions' => $pages]);

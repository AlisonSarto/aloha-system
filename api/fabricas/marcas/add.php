<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'adicionar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);

  $fabricaId = (int) ($_POST['fabrica_id'] ?? 0);
  $nome = trim($_POST['nome'] ?? '');
  $fabrica = fabricaCarregar($conn, $fabricaId);
  if (!$fabrica) send(['status' => 404, 'message' => 'Fábrica não encontrada']);
  if ($nome === '') send(['status' => 400, 'message' => 'Informe o nome da marca']);

  $grupos = fabricaGruposGestaoClick($fabrica['access_token'], $fabrica['secret_access_token']);
  if (!$grupos['ok']) send(['status' => $grupos['code'] ?? 502, 'message' => $grupos['message']]);

  $campos = ['pacotes', 'bobinas', 'concentrados'];
  $valores = [];
  foreach ($campos as $campo) {
    $id = trim($_POST['grupo_' . $campo . '_id'] ?? '');
    $grupoNome = '';
    foreach ($grupos['data'] as $grupo) {
      if ((string) ($grupo['id'] ?? '') === $id) {
        $grupoNome = $grupo['nome'] ?? '';
        break;
      }
    }
    if ($id === '' || $grupoNome === '') send(['status' => 400, 'message' => 'Selecione os três grupos de produtos']);
    $valores[] = $id;
    $valores[] = $grupoNome;
  }

  $stmt = $conn->prepare('INSERT INTO marcas (fabrica_id, nome, grupo_pacotes_id, grupo_pacotes_nome, grupo_bobinas_id, grupo_bobinas_nome, grupo_concentrados_id, grupo_concentrados_nome) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
  $stmt->bind_param('isssssss', $fabricaId, $nome, $valores[0], $valores[1], $valores[2], $valores[3], $valores[4], $valores[5]);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Erro ao salvar a marca']);
  send(['status' => 200, 'message' => 'Marca configurada com sucesso', 'marca_id' => $conn->insert_id]);

?>

<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'editar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);

  $id = (int) ($_POST['id'] ?? 0);
  $nome = trim($_POST['nome'] ?? '');
  $marcaRes = $conn->query("SELECT * FROM marcas WHERE id = $id LIMIT 1");
  $marca = $marcaRes ? $marcaRes->fetch_assoc() : null;
  if (!$marca) send(['status' => 404, 'message' => 'Marca não encontrada']);
  if ($nome === '') send(['status' => 400, 'message' => 'Informe o nome da marca']);
  $fabrica = fabricaCarregar($conn, $marca['fabrica_id']);

  $grupos = fabricaGruposGestaoClick($fabrica['access_token'], $fabrica['secret_access_token']);
  if (!$grupos['ok']) send(['status' => $grupos['code'] ?? 502, 'message' => $grupos['message']]);
  $campos = ['pacotes', 'bobinas', 'concentrados'];
  $valores = [];
  foreach ($campos as $campo) {
    $grupoId = trim($_POST['grupo_' . $campo . '_id'] ?? '');
    $grupoNome = '';
    foreach ($grupos['data'] as $grupo) {
      if ((string) ($grupo['id'] ?? '') === $grupoId) {
        $grupoNome = $grupo['nome'] ?? '';
        break;
      }
    }
    if ($grupoId === '' || $grupoNome === '') send(['status' => 400, 'message' => 'Selecione os três grupos de produtos']);
    $valores[] = $grupoId;
    $valores[] = $grupoNome;
  }

  $stmt = $conn->prepare('UPDATE marcas SET nome = ?, grupo_pacotes_id = ?, grupo_pacotes_nome = ?, grupo_bobinas_id = ?, grupo_bobinas_nome = ?, grupo_concentrados_id = ?, grupo_concentrados_nome = ? WHERE id = ?');
  $stmt->bind_param('sssssssi', $nome, $valores[0], $valores[1], $valores[2], $valores[3], $valores[4], $valores[5], $id);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Erro ao atualizar a marca']);
  send(['status' => 200, 'message' => 'Marca atualizada com sucesso']);

?>

<?php

  function fabricaTemAcesso($conn, $fabricaId, $usuarioId) {
    $fabricaId = (int) $fabricaId;
    $usuarioId = (int) $usuarioId;
    $res = $conn->query("SELECT 1 FROM fabrica_usuarios WHERE fabrica_id = $fabricaId AND usuario_id = $usuarioId LIMIT 1");
    return $res && $res->num_rows > 0;
  }

  function fabricaAdmin() {
    return ($_SESSION['cargo']['nome'] ?? '') === 'Admin';
  }

  function fabricaExigirAdmin() {
    if (!fabricaAdmin()) {
      send([
        'status' => 403,
        'message' => 'Apenas administradores podem configurar fábricas e marcas'
      ]);
    }
  }

  function fabricaCarregar($conn, $fabricaId, $usuarioId = null) {
    $fabricaId = (int) $fabricaId;
    $where = "f.id = $fabricaId";
    if ($usuarioId !== null) {
      $usuarioId = (int) $usuarioId;
      $where .= " AND EXISTS (SELECT 1 FROM fabrica_usuarios fu WHERE fu.fabrica_id = f.id AND fu.usuario_id = $usuarioId)";
    }
    $res = $conn->query("SELECT f.* FROM fabricas f WHERE $where LIMIT 1");
    return $res ? $res->fetch_assoc() : null;
  }

  function fabricaChamarGestaoClick($accessToken, $secretAccessToken, $rota, $dados = []) {
    $url = 'https://api.gestaoclick.com/api/' . ltrim($rota, '/');
    $headers = [
      'access-token: ' . $accessToken,
      'secret-access-token: ' . $secretAccessToken
    ];
    $response = curl($url, $headers, 'GET', $dados);
    if (is_array($response)) {
      return [
        'ok' => false,
        'message' => $response['message'] ?? 'Erro ao conectar com o Gestão Click'
      ];
    }
    $json = json_decode($response, true);
    if (!is_array($json)) {
      return ['ok' => false, 'message' => 'Resposta inválida do Gestão Click'];
    }
    if (($json['status'] ?? '') !== 'success' || (int) ($json['code'] ?? 200) >= 400) {
      $message = $json['data']['mensagem'] ?? $json['data']['erro'] ?? 'Não foi possível consultar o Gestão Click';
      return ['ok' => false, 'message' => $message, 'code' => (int) ($json['code'] ?? 502)];
    }
    return ['ok' => true, 'data' => $json['data'] ?? [], 'meta' => $json['meta'] ?? []];
  }

  function fabricaEnviarGestaoClick($fabrica, $rota, $metodo, $consulta, $dados) {
    $url = 'https://api.gestaoclick.com/api/' . ltrim($rota, '/');
    if (!empty($consulta)) $url .= '?' . http_build_query($consulta);
    $headers = [
      'access-token: ' . $fabrica['access_token'],
      'secret-access-token: ' . $fabrica['secret_access_token']
    ];
    $response = curl($url, $headers, $metodo, $dados);
    if (is_array($response)) return ['ok' => false, 'message' => $response['message'] ?? 'Erro ao conectar com o Gestão Click'];
    $json = json_decode($response, true);
    if (!is_array($json)) return ['ok' => false, 'message' => 'Resposta inválida do Gestão Click'];
    if (($json['status'] ?? '') !== 'success' || (int) ($json['code'] ?? 200) >= 400) {
      $message = $json['data']['mensagem'] ?? $json['data']['erro'] ?? 'Não foi possível atualizar o Gestão Click';
      $code = (int) ($json['code'] ?? 502);
      return ['ok' => false, 'message' => $message, 'code' => $code >= 400 ? $code : 502];
    }
    return ['ok' => true, 'data' => $json['data'] ?? []];
  }

  function fabricaLojasGestaoClick($accessToken, $secretAccessToken) {
    return fabricaChamarGestaoClick($accessToken, $secretAccessToken, 'lojas');
  }

  function fabricaGruposGestaoClick($accessToken, $secretAccessToken) {
    $grupos = [];
    $pagina = 1;
    do {
      $res = fabricaChamarGestaoClick($accessToken, $secretAccessToken, 'grupos_produtos', [
        'pagina' => $pagina,
        'limite' => 100
      ]);
      if (!$res['ok']) {
        return $res;
      }
      $grupos = array_merge($grupos, $res['data']);
      $total = (int) ($res['meta']['total_registros'] ?? count($grupos));
      $pagina++;
      if (count($grupos) < $total && count($res['data']) > 0) usleep(350000);
    } while (count($grupos) < $total && count($res['data']) > 0);
    return ['ok' => true, 'data' => $grupos];
  }

  function fabricaTodosProdutosGestaoClick($fabrica, $grupoId) {
    $produtos = [];
    $pagina = 1;
    $totalPaginas = null;
    do {
      $res = fabricaChamarGestaoClick($fabrica['access_token'], $fabrica['secret_access_token'], 'produtos', [
        'loja_id' => $fabrica['loja_id'],
        'grupo_id' => $grupoId,
        'pagina' => $pagina,
        'limite' => 100
      ]);
      if (!$res['ok']) {
        return $res;
      }
      $produtos = array_merge($produtos, $res['data']);
      $totalPaginas = (int) ($res['meta']['total_paginas'] ?? $pagina);
      $pagina++;
      if ($pagina <= $totalPaginas && count($res['data']) > 0) usleep(350000);
    } while ($pagina <= $totalPaginas && count($res['data']) > 0);
    return ['ok' => true, 'data' => $produtos];
  }

  function fabricaVerificarSetup($conn) {
    $res = $conn->query("SELECT (SELECT COUNT(*) FROM fabricas) AS fabricas, (SELECT COUNT(*) FROM marcas) AS marcas");
    $setup = $res ? $res->fetch_assoc() : ['fabricas' => 0, 'marcas' => 0];
    return (int) $setup['fabricas'] > 0 && (int) $setup['marcas'] > 0;
  }

?>

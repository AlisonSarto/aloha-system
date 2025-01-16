<?php

  //? Cria uma entrada

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('entrada', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $marca_id = $_POST['marca'] ?? null;
    $sabor_id = $_POST['sabor'] ?? null;
    $qtd = $_POST['qtd'] ?? null;
    $dia = $_POST['dia'] ?? date('Y-m-d H:i:s');

    if ($marca_id && $sabor_id && $qtd) {

      //* Previne o SQL Injection
      $marca_id = $conn->real_escape_string($marca_id);
      $sabor_id = $conn->real_escape_string($sabor_id);
      $qtd = $conn->real_escape_string($qtd);

      //? Puxa as outras variaveis
      $turno = verificarTurno(new DateTime($dia));
      $turno_id = $turno['turno_id'];
      $turno_nome = $turno['turno'];
      $turno_dia = $turno['dia'];
      $horas_de_trabalho = $turno['horas_de_trabalho'];
      $inicio_turno = $turno['inicio'];
      $fim_turno = $turno['fim'];

      //* Bloqueia a entrada se não tiver um turno
      if ($turno_id == 0) {
        send([
          'status' => 400,
          'message' => 'Não é possível registrar uma entrada sem um turno ativo'
        ]);
      }

      //? Puxa a meta atual
      $sql = "SELECT meta FROM metas WHERE ativo = 'true' LIMIT 1";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar a meta',
          'error' => $conn->error
        ]);
      }

      $db = $res->fetch_assoc();
      $meta = (int) $db['meta'];

      if ($meta === null || $meta === 0) {
        send([
          'status' => 404,
          'message' => 'Pelo menos uma meta deve estar ativa'
        ]);
      }

      //? Puxa o pacote
      $sql = "SELECT * FROM pacotes WHERE marca_id = '$marca_id' AND sabor_id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar o pacote',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Pacote não encontrado'
        ]);
      }

      $db = $res->fetch_assoc();
      $pacote_id = $db['id'];
      $antiga_qtd = $db['qtd'];
      $nova_qtd = $antiga_qtd + $qtd;
      $integration = $db['integration'];

      //? Puxa a embalagem
      $sql = "SELECT * FROM embalagens WHERE marca_id = '$marca_id' AND sabor_id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar a embalagem',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Embalagem não encontrada'
        ]);
      }

      $db = $res->fetch_assoc();
      $embalagem_antiga_qtd = $db['qtd'];

      //? Puxa o concentrado
      $sql = "SELECT * FROM concentrados WHERE sabor_id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar o concentrado',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Concentrado não encontrado'
        ]);
      }

      $db = $res->fetch_assoc();
      $concentrado_antiga_qtd = $db['qtd'];

      //? Puxa a formula de embalagem
      $sql = "SELECT * FROM marcas WHERE id = '$marca_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar a marca',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Marca não encontrada'
        ]);
      }

      $db = $res->fetch_assoc();
      $formula_embalagem = $db['formula'];

      //? Puxa a formula do concentrado
      $sql = "SELECT * FROM sabores WHERE id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar o sabor',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Sabor não encontrado'
        ]);
      }

      $db = $res->fetch_assoc();
      $formula_concentrado = $db['formula'];

      //? Atualiza a quantidade do pacote
      $sql = "UPDATE pacotes SET qtd = '$nova_qtd' WHERE id = '$pacote_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao atualizar a quantidade do pacote',
          'error' => $conn->error
        ]);
      }

      //? Envia para o Gestão Click
      if (env('G-CLICK_RUN') === 'true' && $integration !== null) {

        $token = env('G-CLICK_TOKEN');
        $secret = env('G-CLICK_SECRET');
        $loja_id = (int) env('G-CLICK_LOJA_ID_FABRICA');

        //* Puxa a quantidade do pacote no Gestão Click
        $url = "https://api.gestaoclick.com/produtos";
        $method = 'GET';
        $headers = [
          "access-token: $token",
          "secret-access-token: $secret"
        ];
        $data = [
          'loja_id' => $loja_id,
          'id' => $integration
        ];

        $response = curl($url, $headers, $method, $data);
        $response = $response['message'];

        if ($response['code'] !== 200) {
          send([
            'status' => 500,
            'message' => 'Erro ao buscar pacotes no Gestão Click',
            'error' => $response['message']
          ]);
        }

        $estoqueAntigoGestao = $response['data'][0]['estoque'];
        $novoEstoqueGestao = $estoqueAntigoGestao + $qtd;
        $nomePacoteGestao = $response['data'][0]['nome'];

        //* Atualiza a quantidade do pacote no Gestão Click
        $url = "https://api.gestaoclick.com/produtos/$integration";
        $method = 'PUT';
        $headers = [
          "access-token: $token",
          "secret-access-token: $secret"
        ];
        $data = [
					'usuario_id' => 713076,
          'loja_id' => $loja_id,
          'nome' => $nomePacoteGestao,
          'estoque' => $novoEstoqueGestao,
        ];

        $response = curl($url, $headers, $method, $data);

      }

      //? Cria a mov
      $sql = "INSERT INTO mov(tipo, qtd_mov, qtd_final, produto_id, produto_tipo, dia)
              VALUES ('Entrada', '$qtd', '$nova_qtd', '$pacote_id', 'pacotes', '$dia')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a movimentação',
          'error' => $conn->error
        ]);
      }

      //* Puxa a maquina e os funcionários ativos para registro na entrada
      $sql = "SELECT * FROM maquinas";
      $res = $conn->query($sql);

      $maquinas = [];
      while ($db = $res->fetch_assoc()) {
        $maquinas[$db['id']] = $db;
      }

      $sql = "SELECT * FROM funcionarios WHERE ativo = 'true'";
      $res = $conn->query($sql);

      $num_funcionarios = $res->num_rows;

      $funcionarios = [];
      while ($db = $res->fetch_assoc()) {
        $funcionarios[] = [
          'nome' => $db['nome'],
          'maquina' => $maquinas[$db['maquina_id']]['nome']
        ];
      }

      $funcionarios = json_encode($funcionarios);

      //? Cria a entrada
      $dia_real = date('Y-m-d H:i:s');
      $sql = "INSERT INTO entradas(turno_id, turno, turno_dia, pacote_id, qtd, meta, horas_de_trabalho, dia, dia_real, funcionarios, inicio_turno, fim_turno)
              VALUES ('$turno_id', '$turno_nome', '$turno_dia', '$pacote_id', '$qtd', $meta, $horas_de_trabalho, '$dia', '$dia_real', '$funcionarios', '$inicio_turno', '$fim_turno')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a entrada',
          'error' => $conn->error
        ]);
      }

      //? Saída de embalagem
      $qtd_embalagem = $qtd * $formula_embalagem;
      $embalagem_final = $embalagem_antiga_qtd - $qtd_embalagem;

      $sql = "UPDATE embalagens SET qtd = qtd - '$qtd_embalagem' WHERE marca_id = '$marca_id' AND sabor_id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao atualizar a quantidade da embalagem',
          'error' => $conn->error
        ]);
      }

      $sql = "INSERT INTO mov(tipo, qtd_mov, qtd_final, produto_id, produto_tipo, dia)
              VALUES ('Saída', '$qtd_embalagem', '$embalagem_final', '$pacote_id', 'embalagens', '$dia')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a movimentação embalagem',
          'error' => $conn->error
        ]);
      }

      //? Saída de concentrado
      $qtd_concentrado = $qtd * $formula_concentrado;
      $concentrado_final = $concentrado_antiga_qtd - $qtd_concentrado;

      $sql = "UPDATE concentrados SET qtd = qtd - '$qtd_concentrado' WHERE sabor_id = '$sabor_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao atualizar a quantidade do concentrado',
          'error' => $conn->error
        ]);
      }

      $sql = "INSERT INTO mov(tipo, qtd_mov, qtd_final, produto_id, produto_tipo, dia)
              VALUES ('Saída', '$qtd_concentrado', '$concentrado_final', '$sabor_id', 'concentrados', '$dia')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a movimentação concentrado',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Entrada criada com sucesso'
      ]);

    }else {
      send([
        'status' => 400,
        'message' => 'Dados inválidos'
      ]);
    }

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>
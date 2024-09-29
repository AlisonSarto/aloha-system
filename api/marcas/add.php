<?php

  //? Cria uma marca

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('marca', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $logo = $_POST['logo'] ?? null;
    $formula = $_POST['formula'] ?? null;
    $sabores_id = $_POST['sabores_id'] ?? null; //* Separados por vírgula

    if ($nome && $logo && $sabores_id) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $logo = $conn->real_escape_string($logo);
      $formula = $conn->real_escape_string($formula);
      $sabores_id = $conn->real_escape_string($sabores_id);

      //? Verifica se a marca já existe
      $sql = "SELECT * FROM marcas WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar as marcas',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe uma marca com esse nome'
        ]);
      }

      //? Verifica se os sabores existem
      $sql = "SELECT * FROM sabores WHERE id IN ($sabores_id)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os sabores',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows !== count(explode(',', $sabores_id))) {
        send([
          'status' => 404,
          'message' => 'Um ou mais sabores não existem'
        ]);
      }

      $sabores = [];
      while ($db = $res->fetch_assoc()) {
        $id = $db['id'];
        $sabor = $db['sabor'];

        $sabores[$id] = $sabor;
      }

      //? Cria a marca
      $sql = "INSERT INTO marcas (nome, sabores_id, formula, logo) VALUES ('$nome', '$sabores_id', $formula, '$logo')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a marca',
          'error' => $conn->error
        ]);
      }

      $marca_id = $conn->insert_id;

      //? Cria as embalagens
      foreach ($sabores as $id => $sabor) {
        $sql = "INSERT INTO embalagens (marca_id, marca, sabor_id, sabor, qtd) VALUES ($marca_id, '$nome', '$id', '$sabor', 0)";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao criar as embalagens',
            'error' => $conn->error
          ]);
        }
      }

      //? Cria os pacotes
      foreach ($sabores as $id => $sabor) {
        $sql = "INSERT INTO pacotes (marca_id, marca, sabor_id, sabor, qtd) VALUES ($marca_id, '$nome', '$id', '$sabor', 0)";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao criar as pacotes',
            'error' => $conn->error
          ]);
        }
      }

      send([
        'status' => 200,
        'message' => 'Marca criado com sucesso',
        'marca_id' => $id,
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
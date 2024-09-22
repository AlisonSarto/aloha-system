<?php

  //? Função que passa a bonificação automatica para os funcionarios
  function bonificacao_automatica() {
    global $conn;
    global $turno_id;

    //? Verifica se a bonificação está ativa
    $sql = "SELECT * FROM automacoes WHERE id = 1";
    $res = $conn->query($sql);

    if ($res === false) {
      return false;
    }

    $db = $res->fetch_assoc();
    $bonificacao_ativa = $db['ativo'] == 'true' ? true : false;
    $bonificacao = $db['pontuacao'];

    if ($bonificacao_ativa == false) {
      return false;
    }

    //? Verifica o modo atual de fabricação
    $sql = "SELECT * FROM modos WHERE ativo = 'true'";
    $res = $conn->query($sql);
    
    if ($res === false) {
      return false;
    }

    //? Puxa metas
    $db = $res->fetch_assoc();
    $minimo = $db['minimo'];
    $meta = $db['meta'];

    //? Puxa a próxima bonificação
    $sql = "SELECT * FROM proxima_bonificacao";
    $res = $conn->query($sql);

    $db = $res->fetch_assoc();
    $proxima_bonificacao = $db['dia'];
    $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($proxima_bonificacao . ' -1 hour'));
    $agora = date('Y-m-d H:i:s');

    if ($proxima_bonificacao > $agora) {
      return;
    }

    //* Verifica se já passou + de 1h
    $horas = strtotime($agora) - strtotime($ultima_bonificacao);
    $horas = $horas / 3600;
    $horas = (int) $horas;

    // echo $horas;
    // echo '<br>';
    // echo '<br>';

    //? Passa por todos os periodos
    $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' -1 hour'));
    $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' -1 hour'));
    for ($i = 0; $horas > $i; $i++) {
      $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' +1 hour'));
      $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' +1 hour'));
      $tipo = '';
      $pontuacao_mov = 0;

      // echo $ultima_bonificacao;
      // echo '<br>';
      // echo $proxima_bonificacao;
      // echo '<br>';

      //? Puxa a quantidade de pacotes feitos
      $sql = "SELECT SUM(qtd) as qtd FROM entradas WHERE dia > '$ultima_bonificacao' AND dia <= '$proxima_bonificacao'";
      $res = $conn->query($sql);

      $db = $res->fetch_assoc();
      $qtd = (int) $db['qtd'];

      // echo "Quantidade: $qtd";
      // echo '<br>';
      // echo "Meta: $meta";
      // echo '<br>';
      if ($meta <= $qtd) {
        //* Ganha
        $tipo = '+';
        $pontuacao_mov = $bonificacao;

      }elseif ($qtd < $minimo) {
        //! Perde
        $tipo = '-';
        $pontuacao_mov = $bonificacao;

      }else {
        // Quantidade na média
        return;
      }

      // echo "Pontuação: $tipo $pontuacao_mov";
      // echo '<br>';
      // echo '<br>';

      //? Puxa os funcionarios que estão no turno
      $sql = "SELECT * FROM funcionarios WHERE turno_id = '$turno_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        return false;
      }
      
      $funcionarios_id = [];
      while ($db = $res->fetch_assoc()) {
        $rosto_id = $db['rosto_id'];
        $id = $db['id'];

        //* Verifica se ele está trabalhando
        $sql = "SELECT * FROM pontos WHERE rosto_id = '$rosto_id' ORDER BY dia DESC LIMIT 1";
        $res2 = $conn->query($sql);
        
        if ($res2->num_rows > 0) {
          $base = $res2->fetch_assoc();
          $stade = $base['tipo'] == 'entrada' ? true : false;
          if ($stade) {
            $funcionarios_id[] = $id;
          }
        }
      }

      //? Passa a bonificação para os funcionarios
      foreach ($funcionarios_id as $id) {

        $sql = "SELECT * FROM funcionarios WHERE id = '$id'";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

        $db = $res->fetch_assoc();
        $pontuacao_antiga = $db['pontuacao'];
        
        if ($tipo == '+') {
          $diferenca_meta = $qtd - $meta;
          $pontuacao_final = $pontuacao_antiga + $pontuacao_mov;
          $descricao = 'Bonificação por bater meta de fabricação com sucesso, foram feitos ' . $diferenca_meta . ' pacotes a mais que a meta de fabricação';
        }elseif ($tipo == '-') {
          $diferenca_minima = $minimo - $qtd;
          $pontuacao_final = $pontuacao_antiga - $pontuacao_mov;
          $descricao = 'Advertencia por não bater meta de fabricação, faltou ' . $diferenca_minima . ' pacotes para bater a quantidade mínima de fabricação';
        }
        
        $dia = date('Y-m-d H:i:s');

        $sql = "UPDATE funcionarios SET pontuacao = $pontuacao_final WHERE id = '$id'";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

        $sql = "INSERT INTO mov_pontuacao (funcionario_id, tipo, obs, pontuacao_mov, pontuacao_final, dia) VALUES ('$id', '$tipo', '$descricao', $pontuacao_mov, $pontuacao_final, '$dia')";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

      }

    }

    //? Atualiza a última bonificação
    $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($proxima_bonificacao . ' +1 hour'));
    $sql = "UPDATE proxima_bonificacao SET dia = '$proxima_bonificacao'";
    $res = $conn->query($sql);

    if ($res === false) {
      return false;
    }

  }

  //? Função que passa a bonificação após finalização de fabricação
  function bonificacao_manual() {
    global $conn;
    global $turno_id;

    //? Verifica se a bonificação está ativa
    $sql = "SELECT * FROM automacoes WHERE id = 1";
    $res = $conn->query($sql);

    if ($res === false) {
      return false;
    }

    $db = $res->fetch_assoc();
    $bonificacao_ativa = $db['ativo'] == 'true' ? true : false;
    $bonificacao = $db['pontuacao'];

    if ($bonificacao_ativa == false) {
      return false;
    }

    //? Verifica o modo atual de fabricação
    $sql = "SELECT * FROM modos WHERE ativo = 'true'";
    $res = $conn->query($sql);
    
    if ($res === false) {
      return false;
    }

    //? Puxa metas
    $db = $res->fetch_assoc();
    $minimo = $db['minimo'];
    $meta = $db['meta'];

    //? Puxa a última bonificação automática
    $sql = "SELECT * FROM proxima_bonificacao";
    $res = $conn->query($sql);

    $db = $res->fetch_assoc();
    $proxima_bonificacao = $db['dia'];
    $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($proxima_bonificacao . ' -1 hour'));
    $agora = date('Y-m-d H:i:s');

    //* Verifica se já se passou 1h
    $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' +1 hour'));
    $agora = date('Y-m-d H:i:s');

    if ($proxima_bonificacao > $agora) {
      //? Razão e proporção
      $timestamp1 = strtotime($proxima_bonificacao);
      $timestamp2 = strtotime($agora);
      $diferencaEmSegundos = abs($timestamp2 - $timestamp1);
      $minutos = $diferencaEmSegundos / 60;

      if ($minutos > 60) {
        return;
      }

      $meta = (int) (($minutos * $meta) / 60);
      $minimo = (int) (($minutos * $minimo) / 60);

      if ($meta <= 0 || $minimo <= 0) {
        return;
      }

      // echo "Minutos: $minutos";
      // echo '<br>';
      // echo "Meta: $meta";
      // echo '<br>';
      // echo "Minimo: $minimo";

      $horas = 1;

    }else {
      //* Verifica se já passou + de 1h
      $horas = strtotime($agora) - strtotime($ultima_bonificacao);
      $horas = $horas / 3600;
      $horas = (int) $horas;
    }

    // echo $horas;
    // echo '<br>';
    // echo '<br>';

    //? Passa por todos os periodos
    $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' -1 hour'));
    $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' -1 hour'));
    for ($i = 0; $horas > $i; $i++) {
      $ultima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' +1 hour'));
      $proxima_bonificacao = date('Y-m-d H:i:s', strtotime($ultima_bonificacao . ' +1 hour'));
      $tipo = '';
      $pontuacao_mov = 0;

      // echo $ultima_bonificacao;
      // echo '<br>';
      // echo $proxima_bonificacao;
      // echo '<br>';

      //? Puxa a quantidade de pacotes feitos
      $sql = "SELECT SUM(qtd) as qtd FROM entradas WHERE dia > '$ultima_bonificacao' AND dia <= '$proxima_bonificacao'";
      $res = $conn->query($sql);

      $db = $res->fetch_assoc();
      $qtd = (int) $db['qtd'];

      // echo "Quantidade: $qtd";
      // echo '<br>';
      
      if ($qtd == 0) {
        continue;
      }

      if ($meta <= $qtd) {
        //* Ganha
        $tipo = '+';
        $pontuacao_mov = $bonificacao;

      }elseif ($qtd < $minimo) {
        //! Perde
        $tipo = '-';
        $pontuacao_mov = $bonificacao;

      }else {
        // Quantidade na média
        return;
      }

      // echo "Pontuação: $tipo $pontuacao_mov";
      // echo '<br>';
      // echo '<br>';

      //? Puxa os funcionarios que estão no turno
      $sql = "SELECT * FROM funcionarios WHERE turno_id = '$turno_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        return false;
      }
      
      $funcionarios_id = [];
      while ($db = $res->fetch_assoc()) {
        $rosto_id = $db['rosto_id'];
        $id = $db['id'];

        //* Verifica se ele está trabalhando
        $sql = "SELECT * FROM pontos WHERE rosto_id = '$rosto_id' ORDER BY dia DESC LIMIT 1";
        $res2 = $conn->query($sql);
        
        if ($res2->num_rows > 0) {
          $base = $res2->fetch_assoc();
          $stade = $base['tipo'] == 'entrada' ? true : false;
          if ($stade) {
            $funcionarios_id[] = $id;
          }
        }
      }

      //? Passa a bonificação para os funcionarios
      foreach ($funcionarios_id as $id) {

        $sql = "SELECT * FROM funcionarios WHERE id = '$id'";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

        $db = $res->fetch_assoc();
        $pontuacao_antiga = $db['pontuacao'];
        
        if ($tipo == '+') {
          $diferenca_meta = $qtd - $meta;
          $pontuacao_final = $pontuacao_antiga + $pontuacao_mov;
          $descricao = 'Bonificação por bater meta de fabricação com sucesso, foram feitos ' . $diferenca_meta . ' pacotes a mais que a meta de fabricação';
        }elseif ($tipo == '-') {
          $diferenca_minima = $minimo - $qtd;
          $pontuacao_final = $pontuacao_antiga - $pontuacao_mov;
          $descricao = 'Advertencia por não bater meta de fabricação, faltou ' . $diferenca_minima . ' pacotes para bater a quantidade mínima de fabricação';
        }
        
        $dia = date('Y-m-d H:i:s');

        $sql = "UPDATE funcionarios SET pontuacao = $pontuacao_final WHERE id = '$id'";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

        $sql = "INSERT INTO mov_pontuacao (funcionario_id, tipo, obs, pontuacao_mov, pontuacao_final, dia) VALUES ('$id', '$tipo', '$descricao', $pontuacao_mov, $pontuacao_final, '$dia')";
        $res = $conn->query($sql);

        if ($res === false) {
          return false;
        }

      }

    }

    if ($res === false) {
      return false;
    }

  }

?>
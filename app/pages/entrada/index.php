<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('entrada', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Entrada - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
  <link rel="stylesheet" href="./assets/css/boxes.css">
</head>
<body>
  
  <main class="container-fluid px-4">

    <!-- Toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="toast" class="toast" role="alert">
        <div class="toast-header text-bg-success">
          <img src="/assets/imgs/favicon.ico" class="rounded icone me-2" width="27">
          <strong class="me-auto">Gelo System</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body"></div>
      </div>
    </div>

    <h1 class="py-4 d-flex align-items-center">
      <i class="fas fa-arrow-right me-2"></i>
      Entrada
    </h1>

    <!-- Marca -->
    <div id="page-marca" style="display:none">

      <div class="text-center w-100 mb-3">
        <h1 class="m-0">
          Escolha a marca
        </h1>
      </div>

      <div class="row" id="marcas"></div>

      <h3 class="text-center my-2" id="marca"></h3>

    </div>

    <!-- Sabor -->
    <div id="page-sabor" style="display:none">

      <div class="text-center w-100 mb-3">
        <h1 class="m-0">
          Escolha o sabor
        </h1>
      </div>

      <div class="row" id="sabores"></div>

      <h3 class="text-center my-2" id="sabor"></h3>

    </div>

    <!-- Quantidade -->
    <div id="page-qtd" style="display:none">
    
      <h1 class="text-center w-100 my-2">
        Quantidade
      </h1>

      <div class="conteiner">
        <div class="d-flex justify-content-center">
          <div class="input-group input-group-lg">
            <input type="text" class="form-control text-center virtual-keyboard" id="qtd" readonly>
          </div>
        </div>
      </div>

    </div>

    <!-- Dia -->
    <div id="page-dia" style="display:none">
    
      <h1 class="text-center w-100 my-2">
        Dia
      </h1>

      <div class="conteiner">
        <div class="d-flex justify-content-center">
          <div class="input-group input-group-lg">
            <input type="datetime-local" class="form-control text-center" id="dia" value="<?= date('Y-m-d\TH:i') ?>" max="<?= date('Y-m-d\TH:i') ?>">
          </div>
        </div>
      </div>

    </div>

    <!-- Resumo -->
    <div id="page-resumo" style="display:none">
      
      <h1 class="text-center w-100 my-2">
        Resumo
      </h1>

      <table class="table w-75 ms-5">
        <tr>
          <th scope="row">Marca:</th>
          <td id="res-marca"></td>
        </tr>
        <tr>
          <th scope="row">Sabor:</th>
          <td id="res-sabor"></td>
        </tr>
        <tr>
          <th scope="row">Quantidade:</th>
          <td id="res-qtd"></td>
        </tr>
      </table>

    </div>

    <!-- Erro -->
    <div id="page-error" style="display:none">

      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger text-center">
            <h5 class="m-0" id="error-message"></h5>
          </div>
        </div>
      </div>

    </div>

    <!-- Botões -->
    <div class="mt-3 text-center">
      <button class="btn btn-danger" id="voltar" disabled>Voltar</button>
      <button class="btn btn-success" id="proximo" disabled>Próximo</button>
    </div>

    <br><br><br>

    <br>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/teclado.js"></script>
  <!-- Controls -->
  <script src="./assets/js/pages.js"></script>
</body>
</html>
<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('aloha-id', 'verificar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Marcar Ponto - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>

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
  
  <main class="container-fluid px-4">

    <h1 class="py-4 d-flex align-items-center">
      <i class="far fa-id-badge me-2"></i>
      Marcar Ponto
    </h1>

    <div class="row d-flex justify-content-center" id="rostos"></div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/aloha-id.js"></script>
  <!-- Controls -->
  <script src="./assets/js/layout.js"></script>
  <script src="./assets/js/verificar.js"></script>
</body>
</html>
<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('estoque', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Início do estoque - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  <main class="container-fluid px-4 pb-5">
    <div class="py-4">
      <h1 class="h3 mb-1"><i class="fas fa-boxes-stacked me-2" aria-hidden="true"></i>Estoque</h1>
      <p class="text-body-secondary mb-0">O que você precisa registrar?</p>
    </div>

    <div class="row g-3 g-lg-4">
      <div class="col-12 col-md-6 col-xl-4">
        <a class="btn btn-primary w-100 h-100 text-start p-4" href="/app/?estoque/entrada-carrinho" target="_top">
          <span class="d-flex flex-column gap-3">
            <i class="fas fa-cart-plus fs-1" aria-hidden="true"></i>
            <span><span class="d-block fs-4 fw-semibold">Dar entrada em pacotes</span><span class="d-block mt-1">Registrar um carrinho colocado na câmara fria.</span></span>
            <span class="align-self-end fs-5">Começar <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i></span>
          </span>
        </a>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <a class="btn btn-outline-primary w-100 h-100 text-start p-4" href="/app/?estoque/saida-concentrado" target="_top">
          <span class="d-flex flex-column gap-3">
            <i class="fas fa-flask fs-1" aria-hidden="true"></i>
            <span><span class="d-block fs-4 fw-semibold">Dar saída em concentrado</span><span class="d-block mt-1">Registrar a quantidade de concentrado retirada.</span></span>
            <span class="align-self-end fs-5">Começar <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i></span>
          </span>
        </a>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <a class="btn btn-outline-primary w-100 h-100 text-start p-4" href="/app/?estoque/saida-bobina" target="_top">
          <span class="d-flex flex-column gap-3">
            <i class="fas fa-scroll fs-1" aria-hidden="true"></i>
            <span><span class="d-block fs-4 fw-semibold">Dar saída em bobina</span><span class="d-block mt-1">Registrar a quantidade de bobina retirada.</span></span>
            <span class="align-self-end fs-5">Começar <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i></span>
          </span>
        </a>
      </div>
    </div>
  </main>
  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
</body>
</html>

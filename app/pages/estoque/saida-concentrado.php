<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('estoque', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saída de concentrado - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  <main class="container-fluid px-4 pb-5">
    <div class="py-4">
      <h1 class="h3 mb-1"><i class="fas fa-flask me-2" aria-hidden="true"></i>Saída de concentrado</h1>
      <p class="text-body-secondary mb-0">Registre o concentrado retirado do estoque.</p>
    </div>

    <section class="card" aria-labelledby="titulo-saida-concentrado">
      <div class="card-header"><h2 class="h5 mb-0" id="titulo-saida-concentrado">Registrar saída</h2></div>
      <div class="card-body">
        <div id="mensagem-estoque" class="alert d-none" role="status" aria-live="polite"></div>
        <form id="form-movimento-estoque" data-operacao="saida_concentrado">
          <div class="d-flex align-items-center gap-3 mb-4">
            <span class="fw-semibold text-nowrap" id="etapa-titulo">Etapa 1 de 3 · Escolha a marca</span>
            <div class="progress flex-grow-1" role="progressbar" aria-label="Progresso do lançamento" aria-valuemin="1" aria-valuemax="3" aria-valuenow="1"><div class="progress-bar" id="etapa-progresso" style="width: 33.33%"></div></div>
          </div>
          <section class="etapa-movimento" data-etapa="1" aria-labelledby="etapa-marca-titulo">
            <h3 class="h4 mb-3" id="etapa-marca-titulo">Qual é a marca?</h3>
            <div class="row g-3" id="opcoes-marcas" aria-live="polite"><div class="col-12 text-body-secondary">Carregando marcas...</div></div>
            <div class="d-flex justify-content-end mt-4"><button class="btn btn-primary btn-lg px-4" id="proximo-etapa-marca" type="button" disabled>Próximo <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i></button></div>
          </section>
          <section class="etapa-movimento d-none" data-etapa="2" aria-labelledby="etapa-produto-titulo">
            <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3"><div><div class="small text-body-secondary">Marca escolhida</div><div class="fw-semibold" id="marca-escolhida-produto"></div></div><button class="btn btn-outline-secondary" type="button" data-voltar-etapa="1"><i class="fas fa-arrow-left me-1" aria-hidden="true"></i>Trocar marca</button></div>
            <h3 class="h4 mb-3" id="etapa-produto-titulo">Qual concentrado será retirado?</h3>
            <div class="row g-3" id="opcoes-produtos" aria-live="polite"><div class="col-12 text-body-secondary">Escolha uma marca para carregar os produtos.</div></div>
            <div class="d-flex justify-content-between mt-4"><button class="btn btn-outline-secondary btn-lg px-4" type="button" data-voltar-etapa="1"><i class="fas fa-arrow-left me-1" aria-hidden="true"></i>Voltar</button><button class="btn btn-primary btn-lg px-4" id="proximo-etapa-produto" type="button" disabled>Próximo <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i></button></div>
          </section>
          <section class="etapa-movimento d-none" data-etapa="3" aria-labelledby="etapa-quantidade-titulo">
            <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3"><div><div class="small text-body-secondary">Marca e produto</div><div class="fw-semibold" id="produto-escolhido-resumo"></div><div class="small text-body-secondary" id="saldo-produto"></div></div><button class="btn btn-outline-secondary" type="button" data-voltar-etapa="2"><i class="fas fa-arrow-left me-1" aria-hidden="true"></i>Trocar produto</button></div>
            <h3 class="h4 mb-3" id="etapa-quantidade-titulo">Qual a quantidade de concentrado?</h3>
            <div class="row g-3 align-items-end"><div class="col-12 col-md-6"><label class="form-label" for="quantidade-estoque">Quantidade a retirar (gramas)</label><input class="form-control form-control-lg" id="quantidade-estoque" type="number" min="0.001" step="0.001" inputmode="decimal" required><div class="form-text" id="conversao-quantidade-estoque" aria-live="polite">Informe a quantidade em gramas; o equivalente em quilogramas será calculado.</div></div><div class="col-12 col-md-6 d-grid d-md-flex justify-content-md-end"><button class="btn btn-success btn-lg px-4" id="salvar-movimento-estoque" type="submit"><i class="fas fa-arrow-up-from-bracket me-1" aria-hidden="true"></i>Registrar saída</button></div></div>
          </section>
        </form>
      </div>
    </section>

    <section class="card mt-4" id="historico-operacoes-estoque" aria-labelledby="titulo-historico-estoque">
      <div class="card-header"><h2 class="h5 mb-0" id="titulo-historico-estoque">Últimas saídas registradas</h2></div>
      <div class="card-body border-bottom">
        <div class="card border-primary bg-primary-subtle">
          <div class="card-body py-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
            <div><div class="small text-body-secondary">Total retirado por você hoje</div><div class="h3 mb-0"><span id="total-pacotes-hoje">0</span> <span class="fs-6 fw-normal">g</span></div><div class="small text-body-secondary" id="conversao-total-hoje">0 kg</div><div class="small text-body-secondary mt-1" id="total-produtos-hoje"></div></div>
            <span class="badge text-bg-primary align-self-start align-self-sm-center">Hoje</span>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped align-middle mb-0">
          <caption class="visually-hidden">Últimas saídas de concentrado desta fábrica</caption>
          <thead><tr><th scope="col">Produto</th><th scope="col">Quantidade nesta saída (g / kg)</th><th scope="col">Total do produto hoje (g / kg)</th><th scope="col">Lançado por</th><th scope="col">Horário</th></tr></thead>
          <tbody id="historico-estoque"><tr><td colspan="5" class="text-center text-body-secondary py-4">Carregando...</td></tr></tbody>
        </table>
      </div>
    </section>
  </main>
  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="./assets/js/movimento.js"></script>
</body>
</html>

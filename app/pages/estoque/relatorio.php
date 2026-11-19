<?php
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('estoque_relatorio', 'visualizar');
  $hoje = new DateTimeImmutable('today', new DateTimeZone('Etc/GMT+3'));
  $dataRelatorio = $hoje->format('Y-m-d');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Produção por usuário - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  <main class="container-fluid px-4 pb-5">
    <div class="py-4">
      <h1 class="h3 mb-1"><i class="fas fa-chart-line me-2" aria-hidden="true"></i>Produção por usuário</h1>
      <p class="text-body-secondary mb-0"><span id="fabrica-relatorio"></span> · Cada ponto representa uma entrada; a posição mostra o horário real e o intervalo entre os registros.</p>
    </div>

    <div id="mensagem-relatorio" class="alert d-none" role="status" aria-live="polite"></div>
    <section class="card mb-4" aria-label="Filtros do relatório">
      <div class="card-body">
        <form id="filtro-relatorio" class="row g-3 align-items-end">
          <div class="col-12 col-sm-6 col-lg-3"><label class="form-label" for="relatorio-data">Dia da produção</label><input class="form-control" id="relatorio-data" type="date" value="<?= htmlspecialchars($dataRelatorio, ENT_QUOTES, 'UTF-8') ?>" required></div>
          <div class="col-12 col-sm-3 d-grid"><button class="btn btn-primary" id="atualizar-relatorio" type="submit">Ver produção</button></div>
        </form>
      </div>
    </section>

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-4"><article class="card h-100 border-primary"><div class="card-body"><div class="small text-body-secondary">Pacotes produzidos</div><div class="display-6 fw-semibold" id="total-produzido">—</div></div></article></div>
      <div class="col-12 col-md-4"><article class="card h-100 border-warning"><div class="card-body"><div class="small text-body-secondary">Concentrado usado</div><div class="display-6 fw-semibold" id="total-concentrado">—</div></div></article></div>
      <div class="col-12 col-md-4"><article class="card h-100 border-info"><div class="card-body"><div class="small text-body-secondary">Bobina usada</div><div class="display-6 fw-semibold" id="total-bobina">—</div></div></article></div>
    </div>

    <section class="card" aria-labelledby="titulo-timeline-producao">
      <div class="card-header"><h2 class="h5 mb-0" id="titulo-timeline-producao">Linha do tempo por gerente</h2></div>
      <div class="card-body">
        <p class="small text-body-secondary mb-2">Clique em um ponto para abrir os detalhes da entrada e conferir a foto do carrinho. A distância horizontal acompanha o intervalo real entre os horários.</p>
        <div id="timeline-producao" aria-live="polite"><div class="text-center text-body-secondary py-4">Carregando...</div></div>
      </div>
    </section>
  </main>

  <div class="modal fade" id="modal-foto-producao" tabindex="-1" aria-labelledby="titulo-modal-foto-producao" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header"><div><h2 class="modal-title h5 mb-1" id="titulo-modal-foto-producao">Conferir entrada</h2><div class="small text-body-secondary" id="detalhes-modal-foto-producao"></div></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div>
        <div class="modal-body text-center"><img id="imagem-modal-foto-producao" class="img-fluid rounded d-none" alt="Foto do carrinho registrado"><div id="sem-foto-modal-producao" class="alert alert-warning mb-0 d-none">Esta entrada não tem foto registrada.</div></div>
      </div>
    </div>
  </div>

  <style>
    .timeline-scroll { overflow-x: auto; }
    .timeline-canvas { min-width: 900px; }
    .timeline-axis, .timeline-track { position: relative; }
    .timeline-axis { height: 34px; border-bottom: 1px solid var(--bs-border-color); }
    .timeline-hour { position: absolute; bottom: 0; transform: translateX(-50%); font-size: .75rem; color: var(--bs-secondary-color); }
    .timeline-hour:first-child { transform: none; }
    .timeline-hour:last-child { transform: translateX(-100%); }
    .timeline-track { height: 76px; background-image: linear-gradient(to right, var(--bs-border-color) 1px, transparent 1px); background-size: calc(100% / 12) 100%; }
    .timeline-track::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; border-top: 2px solid var(--bs-primary); opacity: .55; }
    .timeline-point { position: absolute; z-index: 1; transform: translate(-50%, -50%); width: 18px; height: 18px; padding: 0; border: 3px solid #fff; border-radius: 50%; background: var(--bs-primary); box-shadow: 0 0 0 2px var(--bs-primary); }
    .timeline-point:hover, .timeline-point:focus-visible { z-index: 2; transform: translate(-50%, -50%) scale(1.35); }
    .timeline-user + .timeline-user { border-top: 1px solid var(--bs-border-color); }
  </style>
  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="./assets/js/relatorio.js?v=20261114-4"></script>
</body>
</html>

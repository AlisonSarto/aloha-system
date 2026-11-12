var operacaoEstoque = '';
var marcasEstoque = [];
var produtosEstoque = [];
var marcaSelecionadaEstoque = null;
var produtoSelecionadoEstoque = null;
var carregandoProdutosEstoque = false;

$(document).ready(function() {
  operacaoEstoque = $('#form-movimento-estoque').data('operacao');
  carregarContextoEstoque();
  carregarHistoricoEstoque();
  $('#quantidade-estoque').on('input', atualizarConversaoQuantidadeEstoque);
});

function escaparEstoque(valor) {
  return $('<div>').text(valor == null ? '' : valor).html();
}

function mostrarMensagemEstoque(texto, tipo) {
  var mensagem = $('#mensagem-estoque');
  if (tipo === 'info') {
    mensagem.addClass('d-none').empty();
    return;
  }
  mensagem.removeClass('d-none alert-info alert-success alert-danger alert-warning').addClass('alert-' + tipo).text(texto);
}

function mensagemErroEstoque(xhr, fallback) {
  return xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : fallback;
}

function formatarQuantidadeEstoque(quantidade) {
  var valor = Number(quantidade || 0);
  var formatado = valor.toLocaleString('pt-BR');
  if (operacaoEstoque === 'entrada_carrinho') return formatado;
  return `${formatado} g <span class="d-block small text-body-secondary">${(valor / 1000).toLocaleString('pt-BR')} kg</span>`;
}

function atualizarConversaoQuantidadeEstoque() {
  if (operacaoEstoque === 'entrada_carrinho') return;
  var quantidade = Number($('#quantidade-estoque').val());
  var conversao = Number.isFinite(quantidade) && quantidade > 0
    ? `${quantidade.toLocaleString('pt-BR')} g = ${(quantidade / 1000).toLocaleString('pt-BR')} kg`
    : 'Informe a quantidade em gramas; o equivalente em quilogramas será calculado.';
  $('#conversao-quantidade-estoque').text(conversao);
}

function mostrarResultadoMovimentoEstoque(sucesso, mensagem) {
  var cor = sucesso ? 'success' : 'danger';
  var icone = sucesso ? 'check-circle' : 'circle-exclamation';
  var titulo = sucesso ? 'Operação concluída' : 'Operação não concluída';
  var papel = sucesso ? 'status' : 'alert';
  $('html, body').css('background-color', sucesso ? '#198754' : '#dc3545');
  $('body').html(`<main class="container-fluid min-vh-100 bg-${cor} text-white d-flex flex-column justify-content-center align-items-center text-center p-4" role="${papel}" aria-live="assertive"><i class="fas fa-${icone} display-1 mb-4" aria-hidden="true"></i><h1 class="display-5 fw-bold">${titulo}</h1><p class="fs-4 mb-2">${escaparEstoque(mensagem)}</p><p class="mb-0">Voltando ao início...</p></main>`);
  window.setTimeout(function() {
    window.parent.location.href = '/app/?estoque';
  }, 1800);
}

function carregarContextoEstoque() {
  $.ajax({
    url: '/api/estoque/context',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      marcasEstoque = data && Array.isArray(data.marcas) ? data.marcas : [];
      if (!marcasEstoque.length) {
        $('#opcoes-marcas').html('<div class="col-12"><div class="alert alert-warning mb-0">Não há marcas configuradas para esta fábrica.</div></div>');
        $('#proximo-etapa-marca').prop('disabled', true);
        mostrarMensagemEstoque('Não há marcas configuradas para esta fábrica.', 'warning');
        return;
      }
      var fabricaNome = data.fabrica && data.fabrica.nome ? data.fabrica.nome : 'Fábrica ativa';
      renderizarOpcoesMarcas();
      mostrarMensagemEstoque(`${fabricaNome} · escolha a marca para começar.`, 'info');
    },
    error: function(xhr) {
      $('#opcoes-marcas').html('<div class="col-12"><div class="alert alert-danger mb-0">Não foi possível carregar as marcas.</div></div>');
      $('#proximo-etapa-marca').prop('disabled', true);
      mostrarMensagemEstoque(mensagemErroEstoque(xhr, 'Não foi possível carregar as marcas desta fábrica.'), 'danger');
    }
  });
}

function renderizarOpcoesMarcas() {
  var html = '';
  $.each(marcasEstoque, function(i, marca) {
    var selecionada = marcaSelecionadaEstoque && Number(marca.id) === Number(marcaSelecionadaEstoque.id);
    html += `<div class="col-12 col-sm-6 col-xl-4"><button class="btn ${selecionada ? 'btn-primary' : 'btn-outline-primary'} escolher-marca w-100 h-100 p-3 text-start" type="button" data-id="${escaparEstoque(marca.id)}" aria-pressed="${selecionada ? 'true' : 'false'}"><span class="d-flex align-items-center gap-3"><span class="fs-3" aria-hidden="true"><i class="fas fa-tag"></i></span><span class="fw-semibold fs-5">${escaparEstoque(marca.nome)}</span></span></button></div>`;
  });
  $('#opcoes-marcas').html(html);
  $('#proximo-etapa-marca').prop('disabled', !marcaSelecionadaEstoque);
}

function carregarProdutosEstoque() {
  if (!marcaSelecionadaEstoque || carregandoProdutosEstoque) return;
  carregandoProdutosEstoque = true;
  produtoSelecionadoEstoque = null;
  produtosEstoque = [];
  $('#proximo-etapa-marca').prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-1" aria-hidden="true"></i>Carregando produtos...');
  $('#opcoes-produtos').html('<div class="col-12 text-body-secondary" role="status">Carregando produtos...</div>');
  $.ajax({
    url: '/api/estoque/produtos',
    type: 'GET',
    dataType: 'json',
    data: { marca_id: marcaSelecionadaEstoque.id, operacao: operacaoEstoque },
    success: function(data) {
      if (!data || !Array.isArray(data.produtos)) {
        $('#opcoes-produtos').html('<div class="col-12"><div class="alert alert-danger mb-0">A Gestão Click retornou uma lista de produtos inválida.</div></div>');
        mostrarMensagemEstoque(data && data.message ? data.message : 'A Gestão Click retornou uma lista de produtos inválida.', 'danger');
        return;
      }
      produtosEstoque = data.produtos;
      $('#marca-escolhida-produto').text(marcaSelecionadaEstoque.nome);
      if (!produtosEstoque.length) {
        $('#opcoes-produtos').html('<div class="col-12"><div class="alert alert-warning mb-0">Este grupo não possui produtos disponíveis.</div></div>');
        mostrarMensagemEstoque('Este grupo não possui produtos disponíveis.', 'warning');
      } else {
        renderizarOpcoesProdutos();
        mostrarMensagemEstoque('Produtos carregados. Escolha o produto.', 'info');
      }
      $('#historico-operacoes-estoque').addClass('d-none');
      mostrarEtapaEstoque(2);
    },
    error: function(xhr, status) {
      var mensagem = status === 'parsererror' ? 'A Gestão Click retornou uma resposta fora do formato JSON.' : mensagemErroEstoque(xhr, 'Não foi possível carregar os produtos no Gestão Click.');
      $('#opcoes-produtos').html(`<div class="col-12"><div class="alert alert-danger mb-0">${escaparEstoque(mensagem)}</div></div>`);
      mostrarMensagemEstoque(mensagem, 'danger');
    },
    complete: function() {
      carregandoProdutosEstoque = false;
      $('#proximo-etapa-marca').prop('disabled', !marcaSelecionadaEstoque).html('Próximo <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i>');
    }
  });
}

function renderizarOpcoesProdutos() {
  var html = '';
  $.each(produtosEstoque, function(i, produto) {
    var selecionado = produtoSelecionadoEstoque && Number(produto.id) === Number(produtoSelecionadoEstoque.id);
    var saldo = Number(produto.estoque || 0);
    html += `<div class="col-12 col-sm-6 col-xl-4"><button class="btn ${selecionado ? 'btn-primary' : 'btn-outline-secondary'} escolher-produto w-100 h-100 p-3 text-start" type="button" data-id="${escaparEstoque(produto.id)}" aria-pressed="${selecionado ? 'true' : 'false'}"><span class="d-flex flex-column gap-2"><span class="fw-semibold fs-5">${escaparEstoque(produto.nome)}</span><span class="small ${selecionado ? '' : 'text-body-secondary'}">Saldo: ${saldo.toLocaleString('pt-BR')} · unidade do estoque</span></span></button></div>`;
  });
  $('#opcoes-produtos').html(html);
  $('#proximo-etapa-produto').prop('disabled', !produtoSelecionadoEstoque);
}

function mostrarEtapaEstoque(etapa) {
  $('.etapa-movimento').addClass('d-none').filter(`[data-etapa="${etapa}"]`).removeClass('d-none');
  var titulos = { 1: 'Escolha a marca', 2: 'Escolha o produto', 3: 'Informe a quantidade' };
  $('#etapa-titulo').text(`Etapa ${etapa} de 3 · ${titulos[etapa]}`);
  $('#etapa-progresso').css('width', `${(etapa / 3) * 100}%`).parent().attr('aria-valuenow', etapa);
}

$(document).on('click', '.escolher-marca', function() {
  var marcaId = Number($(this).data('id'));
  marcaSelecionadaEstoque = marcasEstoque.find(function(marca) { return Number(marca.id) === marcaId; }) || null;
  renderizarOpcoesMarcas();
});

$('#proximo-etapa-marca').on('click', carregarProdutosEstoque);

$(document).on('click', '.escolher-produto', function() {
  var produtoId = Number($(this).data('id'));
  produtoSelecionadoEstoque = produtosEstoque.find(function(produto) { return Number(produto.id) === produtoId; }) || null;
  renderizarOpcoesProdutos();
});

$('#proximo-etapa-produto').on('click', function() {
  if (!marcaSelecionadaEstoque || !produtoSelecionadoEstoque) return;
  var saldo = Number(produtoSelecionadoEstoque.estoque || 0);
  $('#produto-escolhido-resumo').text(`${marcaSelecionadaEstoque.nome} · ${produtoSelecionadoEstoque.nome}`);
  $('#saldo-produto').text(`Saldo atual no Gestão Click: ${saldo.toLocaleString('pt-BR')} · unidade do estoque.`);
  mostrarEtapaEstoque(3);
  $('#quantidade-estoque').trigger('focus');
});

$(document).on('click', '[data-voltar-etapa]', function() {
  mostrarEtapaEstoque(Number($(this).data('voltar-etapa')));
});

$('#form-movimento-estoque').on('submit', function(event) {
  event.preventDefault();
  if (!marcaSelecionadaEstoque || !produtoSelecionadoEstoque) return;
  var botao = $('#salvar-movimento-estoque');
  var dados = {
    operacao: operacaoEstoque,
    marca_id: marcaSelecionadaEstoque.id,
    produto_id: produtoSelecionadoEstoque.id,
    quantidade: $('#quantidade-estoque').val()
  };
  botao.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-1" aria-hidden="true"></i>Salvando...');
  $.ajax({
    url: '/api/estoque/movimentar',
    type: 'POST',
    dataType: 'json',
    data: dados,
    success: function(data) {
      var quantidade = Number(data.quantidade);
      var quantidadeFormatada = operacaoEstoque === 'entrada_carrinho'
        ? `${quantidade.toLocaleString('pt-BR')} pacotes`
        : `${quantidade.toLocaleString('pt-BR')} g (${(quantidade / 1000).toLocaleString('pt-BR')} kg)`;
      mostrarResultadoMovimentoEstoque(true, `${data.message}: ${data.produto_nome} · ${quantidadeFormatada}`);
    },
    error: function(xhr) {
      mostrarResultadoMovimentoEstoque(false, mensagemErroEstoque(xhr, 'Não foi possível atualizar o estoque no Gestão Click.'));
    },
    complete: function() {
      botao.prop('disabled', false).html(operacaoEstoque === 'entrada_carrinho' ? '<i class="fas fa-check me-1" aria-hidden="true"></i>Registrar entrada' : '<i class="fas fa-arrow-up-from-bracket me-1" aria-hidden="true"></i>Registrar saída');
    }
  });
});

function carregarHistoricoEstoque() {
  $.ajax({
    url: '/api/estoque/historico',
    type: 'GET',
    dataType: 'json',
    data: { operacao: operacaoEstoque },
    success: function(data) {
      var movimentos = data && Array.isArray(data.movimentos) ? data.movimentos : [];
      var totaisProdutos = data && Array.isArray(data.totais_produtos) ? data.totais_produtos : [];
      $('#total-pacotes-hoje').text(Number(data && data.total_hoje || 0).toLocaleString('pt-BR'));
      var totaisHtml = '';
      $.each(totaisProdutos, function(i, item) {
        var unidade = operacaoEstoque === 'entrada_carrinho' ? ' pacotes' : '';
        totaisHtml += `<span class="d-block">${escaparEstoque(item.produto_nome)}: ${formatarQuantidadeEstoque(item.quantidade)}${unidade}</span>`;
      });
      $('#total-produtos-hoje').html(totaisHtml || 'Nenhum lançamento hoje.');
      if (operacaoEstoque !== 'entrada_carrinho') {
        var totalGramas = Number(data && data.total_hoje || 0);
        $('#conversao-total-hoje').text(`${(totalGramas / 1000).toLocaleString('pt-BR')} kg`);
      }
      var html = '';
      $.each(movimentos, function(i, item) {
        var total = item.total_produto_hoje;
        var quantidade = operacaoEstoque === 'entrada_carrinho' ? Number(item.quantidade).toLocaleString('pt-BR') : formatarQuantidadeEstoque(item.quantidade);
        html += `<tr><th scope="row">${escaparEstoque(item.produto_nome)}</th><td>${quantidade}</td><td>${formatarQuantidadeEstoque(total)}</td><td>${escaparEstoque(item.usuario_nome)}</td><td>${escaparEstoque(item.registrado_em)}</td></tr>`;
      });
      $('#historico-estoque').html(html || '<tr><td colspan="5" class="text-center text-body-secondary py-4">Nenhum lançamento registrado.</td></tr>');
    },
    error: function() {
      $('#historico-estoque').html('<tr><td colspan="5" class="text-center text-body-secondary py-4">Não foi possível carregar o histórico.</td></tr>');
    }
  });
}

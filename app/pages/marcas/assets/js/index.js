var fabricaMarcaAtual = null;
var gruposDaFabrica = [];
var marcasDaFabrica = [];
var marcaEditando = null;

$(document).ready(function() {
  carregarFabricasMarcas();
});

function escaparHtml(valor) {
  return $('<div>').text(valor == null ? '' : valor).html();
}

function mensagemMarcas(texto, tipo) {
  $('#mensagem-marcas').removeClass('alert-info alert-success alert-danger alert-warning').addClass('alert-' + tipo).text(texto);
}

function tratarErroMarca(xhr) {
  var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível concluir a solicitação.';
  $('#erro-marca').removeClass('d-none').text(texto);
  mensagemMarcas(texto, 'danger');
}

function carregarFabricasMarcas() {
  $.ajax({
    url: '/api/fabricas/view',
    type: 'GET',
    success: function(data) {
      var fabricas = data.fabricas || [];
      $('#fabrica-marcas').html('<option value="">Selecione uma fábrica</option>');
      $.each(fabricas, function(i, fabrica) {
        $('#fabrica-marcas').append(`<option value="${fabrica.id}">${escaparHtml(fabrica.nome)}</option>`);
      });
      if (!fabricas.length) {
        $('#marcas-lista').html('<div class="col-12"><div class="alert alert-warning">Cadastre uma fábrica antes de configurar marcas.</div></div>');
        return;
      }
      $.ajax({
        url: '/api/fabricas/context',
        type: 'GET',
        success: function(contexto) {
          var fabricaId = contexto.fabrica_id;
          if ($('#fabrica-marcas option[value="' + fabricaId + '"]').length) $('#fabrica-marcas').val(fabricaId);
          else $('#fabrica-marcas').val(fabricas[0].id);
          selecionarFabricaMarcas();
        },
        error: function() {
          $('#fabrica-marcas').val(fabricas[0].id);
          selecionarFabricaMarcas();
        }
      });
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar as fábricas.';
      mensagemMarcas(texto, 'danger');
    }
  });
}

$('#fabrica-marcas').on('change', selecionarFabricaMarcas);

function selecionarFabricaMarcas() {
  fabricaMarcaAtual = $('#fabrica-marcas').val();
  marcasDaFabrica = [];
  $('#produtos-lista').empty();
  if (!fabricaMarcaAtual) {
    $('#marcas-lista').html('<div class="col-12"><div class="card"><div class="card-body text-center text-body-secondary">Selecione uma fábrica.</div></div></div>');
    $('#add-marca').prop('disabled', true);
    return;
  }
  $('#ajuda-fabrica-marcas').text('Carregando grupos e marcas desta fábrica...');
  $('#marcas-lista').html('<div class="col-12"><div class="card"><div class="card-body text-center text-body-secondary py-4"><i class="fas fa-spinner fa-spin me-2" aria-hidden="true"></i>Carregando marcas...</div></div></div>');
  $.ajax({
    url: '/api/fabricas/grupos',
    type: 'GET',
    data: { fabrica_id: fabricaMarcaAtual },
    success: function(data) {
      gruposDaFabrica = data.grupos || [];
      if (!gruposDaFabrica.length) {
        $('#ajuda-fabrica-marcas').text('Esta integração não retornou grupos de produtos. Confira o catálogo no Gestão Click.');
        $('#add-marca').prop('disabled', true);
      } else {
        $('#ajuda-fabrica-marcas').text(`${gruposDaFabrica.length} grupos disponíveis nesta integração.`);
        $('#add-marca').prop('disabled', false);
      }
    },
    error: function(xhr) {
      gruposDaFabrica = [];
      $('#ajuda-fabrica-marcas').text('Não foi possível carregar os grupos desta fábrica.');
      $('#add-marca').prop('disabled', true);
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar os grupos.';
      mensagemMarcas(texto, 'danger');
    }
  });
  carregarMarcas();
}

function carregarMarcas() {
  $.ajax({
    url: '/api/fabricas/marcas/view',
    type: 'GET',
    data: { fabrica_id: fabricaMarcaAtual },
    success: function(data) {
      marcasDaFabrica = data.marcas || [];
      desenharMarcas();
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar as marcas.';
      $('#marcas-lista').html(`<div class="col-12"><div class="alert alert-danger">${escaparHtml(texto)}</div></div>`);
    }
  });
}

function desenharMarcas() {
  $('#marcas-lista').empty();
  if (!marcasDaFabrica.length) {
    $('#marcas-lista').html('<div class="col-12"><div class="card"><div class="card-body text-center py-5"><i class="fas fa-tags fa-2x text-body-secondary mb-3" aria-hidden="true"></i><h2 class="h5">Nenhuma marca nesta fábrica</h2><p class="text-body-secondary mb-3">Adicione uma marca e vincule os três grupos de produtos do Gestão Click.</p><button type="button" class="btn btn-primary abrir-marca">Adicionar primeira marca</button></div></div></div>');
    return;
  }
  $.each(marcasDaFabrica, function(i, marca) {
    $('#marcas-lista').append(`
      <div class="col-12 col-xl-6">
        <article class="card h-100" aria-labelledby="marca-titulo-${marca.id}">
          <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
            <h2 class="h5 mb-0" id="marca-titulo-${marca.id}"><i class="fas fa-tag me-2 text-primary" aria-hidden="true"></i>${escaparHtml(marca.nome)}</h2>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-outline-primary editar-marca" data-id="${marca.id}">Editar</button>
              <button type="button" class="btn btn-sm btn-outline-danger excluir-marca" data-id="${marca.id}">Excluir</button>
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-12">
                <div class="small text-uppercase fw-semibold text-body-secondary mb-1">Produtos finais · pacotes</div>
                <div>${escaparHtml(marca.grupo_pacotes_nome)} <span class="small text-body-secondary">(ID ${escaparHtml(marca.grupo_pacotes_id)})</span></div>
                <button type="button" class="btn btn-sm btn-link px-0 consultar-produtos" data-id="${marca.id}" data-categoria="pacotes">Consultar produtos</button>
              </div>
              <div class="col-12 col-md-6">
                <div class="small text-uppercase fw-semibold text-body-secondary mb-1">Matéria-prima · bobinas</div>
                <div>${escaparHtml(marca.grupo_bobinas_nome)} <span class="small text-body-secondary">(ID ${escaparHtml(marca.grupo_bobinas_id)})</span></div>
                <button type="button" class="btn btn-sm btn-link px-0 consultar-produtos" data-id="${marca.id}" data-categoria="bobinas">Consultar produtos</button>
              </div>
              <div class="col-12 col-md-6">
                <div class="small text-uppercase fw-semibold text-body-secondary mb-1">Matéria-prima · concentrados</div>
                <div>${escaparHtml(marca.grupo_concentrados_nome)} <span class="small text-body-secondary">(ID ${escaparHtml(marca.grupo_concentrados_id)})</span></div>
                <button type="button" class="btn btn-sm btn-link px-0 consultar-produtos" data-id="${marca.id}" data-categoria="concentrados">Consultar produtos</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    `);
  });
}

function abrirModalMarca() {
  if (!fabricaMarcaAtual || !gruposDaFabrica.length) return;
  marcaEditando = null;
  $('#nome-marca').val('');
  $('#erro-marca').addClass('d-none').text('');
  $('#titulo-modal-marca').text('Adicionar marca');
  $('#subtitulo-modal-marca').text($('#fabrica-marcas option:selected').text());
  $('#salvar-marca').text('Adicionar marca');
  preencherSelectsGrupos();
  $('#modal-marca').modal('show');
  $('#nome-marca').trigger('focus');
}

$('#add-marca').on('click', abrirModalMarca);
$('#marcas-lista').on('click', '.abrir-marca', abrirModalMarca);

function preencherSelectsGrupos(selecionados) {
  $.each(['pacotes', 'bobinas', 'concentrados'], function(i, categoria) {
    var select = $('#grupo-' + categoria);
    select.html('<option value="">Selecione um grupo</option>');
    $.each(gruposDaFabrica, function(j, grupo) {
      select.append(`<option value="${escaparHtml(grupo.id)}">${escaparHtml(grupo.nome)} (${escaparHtml(grupo.id)})</option>`);
    });
    if (selecionados && selecionados[categoria]) select.val(selecionados[categoria]);
  });
}

$('#salvar-marca').on('click', function() {
  var dados = {
    fabrica_id: fabricaMarcaAtual,
    nome: $('#nome-marca').val().trim(),
    grupo_pacotes_id: $('#grupo-pacotes').val(),
    grupo_bobinas_id: $('#grupo-bobinas').val(),
    grupo_concentrados_id: $('#grupo-concentrados').val()
  };
  if (!dados.nome || !dados.grupo_pacotes_id || !dados.grupo_bobinas_id || !dados.grupo_concentrados_id) {
    $('#erro-marca').removeClass('d-none').text('Informe o nome e selecione um grupo para cada categoria.');
    return;
  }
  var url = '/api/fabricas/marcas/add';
  if (marcaEditando) {
    dados.id = marcaEditando.id;
    url = '/api/fabricas/marcas/edit';
  }
  var botao = $(this);
  botao.prop('disabled', true).text('Salvando...');
  $.ajax({
    url: url,
    type: 'POST',
    data: dados,
    success: function(data) {
      $('#modal-marca').modal('hide');
      mensagemMarcas(data.message, 'success');
      carregarMarcas();
    },
    error: tratarErroMarca,
    complete: function() {
      botao.prop('disabled', false).text(marcaEditando ? 'Salvar alterações' : 'Adicionar marca');
    }
  });
});

$(document).on('click', '.editar-marca', function() {
  var id = Number($(this).data('id'));
  marcaEditando = marcasDaFabrica.find(function(marca) { return Number(marca.id) === id; });
  if (!marcaEditando) return;
  $('#erro-marca').addClass('d-none').text('');
  $('#titulo-modal-marca').text('Editar marca');
  $('#subtitulo-modal-marca').text($('#fabrica-marcas option:selected').text());
  $('#nome-marca').val(marcaEditando.nome);
  $('#salvar-marca').text('Salvar alterações');
  preencherSelectsGrupos({ pacotes: marcaEditando.grupo_pacotes_id, bobinas: marcaEditando.grupo_bobinas_id, concentrados: marcaEditando.grupo_concentrados_id });
  $('#modal-marca').modal('show');
  $('#nome-marca').trigger('focus');
});

$(document).on('click', '.excluir-marca', function() {
  if (!window.confirm('Excluir esta marca?')) return;
  $.ajax({
    url: '/api/fabricas/marcas/delete',
    type: 'POST',
    data: { id: $(this).data('id') },
    success: function(data) {
      mensagemMarcas(data.message, 'success');
      carregarMarcas();
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível excluir a marca.';
      mensagemMarcas(texto, 'danger');
    }
  });
});

$(document).on('click', '.consultar-produtos', function() {
  $('#produtos-lista').html('<div class="alert alert-info" role="status">Consultando produtos no Gestão Click...</div>');
  $.ajax({
    url: '/api/fabricas/produtos',
    type: 'GET',
    data: { marca_id: $(this).data('id'), categoria: $(this).data('categoria') },
    success: function(data) {
      var html = `<section class="card"><div class="card-header d-flex justify-content-between align-items-center"><h2 class="h6 mb-0">Produtos do grupo ${escaparHtml(data.grupo_id)}</h2><span class="badge text-bg-secondary">${data.produtos.length} produtos</span></div><div class="card-body table-responsive"><table class="table table-sm table-striped mb-0"><thead><tr><th scope="col">ID</th><th scope="col">Produto</th><th scope="col">Código interno</th></tr></thead><tbody>`;
      if (!data.produtos.length) html += '<tr><td colspan="3" class="text-center text-body-secondary">Nenhum produto neste grupo.</td></tr>';
      $.each(data.produtos, function(i, produto) {
        html += `<tr><td>${escaparHtml(produto.id)}</td><td>${escaparHtml(produto.nome)}</td><td>${escaparHtml(produto.codigo_interno || '')}</td></tr>`;
      });
      html += '</tbody></table></div></section>';
      $('#produtos-lista').html(html);
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível consultar os produtos.';
      $('#produtos-lista').html(`<div class="alert alert-danger" role="alert">${escaparHtml(texto)}</div>`);
    }
  });
});

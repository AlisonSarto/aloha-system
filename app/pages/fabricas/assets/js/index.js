var fabricasCache = [];
var modalAdicionarFabrica;
var modalEditarFabrica;

$(document).ready(function() {
  modalAdicionarFabrica = $('#modal-adicionar-fabrica');
  modalEditarFabrica = $('#modal-editar-fabrica');
  carregarFabricas();
});

function escaparHtml(valor) {
  return $('<div>').text(valor == null ? '' : valor).html();
}

function mensagem(texto, tipo) {
  $('#mensagem-configuracao').removeClass('alert-info alert-success alert-danger alert-warning').addClass('alert-' + tipo).text(texto);
}

function carregarFabricas() {
  $.ajax({
    url: '/api/fabricas/view',
    type: 'GET',
    success: function(data) {
      fabricasCache = data.fabricas || [];
      $('#fabricas-lista').empty();
      if (!fabricasCache.length) {
        $('#fabricas-lista').html('<tr><td colspan="3" class="text-center text-body-secondary py-4">Nenhuma fábrica cadastrada. Adicione uma para começar.</td></tr>');
        return;
      }
      $.each(fabricasCache, function(i, fabrica) {
        $('#fabricas-lista').append(`
          <tr>
            <th scope="row">${escaparHtml(fabrica.nome)}</th>
            <td>${escaparHtml(fabrica.loja_nome)} <span class="text-body-secondary">(${escaparHtml(fabrica.loja_id)})</span></td>
            <td>
              <div class="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-outline-primary editar-fabrica" data-id="${fabrica.id}"><i class="fas fa-pen me-1" aria-hidden="true"></i>Editar</button>
                <button type="button" class="btn btn-sm btn-outline-danger excluir-fabrica" data-id="${fabrica.id}"><i class="fas fa-trash me-1" aria-hidden="true"></i>Excluir</button>
              </div>
            </td>
          </tr>
        `);
      });
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar as fábricas.';
      mensagem(texto, 'danger');
    }
  });
}

$('#add-fabrica').on('click', function() {
  $('#novo-nome-fabrica, #novo-access-token, #novo-secret-access-token').val('');
  $('#erro-adicionar-fabrica').addClass('d-none').text('');
  modalAdicionarFabrica.modal('show');
  $('#novo-nome-fabrica').trigger('focus');
});

$('#validar-fabrica').on('click', function() {
  var nome = $('#novo-nome-fabrica').val().trim();
  var accessToken = $('#novo-access-token').val().trim();
  var secretAccessToken = $('#novo-secret-access-token').val().trim();
  if (!nome || !accessToken || !secretAccessToken) {
    $('#erro-adicionar-fabrica').removeClass('d-none').text('Preencha o nome e os dois tokens para continuar.');
    return;
  }

  var botao = $(this);
  botao.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-1" aria-hidden="true"></i> Validando tokens...');
  $('#erro-adicionar-fabrica').addClass('d-none').text('');
  $.ajax({
    url: '/api/fabricas/validar',
    type: 'POST',
    data: { nome: nome, access_token: accessToken, secret_access_token: secretAccessToken },
    success: function() {
      window.parent.location.href = '/app/?fabricas/loja';
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível validar os tokens.';
      $('#erro-adicionar-fabrica').removeClass('d-none').text(texto);
      botao.prop('disabled', false).html('Validar e continuar <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i>');
    }
  });
});

$(document).on('click', '.editar-fabrica', function() {
  var id = Number($(this).data('id'));
  var fabrica = fabricasCache.find(function(item) { return Number(item.id) === id; });
  if (!fabrica) return;
  $('#editar-fabrica-id').val(fabrica.id);
  $('#editar-nome-fabrica').val(fabrica.nome);
  $('#editar-access-token, #editar-secret-access-token').val('');
  $('#editar-loja-fabrica').html(`<option value="${escaparHtml(fabrica.loja_id)}">${escaparHtml(fabrica.loja_nome)} (${escaparHtml(fabrica.loja_id)}) — atual</option>`);
  $('#erro-editar-fabrica').addClass('d-none').text('');
  modalEditarFabrica.modal('show');
});

$('#carregar-lojas-edicao').on('click', function() {
  var botao = $(this);
  botao.prop('disabled', true).text('Buscando lojas...');
  $.ajax({
    url: '/api/fabricas/lojas',
    type: 'POST',
    data: {
      fabrica_id: $('#editar-fabrica-id').val(),
      access_token: $('#editar-access-token').val(),
      secret_access_token: $('#editar-secret-access-token').val()
    },
    success: function(data) {
      var lojaAtual = $('#editar-loja-fabrica').val();
      $('#editar-loja-fabrica').html('<option value="">Selecione uma loja</option>');
      $.each(data.lojas, function(i, loja) {
        $('#editar-loja-fabrica').append(`<option value="${escaparHtml(loja.id)}">${escaparHtml(loja.nome)} (${escaparHtml(loja.id)})</option>`);
      });
      $('#editar-loja-fabrica').val(lojaAtual);
      $('#erro-editar-fabrica').addClass('d-none').text('');
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar as lojas.';
      $('#erro-editar-fabrica').removeClass('d-none').text(texto);
    },
    complete: function() {
      botao.prop('disabled', false).text('Atualizar lojas');
    }
  });
});

$('#salvar-edicao-fabrica').on('click', function() {
  var botao = $(this);
  var lojaId = $('#editar-loja-fabrica').val();
  if (!$('#editar-nome-fabrica').val().trim() || !lojaId) {
    $('#erro-editar-fabrica').removeClass('d-none').text('Informe o nome e selecione uma loja.');
    return;
  }
  botao.prop('disabled', true).text('Salvando...');
  $.ajax({
    url: '/api/fabricas/edit',
    type: 'POST',
    data: {
      id: $('#editar-fabrica-id').val(),
      nome: $('#editar-nome-fabrica').val().trim(),
      access_token: $('#editar-access-token').val(),
      secret_access_token: $('#editar-secret-access-token').val(),
      loja_id: lojaId
    },
    success: function(data) {
      modalEditarFabrica.modal('hide');
      mensagem(data.message, 'success');
      carregarFabricas();
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível atualizar a fábrica.';
      $('#erro-editar-fabrica').removeClass('d-none').text(texto);
    },
    complete: function() {
      botao.prop('disabled', false).text('Salvar alterações');
    }
  });
});

$(document).on('click', '.excluir-fabrica', function() {
  var id = $(this).data('id');
  if (!window.confirm('Excluir esta fábrica e as marcas vinculadas?')) return;
  $.ajax({
    url: '/api/fabricas/delete',
    type: 'POST',
    data: { id: id },
    success: function(data) {
      mensagem(data.message, 'success');
      carregarFabricas();
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível excluir a fábrica.';
      mensagem(texto, 'danger');
    }
  });
});

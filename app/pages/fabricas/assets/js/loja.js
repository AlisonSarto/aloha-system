var lojaSelecionada = null;

$(document).ready(function() {
  carregarLojasPendentes();
});

function escaparHtml(valor) {
  return $('<div>').text(valor == null ? '' : valor).html();
}

function mostrarErroLoja(texto) {
  $('#erro-selecao-loja').removeClass('d-none').text(texto);
}

function carregarLojasPendentes() {
  $.ajax({
    url: '/api/fabricas/pendente',
    type: 'GET',
    success: function(data) {
      $('#nome-fabrica-pendente').text(data.nome);
      $('#lojas-disponiveis').empty();
      $.each(data.lojas, function(i, loja) {
        var lojaId = escaparHtml(loja.id);
        $('#lojas-disponiveis').append(`
          <div class="col-12 col-md-6 col-xl-4">
            <label class="card h-100 w-100" for="loja-${lojaId}" style="cursor: pointer;">
              <div class="card-body d-flex align-items-start gap-3">
                <input class="form-check-input mt-1" type="radio" name="loja-selecionada" id="loja-${lojaId}" value="${lojaId}">
                <span>
                  <span class="d-block fw-semibold">${escaparHtml(loja.nome)}</span>
                  <span class="small text-body-secondary">ID ${lojaId}</span>
                </span>
              </div>
            </label>
          </div>
        `);
      });
      if (!data.lojas.length) {
        $('#lojas-disponiveis').html('<div class="col-12"><div class="alert alert-warning mb-0">Nenhuma loja disponível para estes tokens. Volte e confira as credenciais.</div></div>');
      }
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível recuperar as lojas validadas.';
      mostrarErroLoja(texto);
      $('#lojas-disponiveis').html('<div class="col-12"><button type="button" class="btn btn-outline-primary" id="voltar-fabricas">Voltar e tentar novamente</button></div>');
    }
  });
}

$(document).on('change', 'input[name="loja-selecionada"]', function() {
  lojaSelecionada = $(this).val();
  $('#salvar-fabrica-loja').prop('disabled', false);
  $('.card').removeClass('border-primary shadow-sm');
  $(this).closest('.card').addClass('border-primary shadow-sm');
  $('#erro-selecao-loja').addClass('d-none').text('');
});

$('#salvar-fabrica-loja').on('click', function() {
  if (!lojaSelecionada) {
    mostrarErroLoja('Selecione uma loja para continuar.');
    return;
  }
  var botao = $(this);
  botao.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-1" aria-hidden="true"></i> Salvando...');
  $.ajax({
    url: '/api/fabricas/finalizar',
    type: 'POST',
    data: { loja_id: lojaSelecionada },
    success: function() {
      window.parent.location.href = '/app/?fabricas';
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível concluir a configuração.';
      mostrarErroLoja(texto);
      botao.prop('disabled', false).text('Concluir configuração');
    }
  });
});

$('#cancelar-fabrica').on('click', function() {
  $.ajax({
    url: '/api/fabricas/cancelar',
    type: 'POST',
    success: function() {
      window.parent.location.href = '/app/?fabricas';
    },
    error: function(xhr) {
      var texto = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível cancelar o cadastro.';
      mostrarErroLoja(texto);
    }
  });
});

$(document).on('click', '#voltar-fabricas', function() {
  window.parent.location.href = '/app/?fabricas';
});

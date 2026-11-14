var entradasTimelineProducao = [];

$(document).ready(function() {
  carregarRelatorioProducao();
  $('#filtro-relatorio').on('submit', function(event) {
    event.preventDefault();
    carregarRelatorioProducao();
  });
  $('#modal-foto-producao').on('hidden.bs.modal', function() {
    $('#imagem-modal-foto-producao').attr('src', '').addClass('d-none');
  });
});

function escaparRelatorio(valor) {
  return $('<div>').text(valor == null ? '' : valor).html();
}

function numeroRelatorio(valor, casas) {
  return Number(valor || 0).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: casas || 0 });
}

function formatoKgRelatorio(gramas) {
  return `${numeroRelatorio(Number(gramas || 0) / 1000, 3)} kg`;
}

function desenharEixoTimeline() {
  var html = '';
  for (var hora = 0; hora <= 24; hora += 2) {
    var posicao = (hora / 24) * 100;
    html += `<span class="timeline-hour" style="left:${posicao}%">${String(hora).padStart(2, '0')}:00</span>`;
  }
  return html;
}

function desenharTimelineUsuarios(usuarios) {
  entradasTimelineProducao = [];
  if (!usuarios || !usuarios.length) {
    $('#timeline-producao').html('<div class="text-center text-body-secondary py-5">Nenhuma entrada de produção registrada neste dia.</div>');
    return;
  }

  usuarios.sort(function(a, b) {
    return Number(b.total_pacotes || 0) - Number(a.total_pacotes || 0) || String(a.usuario_nome).localeCompare(String(b.usuario_nome), 'pt-BR');
  });

  var html = `<div class="timeline-scroll"><div class="timeline-canvas"><div class="timeline-axis" aria-hidden="true">${desenharEixoTimeline()}</div>`;
  $.each(usuarios, function(_, usuario) {
    var entradas = (usuario.entradas || []).slice().sort(function(a, b) {
      return Number(a.minutos_dia) - Number(b.minutos_dia);
    });
    var pontos = '';
    $.each(entradas, function(_, entrada) {
      var indice = entradasTimelineProducao.push({ usuario: usuario, entrada: entrada }) - 1;
      var minutos = Math.max(0, Math.min(1439.99, Number(entrada.minutos_dia) || 0));
      var posicao = minutos / 1440 * 100;
      var nivel = [25, 50, 75][indice % 3];
      var rotulo = `${entrada.hora} · ${numeroRelatorio(entrada.quantidade)} pacotes · ${entrada.produto_nome}`;
      pontos += `<button class="timeline-point" type="button" data-entrada-index="${indice}" style="left:${posicao}%; top:${nivel}%" title="${escaparRelatorio(rotulo)}" aria-label="${escaparRelatorio(rotulo)}"></button>`;
    });
    html += `
      <article class="timeline-user py-3" aria-label="Produção de ${escaparRelatorio(usuario.usuario_nome)}">
        <div class="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-1">
          <h3 class="h6 mb-0">${escaparRelatorio(usuario.usuario_nome)}</h3>
          <span class="small text-body-secondary">${numeroRelatorio(usuario.total_pacotes)} pacotes · ${entradas.length} ${entradas.length === 1 ? 'entrada' : 'entradas'}</span>
        </div>
        <div class="timeline-track" role="group" aria-label="Entradas de produção ao longo do dia">${pontos}</div>
      </article>`;
  });
  html += '</div></div>';
  $('#timeline-producao').html(html);
}

function abrirConferenciaEntrada(indice) {
  var registro = entradasTimelineProducao[indice];
  if (!registro) return;
  var usuario = registro.usuario;
  var entrada = registro.entrada;
  var detalhes = `${usuario.usuario_nome} · ${entrada.registrado_em} · ${entrada.produto_nome} · ${numeroRelatorio(entrada.quantidade)} pacotes`;
  $('#detalhes-modal-foto-producao').text(detalhes);
  if (entrada.foto_url) {
    $('#sem-foto-modal-producao').addClass('d-none');
    $('#imagem-modal-foto-producao')
      .attr({ src: entrada.foto_url, alt: `Foto do carrinho de ${entrada.produto_nome}, registrado por ${usuario.usuario_nome}` })
      .removeClass('d-none');
  } else {
    $('#imagem-modal-foto-producao').attr('src', '').addClass('d-none');
    $('#sem-foto-modal-producao').removeClass('d-none');
  }
  bootstrap.Modal.getOrCreateInstance(document.getElementById('modal-foto-producao')).show();
}

$(document).on('click', '.timeline-point', function() {
  abrirConferenciaEntrada(Number($(this).data('entrada-index')));
});

function carregarRelatorioProducao() {
  var botao = $('#atualizar-relatorio');
  var data = $('#relatorio-data').val();
  if (!data) return;
  botao.prop('disabled', true).text('Carregando...');
  $('#mensagem-relatorio').addClass('d-none').text('');
  $.ajax({
    url: '/api/estoque/relatorio',
    type: 'GET',
    dataType: 'json',
    cache: false,
    data: { de: data, ate: data },
    success: function(resposta) {
      var totais = resposta.totais || {};
      $('#fabrica-relatorio').text(resposta.fabrica_nome || 'Fábrica ativa');
      $('#total-produzido').text(`${numeroRelatorio(totais.produzido_pacotes)} pacotes`);
      $('#total-concentrado').text(formatoKgRelatorio(totais.concentrado_usado_g));
      $('#total-bobina').text(formatoKgRelatorio(totais.bobina_usada_g));
      desenharTimelineUsuarios(resposta.producao_por_usuario || []);
    },
    error: function(xhr) {
      var mensagem = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Não foi possível carregar o relatório.';
      $('#mensagem-relatorio').removeClass('d-none alert-success alert-warning').addClass('alert-danger').text(mensagem);
      $('#timeline-producao').html('<div class="text-center text-body-secondary py-4">Erro ao carregar a produção.</div>');
    },
    complete: function() {
      botao.prop('disabled', false).text('Ver produção');
    }
  });
}

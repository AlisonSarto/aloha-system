$(document).ready(function() {

  atualizarBotoes();
  atualizarTitulo();

  /*
  * inicio = Em andamento
  * pausa = Pausada
  * retorno = Em andamento
  * fim = Finalizada
  */

  const botoes = {
    'iniciar': 'inicio',
    'pausar': 'pausa',
    'retomar': 'retorno',
    'parar': 'fim'
  }

  $('.controle').click(function() {
    const situacao = $(this).attr('id');
    const acao = botoes[situacao];

    //* Modal de confirmação
    $('#modal').find('.modal-title').text('Confirmação');
    $('#modal').find('.modal-body').html('Deseja realmente <b>'+situacao+'</b> a fabricação?');
    $('#modal').find('.modal-footer').html(`
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-primary" id="confirmar">Confirmar</button>
    `);
    $('#modal').modal('show');

    $('#modal').find('.modal-footer').find('#confirmar').click(function() {
      $('#modal').modal('hide');
      atualizarSituacao(acao);
    });


  });

  function atualizarSituacao(situacao) {

    $.ajax({
      url: '/api/controle_fabricacao/alterar_status',
      type: 'POST',
      data: {
        situacao: situacao
      },
      success: function() {
        atualizarBotoes();

        if (situacao == 'Em andamento') {
          toast('Fabricação iniciada com sucesso!', 'success');
        } else if (situacao == 'Pausada') {
          toast('Fabricação pausada com sucesso!', 'success');
        } else if (situacao == 'Finalizada') {
          toast('Fabricação finalizada com sucesso!', 'success');
        } else if (situacao == 'Retomada') {
          toast('Fabricação retomada com sucesso!', 'success');
        }

      },
      error: function(err) {
        console.log(err);
        var message = err.responseJSON.message;
        toast(message, 'danger');
      }
    });

  }

  function atualizarBotoes() {

    $('#iniciar').hide();
    $('#pausar').hide();
    $('#retomar').hide();
    $('#parar').hide();

    $.ajax({
      url: '/api/controle_fabricacao/status',
      type: 'GET',
      success: function(data) {
        
        atualizarTitulo();

        const situacao = data.situacao;
  
        if (situacao == 'Em andamento') {
          $('#pausar').show();
          $('#parar').show();
        } else if (situacao == 'Pausada') {
          $('#retomar').show();
        } else if (situacao == 'Finalizada') {
          $('#iniciar').show();
        }
  
      }
    });
  }

  function atualizarTitulo() {
    $.ajax({
      url: '/api/controle_fabricacao/status',
      type: 'GET',
      success: function(data) {
        const situacao = data.situacao;
        $('#situacao').text(situacao);

        //? Atualiza a cor do alerta
        $('#alert').removeClass('alert-success alert-warning alert-danger alert-primary alert-dark');

        if (situacao == 'Em andamento') {
          $('#alert').addClass('alert-success');
        } else if (situacao == 'Pausada') {
          $('#alert').addClass('alert-warning');
        } else if (situacao == 'Finalizada') {
          $('#alert').addClass('alert-danger');
        } else {
          $('#alert').addClass('alert-primary');
        }
      }
    });
  }

});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
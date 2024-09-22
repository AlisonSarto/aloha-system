$(document).on('click', '#add-turno', function() {

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Turno');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`
    
    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome Turno</label>
        <input type="text" class="form-control" id="nome">
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <label class="form-label">Início turno normal</label>
        <input type="time" class="form-control" id="inicio">
      </div>

      <div class="col-6">
        <label class="form-label">Fim turno normal</label>
        <input type="time" class="form-control" id="fim">
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <lable class="form-label">Início turno <b>sábado</b></lable>
        <input type="time" class="form-control" id="inicio-sab">
      </div>

      <div class="col-6">
        <lable class="form-label">Fim turno <b>sábado</b></lable>
        <input type="time" class="form-control" id="fim-sab">
      </div>

    </div>

  `);

  modal.modal('show');

  $('#salvar').click(function() {
    
    var salvar = $(this);

    var nome = $('#nome').val();
    var inicio = $('#inicio').val();
    var fim = $('#fim').val();
    var inicioSab = $('#inicio-sab').val();
    var fimSab = $('#fim-sab').val();

    if (nome == '') {
      toast('Preencha o nome do turno', 'danger');
      return;
    }

    if (!inicio || !fim || !inicioSab || !fimSab) {
      toast('Preencha os horários corretamente', 'danger');
      return;
    }

    salvar.attr('disabled', true);
    salvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');

    $.ajax({
      url: '/api/turnos/add',
      type: 'POST',
      data: {
        nome: nome,
        inicio: inicio,
        fim: fim,
        inicio_sab: inicioSab,
        fim_sab: fimSab
      },
      success: function(data) {
        toast(data.message, 'success');

        newTable();
        
        modal.modal('hide');
        
        salvar.html('Salvar');
        salvar.attr('disabled', false);
      },
      error: function(error) {
        console.log(error);
        toast(error.responseJSON.message, 'danger');
        salvar.html('Salvar');
        salvar.attr('disabled', false);
      }
    });

  });
  
});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
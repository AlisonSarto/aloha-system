$(document).on('click', '.edit-turno', function() {

  id = $(this).parent().data('id');
      
  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);

  //? Puxa os dados do turno
  $.ajax({
    url: '/api/turnos/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(response) {
      creatModalEdit(response.turnos);
      $('#modal').modal('show');

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      message = error.responseJSON.message;
      console.log(error);
      toast(message,'danger');

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }

  });
  
});

function creatModalEdit(turno) {

  nome = turno.nome;
  inicio = turno.inicio;
  fim = turno.fim;
  inicio_sab = turno.inicio_sab;
  fim_sab = turno.fim_sab;

  modal = $('#modal');
  modal.find('.modal-title').text(`Editar turno da ${nome}`);
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome Turno</label>
        <input type="text" class="form-control" id="nome" value="${nome}">
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <label class="form-label">Início turno normal</label>
        <input type="time" class="form-control" id="inicio" value="${inicio}">
      </div>

      <div class="col-6">
        <label class="form-label">Fim turno normal</label>
        <input type="time" class="form-control" id="fim" value="${fim}">
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <lable class="form-label">Início turno <b>sábado</b></lable>
        <input type="time" class="form-control" id="inicio-sab" value="${inicio_sab}">
      </div>

      <div class="col-6">
        <lable class="form-label">Fim turno <b>sábado</b></lable>
        <input type="time" class="form-control" id="fim-sab" value="${fim_sab}">
      </div>

    </div>

  `);

  //? Salvar
  $('#salvar').click(function() {
    
    var salvar = $(this);

    //? Verifica se não mudou nada
    if (nome == $('#nome').val() && inicio == $('#inicio').val() && fim == $('#fim').val() && inicio_sab == $('#inicio-sab').val() && fim_sab == $('#fim-sab').val()) {
      toast('Nada foi alterado', 'danger');
      return;
    }

    nome = $('#nome').val();
    inicio = $('#inicio').val();
    fim = $('#fim').val();
    inicio_sab = $('#inicio-sab').val();
    fim_sab = $('#fim-sab').val();

    if (nome == '') {
      toast('Preencha o nome do turno', 'danger');
      return;
    }

    if (!inicio || !fim || !inicio_sab || !fim_sab) {
      toast('Preencha os horários corretamente', 'danger');
      return;
    }

    salvar.attr('disabled', true);
    salvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');

    $.ajax({
      url: '/api/turnos/edit',
      type: 'POST',
      data: {
        id: id,
        nome: nome,
        inicio: inicio,
        fim: fim,
        inicio_sab: inicio_sab,
        fim_sab: fim_sab
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

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
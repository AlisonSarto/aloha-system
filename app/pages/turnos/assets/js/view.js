$(document).on('click', '.view-turno', function() {

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
      creatModal(response.turnos);
      $('#modal').modal('show');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      message = error.responseJSON.message;
      console.log(error);
      toast(message,'danger');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    }
  });
  
});

function creatModal(turno) {

  nome = turno.nome;
  inicio = turno.inicio;
  fim = turno.fim;
  inicio_sab = turno.inicio_sab;
  fim_sab = turno.fim_sab;

  modal = $('#modal');
  modal.find('.modal-title').text(`Visualizar turno da ${nome}`);
  modal.find('.modal-footer').html('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>');
  
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome Turno</label>
        <input type="text" class="form-control" value="${nome}" disabled>
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <label class="form-label">Início turno normal</label>
        <input type="time" class="form-control" value="${inicio}" disabled>
      </div>

      <div class="col-6">
        <label class="form-label">Fim turno normal</label>
        <input type="time" class="form-control" value="${fim}" disabled>
      </div>

      <hr class="mt-3">

      <div class="col-6">
        <lable class="form-label">Início turno <b>sábado</b></lable>
        <input type="time" class="form-control" value="${inicio_sab}" disabled>
      </div>

      <div class="col-6">
        <lable class="form-label">Fim turno <b>sábado</b></lable>
        <input type="time" class="form-control" value="${fim_sab}" disabled>
      </div>

    </div>

  `);

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
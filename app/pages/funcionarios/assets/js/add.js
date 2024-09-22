$(document).on('click', '#add-funcionario', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Funcionário');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Rosto</label>
        <select id="rosto" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div>
      
      <div class="col-12">
        <label class="form-label">Turno</label>
        <select id="turno" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div>

    </div>

  `);
  
  //? Carregar turnos no select
  $.getJSON('/api/turnos/view', function(data) {

    var turnos = data.turnos;
    $.each(turnos, function(i, item) {
      $('#turno').append(`
        <option value="${item.id}">${item.nome}</option>
      `);
    });

    modal.modal('show');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);

  });

  //? Carregar rostos no select
  $.getJSON('/api/rostos/view', function(data) {

    var rostos = data.rostos;
    $.each(rostos, function(i, item) {
      $('#rosto').append(`
        <option value="${item.id}">${item.nome}</option>
      `);
    });

    modal.modal('show');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);

  });

  //* Salvar
  $('#salvar').click(function() {

    var rosto = $('#rosto').val();
    var turno = $('#turno').val();

    if (turno == null || turno == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (rosto == null || rosto == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    dados = {
      rosto: rosto,
      turno: turno,
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/funcionarios/add',
      type: 'POST',
      data: dados,
      beforeSend: function() {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function(data) {
        message = data.message;
        modal.modal('hide');
        toast(message, 'success');
        newTable();
      },
      error: function(error) {
        console.log(error);
        message = error.responseJSON.message;
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
        toast(message, 'danger');
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
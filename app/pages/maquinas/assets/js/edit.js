$(document).on('click', '.edit-maquina', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Editar Máquina');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome">
      </div>
      
      <div class="col-12">
        <label class="form-label">Limite de colaboradores</label>
        <input type="number" class="form-control" id="limite">
        Obs: 0 para ilimitado
      </div>

    </div>

  `);

  //? Carregar os dados
  $.ajax({
    url: '/api/maquinas/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      const maquina = data.maquinas;

      $('#nome').val(maquina.nome);
      $('#limite').val(maquina.limite);

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
      modal.modal('show');
    },
    error: function (err) {
      console.log(err);
      message = err.responseJSON.message;
      toast(message, 'danger');
      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }
  });

  //* Salvar
  $('#salvar').click(function() {

    nome = $('#nome').val();
    limite = $('#limite').val();

    if (nome == '' || limite == '') {
      toast('Preencha o campo nome','danger');
      return
    }

    dados = {
      id: id,
      nome: nome,
      limite: limite
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/maquinas/edit',
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

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
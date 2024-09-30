$(document).on('click', '.edit-maquina', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  modal = $('#modal');
  modal.find('.modal-title').text('Editar máquina');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="col-12">
      <label class="form-label">Nome da máquina</label>
      <input type="text" class="form-control" id="nome">
    </div>

    <div class="col-12">
      <label class="form-label">Quantidade de funcionarios trabalhando</label>
      <input type="number" class="form-control" id="funcionarios">
    </div>

    <div class="col-12">
      <label class="form-label">Meta por hora</label>
      <input type="number" class="form-control" id="meta">
    </div>

  `);

  //? Carregar os dados do máquina
  $.ajax({
    url: '/api/maquinas/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      const maquina = data.maquinas;

      $('#nome').val(maquina.nome);
      $('#funcionarios').val(maquina.qtd_funcionarios);
      $('#meta').val(maquina.meta);

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
  $('#salvar').click(function () {

    nome = $('#nome').val();
    funcionarios = $('#funcionarios').val();
    meta = $('#meta').val();

    dados = {
      id: id,
      nome: nome,
      funcionarios: funcionarios,
      meta: meta
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/maquinas/edit',
      type: 'POST',
      data: dados,
      beforeSend: function () {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function (data) {
        message = data.message;
        modal.modal('hide');
        toast(message, 'success');
        newTable();
      },
      error: function (error) {
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
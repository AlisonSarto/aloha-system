$(document).on('click', '.view-meta', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  modal = $('#modal');
  modal.find('.modal-title').text('Visualizar meta');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="col-12">
      <label class="form-label">Quantidade de funcionarios trabalhando</label>
      <input type="number" class="form-control" id="funcionarios" disabled>
    </div>

    <div class="col-12">
      <label class="form-label">Meta por hora</label>
      <input type="number" class="form-control" id="meta" disabled>
    </div>

    <div class="col-12">
      <img src="/api/metas/view-cenario?id=${id}" class="img-fluid">
    </div>

    <div class="col-12">
      <br>
      <table class="table table-bordered" id="maquinas">
        <thead>
          <tr>
            <th>Máquina</th>
            <th>Velocidade</th>
          </tr>
        </thead>
      </table>
    </div>

  `);

  //? Carregar os dados do meta
  $.ajax({
    url: '/api/metas/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      const meta = data.metas[0];

      $('#funcionarios').val(meta.qtd_funcionarios);
      $('#meta').val(meta.meta);

      const maquinas = meta.maquinas;
      maquinas.forEach(maquina => {
        $('#maquinas').append(`
          <tr>
            <td>${maquina.nome}</td>
            <td>${maquina.velocidade}</td>
          </tr>
        `);
      });

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
      modal.modal('show');
    },
    error: function (err) {
      console.log(err);
      message = err.responseJSON.message;
      toast(message, 'danger');
      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    }
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
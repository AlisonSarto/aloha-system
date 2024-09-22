$(document).on('click', '.view-situacao', function() {

  id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Modo de Produção');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`
  
    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-circle-info"></i>
        Informações
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-12">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" disabled>
          </div>

          <div class="col-12">
            <label for="descricao">Grupo</label>
            <input type="text" class="form-control" id="grupo" disabled>
          </div>

        </div>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-plus-minus"></i>
        Tipo
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-6">
            <button type="button" class="btn w-100" id="mais">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <div class="col-6">
            <button type="button" class="btn w-100" id="menos">
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>

        </div>

      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-hashtag"></i>
        Pontuação
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-12">
            <label for="pontuacao">Pontuação</label>
            <input type="number" class="form-control" id="pontuacao" disabled>
          </div>

        </div>

      </div>
    </div>

  `);

  $.ajax({
    url: '/api/situacoes/view',
    type: 'GET',
    data: { id: id },
    success: function(data) {
      const situacao = data.situacoes;
      $('#nome').val(situacao.nome);
      $('#grupo').val(situacao.grupo);
      $('#pontuacao').val(situacao.pontuacao);

      if (situacao.tipo == '+') {
        $('#mais').addClass('btn-success');
        $('#menos').addClass('btn-secondary');
      }else {
        $('#mais').addClass('btn-secondary');
        $('#menos').addClass('btn-danger');
      }      

      modal.modal('show');
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

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
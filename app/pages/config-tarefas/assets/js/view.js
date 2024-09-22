$(document).on('click', '.view-tarefa', function() {

  var id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Tarefa');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="card">
      <div class="card-header">
        <i class="fas fa-info"></i>
        Infomações Gerais
      </div>
      <div class="card-body row">

        <div class="col-12">
          <label class="form-label">Nome</label>
          <input type="text" id="nome" class="form-control" disabled>
        </div>

        <div class="col-12">
          <label class="form-label">Descrição</label>
          <textarea id="descricao" class="form-control" placeholder="Descreva o que o gerente deve fazer" disabled></textarea>
        </div>

      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fas fa-clock"></i>
        Tempo
      </div>
      <div class="card-body row">

        <div class="col-12">
          <label class="form-label">Intervalo</label>
          <div class="input-group">
            <span class="input-group-text">A cada</span>
            <input type="number" class="form-control" id="intervalo" disabled>
            <input type="text" class="form-control" id="unidade_intervalo" disabled>
          </div>
        </div>

        <div class="col-12">
          <label class="form-label">Prazo</label>
          <div class="input-group">
            <input type="number" class="form-control" id="prazo" disabled>
            <input type="text" class="form-control" id="unidade_prazo" disabled>
          </div>
        </div>

      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fas fa-hashtag"></i>
        Pontuação advêrtencia
      </div>
      <div class="card-body row">

        <div class="col-12">
          <input type="number" class="form-control" id="pontuacao" disabled>
        </div>

      </div>
    </div>

  `);

  $.ajax({
    url: '/api/config_tarefas/view',
    type: 'GET',
    data: { id: id },
    success: function(data) {
      const tarefa = data.tarefas;
      
      $('#nome').val(tarefa.nome);
      $('#descricao').val(tarefa.descricao);
      $('#pontuacao').val(tarefa.pontuacao);

      if (tarefa.intervalo >= 60) {
        $('#intervalo').val(tarefa.intervalo/60);
        $('#unidade_intervalo').val('Hora(s)');
      }else {
        $('#intervalo').val(tarefa.intervalo);
        $('#unidade_intervalo').val('Minuto(s)');
      }

      if (tarefa.prazo > 60) {
        $('#prazo').val(tarefa.prazo/60);
        $('#unidade_prazo').val('Hora(s)');
      }else {
        $('#prazo').val(tarefa.prazo);
        $('#unidade_prazo').val('Minuto(s)');
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
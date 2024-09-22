$(document).on('click', '#add-tarefa', function() {

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Tarefa');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
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
          <input type="text" id="nome" class="form-control">
        </div>

        <div class="col-12">
          <label class="form-label">Descrição</label>
          <textarea id="descricao" class="form-control" placeholder="Descreva o que o gerente deve fazer"></textarea>
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
            <input type="number" class="form-control" id="intervalo">
            <select class="form-select" id="unidade_intervalo">
              <option value="minutos" selected>Minuto(s)</option>
              <option value="horas">Hora(s)</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <label class="form-label">Prazo</label>
          <div class="input-group">
            <input type="number" class="form-control" id="prazo">
            <select class="form-select" id="unidade_prazo">
              <option value="minutos" selected>Minuto(s)</option>
              <option value="horas">Hora(s)</option>
            </select>
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
          <input type="number" class="form-control" id="pontuacao">
        </div>

      </div>
    </div>

  `);
  modal.modal('show');

  //* Salvar
  $('#salvar').click(function() {

    nome = $('#nome').val();
    descricao = $('#descricao').val();
    intervalo = $('#intervalo').val();
    unidade_intervalo = $('#unidade_intervalo').val();
    prazo = $('#prazo').val();
    unidade_prazo = $('#unidade_prazo').val();
    pontuacao = $('#pontuacao').val();

    if (nome == '' || descricao == '' || intervalo == '' || prazo == '' || pontuacao == '') {
      toast('Preencha todos os campos', 'danger');
      return false;
    }

    if (intervalo <= 0 || prazo <= 0 || pontuacao <= 0) {
      toast('Os valores devem ser maiores que zero', 'danger');
      return false;
    }

    if (unidade_intervalo == 'horas') {
      intervalo = intervalo * 60;
    }

    if (unidade_prazo == 'horas') {
      prazo = prazo * 60;
    }

    if (intervalo < prazo) {
      toast('O intervalo deve ser maior que o prazo', 'danger');
      return false;
    }

    dados = {
      nome: nome,
      descricao: descricao,
      intervalo: intervalo,
      prazo: prazo,
      pontuacao: pontuacao
    };

    const btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/config_tarefas/add',
      type: 'POST',
      data: dados,
      beforeSend: function() {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function(data) {
        var message = data.message;
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
$(document).on('click', '.edit-tarefa', function() {

  var id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Editar Tarefa');
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
        $('#unidade_intervalo').val('horas');
      }else {
        $('#intervalo').val(tarefa.intervalo);
        $('#unidade_intervalo').val('minutos');
      }

      if (tarefa.prazo > 60) {
        $('#prazo').val(tarefa.prazo/60);
        $('#unidade_prazo').val('horas');
      }else {
        $('#prazo').val(tarefa.prazo);
        $('#unidade_prazo').val('minutos');
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
      id: id,
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
      url: '/api/tarefas/edit',
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

//!!
$(document).on('change', '.switch', function() {
  var checked = $(this).prop('checked');
  var id = $(this).parent().data('id');

  var checkbox = $(this);

  $.ajax({
    url: '/api/config_tarefas/switch',
    type: 'POST',
    data: { id: id, checked: checked },
    error: function(error) {
      console.log(error);
      message = error.responseJSON.message;
      checkbox.prop('checked', !checked);
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
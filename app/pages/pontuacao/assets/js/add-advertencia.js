$(document).on('click', '#add-advertencia', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Advertência');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="card">

      <div class="card-header">
        <i class="fas fa-user"></i>
        Infomações Gerais
      </div>

      <div class="card-body row">

        <div class="col-12">
          <label class="form-label">Funcionario</label>
          <select class="form-select" id="funcionarios">
            <option disabled selected>Selecione....</option>
          </select>
        </div>

      </div>

    </div>

    <br>

    <h1 class="text-center text-danger" id="resultado">0</h1>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fas fa-bell"></i>
        Advertência
      </div>
      <div class="card-body row">

        <div class="col-12">
          <label class="form-label">Advertencias</label>
          <select class="form-select" id="advertencia">
            <option disabled selected>Selecione....</option>
          </select>
        </div>

        <div class="col-12">
          <label class="form-label">Observação</label>
          <textarea class="form-control" id="observacao"></textarea>
        </div>

        <div class="col-12">
          <label class="form-label">Pontuação</label>
          <div class="input-group">
            <span class="input-group-text">-</span>
            <input type="number" class="form-control" id="pontuacao">
          </div>
        </div>

      </div>

    </div>

  `);
  
  var advertenciasData;
  var advertencias = {};
  var carregado = [ false, false ];

  //? Carregar os funcionarios
  $.getJSON('/api/funcionarios/view', function(data) {

    funcionarios = data.funcionarios;
    $.each(funcionarios, function(i, item) {
      $('#funcionarios').append(`
        <option value="${item.id}">${item.rosto}</option>
      `);
    });

    carregado[0] = true;

  });

  //? Carregar as advertencias
  $.getJSON('/api/advertencias/view', function(data) {

    advertenciasData = data.advertencias;
    $.each(advertenciasData, function(i, item) {

      $('#advertencia').append(`
        <option value="${item.id}">${item.nome}</option>
      `);

      advertencias[item.id] = {
        nome: item.nome,
        pontuacao: item.pontuacao
      };

    });

    $('#advertencia').append(`
      <option value="0">Outra</option>
    `);

    carregado[1] = true;

  });

  //? Verificar se os dados foram carregados e abre o modal
  var interval = setInterval(function() {
    if (carregado[0] && carregado[1]) {
      clearInterval(interval);
      modal.modal('show');
      btn.html('<i class="fas fa-bell"></i> Advetência');
      btn.attr('disabled', false);
    }
  }, 100);

  $('#advertencia').change(function() {
    if ($(this).val() == 0) {
      return;
    }

    id = $(this).val();

    var pontuacao = advertencias[id].pontuacao;
    var nome = advertencias[id].nome;

    $('#resultado').text(`-${pontuacao}`);
    $('#observacao').val(nome);
    $('#pontuacao').val(pontuacao);

  });

  $('#pontuacao').keyup(function() {
    if ($(this).val() == '') {
      $('#resultado').text(`0`);
      return;
    }else if ($(this).val() < 0) {
      $('#resultado').text(`0`);
      $(this).val(0);
      return;
    }

    $('#resultado').text(`-${$(this).val()}`);
  });

  //* Salvar
  $('#salvar').click(function() {

    var funcionario = $('#funcionarios').val();
    var advertencia = $('#observacao').val();
    var pontuacao = $('#pontuacao').val();

    if (funcionario == null || funcionario == 0) {
      toast('Selecione um funcionário', 'danger');
      return;
    }

    if (advertencia == '') {
      toast('Informe a observação', 'danger');
      return;
    }

    if (pontuacao == '' || pontuacao == 0) {
      toast('Informe a pontuação', 'danger');
      return;
    }

    dados = {
      funcionario: funcionario,
      advertencia: advertencia,
      pontuacao: pontuacao
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/advertencias/attach',
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
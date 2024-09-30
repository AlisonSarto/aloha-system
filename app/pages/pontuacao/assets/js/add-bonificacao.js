$(document).on('click', '#add-bonificacao', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Bonificação');
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

    <h1 class="text-center text-success" id="resultado">0</h1>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fas fa-star"></i>
        Advertência
      </div>
      <div class="card-body row">

        <div class="col-12">
          <label class="form-label">Observação</label>
          <textarea class="form-control" id="observacao"></textarea>
        </div>

        <div class="col-12">
          <label class="form-label">Pontuação</label>
          <div class="input-group">
            <span class="input-group-text">+</span>
            <input type="number" class="form-control" id="pontuacao">
          </div>
        </div>

      </div>

    </div>

  `);

  //? Carregar os funcionarios
  $.getJSON('/api/funcionarios/view', function(data) {

    funcionarios = data.funcionarios;
    $.each(funcionarios, function(i, item) {
      $('#funcionarios').append(`
        <option value="${item.id}">${item.rosto}</option>
      `);
    });

    modal.modal('show');
    btn.html('<i class="fas fa-star"></i> Bonificação');
    btn.attr('disabled', false);

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

    $('#resultado').text(`+${$(this).val()}`);
  });

  //* Salvar
  $('#salvar').click(function() {

    var funcionario = $('#funcionarios').val();
    var advertencia = $('#observacao').val();
    var pontuacao = $('#pontuacao').val();

    dados = {
      funcionario: funcionario,
      advertencia: advertencia,
      pontuacao: pontuacao
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/bonificacao/attach',
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
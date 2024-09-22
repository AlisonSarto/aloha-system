$(document).on('click', '#add-gerente', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  const modal = $('#modal');
  modal.find('.modal-title').text('Promover Gerente');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Funcionário</label>
        <select id="funcionarios" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div>

      <div class="col-12">
        <label class="form-label">Usuário</label>
        <select id="usuarios" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div

    </div>

  `);
  
  //? Carregar funcionarios no select
  $.getJSON('/api/funcionarios/view', function(data) {

    var funcionarios = data.funcionarios;
    $.each(funcionarios, function(i, item) {
      $('#funcionarios').append(`
        <option value="${item.id}">${item.rosto}</option>
      `);
    });

    $.getJSON('/api/usuarios/view', function(data) {
        
      var usuarios = data.usuarios;
      $.each(usuarios, function(i, item) {
        $('#usuarios').append(`
          <option value="${item.id}">${item.nome}</option>
        `);
      });

    });

    modal.modal('show');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);

  });

  //* Salvar
  $('#salvar').click(function() {

    var funcionario = $('#funcionarios').val();
    var usuario = $('#usuarios').val();

    if (funcionario == null || funcionario == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (usuario == null || usuario == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    dados = {
      funcionario: funcionario,
      usuario: usuario
    };

    console.log(dados);

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/gerentes/add',
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
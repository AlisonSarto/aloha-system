$(document).on('click', '#add-funcionario', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Funcionário');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="Nome do funcionário">
      </div>
      
      <div class="col-12">
        <label class="form-label">Turno</label>
        <select id="turno" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div>
      
      <div class="col-12">
        <label class="form-label">Foto</label>
        <input type="file" class="form-control" id="foto">
      </div>

      <div class="col-12">
        <img src="" id="preview" class="img-fluid mt-2" style="display:none;">
      </div>

    </div>

  `);
  
  //? Carregar turnos no select
  $.getJSON('/api/turnos/view', function(data) {

    var turnos = data.turnos;
    $.each(turnos, function(i, item) {
      $('#turno').append(`
        <option value="${item.id}">${item.nome}</option>
      `);
    });

    modal.modal('show');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);

  });

  //? Preview da imagem
  $('#foto').change(function() {
    var file = $(this)[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#preview').attr('src', e.target.result);
      $('#preview').css('display', 'block');
    }
    reader.readAsDataURL(file);
  });

  //* Salvar
  $('#salvar').click(function() {

    var nome = $('#nome').val();
    var turno = $('#turno').val();
    var img64 = $('#preview').attr('src');

    if (img64 == null || img64 == undefined) {
      toast('Selecione uma imagem', 'danger');
      return;
    }

    img64 = img64.split(',')[1];
    
    if (turno == null || turno == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (nome == null || nome == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    dados = {
      nome: nome,
      turno: turno,
      foto: img64
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/funcionarios/add',
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
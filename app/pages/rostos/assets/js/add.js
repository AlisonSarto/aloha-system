$(document).on('click', '#add-rosto', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Rosto');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <label class="form-label">Nome</label>
    <input type="text" class="form-control" id="nome">
    
    <label class="form-label">Foto</label>
    <div class="input-group cursor-pointer" data-aloha-id>
      <span class="input-group-text">Tirar Foto</span>
      <div class="form-control" id="status-img">
        Click aqui para tirar a foto
        <i class="fas fa-camera"></i>
      </div>
    </div>

  `);

  alohaId();

  btn.html('<i class="fas fa-plus"></i> Adicionar');
  btn.attr('disabled', false);
  modal.modal('show');

  $(document).on('aloha-id-captured', function() {
    $('#status-img').html(`
      Foto tirada com sucesso!
      <i class="fas fa-check text-success"></i>
    `);
  });

  //* Salvar
  $('#salvar').click(function() {
      
    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    nome = $('#nome').val() ?? '';
    img = $('#aloha-id-img').val() ?? '';

    if (nome == '') {
      toast('Preencha o campo Nome', 'danger');
      btn.html('Salvar');
      btn.attr('disabled', false);
      return false;
    }

    if (img == '') {
      toast('Tire uma foto', 'danger');
      btn.html('Salvar');
      btn.attr('disabled', false);
      return false;
    }

    $.ajax({
      url: '/api/rostos/add',
      type: 'POST',
      data: {
        nome: nome,
        img: img
      },
      success: function(data) {
        message = data.message;
        toast(message, 'success');
        modal.modal('hide');

        newTable();

        btn.html('Salvar');
        btn.attr('disabled', false);
      },
      error: function(error) {
        console.log(error);
        message = error.responseJSON.message;
        toast(message, 'danger');
        btn.html('Salvar');
        btn.attr('disabled', false);
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
$(document).on('click', '.edit-rosto', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  //? Verifica é o último usuário admin
  if ($(this).parent().parent().find('.delete-rosto').attr('disabled') == 'disabled') {
    disabled = 'disabled';
  } else {
    disabled = '';
  }

  modal = $('#modal');
  modal.find('.modal-title').text('Editar Usuário');
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

  //? Carregar os dados do rosto
  $.ajax({
    url: '/api/rostos/view',
    data: {
      id: id,
      base64: true
    },
    method: 'GET',
    success: function (data) {
      rosto = data.rostos;

      $('#nome').val(rosto.nome);

      base64 = rosto.base64;
      $('#aloha-id-img').val(base64);

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
      modal.modal('show');
    },
    error: function (err) {
      console.log(err);
      message = err.responseJSON.message;
      toast(message, 'danger');
      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }
  });

  //* Salvar
  $('#salvar').click(function () {

    nome = $('#nome').val();
    img = $('#aloha-id-img').val();

    if (nome == '' || nome == ' ') {
      toast('Preencha o campo Nome', 'danger');
      btn.html('Salvar');
      btn.attr('disabled', false);
      return false;
    }

    img = img.replace('data:image/png;base64,', '');

    //? Verifica se mudou alguma coisa em comparação com o banco de dados
    if (nome == rosto.nome && img == rosto.base64) {
      toast('Nada foi alterado', 'danger');
      return;
    }

    dados = {
      id: id,
      nome: nome,
      img: img
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/rostos/edit',
      type: 'POST',
      data: dados,
      beforeSend: function () {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function (data) {
        message = data.message;
        modal.modal('hide');
        toast(message, 'success');
        newTable();
      },
      error: function (error) {
        console.log(error);
        message = error.responseJSON.message;
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
        toast(message, 'danger');
      }
    });

  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
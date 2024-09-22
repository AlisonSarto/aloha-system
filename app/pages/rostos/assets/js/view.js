$(document).on('click', '.view-rosto', function() {

  id = $(this).parent().data('id');
      
  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);

  //? Puxa os dados do usuário
  $.ajax({
    url: '/api/rostos/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(response) {
      creatModal(response.rostos);
      $('#modal').modal('show');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      message = error.responseJSON.message;
      console.log(error);
      toast(message,'danger');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    }
  });
  
});

function creatModal(rosto) {

  nome = rosto.nome;
  img = rosto.img;

  modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Usuário');
  modal.find('.modal-footer').html('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>');
  
  modal.find('.modal-body').html(`

    <label class="form-label">Nome</label>
    <input type="text" class="form-control" value="${nome}" disabled>

    <br>
    
    <label class="form-label">Foto</label>
    <div class="card">
      <div class="card-body">
        <img class="rounded img-fluid" src="${img}">
      </div>
    </div>

  `);

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
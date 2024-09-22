$(document).on('click', '.view-sabor', function() {

  id = $(this).parent().data('id');
      
  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);

  //? Puxa os dados do sabor
  $.ajax({
    url: '/api/sabores/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(response) {
      creatModalView(response.sabores);
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

function creatModalView(sabores) {

  sabor = sabores.sabor;
  cor = sabores.cor;
  emoji = sabores.emoji;
  formula = sabores.formula;

  modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Sabor');
  modal.find('.modal-footer').html('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>');
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-md-6">
        <label class="form-label">Sabor</label>
        <input type="text" id="sabor" class="form-control" value="${sabor}" disabled>
      </div>

      <div class="col-md-3">
        <label class="form-label">Emoji</label>
        <input type="text" id="emoji" class="form-control" value="${emoji}" disabled>
      </div>

      <div class="col-md-3">
        <label class="form-label">Cor</label>
        <input type="color" id="cor" class="form-control form-control-color" value="${cor}" disabled>
      </div>
      
      <div class="col-md-12">
        <label class="form-label">Fórmula do Concentrado</label>
        <div class="input-group">
          <input type="number" class="form-control" id="formula" value="${formula}" disabled>
          <span class="input-group-text">g por pacote</span>
        </div>
      </div>

    </div>

    <hr>

    <h4>Pré-visualização</h4>

    <div class="col-6 col-md-2 m-auto">
      <input type="checkbox" class="box-input" name="sabores" id="sabores-check">
      <label for="sabores-check" class="box m-1 text-center" id="box-label" style="background: ${cor}">
        <h2 class="p-4" id="box-emoji" style="white-space: nowrap">${emoji}</h2>
      </label>
    </div>

  `);

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
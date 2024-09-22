$(document).on('click', '.view-marca', function() {

  id = $(this).parent().data('id');
      
  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);

  //? Puxa os dados da marca
  $.ajax({
    url: '/api/marcas/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(response) {
      creatModal(response.marcas);
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

function creatModal(marca) {

  nome = marca.nome;
  var sabores_id = marca.sabores_id;
  sabores_id = sabores_id.split(',');
  logo = marca.logo;
  formula = marca.formula;

  //? Puxa os sabores
  var sabores = [];
  $.ajax({
    url: '/api/sabores/view',
    type: 'GET',
    async: false,
    success: function(data) {
      saboresData = data.sabores;
      saboresData.forEach(sabor => {
        var saborId = sabor.id;
        if (sabores_id.includes(saborId)) {
          sabores.push(sabor);
        }
      });
    }
  });

  modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Marca');
  modal.find('.modal-footer').html('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>');
  
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-md-12">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" value="${nome}" disabled>
      </div>

      <div class="col-md-12">
        <label class="form-label w-100">Logo</label>
        <img src="${logo}" class="img-thumbnail" width="250px">
      </div>
      
      <div class="col-md-12">
        <label class="form-label">Fórmula da Embalagem</label>
        <div class="input-group">
          <input type="number" class="form-control" value="${formula}" disabled>
          <span class="input-group-text">g por pacote</span>
        </div>
      </div>

      <div class="col-md-12" id="sabores">
        <label class="form-label">Sabores</label>
      </div>

    </div>

  `);

  sabores.forEach(sabor => {

    $('#sabores').append(`
      <div class="form-check">
        <label class="form-check-label">${sabor.sabor} ${sabor.emoji}</label>
      </div>
    `);

  });

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
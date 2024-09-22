$(document).on('click', '#add-marca', function() {

  btn = $(this);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Marca');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-md-12">
        <label class="form-label">Nome</label>
        <input type="text" id="nome" class="form-control">
      </div>

      <div class="col-md-12">
        <label class="form-label">Logo</label>
        <input type="file" id="logo" class="form-control">
      </div>
      
      <div class="col-md-12">
        <label class="form-label">Fórmula da Embalagem</label>
        <div class="input-group">
          <input type="number" class="form-control" id="formula">
          <span class="input-group-text">g por pacote</span>
        </div>
      </div>

      <div class="col-md-12" id="sabores">
        <label class="form-label">Sabores</label>
      </div>

    </div>

  `);
  
  $.ajax({
    url: '/api/sabores/view',
    type: 'GET',
    success: function(data) {
      
      var sabores = data.sabores;

      sabores.forEach(db => {

        $('#sabores').append(`
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="sabores" id="${db.id}">
            <label class="form-check-label" for="${db.id}">${db.sabor} ${db.emoji}</label>
          </div>
        `);

      });
      
      $('#modal').modal('show');
    },
    error: function(err) {
      message = err.responseJSON.message;
      if (err.responseJSON.status == 404) {
        message = 'Crie um sabor antes de criar uma marca';
      }
      console.log(err);
      toast(message, 'danger');
    }
  });

  $('#salvar').click(function() {

    var btnSalvar = $(this);
    
    var sabores = [];
    $('input:checkbox[name=sabores]:checked').each(function() {
      sabores.push($(this).attr('id'));
    });
    sabores = sabores.join(','); //* Separa por virgula

    var nome = $('#nome').val();
    var logo = $('#logo').val();
    var formula = $('#formula').val();

    if (nome == '') {
      toast('Preencha o nome', 'danger');
      return;
    }
    
    if (logo == '') {
      toast('Escolha uma logo', 'danger');
      return;
    }

    if (formula == '') {
      toast('Defina a quantidade de embalagem gasta por pacote', 'danger');
      return;
    }

    if (sabores.length == 0) {
      toast('Escolha pelo menos um sabor', 'danger');
      return;
    }

    var ext = logo.split('.').pop().toLowerCase();
    if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
      toast('Arquivo invalido', 'danger');
      return;
    }

    $(this).html('Salvando...');
    $(this).attr('disabled', true);

    var file = $('#logo')[0].files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var base64 = reader.result;

      base64 = base64.split(',')[1];

      $.ajax({
        url: '/api/marcas/add',
        type: 'POST',
        data: {
          nome: nome,
          logo: base64,
          formula: formula,
          sabores_id: sabores
        },
        success: function(response) {
          toast(response.message, 'success');

          newTable();
          
          modal.modal('hide');
          
          btnSalvar.html('Salvar');
          btnSalvar.attr('disabled', false);
        },
        error: function(error) {
          console.log(error);
          toast(error.responseJSON.message, 'danger');
          btnSalvar.html('Salvar');
          btnSalvar.attr('disabled', false);
        }
      });

    };

  });
  
});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
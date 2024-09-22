$(document).on('click', '.edit-sabor', function() {

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
      creatModalEdit(response.sabores);
      $('#modal').modal('show');

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      message = error.responseJSON.message;
      console.log(error);
      toast(message,'danger');

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }
  });
  
});

function creatModalEdit(sabores) {

  var sabor = sabores.sabor;
  var cor = sabores.cor;
  var emoji = sabores.emoji;
  var formula = sabores.formula;

  modal = $('#modal');
  modal.find('.modal-title').text('Editar Sabor');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-md-6">
        <label class="form-label">Sabor</label>
        <input type="text" id="sabor" class="form-control" value="${sabor}">
      </div>

      <div class="col-md-3">
        <label class="form-label">Emoji</label>
        <input type="text" id="emoji" class="form-control" value="${emoji}">
      </div>

      <div class="col-md-3">
        <label class="form-label">Cor</label>
        <input type="color" id="cor" class="form-control form-control-color" value="${cor}">
      </div>
      
      <div class="col-md-12">
        <label class="form-label">Fórmula do Concentrado</label>
        <div class="input-group">
          <input type="number" class="form-control" id="formula" value="${formula}">
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

  $('#cor').change(function () {
    $('#box-label').css('background', $(this).val());
  });

  $('#emoji').keyup(function () {
    if ($(this).val() != '') {
      $('#box-emoji').text($(this).val());
    } else {
      $('#box-emoji').text('🙂');
    }
  });

  $('#salvar').click(function() {
    
    if (sabor == $('#sabor').val() && cor == $('#cor').val() && emoji == $('#emoji').val() && formula == $('#formula').val()) {
      toast('Nenhuma alteração foi feita.','danger');
      return;
    }

    sabor = $('#sabor').val();
    cor = $('#cor').val();
    emoji = $('#emoji').val();
    formula = $('#formula').val();

    if (sabor == '') {
      toast('O campo sabor é obrigatório.','danger');
      return;
    }

    if (emoji == '') {
      toast('O campo emoji é obrigatório.','danger');
      return;
    }

    if (formula == '') {
      toast('O campo fórmula é obrigatório.','danger');
      return;
    }

    btnSalvar = $(this);

    btnSalvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btnSalvar.attr('disabled', true);

    $.ajax({
      url: '/api/sabores/edit',
      type: 'POST',
      data: {
        id: id,
        sabor: sabor,
        cor: cor,
        emoji: emoji,
        formula: formula
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

  });

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
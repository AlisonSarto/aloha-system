$(document).on('click', '#add-sabor', function() {

  btn = $(this);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Sabor');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-md-6">
        <label class="form-label">Sabor</label>
        <input type="text" id="sabor" class="form-control">
      </div>

      <div class="col-md-3">
        <label class="form-label">Emoji</label>
        <input type="text" id="emoji" class="form-control">
      </div>

      <div class="col-md-3">
        <label class="form-label">Cor</label>
        <input type="color" id="cor" class="form-control form-control-color" value="#f0ff1a">
      </div>
      
      <div class="col-md-12">
        <label class="form-label">Fórmula do Concentrado</label>
        <div class="input-group">
          <input type="number" class="form-control" id="formula">
          <span class="input-group-text">g por pacote</span>
        </div>
      </div>

    </div>

    <hr>

    <h4>Pré-visualização</h4>

    <div class="col-6 col-md-2 m-auto">
      <input type="checkbox" class="box-input" name="sabores" id="sabores-check">
      <label for="sabores-check" class="box m-1 text-center" id="box-label" style="background: #f0ff1a">
        <h2 class="p-4" id="box-emoji" style="white-space: nowrap">🙂</h2>
      </label>
    </div>

  `);

  $('#modal').modal('show');

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

  $('#salvar').click(function () {
    var btnSalvar = $(this);

    var sabor = $('#sabor').val();
    var emoji = $('#emoji').val();
    var cor = $('#cor').val();
    var formula = $('#formula').val();

    if (sabor == '') {
      toast('Informe o sabor', 'danger');
      return;
    }

    if (emoji == '') {
      toast('Informe o emoji', 'danger');
      return;
    }

    if (cor == '#f0ff1a') {
      toast('Informe a cor', 'danger');
      return;
    }

    if (formula == '' || formula <= 0) {
      toast('Informe a fórmula', 'danger');
      return;
    }

    btnSalvar.html('Salvando...');
    btnSalvar.attr('disabled', true);

    $.ajax({
      url: '/api/sabores/add',
      type: 'POST',
      data: {
        sabor: sabor,
        emoji: emoji,
        cor: cor,
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

});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
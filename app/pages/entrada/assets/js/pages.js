$(document).ready(function() {

  var marca_id = null;
  var marca_nome = null;
  var sabores_id = null;
  var sabor_nome = null;
  var sabor_id = null;
  var qtd = 0;
  var dia = null;
  
  const pages = [
    $('#page-marca'),
    $('#page-sabor'),
    $('#page-qtd'),
    $('#page-dia'),
    $('#page-resumo'),
  ];

  $.ajax({
    url: '/api/marcas/view',
    type: 'GET',
    success: function(data) {

      let marcas = data.marcas;

      marcas.forEach(function(marca) {
        $('#marcas').append(`
          <div class="col-6 col-md-3 m-auto">
            <input type="radio" name="marca" class="box-input" id="marca-${marca.id}">
            <label for="marca-${marca.id}" class="box box-marcas m-1 text-center" data-nome="${marca.nome}" data-id="${marca.id}" data-sabores="${marca.sabores_id}">
              <img src="${marca.logo}" class="img-fluid p-2">
            </label>
          </div>
        `);
      });
      
      let i = 0;
      pages.forEach(function(page) {
        if (i === 0) {
          page.show();
        }
        i++;
      });

    },
    error: function(err) {
      message = err.responseJSON.message;
      $('#error-message').html('<i class="fas fa-exclamation-triangle me-2"></i> ' + message);
      $('#page-error').show();
    }
  });

  i = 0;
  $('#proximo').click(function() {
    $('#proximo').attr('disabled', true);
    $('#voltar').attr('disabled', true);

    if (i === 2) {
      qtd = $('#qtd').val();

      if (qtd <= 0) {
        toast('Quantidade inválida','danger');
        $('#proximo').attr('disabled', false);
        $('#voltar').attr('disabled', false);
        return;
      }
    }

    if (i === 3) {
      dia = $('#dia').val();
      dia = dia.split('T');
      dia[1] = dia[1] + ':00';
      dia = dia.join(' ');

      if (dia === '') {
        toast('Data inválida','danger');
        $('#proximo').attr('disabled', false);
        $('#voltar').attr('disabled', false);
        return;
      }
    }

    if (i === 4) {
      finalizar();
      return;
    }

    pages[i].hide();
    i++;

    if (i === 1) {
      $('#proximo').html('Carregando...');
      $('#sabores').html('');
      $('#sabor').html('');
      $.ajax({
        url: '/api/sabores/view',
        type: 'GET',
        data: {
          id: sabores_id
        },
        success: function(data) {
          sabores = data.sabores;
          sabores.forEach(sabor => {
            $('#sabores').append(`
              <div class="col-6 col-md-2 m-auto">
                <input type="radio" class="box-input" name="sabores" id="sabores-${sabor.id}">
                <label for="sabores-${sabor.id}" class="box box-sabores m-1 text-center" style="background: ${sabor.cor}" data-nome="${sabor.sabor}" data-id="${sabor.id}">
                  <h2 class="p-4" style="white-space: nowrap">${sabor.emoji}</h2>
                </label>
              </div>
            `);
          });
        },
        error: function(err) {
          message = err.responseJSON.message;
          $('#error-message').html('<i class="fas fa-exclamation-triangle me-2"></i> ' + message);
          $('#page-error').show();
        }
      });
    }

    if (i === 2) {
      setTimeout(function() {
        $('input.virtual-keyboard').click();
      }, 50);
      $('#proximo').attr('disabled', false);
    };

    if (i === 3) {
      $('#proximo').attr('disabled', false);
    };

    if (i === 4) {
      $('#proximo').html('Finalizar');
      $('#proximo').attr('disabled', false);
      $('#proximo').attr('id', 'finalizar');
      $('#res-marca').text(marca_nome);
      $('#res-sabor').text(sabor_nome);
      $('#res-qtd').text(qtd);
    }else {
      $('#proximo').html('Próximo');
    }

    pages[i].show();
    $('#voltar').attr('disabled', false);
  });

  $('#voltar').click(function() {
    pages[i].hide();
    i--;

    if (i === 0) {
      $('#voltar').attr('disabled', true);
    }

    pages[i].show();
    $('#proximo').attr('disabled', false);
  });

  function finalizar() {
    $('#finalizar').attr('disabled', true);
    $('#voltar').attr('disabled', true);
    $('#finalizar').html('Carregando...');

    $.ajax({
      url: '/api/lancar/entrada',
      type: 'POST',
      data: {
        marca: marca_id,
        sabor: sabor_id,
        qtd: qtd,
        dia: dia
      },
      success: function(data) {
        toast(data.message, 'success');
        setTimeout(function() {
          location.reload();
        }, 1500);
      },
      error: function(err) {
        console.log(err);
        message = err.responseJSON.message;
        $('#error-message').html('<i class="fas fa-exclamation-triangle me-2"></i> ' + message);
        $('#page-error').show();
      }
    });
  };

  // Marcas
  $(document).on('click', '.box-marcas', function() {
    marca_id = $(this).data('id');
    marca_nome = $(this).data('nome');
    sabores_id = $(this).data('sabores') + ',0';
    $('#marca').text(marca_nome);
    $('#proximo').attr('disabled', false);
  });

  // Sabores
  $(document).on('click', '.box-sabores', function() {
    sabor_id = $(this).data('id');
    sabor_nome = $(this).data('nome');
    $('#sabor').text(sabor_nome);
    $('#proximo').attr('disabled', false);
  });

});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
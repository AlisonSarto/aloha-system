$(document).ready(function() {
  
  var n = 1;

  $.ajax({
    url: '/api/pacotes/view',
    method: 'GET',
    success: function(data) {
      var pacotes = data.pacotes;

      pacotes.forEach(function(pacote) {

        $('#pacotes').append(`
          <div id="${n}" class="text-center mb-3" style="display:none;" data-id="${pacote.id}">
            <h3>${pacote.sabor} - ${pacote.marca}</h3>
            <input type="number" class="form-control" placeholder="Quantidade">
          </div>
        `);

        n++;
      });

      $('#1').show();

    },
    error: function(err) {
      console.log(err);
    }
  });

  $('#btn-avancar').click(function() {
    var n = parseInt($('#pacotes div:visible').attr('id'));
    $('#pacotes div').hide();
    if (n + 1 <= $('#pacotes div').length) {
      $('#'+(n+1)).show();
    } else {
      resumo();
    }
  });

  $('#btn-voltar').click(function() {
    var n = parseInt($('#pacotes div:visible').attr('id'));
    $('#pacotes div').hide();
    if (n - 1 >= 1) {
      $('#'+(n-1)).show();
    } else {
      $('#1').show();
    }
  });

});

function resumo() {
  // Implementação da função resumo
  var resumo = [];
  $('#pacotes div').each(function() {
    var id = $(this).data('id');
    var nome = $(this).find('h3').text();
    var quantidade = $(this).find('input').val() || 0;
    if (quantidade) {
      resumo.push({
        id: id,
        nome: nome,
        quantidade: quantidade
      });
    }
  });

  // Exibindo o resumo no site em tabela
  $('#pacotes').empty();
  $('#pacotes').append(`
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody id="resumo">
      </tbody>
    </table>
  `);

  resumo.forEach(function(item) {
    $('#resumo').append(`
      <tr>
        <td>${item.nome}</td>
        <td>${item.quantidade}</td>
      </tr>
    `);
  });

  // muda o botão para finalizar
  $('#btn-avancar').hide();
  $('#btn-voltar').hide();
  $('#btn-finalizar').show();

  // Adiciona o botão de finalizar
  $('#btn-finalizar').click(function() {
    finalizar(resumo);
  });

}

function finalizar(pacotes) {

  $('#btn-finalizar').hide();

  $('#pacotes').empty();
  $('#pacotes').append(`
    <div class="text-center">
      <i class="fas fa-spinner fa-spin fa-3x"></i>
      <br>
      <h3>Lançando...</h3>
    </div>
  `);

  var requests = pacotes.map(pacote => {
    return $.ajax({
      url: '/api/pacotes/edit',
      method: 'POST',
      data: {
        id: pacote.id,
        qtd: pacote.quantidade
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  $.when.apply($, requests).done(function() {
    $('#pacotes').empty();
    $('#pacotes').append(`
      <div class="text-center">
        <i class="fas fa-check-circle fa-3x text-success"></i>
        <br><br>
        <h3>Concluído!</h3>
      </div>
    `);
    setTimeout(function() {
      location.reload();
    }, 3000);
  });

}
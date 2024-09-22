$(document).ready(function() {

  var rostos_select = $('#rostos');
  var inicio_input = $('#inicio');
  var fim_input = $('#fim');

  //? Define as datas
  var data = new Date();
  var inicio = new Date(data.getFullYear(), data.getMonth(), 1);
  var fim = new Date(data.getFullYear(), data.getMonth(), data.getDate());

  inicio_input.val(inicio.toISOString().slice(0, 10));
  fim_input.val(fim.toISOString().slice(0, 10));

  avanco = 0;

  //? Define o minimo e o maximo
  inicio_input.attr('max', fim_input.val());
  fim_input.attr('min', inicio_input.val());

  //? Define os rostos
  $.ajax({
    url: '/api/rostos/view',
    type: 'GET',
    success: function(data) {
      rostos = data.rostos;
      rostos.forEach(function(rosto) {
        rostos_select.append('<option value="' + rosto.id + '">' + rosto.nome + '</option>');
      });
      rostos_select.val(rostos[0].id);

      newTable();
    },
    error: function() {
      rostos_select.append('<option>Nenhum rosto encontrado</option>');
      rostos_select.attr('disabled', true);
      inicio_input.attr('disabled', true);
      fim_input.attr('disabled', true);
      $('#add-ponto').attr('disabled', true);
      newTable();
    }
  });

  //* Eventos
  inicio_input.change(function() {
    fim_input.attr('min', inicio_input.val());
    newTable();
  });

  fim_input.change(function() {
    inicio_input.attr('max', fim_input.val());
    newTable();
  });

  rostos_select.change(function() {
    newTable();
  });

  $('#load-more').click(function() {
    $(this).attr('disabled', true);
    $(this).html('<i class="fas fa-spinner fa-spin"></i> Carregando...');

    newTable(10);
  });

});
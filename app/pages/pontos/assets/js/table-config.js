var var_avanco = 0;
function newTable(avanco = 0) {

  if (avanco > 0) {
    var_avanco += avanco;
  }else {
    var_avanco = 0;
  }

  //? Define as variaveis
  var rosto_id = $('#rostos').val();
  var inicio = $('#inicio').val();
  var fim = $('#fim').val();
  var limit = 15 + var_avanco;

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de pontos, não executa o script
  if ((content === undefined || content != 'pontos') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Data</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/pontos/view',
    type: 'GET',
    data: {
      rosto_id: rosto_id,
      inicio: inicio,
      fim: fim,
      limit: limit
    },
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      pontos = data.pontos;
      pontos.forEach(db => {
        if (db.tipo == 'entrada') {
          db.tipo = 'Entrada';
          color = 'success';
        } else {
          db.tipo = 'Saída';
          color = 'danger';
        }

        //? formata o dia e a hora, sabendo do formato YYYY-MM-DD HH:MM
        dia_hora = db.dia.split(' ');
        dia = dia_hora[0].split('-').reverse().join('/');
        hora = dia_hora[1];
        datatime = dia + ' ' + hora;

        tableContent += `
          <tr class="table-${color}">
            <td>${db.rosto_nome}</td>
            <td>${db.tipo}</td>
            <td>${datatime}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}">
                <button class="btn btn-sm btn-danger delete-ponto"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `;
      });
      dataTable(tableContent, false);

      //? Verifica tem mais pontos
      $.ajax({
        url: '/api/pontos/view',
        type: 'GET',
        data: {
          rosto_id: rosto_id,
          inicio: inicio,
          fim: fim,
          limit: limit * 2
        },
        success: function(data) {
          pontos = data.pontos;

          if (pontos.length == limit * 2 || pontos.length > limit) {
            $('#container-load-more').show();
            $('#load-more').removeAttr('disabled');
            $('#load-more').html('Carregar mais');
          } else {
            $('#container-load-more').hide();
          }
        }
      })

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="4" class="text-center">Nenhum ponto encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false);
  }
  
};
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de entradas, não executa o script
  if ((content === undefined || content != 'entradas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Qtd</th>
        <th>Pacote</th>
        <th>Turno</th>
        <th>Modo</th>
        <th>Dia</th>
      </tr>
    </thead>
  `;

  var inicio = $('#inicio').val();
  var fim = $('#fim').val();

  $.ajax({
    url: '/api/mov/entradas',
    type: 'GET',
    data: {
      inicio: inicio,
      fim: fim,
    },
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      entradas = data.entradas;
      var total = 0;
      entradas.forEach(db => {
        
        var cor = db.cor;

        //* Transforma o hexa em rgb
        var hex = cor;
        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
        rgb = r + ',' + g + ',' + b + ',0.3';

        //* Soma o total de pacotes
        total += Number(db.qtd);

        tableContent += `
          <tr style="background-color: rgba(${rgb})">
            <td>${db.qtd}</td>
            <td>${db.pacote}</td>
            <td>${db.turno}</td>
            <td>${db.modo}</td>
            <td>${db.dia}</td>
          </tr>
        `;
      });

      tableContent += `
        <tfoot>
          <tr>
            <td colspan="99" class="text-right">Total: ${total}</td>
          </tr>
        </tfoot>
      `;

      dataTable(tableContent);
      $('#table-search').val('');

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="99" class="text-center">Nenhuma entrada encontrada</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var lastWeek = lastWeek.toISOString().split('T')[0];
var today = today.toISOString().split('T')[0];

$('#inicio').val(lastWeek);
$('#inicio').attr('max', today);
$('#fim').val(today);
$('#fim').attr('max', today);

newTable();

$('#inicio').change(function() {
  $('#fim').attr('min', $(this).val());
  newTable();
});

$('#fim').change(function() {
  $('#inicio').attr('max', $(this).val());
  newTable();
});
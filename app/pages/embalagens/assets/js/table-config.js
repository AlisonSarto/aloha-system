//* Tabela Geral
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de embalagens, não executa o script
  if ((content === undefined || content != 'embalagens') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Sabor</th>
        <th>Quantidade</th>
        <th>Estimativa</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/embalagens/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      embalagens = data.embalagens;
      embalagens.forEach(db => {
        tableContent += `
          <tr>
            <td>${db.sabor} - ${db.marca}</td>
            <td>${db.qtd / 1000} Kg</td>
            <td>${db.calc} pacotes</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.sabor} - ${db.marca}">
                <button class="btn btn-sm btn-warning mx-2 edit-embalagem"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-success mov-embalagem"><i class="fas fa-arrow-right-arrow-left"></i></button>
              </div>
            </td>
          </tr>
        `;
      });
      dataTable(tableContent);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="3" class="text-center">Nenhuma embalagem encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();

//* Tabela Mov
var var_avanco = 0;
function newTableMov(id, avanco = 0, reset = false) {

  if (reset === true) {
    var_avanco = 0;
  }

  var_avanco += avanco;

  //? Define as variaveis
  var limit = 10 + var_avanco;

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Qtd Ajuste</th>
        <th>Qtd Final</th>
        <th>Data</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/embalagens/mov',
    type: 'GET',
    data: {
      id: id,
      limit: limit
    },
    success: function(data) {
      //? Passa por cada item do array e adiciona na tabela
      mov = data.mov;
      mov.forEach(db => {
        
        tipo = db.tipo;

        if (tipo == 'Ajuste (+)' || tipo == 'Entrada') {
          cor = 'success';
        }else {
          cor = 'danger';
        }
        
        var diaHora = db.dia.split(' ');
        var dia = diaHora[0].split('-').reverse().join('/');
        var data = dia + ' ' + diaHora[1];

        tableContent += `
          <tr class="table-${cor}">
            <td>${tipo}</td>
            <td>${db.qtd_mov / 1000} Kg</td>
            <td>${db.qtd_final / 1000} Kg</td>
            <td>${data}</td>
          </tr>
        `;
      });
      dataTable(tableContent, false, '#data-table-mov');

      //? Verifica tem mais movs
      $.ajax({
        url: '/api/embalagens/mov',
        type: 'GET',
        data: {
          id: id,
          limit: limit * 2
        },
        success: function(data) {
          mov = data.mov;

          if (mov.length == limit * 2 || mov.length > limit) {
            $('#container-load-more').show();
            $('#load-more').removeAttr('disabled');
            $('#load-more').html('Carregar mais');
          } else {
            $('#container-load-more').hide();
          }
        }
      });

    },
    error: function() {
      returnEmptyTableMov();
    }
  });

  function returnEmptyTableMov() {
    tableContent += `
      <tr>
        <td colspan="4" class="text-center">Nenhuma movimentação encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, '#data-table-mov');
  }
  
};
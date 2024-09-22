function newTablePontuacao() {

  var tableId = '#data-table-pontuacao';

  //* Header
  var tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Pontos</th>
      </tr>
    </thead>
  `;

  returnEmptyTable();
  return;

  $.ajax({
    url: '/api/pontuacao/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      pontuacao = data.pontuacao;
      pontuacao.forEach(db => {
        tableContent += `
          <tr>
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
        <td colspan="2" class="text-center">Nenhuma pontuação encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, tableId);
  }
  
};

function newTableTurnos() {

  var tableId = '#data-table-turnos';

  //* Header
  var tableContent = `
    <thead>
      <tr>
        <th>Turno</th>
        <th>Pontos</th>
      </tr>
    </thead>
  `;

  returnEmptyTable();
  return;

  $.ajax({
    url: '/api/pontuacao/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      pontuacao = data.pontuacao;
      pontuacao.forEach(db => {
        tableContent += `
          <tr>
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
        <td colspan="2" class="text-center">Nenhuma pontuação encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, tableId);
  }
  
};

newTableTurnos();
newTablePontuacao();
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de turnos, não executa o script
  if ((content === undefined || content != 'turnos') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Turno</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/turnos/view',
    type: 'GET',
    success: function(data) {

      turnos = data.turnos;

      //? Passa por cada item do array e adiciona na tabela
      turnos.forEach(db => {
        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-primary view-turno"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-turno"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-turno"><i class="fas fa-trash"></i></button>
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
        <td colspan="3" class="text-center">Nenhum turno encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de grupos, não executa o script
  if ((content === undefined || content != 'grupos-situacoes') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/grupos-situacoes/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      grupos = data.grupos;
      grupos.forEach(db => {
        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-warning mx-2 edit-grupo"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-grupo"><i class="fas fa-trash"></i></button>
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
        <td colspan="2" class="text-center">Nenhum grupo encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
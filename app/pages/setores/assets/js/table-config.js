function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de setores, não executa o script
  if ((content === undefined || content != 'setores') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Setor</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/setores/view',
    type: 'GET',
    success: function(data) {

      setores = data.setores;

      //? Passa por cada item do array e adiciona na tabela
      setores.forEach(db => {

        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-warning me-2 edit-setor"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-setor"><i class="fas fa-trash"></i></button>
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
        <td colspan="99" class="text-center">Nenhum setor encontrado!</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
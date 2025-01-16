function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de maquinas, não executa o script
  if ((content === undefined || content != 'maquinas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Máquina</th>
        <th>Limite</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/maquinas/view',
    type: 'GET',
    success: function(data) {

      maquinas = data.maquinas;

      //? Passa por cada item do array e adiciona na tabela
      maquinas.forEach(db => {

        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>${db.limite}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-warning me-2 edit-maquina"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-maquina"><i class="fas fa-trash"></i></button>
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
        <td colspan="99" class="text-center">Nenhum maquina encontrado!</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
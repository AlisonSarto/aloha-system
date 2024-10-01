function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de metas, não executa o script
  if ((content === undefined || content != 'metas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Qtd. de colaboradores</th>
        <th>Meta hora</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/metas/view',
    type: 'GET',
    success: function(data) {

      metas = data.metas;

      //? Passa por cada item do array e adiciona na tabela
      metas.forEach(db => {

        if (db.ativo == 'true') {
          ativo = 'table-success';
        }else {
          ativo = 'table-danger';
        }

        tableContent += `
          <tr class="${ativo}">
            <td>${db.qtd_funcionarios}</td>
            <td>${db.meta} pcts/h</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-primary view-meta"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-meta"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-meta"><i class="fas fa-trash"></i></button>
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
        <td colspan="99" class="text-center">Nenhuma meta encontrada</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
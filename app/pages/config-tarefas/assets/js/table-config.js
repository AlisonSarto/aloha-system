function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de tarefas, não executa o script
  if ((content === undefined || content != 'tarefas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Ativo</th>
        <th>Nome</th>
        <th>Intervalo</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/config_tarefas/view',
    type: 'GET',
    success: function(data) {

      tarefas = data.tarefas;

      //? Passa por cada item do array e adiciona na tabela
      tarefas.forEach(db => {
        
        var checked = db.ativo == 'true' ? 'checked' : '';

        if (db.intervalo >= 60) {
          db.intervalo = db.intervalo / 60;
          db.intervalo = db.intervalo + ' h';
        }else {
          db.intervalo = db.intervalo + ' min';
        }
        
        tableContent += `
          <tr>
            <td>
              <div class="form-check form-switch" data-id="${db.id}">
                <input class="form-check-input switch" type="checkbox" role="switch" ${checked}>
              </div>
            </td>
            <td>${db.nome}</td>
            <td>${db.intervalo}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-primary view-tarefa"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-tarefa"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-tarefa"><i class="fas fa-trash"></i></button>
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
        <td colspan="3" class="text-center">Nenhum usuário encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
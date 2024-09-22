function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de usuarios, não executa o script
  if ((content === undefined || content != 'usuarios') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/usuarios/view',
    type: 'GET',
    success: function(data) {

      usuarios = data.usuarios;
      
      //? Verifica quantos admin tem
      var admin = 0;
      usuarios.forEach(db => {
        if (db.cargo.nome == 'Admin') {
          admin++;
        }
      });

      //? Passa por cada item do array e adiciona na tabela
      usuarios.forEach(db => {

        disabled = '';
        if (db.cargo.nome == 'Admin' && admin == 1) {
          disabled = 'disabled';
        }

        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>${db.cargo.nome}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-primary view-usuario"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-usuario"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-usuario" ${disabled}><i class="fas fa-trash"></i></button>
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
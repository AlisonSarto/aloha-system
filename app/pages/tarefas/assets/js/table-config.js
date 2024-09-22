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
        <th></th>
        <th>Tarefa</th>
        <th>Tempo para o prazo</th>
        <th>Descrição</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/controle_tarefas/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      var tarefas = data.tarefas;
      tarefas.forEach(db => {

        var status = db.status;
        var prop;

        if (status == "Em andamento") {
          prop = "";
          db.tempo_para_prazo += " min";
        }else if (status == "Atrasada") {
          prop = "disabled";
          db.tempo_para_prazo = "Atrasada";
        }else if (status == "Concluída") {
          prop = "disabled checked";
          db.tempo_para_prazo = "Concluída";
        }

        tableContent += `
          <tr>
            <td data-id="${db.tarefa_id}"><input class="form-check-input form-check-input-lg check" type="checkbox" ${prop}></td>
            <td>${db.tarefa.nome}</td>
            <td>${db.tempo_para_prazo}</td>
            <td>${db.tarefa.descricao}</td>
          </tr>
        `;
      });
      dataTable(tableContent, false);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="99" class="text-center">Nenhuma tarefa encontrada</td>
      </tr>
    `;
    dataTable(tableContent, false);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();

setInterval(function() {
  newTable();
}, 60000); //? Atualiza a tabela a cada 1 minuto
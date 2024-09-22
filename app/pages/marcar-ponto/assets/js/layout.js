$(document).ready(function () {

  $.ajax({
    url: '/api/rostos/view',
    type: 'GET',
    success: function (data) {
      rostos = data.rostos;

      rostos.forEach(rosto => {
        var stade = rosto.stade;
        var color = "";
        if (stade == 'true') {
          color = "text-bg-success";
        }

        console.log(rosto);

        $('#rostos').append(`
          <div class="card col-md-3 col-lg-2 m-2 p-0 cursor-pointer rosto ${color}" data-aloha-id="true" data-rosto-id="${rosto.id}">
            <div class="card-body nome h5 col-md-12">
              ${rosto.nome}
            </div>
          </div>
        `);
      });

      alohaId();
    },
    error: function () {
      $('#rostos').html('<div class="alert alert-danger">Nenhum rosto encontrado!</div>');
    }
  });

});
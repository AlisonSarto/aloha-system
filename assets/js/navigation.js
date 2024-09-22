$(document).ready(function () {

  if (location.href.indexOf('/?') > -1) {

    url = location.href.split('/?')[1];
    url = '/app/pages/' + url;
    
    iframe(url);

  }else {
    //? Se não existir, clica no primeiro link
    $('a.navigation').first().click();
  }

});

//* Offline
window.addEventListener('offline', function () {
  $('iframe').hide();
  $('#container-skeleton').hide();
  $('body').html(`
    <div class="mx-3">
      <div class="alert alert-danger text-center rounded-0 rounded-bottom" role="alert">
        <i class="fas fa-exclamation-triangle"></i> Você está offline!
      </div>
    </div>
  `);
});

//* Online
window.addEventListener('online', function () {
  location.reload();
});

$('a.navigation').click(function (e) {

  e.preventDefault();
  url = $(this).attr('href');
  url = url.split('/?')[1];
  url = '/app/pages/' + url;

  iframe(url);

});

window.onpopstate = function () {
  
  if (location.href.indexOf('/?') > -1) {

    url = location.href.split('/?')[1];
    url = '/app/pages/' + url;

    iframe(url);

  }else {
    history.pushState(null, null, '/');
    location.reload();
  }

};

function iframe(url) {
  
  $('iframe').hide();
  $('#container-skeleton').show();

  $('body').prepend(`
    <div class="progress rounded-0 bg-dark fixed-top" style="height: 3px; z-index:9999">
      <div class="progress-bar bg-success"></div>
    </div>
  `);

  //? Barra de progresso
  progress = 1;
  $('.progress-bar').css('width', progress + '%');
  var interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
    }
    progress += 10;
    $('.progress-bar').css('width', progress + '%');
  }, 600);

  //? Verifica se a url existe no menu
  link = url.replace('/pages/', '/?');
  if ($(`a.navigation[href='${link}']`).length == 0) {

    //? Se não existir, clica no primeiro link
    $('a.navigation').first().click();

    return;
  }
  
  $('iframe').attr('src', url);

  url = url.replace('pages/', '');
  url = url.replace('app/', 'app/?');

  history.pushState(null, null, url);

  //? Verifica se o frame foi carregada
  $('iframe').on('load', function () {

    clearInterval(interval);
    $('.progress-bar').css('width', '100%');
    setTimeout(() => {
      $('.progress').remove();
    }, 750);

    $('#container-skeleton').hide();
    $('iframe').show();

    var title = $('iframe').contents().find('title').text();
    $('title').text(title);

  });

}
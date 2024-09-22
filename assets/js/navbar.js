$(document).ready(function () {

  var script = document.createElement('script');
  script.src = '/assets/js/navigation.js';
  document.head.appendChild(script);
  
  $('body').addClass('sb-nav-fixed');

  navbar = `
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

      <a href="/">
        <img src="/assets/imgs/logo.png" alt="Gelo System" class="mx-4" width="145">
      </a>

      <button class="btn btn-link - order-1 order-lg-0 - me-4 me-lg-0" id="sidebarToggle"><i class="fas fa-bars"></i></button>

      <div class="d-none d-md-inline-block - ms-auto"></div>

      <ul class="navbar-nav ms-auto ms-md-0 me-lg-4">
        <li class="nav-item dropdown">
        
          <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
            <i class="far fa-circle-user fa-lg me-1"></i>
            <span class="d-none d-sm-block me-1 user-name"></span>
          </a>

          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <li>
              <button type="button" class="dropdown-item fw-semibold">
                <i class="fas fa-user me-1"></i>
                <span class="user-name"></span>
              </button>
              <button type="button" class="dropdown-item fw-semibold" id="full-menu">
                <i class="fa-solid fa-expand me-1"></i>
                Tela Cheia
              </button>
              <a class="dropdown-item text-danger fw-semibold" id="exit-menu" href="/sair">
                <i class="fas fa-door-closed me-1"></i>
                Sair
              </a>
            </li>
          </ul>

        </li>
      </ul>

    </nav>
  `;

  $.ajax({
    url: '/api/navbar/',
    type: 'GET',
    async: false,
    success: function (data) {
      navbarList = data.navbar;
    },
    error: function (data) {
      status = data.responseJSON.status;
      if (status == 401) {
        window.location.href = '/sair';
      }else {
        console(data);
      }
    }
  });

  slidebar = createList(navbarList);

  main = $('main').html();

  page = `

    ${navbar}

    <div id="layoutSidenav">

      <div id="slidebar">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav pt-4">
              ${slidebar}
            </div>
          </div>
        </nav>
      </div>

      <div id="layoutSidenav_content">
        ${main}
      </div>
      
    </div>

  `;

  $('body').html(page);

  //? Puxa o nome do usuário logado e coloca no navbar
  $.ajax({
    url: '/api/login/profile',
    type: 'GET',
    success: function (data) {
      $('.user-name').html(data.profile.nome);
    },
    error: function (data) {
      console.log(data);
      $('.user-name').remove();
    }
  });

  //* Toggle
  $('#sidebarToggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('sb-sidenav-toggled');

    $(document).on('click', function(e) {
      if ($(window).width() <= 991 && $('body').hasClass('sb-sidenav-toggled')) {
        if ($(e.target).closest('#layoutSidenav_content').length === 1 || $(e.target).closest('.navigation').length === 1) {
          $('body').removeClass('sb-sidenav-toggled');
        }
      }
    });

  });

  //? Hover no btn Exit
  $('#exit-menu').on('mouseenter', function() {
    $(this).find($('.fa-door-closed')).removeClass('fa-door-closed').addClass('fa-door-open');
  }).on('mouseleave', function() {
    $(this).find($('.fa-door-open')).removeClass('fa-door-open').addClass('fa-door-closed');
  });

  //? Full Screen
  let fullScreen = false;
  $('#full-menu').on('click', function() {
    if (!fullScreen) {
      document.documentElement.requestFullscreen();
      fullScreen = true;
      $(this).find($('.fa-expand')).removeClass('fa-expand').addClass('fa-compress');
    } else {
      document.exitFullscreen();
      fullScreen = false;
      $(this).find($('.fa-compress')).removeClass('fa-compress').addClass('fa-expand');
    }
  });

});

//* Funções
function createList(pages) {

  var list = '';

  for (var i = 0; i < pages.length; i++) {

    var page = pages[i];

    if (page.type == 'header') {
      list += `<div class="sb-sidenav-menu-heading">${page.title}</div>`;
    } else if (page.type == 'link') {
      list += `
        <a class="nav-link navigation" href="/app/?${page.path}">
          <div class="sb-nav-link-icon"><i class="fas fa-${page.icon}"></i></div>
          ${page.title}
        </a>
      `;
    }else if (page.type == 'collapse') {
      list += `
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapse${i}">
          <div class="sb-nav-link-icon"><i class="fas fa-${page.icon}"></i></div>
          ${page.title}
          <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
        <div class="collapse" id="collapse${i}" aria-labelledby="heading${i}" data-bs-parent="#sidenavAccordion">
          <nav class="sb-sidenav-menu-nested nav">
            ${createList(page.pages)}
          </nav>
        </div>
      `;
    }
  }

  return list;
}
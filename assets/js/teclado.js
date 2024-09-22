$(document).ready(function() {

  // Importa um css para a pagina
  $('head').append('<link rel="stylesheet" href="/assets/css/teclado.css" />');

  // Teclado virtual
  var $virtualKeyboard = $('<div class="keyboard">' +
    '<div class="button">1</div>' +
    '<div class="button">2</div>' +
    '<div class="button">3</div>' +
    '<div class="button">4</div>' +
    '<div class="button">5</div>' +
    '<div class="button">6</div>' +
    '<div class="button">7</div>' +
    '<div class="button">8</div>' +
    '<div class="button">9</div>' +
    '<div class="button">0</div>' +
    '<div class="button" id="delete"><i class="fas fa-delete-left"></i></div>' +
    '</div>'
  );

  // Função para exibir o teclado virtual
  function showVirtualKeyboard($input) {
    var $keyboard = $input.next('.keyboard');
    if (!$keyboard.length) {
      $keyboard = $virtualKeyboard.clone();
      $input.after($keyboard);
    }
    $keyboard.slideDown();
    $input.prop('disabled', true);
  }

  // Função para ocultar o teclado virtual
  function hideVirtualKeyboard($input) {
    var $keyboard = $input.next('.keyboard');
    $keyboard.slideUp(function() {
      $keyboard.remove();
      $input.prop('disabled', false);
    });
  }

  // Exibe o teclado virtual ao selecionar o input
  $(document).on('click', '.virtual-keyboard', function() {
    var $input = $(this);
    showVirtualKeyboard($input);
  });

  // Adiciona numeros
  $(document).on('click', '.keyboard .button:not(#delete)', function() {
    var $input = $('.virtual-keyboard.active');
    var number = $(this).text();
    var currentValue = $input.val() || '';
    $input.val(currentValue + number);
  });

  // Deleta o último caractere do input correspondente
  $(document).on('click', '.keyboard #delete', function() {
    var $input = $('.virtual-keyboard.active');
    var currentValue = $input.val() || '';
    $input.val(currentValue.slice(0, -1));
  });

  // Não permita que o teclado feche
  $(document).on('click', function(event) {
    var $input = $('.virtual-keyboard.active');
    if (!$(event.target).closest('.virtual-keyboard, .keyboard, .conBtn').length) {
      hideVirtualKeyboard($input);
    } else {
      return;
    }
  });

  // Evento ao selecionar um campo de entrada
  $(document).on('click', '.virtual-keyboard', function() {
    var $input = $(this);
    $('.virtual-keyboard').not($input).removeClass('active');
    $input.addClass('active');
  });

  // Evento ao selecionar um campo de entrada
  $(document).on('click', '.label', function() {
    var $input = $('.inPct');
    $('.virtual-keyboard').not($input).removeClass('active');
    $input.addClass('active');
  });
  
  // Evento ao selecionar um campo de entrada
  $(document).on('click', '.label-rm', function() {
    var $input = $('.inPct-rm');
    $('.virtual-keyboard').not($input).removeClass('active');
    $input.addClass('active');
  });
});
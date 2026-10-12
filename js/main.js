// Script principal para el Módulo 3 - Componentes Javascript de Bootstrap

$(document).ready(function() {

  // 1. Inicialización de Popovers y Tooltips con jQuery
  // Habilita la información de contexto en los títulos de los productos
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    html: true,
    delay: { show: 150, hide: 250 }
  });

  $('[data-toggle="tooltip"]').tooltip({
    delay: { show: 100, hide: 100 }
  });

  // 2. Modificación de la velocidad de desplazamiento del Carousel (intervalo a 3000ms = 3 segundos)
  $('#promoCarousel').carousel({
    interval: 3000,
    pause: 'hover',
    wrap: true
  });

  // Eventos del Carousel para demostrar listeners de Javascript
  $('#promoCarousel').on('slide.bs.carousel', function(e) {
    console.log('Cambiando a slide en posición:', e.to);
  });

  // 3. Manejo interactivo del formulario del Modal
  $('#formRegistroModal').on('submit', function(e) {
    e.preventDefault();
    var nombreUsuario = $('#modalNombre').val();

    // Ocultar modal mediante la API de Bootstrap
    $('#registroModal').modal('hide');

    // Mostrar alerta de confirmación dinámica
    $('#alertContainer').html(
      '<div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">' +
        '<strong><span class="oi oi-circle-check mr-1"></span> ¡Registro exitoso!</strong> Bienvenido/a, ' +
        $('<div>').text(nombreUsuario).html() + '. Te enviamos un cupón de 15% OFF a tu casilla de correo.' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>'
    );

    // Limpiar campos del formulario
    this.reset();
  });

  // Evento del modal para enfocar el primer campo al abrirse
  $('#registroModal').on('shown.bs.modal', function() {
    $('#modalNombre').trigger('focus');
  });

});

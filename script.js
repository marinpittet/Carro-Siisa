$( document ).ready(function() {
  // copiar y pegar esta función con los ID de los inputs deseados para editar el mensaje de validación
  $(function(){
    var elements = $("input#inputRut");//etiqueta del DOM
    for (var i = 0; i < elements.length; i++) {
      elements[i].oninvalid = function(e) {
        e.target.setCustomValidity("RUT no válido, el RUT debe tener este formato: 12345678-9");//mensaje de validación personalizado
      };
    }
  });

  // Sesion usuario y cambio de datos y pass
  $('.dropdown-menu').click(function(e) {
    e.stopPropagation();
  });

  $('#PassChange').click(function(e) {
    e.stopPropagation();
    $('.cambioPass').css({
        display: 'block'
      });
    $('.datosUser').css({
        display: 'none'
      });
  });
  $('#DataChange').click(function(e) {
    e.stopPropagation();
    $('.cambioData').css({
        display: 'block'
      });
    $('.datosUser').css({
        display: 'none'
      });
  });
  
   // Que es siisapass
  $('#queSiisapass').click(function() {
    $('#esSiisapass').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#esSiisapass");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

   $('#queSiisapass-2').click(function() {
    $('#esSiisapass-2').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#esSiisapass-2");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

   $('#queSiisapass-3').click(function() {
    $('#esSiisapass-3').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#esSiisapass-3");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Formulario reporte de Personas
  $('#add-persona').click(function() {
    $('#add-personaForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-personaForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

   // Formulario reporte de empresas
  $('#add-empresa').click(function() {
    $('#add-empresaForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-empresaForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Formulario reporte de vehiculo
  $('#add-vehiculo').click(function() {
    $('#add-vehiculoForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-vehiculoForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Formulario verificacion de cheques
  $('#add-cheque').click(function() {
    $('#add-chequeForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-chequeForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
  // Formulario verificacion de cheques empresas
  $('#add-chequeEmpresa').click(function() {
    $('#add-chequeEmpresaForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-chequeEmpresaForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Certificado de Antecedentes Comerciales
  $('#add-comercial').click(function() {
    $('#add-comercialForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-comercialForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Certificado de Antecedentes Comerciales empresas
  $('#add-comercialEmpresa').click(function() {
    $('#add-comercialEmpresaForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-comercialEmpresaForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Certificado de Pagos Previsionales
  $('#add-previsional').click(function() {
    $('#add-previsionalForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#add-previsionalForm");

    if (container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

  // Visibilidad de campos de formulario en el caso de hijos o 
  $('input#toggle-on.radio').click(function() {
    if ((this).checked = true) {
      $('#hijos').css({
        display: 'block'
      });
    }
  });

  $('input#toggle-off.radio').click(function() {
    if ((this).checked = true) {
      $('#hijos').css({
        display: 'none'
      });
    }
  });
    
  // Visibilidad de campos de formulario en el caso de hijos o no
  $('input#factura-toggle-on.radio').click(function() {
    if ((this).checked = true) {
      $('#factura').css({
        display: 'block'
      });
    }
  });

  $('input#factura-toggle-off.radio').click(function() {
    if ((this).checked = true) {
      $('#factura').css({
        display: 'none'
      });
    }
  });
  
});

// carro compras lateral
jQuery(document).ready(function($){
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var $L = 1200,
    $menu_navigation = $('#main-nav'),
    $cart_trigger = $('#cd-cart-trigger'),
    $hamburger_icon = $('#cd-hamburger-menu'),
    $lateral_cart = $('#cd-cart'),
    $shadow_layer = $('#cd-shadow-layer');

  //open lateral menu on mobile
  $hamburger_icon.on('click', function(event){
    event.preventDefault();
    //close cart panel (if it's open)
    $lateral_cart.removeClass('speed-in');
    toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
  });

  //open cart
  $cart_trigger.on('click', function(event){
    event.preventDefault();
    //close lateral menu (if it's open)
    $menu_navigation.removeClass('speed-in');
    toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
  });

  //close lateral cart or lateral menu
  $shadow_layer.on('click', function(){
    $shadow_layer.removeClass('is-visible');
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $lateral_cart.hasClass('speed-in') ) {
      $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $menu_navigation.removeClass('speed-in');
    } else {
      $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $lateral_cart.removeClass('speed-in');
    }
  });

  //move #main-navigation inside header on laptop
  //insert #main-navigation after header on mobile
  move_navigation( $menu_navigation, $L);
  $(window).on('resize', function(){
    move_navigation( $menu_navigation, $L);
    
    if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
      $menu_navigation.removeClass('speed-in');
      $shadow_layer.removeClass('is-visible');
      $('body').removeClass('overflow-hidden');
    }

  });
});

function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
  if( $lateral_panel.hasClass('speed-in') ) {
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.removeClass('overflow-hidden');
    });
    $background_layer.removeClass('is-visible');

  } else {
    $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.addClass('overflow-hidden');
    });
    $background_layer.addClass('is-visible');
  }
}

function move_navigation( $navigation, $MQ) {
  if ( $(window).width() >= $MQ ) {
    $navigation.detach();
    $navigation.appendTo('header');
  } else {
    $navigation.detach();
    $navigation.insertAfter('header');
  }
}
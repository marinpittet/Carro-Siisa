$( document ).ready(function() {

  
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

  // Visibilidad de campos de formulario en el caso de hijos o no
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
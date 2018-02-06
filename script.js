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
  
});
$(document).ready(function() {
    // Cuando Bootstrap cambia de tab
  $('.categorias-nav .nav-link').on('shown.bs.tab', function(e) {
        // Resetear todos
    $(".categorias-nav .nav-link").removeClass("bg-white text-dark").addClass("bg-black text-white");
        // Activar solo el seleccionado
    $(e.target).addClass("bg-white text-dark").removeClass("bg-black text-white");
  });

  function generarCard(servicio) {
    return `
      <div class="col-lg-3 mb-2">
        <div class="card rounded shadow-sm">
          <img src="img/${servicio.Imagen}" class="card-img-top img-fluid" alt="${servicio.Nombre}">
          <div class="card-body">
            <h5 class="card-title font-weight-bold">${servicio.Nombre}</h5>
            <p class="card-text">${servicio.slogan}</p>
            <p class="card-text font-weight-light">${servicio.Descripcion}</p>
            <a href="servicio.html?id=${servicio.id}" class="btn btn-dark px-4 rounded">Ver m&aacute;s</a>
          </div>
        </div>
      </div>
    `;
  }
  $.getJSON("bd.json", function(data) {
    let servicios = data.Servicios;
        let grupos = {}; // Guardar por categoría
        // Agrupar servicios en cada categoría
        servicios.forEach(servicio => {
          if (!grupos[servicio.Categoria]) {
            grupos[servicio.Categoria] = "";
          }
          grupos[servicio.Categoria] += generarCard(servicio);
        });
        // Insertar en cada tab
        for (let categoria in grupos) {
          $(`#${categoria}`).html(`
        <h3 class="font-weight-bold">${categoria}</h3>
        <div class="row mt-4">${grupos[categoria]}</div>
        `);
        }
        // Tab "todo" → todas las categorías una tras otra
        let htmlTodo = "";
        for (let categoria in grupos) {
          htmlTodo += `
        <h3 class="font-weight-bold mt-4">${categoria}</h3>
        <div class="row mt-4">${grupos[categoria]}</div>
          `;
        }
        $("#todo").html(htmlTodo);
      });
});
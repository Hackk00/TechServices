// Leer parámetros de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
/*---------------------------------*/
$.getJSON("bd.json", function(data) {
    let servicios = data.Servicios;
    let grupos = {};
    servicios.forEach(servicio => {
        if (id == servicio.id) {
            $(".titulo").text(servicio.Nombre);
            $(".slogan").text(servicio.slogan);
            $(".descripcion").text(servicio.Descripcion);
            $(".significado").text(servicio.Significado);
            $(".beneficios").empty();
            $(".aplicacion").empty();

            servicio.Beneficios.forEach(beneficio => {
              $(".beneficios").append('<li><i class="fas fa-check-circle text-black me-2"></i> &nbsp;' + beneficio + '</li>');
            });

            servicio.Aplicacion.forEach(aplicacion => {
              $(".aplicacion").append('<li><i class="fas fa-check-circle text-black me-2"></i> &nbsp;' + aplicacion + '</li>');
            });

        }
    });
});
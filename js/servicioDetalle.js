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
/*---------------------------------*/
$.getJSON("bd.json", function(data) {
    let servicios = data.Servicios;
    let grupos = {};
    servicios.forEach(servicio => {
        if (id == servicio.id) {
            $("#nombre").val(servicio.Nombre);
            $("#slogan").val(servicio.slogan);
            $("#descripcion").val(servicio.Descripcion);
            $("#categoria").append($("<option></option>").val(servicio.Categoria) // valor del option
                .text(servicio.Categoria) // texto que se verá en el select
                .prop("selected", true) // marcarlo como seleccionado
                );
            $("#descripcion_corta").val(servicio.Descripcion);
            $("#descripcion_larga").text(servicio.Significado);
            /*--------------------------------------------*/
            var beneficiosTexto = servicio.Beneficios.join(", ");
            $("#beneficios").val(beneficiosTexto);
            /*--------------------------------------------*/
            var aplicacionTexto = servicio.Aplicacion.join(", ");
            $("#aplicacion").val(aplicacionTexto);

            $("#estado").append($("<option></option>").val(servicio.estado) // valor del option
                .text(servicio.estado) // texto que se verá en el select
                .prop("selected", true) // marcarlo como seleccionado
                );
        }
    });
});
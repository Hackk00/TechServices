$.getJSON("bd.json", function(data) {
    let servicios = data.Servicios;
    let grupos = {}; // Guardar agrupados por categoría
    // Agrupar servicios por categoría
    servicios.forEach(servicio => {
        if (!grupos[servicio.categoria]) {
            grupos[servicio.categoria] = [];
        }
        grupos[servicio.categoria].push(servicio);
    });
    // Cargar en la tabla
    let tbody = $("#tabla-servicios");
    servicios.forEach(servicio => {
        let fila = `
            <tr id="fila_${servicio.id}">
                <td>${servicio.Nombre}</td>
                <td>${servicio.Descripcion}</td>
                <td>${servicio.Categoria}</td>
                <td><img src="img/${servicio.Imagen}" alt="${servicio.Imagen}" class="img-thumbnail" width="50"></td>
                <td>
                    <span class="badge text-white ${servicio.estado === "Activo" ? "bg-success" : "bg-danger"}">
                        ${servicio.estado}
                    </span>
                </td>
                <td>
                    <div class="btn-group" role="group">
                        <a class="btn btn-dark btn-sm" href="editar_servicio.html?id=${servicio.id}" data-bs-toggle="tooltip" title="Editar">
                            <i class="fas fa-edit"></i>
                        </a>
                        <button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" data-id="${servicio.id}" data-toggle="modal" data-target="#servicio_${servicio.id}" title="Eliminar">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
        tbody.append(fila);
    });
    // Inicializar tooltips de Bootstrap
    $('[data-bs-toggle="tooltip"]').tooltip();
    servicios.forEach(servicio => {
        $(".tabla_servicios").append(`
            <div class="modal fade" id="servicio_${servicio.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row p-2">
                                <div class="col-lg-12 form-group text-center">
                                    <h4 class="font-weight-bold text-dark mt-2">Deseas eliminar el servicio ${servicio.Nombre}?</h4>
                                </div>
                                <div class="col-lg-12 form-group text-center mt-3">
                                    <button class="btn btn-danger btn-sm" type="button" data-dismiss="modal">
                                        <i class="fas fa-times"></i>
                                        &nbsp;
                                        Cancelar
                                    </button>
                                    &nbsp;
                                    <button class="btn btn-dark btn-sm confirmar" type="button">
                                        <i class="fas fa-check"></i>
                                        &nbsp;
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    $(document).on('click', '.confirmar', function() {
    // Obtener el id del servicio desde el botón
    const modal = $(this).closest('.modal');       // Modal actual
    const servicioId = modal.attr('id').split('_')[1]; // extrae el id del modal: servicio_1 -> 1

    // Hacer fade out a la fila correspondiente
    $('#fila_' + servicioId).fadeOut(500, function() {
        $(this).remove(); // opcional: eliminar del DOM después del fade
    });

    // Cerrar el modal
    modal.modal('hide');
});
});
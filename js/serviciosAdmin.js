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
            <tr>
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
                        <button class="btn btn-dark btn-sm" type="button" data-bs-toggle="tooltip" title="Editar">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" type="button" data-bs-toggle="tooltip" title="Eliminar">
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
});
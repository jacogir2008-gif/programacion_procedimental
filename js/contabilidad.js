function guardarRegistro() {

    let fecha = document.getElementById("fecha").value;
    let concepto = document.getElementById("concepto").value.trim();
    let tipo = document.getElementById("tipo").value;
    let valor = document.getElementById("valor").value;

    // Validaciones
    if (fecha === "") {
        alert("La fecha es obligatoria");
        return;
    }

    if (concepto.length < 3) {
        alert("El concepto debe tener al menos 3 caracteres");
        return;
    }

    if (valor === "" || isNaN(valor) || valor <= 0) {
        alert("El valor debe ser un número mayor a 0");
        return;
    }

    valor = parseFloat(valor);

    const tabla = document.getElementById("tablaRegistros");

    let tagColor = tipo === "Ingreso"
        ? "is-success"
        : "is-danger";

    if (filaEditando) {

        filaEditando.cells[0].innerText = fecha;
        filaEditando.cells[1].innerText = concepto;

        filaEditando.cells[2].innerHTML =
            `<span class="tag ${tagColor}">
                ${tipo}
            </span>`;

        filaEditando.cells[3].innerText = valor;

    } else {

        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${fecha}</td>
            <td>${concepto}</td>
            <td>
                <span class="tag ${tagColor}">
                    ${tipo}
                </span>
            </td>
            <td class="has-text-right">${valor}</td>
            <td class="has-text-centered">
                <button class="button is-small is-info edit-btn"
                    onclick="editarRegistro(this)">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="button is-small is-danger delete-btn"
                    onclick="eliminarRegistro(this)">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    }

    actualizarTotales();
    cerrarModal();
}
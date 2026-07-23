function guardarProducto() {
    // 1. Obtener referencias a los elementos del DOM
    const inputCodigo = document.getElementById("codigo");
    const inputNombre = document.getElementById("nombre");
    const inputCantidad = document.getElementById("cantidad");
    const selectMarca = document.getElementById("marca");
    const selectMarcaControl = document.getElementById("selectMarcaControl");
    const divAlerta = document.getElementById("alertaFormulario");

    // 2. Extracción de valores limpios
    let codigo = inputCodigo ? inputCodigo.value.trim() : "";
    let nombre = inputNombre ? inputNombre.value.trim() : "";
    let cantidad = inputCantidad ? inputCantidad.value : "";
    let marca = selectMarca ? selectMarca.value : "";

    // 3. Limpiar bordes rojos y alertas previas
    if (inputCodigo) inputCodigo.classList.remove("is-danger");
    if (inputNombre) inputNombre.classList.remove("is-danger");
    if (inputCantidad) inputCantidad.classList.remove("is-danger");
    if (selectMarcaControl) selectMarcaControl.classList.remove("is-danger");
    if (divAlerta) divAlerta.innerHTML = "";

    // Acumulador de errores
    let errores = [];

    // 4. Validaciones
    if (codigo === "") {
        if (inputCodigo) inputCodigo.classList.add("is-danger");
        errores.push("El código del producto no puede estar vacío.");
    }

    if (nombre === "") {
        if (inputNombre) inputNombre.classList.add("is-danger");
        errores.push("El nombre del producto es obligatorio.");
    } else if (nombre.length < 3) {
        if (inputNombre) inputNombre.classList.add("is-danger");
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    if (cantidad === "" || isNaN(cantidad) || Number(cantidad) < 0) {
        if (inputCantidad) inputCantidad.classList.add("is-danger");
        errores.push("La cantidad debe ser un número igual o mayor a 0.");
    }

    if (marca === "" || marca === "Selecciona una marca") {
        if (selectMarcaControl) selectMarcaControl.classList.add("is-danger");
        errores.push("Debes elegir una marca válida.");
    }

    // 5. Si hay errores, mostrar la alerta de Bulma en la pantalla y detener
    if (errores.length > 0) {
        if (divAlerta) {
            divAlerta.innerHTML = `
                <div class="notification is-danger is-light mb-4">
                    <button class="delete" onclick="this.parentElement.remove()"></button>
                    <strong><i class="fas fa-exclamation-triangle mr-2"></i>Revisa los siguientes campos:</strong>
                    <ul class="ml-4 mt-2" style="list-style-type: disc;">
                        ${errores.map(err => `<li>${err}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        return; // Frena el guardado
    }

    // 6. Si pasa las validaciones: guardar el objeto
    const productoGuardado = {
        codigo: codigo,
        nombre: nombre,
        cantidad: parseInt(cantidad, 10),
        marca: marca
    };

    console.log("Producto guardado con éxito:", productoGuardado);
    
    // 7. Notificación de éxito en pantalla y reset del formulario
    if (divAlerta) {
        divAlerta.innerHTML = `
            <div class="notification is-success is-light mb-4">
                <button class="delete" onclick="this.parentElement.remove()"></button>
                <strong><i class="fas fa-check-circle mr-2"></i>¡Éxito!</strong> El producto <b>${nombre}</b> ha sido guardado correctamente.
            </div>
        `;
    }

    const formulario = document.getElementById("formProducto");
    if (formulario) formulario.reset();
}
function validarFormulario() {
    // 1. Obtenemos los valores en el momento de la ejecución
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // 2. Evaluamos si algún campo está vacío (usamos .trim() para ignorar espacios en blanco)
    if (
        nombre.trim() === "" || 
        apellido.trim() === "" || 
        tipoDocumento.trim() === "" || 
        numeroDocumento.trim() === "" || 
        telefono.trim() === "" || 
        correo.trim() === "" || 
        genero.trim() === "" || 
        fechaNacimiento.trim() === ""
    ) {
        alert("Por favor, complete todos los campos.");
        return false; // Detiene el envío o proceso
    }

    alert("¡Todos los campos están completos!");
    return true; // Permite continuar
}


 let Nombre = document.getElementById("Nombre").value;
 let Apellido = document.getElementById("Apellido").value;
 let Correo_electronico = document.getElementById("Correo").value;
 let tipo_de_documento = document.getElementById("tipo de documento").value;
 let numero_de_documento = document.getElementById("numero de documento").value;
 let telefono = document.getElementById("telefono").value;
 let fecha_nacimiento = document.getElementById("fechanacimiento").value;
 let genero = document.getElementById("genero").value;

 function validarFormulario() {
     if(Nombre == "" || Apellido == "" || Correo == "" || tipo_de_documento == "" || numero_de_documento == "" || telefono == "" || fecha_nacimiento == "" || genero == "")
         alert("Por favor, complete todos los campos.");
         return false;}

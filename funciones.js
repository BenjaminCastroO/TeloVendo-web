
function validarForm1() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var edad = document.getElementById("edad").value;

    if (nombre == "" || email == "" || telefono == "" || edad == "") {
        alert("Todos los campos son obligatorios");
    }
}

function validarForm() {
    var formulario = document.getElementById("form-contacto");
    const camposRequeridos = formulario.querySelectorAll("[required]");
    const camposVacios = [];
  
    camposRequeridos.forEach((campo) => {
      if (campo.value === "") {
        camposVacios.push(campo.name);
      }
    });
  
    if (camposVacios.length > 0) {
      alert(`Por favor complete los siguientes campos: ${camposVacios.join(", ")}`);
    }
  }
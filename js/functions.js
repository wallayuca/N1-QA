function calcularDigitoVerificador(run) {
  run = run.replace(/\./g, "").replace("-", ""); // Remover puntos y guión
  var suma = 0,
    mult = 2;
  for (var i = run.length - 1; i >= 0; i--) {
    suma += mult * parseInt(run.charAt(i), 10);
    mult = mult === 7 ? 2 : mult + 1;
  }
  var resultado = 11 - (suma % 11);
  return resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();
}

function validarRut() {
  var runInput = document.getElementById("run");
  var run = runInput.value;
  var digitoVerificador = run.slice(-1).toUpperCase();
  var runSinDigito = run.slice(0, -1);
  if (calcularDigitoVerificador(runSinDigito) === digitoVerificador) {
    alert("RUN válido");
  } else {
    alert("RUN inválido");
  }
}

function limpiarFormulario() {
  document.getElementById("myForm").reset();
}

function guardarFormulario() {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      // Código para enviar el formulario
      event.preventDefault(); // Evita el envío del formulario por defecto (recarga de la página)
      alert("Formulario enviado");
    });
}

// Obtén la fecha actual
var fechaActual = new Date().toISOString().split("T")[0];

// Establece la fecha máxima permitida en la entrada de fecha
document.addEventListener("DOMContentLoaded", function () {
  var fechaInput = document.getElementById("fechaNacimiento");
  fechaInput.setAttribute("max", fechaActual);
});

function recuperarDatosGeoreferenciales() {
  // Descargar y descomprimir el archivo JSON
  fetch("http://bulk.openweathermap.org/sample/city.list.json.gz")
    .then((response) => response.json())
    .then((data) => {
      // Filtrar las ciudades de Chile
      const citiesChile = data.filter((city) => city.country === "CL");

      // Hacer algo con los datos de las ciudades de Chile
      console.log(citiesChile);
    })
    .catch((error) => console.error(error));
}

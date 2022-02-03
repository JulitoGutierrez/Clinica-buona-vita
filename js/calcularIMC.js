var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
   var paciente= pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validarPeso(peso);
  var alturaValida = validarAltura(altura);

  //VALIDANDO PESO
  if (!pesoValido) {
    console.log("Peso incorecto");
    pesoValido = false;
    tdImc.textContent = "Peso incorrecto";
    paciente.classList.add("paciente-incorrecto");
  }

  //VALIDANDO ALTURA
  if (!alturaValida) {
    console.log("Altura incorrecta");
    alturaValida = false;
    tdImc.textContent = "Altura incorrecta";
    paciente.classList.add("paciente-incorrecto");
  }


  if (pesoValido && alturaValida) {
    tdImc.textContent = calcularIMC(peso, altura);
  }
}

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validarPeso(peso) {
  if (peso > 0 && peso < 500) {
    return true;
  } else {
    return false;
  }
}
function validarAltura(altura) {
if (altura > 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}
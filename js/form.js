var botonAdicionar = document.querySelector("#adicionar-paciente");

//funcion para adicionar funciones al hacer click en el boton adicionar clientess
botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  //variable que representa el formulario
  var form = document.querySelector("#form-adicionar");
  var paciente = captuarDatosPaciente(form);

  var errores= validarPaciente(paciente);
  if (errores.length > 0) {
    exhibirErrores(errores);
    return;
  }
  adicionarPacienteEnTabla(paciente);
  
  form.reset();

  var mensajesErrores = document.querySelector("#mensajes-errores");
  mensajesErrores.innerHTML="";
});

function adicionarPacienteEnTabla(paciente) {
  var pacienteTr= construirTR(paciente);
  //variable que representa la tabla
  var tabla = document.querySelector("#tabla-pacientes");
  // asignando la fila nueva creada a la tabla
  tabla.appendChild(pacienteTr);
}

//capturando datos del formulario
function captuarDatosPaciente(form) {
  //Creando la clase paciente, con sus atributos
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function construirTR(paciente) {
  
  //creando espacio para fila
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  
  //asignando los valores de las columnas a su respectiva fila
  pacienteTr.appendChild(construirTD(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(construirTD(paciente.peso, "info-peso"));
  pacienteTr.appendChild(construirTD(paciente.altura, "info-altura"));
  pacienteTr.appendChild(construirTD(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(construirTD(paciente.imc, "info-imc"));
  
  return pacienteTr;
}

//funcion para construir columnas
function construirTD(dato, clase) {
  var td=  document.createElement("td");
  td.classList.add(clase);
  td.textContent= dato;
  return td;
}

function validarPaciente(paciente) {
  var errores = [];
  
  if (paciente.nombre.length==0) {
    errores.push("El nombre no puede ser nulo");
  }
  if (paciente.peso.length==0) {
    errores.push("El peso no puede ser nulo");
  }
  if (paciente.altura.length==0) {
    errores.push("La altura no puede ser nula");
  }
  if (paciente.gordura.length==0) {
    errores.push("La gordura no puede ser nula");
  }
  if (!validarPeso(paciente.peso)) {
    errores.push("El peso es incorrecto");
  }
  if (!validarAltura(paciente.altura)) {
    errores.push("La altura es incorrecta");
  }
  return errores;
}

function exhibirErrores(errores) {
  var ul= document.querySelector("#mensajes-errores");
  ul.innerHTML= ""
  errores.forEach(function(error) {
    var li = document.createElement("li");
    li.textContent= error;
    ul.appendChild(li);
  });
}
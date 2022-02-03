var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.textContent;
      var expresion= new RegExp(this.value, "i");

      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});
/*
[
    {
        "nombre": "Jéssica",
        "peso": 47,
        "altura": 1.54,
        "gordura": 17,
        "imc": 19.82
    },
    {
        "nombre": "Fabio",
        "peso": 70,
        "altura": 1.7,
        "gordura": 17,
        "imc": 24.22
    },
    {
        "nombre": "Teresa",
        "peso": 60,
        "altura": 1.7,
        "gordura": 13,
        "imc": 20.76
    },
    {
        "nombre": "Marina",
        "peso": 75,
        "altura": 1.7,
        "gordura": 26,
        "imc": 25.95
    },
    {
        "nombre": "Lucas",
        "peso": 23,
        "altura": 1.25,
        "gordura": 10,
        "imc": 14.72
    },
    {
        "nombre": "Erick",
        "peso": 73,
        "altura": 1.75,
        "gordura": 10,
        "imc": 23.84
    },
    {
        "nombre": "Daniel",
        "peso": 78,
        "altura": 1.85,
        "gordura": 19,
        "imc": 22.79
    }
]
*/

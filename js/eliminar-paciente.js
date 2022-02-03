var pacientes = document.querySelectorAll(".paciente");
var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event) {
    //con event.target estoy apuntando solo al elemento donde hago el click, en este caso
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function() {
        event.target.parentNode.remove();        
    }, 500);
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     })
// })

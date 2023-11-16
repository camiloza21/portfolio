const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
} )

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const enviar = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeconsulta = document.querySelector(".cerrar-consulta");

enviar.addEventListener("click", () => {
    event.preventDefault();
    modal.classList.add("modal--show");
})

closeconsulta.addEventListener("click", () => {
    event.preventDefault();
    modal.classList.remove("modal--show");
})

function confirmSuscription(){
    let suscribirte = document.querySelector(".suscribirse").value;

    let respuesta = confirm("¿Estas seguro de que quieres suscribirte?")

    if( respuesta) {
        alert("Muchas gracias por suscribirse");
    }
    
    else  {
        alert("No se ha suscripto");
    }
}

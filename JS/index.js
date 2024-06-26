import ValidarPrecio from "./validacionPrecio.js";
import { tiposError, mensajes } from "./customError.js";
import { crearProducto } from "./crearObjeto.js";

const camposFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const limpiar = document.querySelector("[data-boton-limpiar]");

formulario.addEventListener("submit",evento=>crearProducto(evento));

limpiar.addEventListener("click", () => {
    camposFormulario.forEach(campo => {
        campo.value = "";
    })
    const mensajeError = document.querySelector(".mensaje_error");
    mensajeError.textContent = "";
})

camposFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificarCampos(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificarCampos(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    if (campo.name == "precio" && campo.value!="") {
       ValidarPrecio(campo);
    }
    tiposError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
        }
    })
    const mensajeError = campo.parentNode.querySelector(".mensaje_error");
    const validarInputCheck = campo.checkValidity();
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = "";
    }
}
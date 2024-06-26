import { conexiónListaObjetos } from "./conexiónListaObjetos.js";
import { mostrarListaObjetos } from "./mostrarObjetos.js";


export async function crearProducto(evento){
    evento.preventDefault();
    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen=document.querySelector("[data-imagen]").value;

    try{
        await conexiónListaObjetos.agregarObjetoLista(nombre,precio,imagen);
    }catch(e){
        alert(e);
    }
    mostrarListaObjetos();
}

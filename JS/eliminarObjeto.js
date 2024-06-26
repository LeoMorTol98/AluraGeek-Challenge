import { conexiónListaObjetos } from "./conexiónListaObjetos.js";
import { mostrarListaObjetos } from "./mostrarObjetos.js";

const botones=document.querySelectorAll(".boton_objeto_lista");

export async function eliminarProducto(boton){
    const id=boton.parentNode.querySelector(".id").value;
    try{
        await conexiónListaObjetos.EliminarObjetoLista(id);
    }catch(e){
        alert(e);
    }
    mostrarListaObjetos();
}

botones.forEach(boton => {
    boton.addEventListener("click",() => eliminarProducto(boton));
})
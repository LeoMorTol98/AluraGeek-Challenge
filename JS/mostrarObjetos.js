import { conexiónListaObjetos } from "./conexiónListaObjetos.js";

const lista=document.querySelector("[data-Lista_Productos]");

export default function crearListaObjetos(nombre,precio,imagen){
    const objetoLista=document.createElement("li");
    objetoLista.className="objeto_lista";

    objetoLista.innerHTML=`<div class="contenedor_lista">
                                <img class="imagen_lista" src="${imagen}"/>
                                <p class="nombre_lista">${nombre}</p>
                                <div class="precio_eliminar">
                                    <p class="precio_objeto_lista">$${precio}</p>
                                    <button class="boton_objeto_lista">
                                        <img src="../IMG/eliminar.png" />
                                    </button>
                                </div>
                            </div>`;
    return objetoLista;
}

async function mostrarListaObjetos(){
    try{
        const listaAPI=await conexiónListaObjetos.ListaObjetos();
        listaAPI.forEach(element => lista.appendChild(crearListaObjetos(element.nombre,element.precio,element.imagen)));
    } catch{
        lista.innerHTML="<h2 class='titulo_lista'>Ha ocurrido un error con la conección <br> Verifica que el servidor este inicializado</h2>";
    }
}

mostrarListaObjetos();
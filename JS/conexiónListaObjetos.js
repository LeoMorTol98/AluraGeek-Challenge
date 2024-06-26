export async function ListaObjetos() {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export async function EliminarObjetoLista(id) {
    const conexion=await fetch(`http://localhost:3001/productos?id=${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    });

    const conexionConvertida=conexion.json();

    if (!conexion.ok){
        throw new Error("Ha ocurrido un problema para eliminar el producto");
    }

    return conexionConvertida;
}

export async function agregarObjetoLista(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });
    const conexionConvertida = await conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;

}

export const conexiónListaObjetos={
    ListaObjetos,agregarObjetoLista,EliminarObjetoLista
}
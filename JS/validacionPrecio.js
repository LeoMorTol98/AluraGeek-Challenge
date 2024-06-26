export default function ValidarPrecio(campo){
    const precio=campo.value;

    if (precioSoloNumeros(precio)){
        campo.setCustomValidity("El precio no pueden ser letras ni caracteres especiales");
    }
    if (esMayorCero(precio)){
        campo.setCustomValidity("jjj")
    }
}

function precioSoloNumeros(precio){
    let numero=parseFloat(precio);
    return isNaN(numero);
}

function esMayorCero(precio){
    let numero=parseFloat(precio);
    return numero<0
}
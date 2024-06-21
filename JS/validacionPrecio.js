export default function ValidarPrecio(campo){
    const precio=campo.value.replace(/[,]/g,".");

    if (!precioSoloNumeros(precio)){
        campo.setCustomValidity("El precio no pueden ser letras ni caracteres especiales");
    }else{
        if (masDeUnPunto(precio)){
            campo.setCustomValidity("No se debe de ingresar mas de un punto")
        }
        if (!precioValido(precio)){
            campo.setCustomValidity("El precio debe ser mayor o igual cero")
        }
    }
}

function precioSoloNumeros(precio){
    let numeros=[
        "1","2","3","4","5","6","7","8","9","0","."
    ]
    let Noletras=true;
    precio.forEach(element => {
        if (!numeros.includes(element)){
            Noletras=false;
            return Noletras;
        }
    });
    return Noletras;
}

function masDeUnPunto(precio){
    let contador=0;
    precio.forEach(element=>{
        if (element=="."){
            contador++;
        }
    })
    return contador>1;
}

function precioValido(precio){
    let valido=true;
    let precios=precio.parseFloat();
    if(precios<0)valido=false;
    return valido
}
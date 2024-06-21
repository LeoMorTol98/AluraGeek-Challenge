export const tiposError=["valueMissing",
    "patternMissmatch", "tooShort", "customError"
];

export const mensajes={
    nombre:{
        valueMissing:"el campo nombre no puede estar vacio",
        tooShort:"Por favor ingresa un numbre de minimo 4 caracteres"
    },
    precio:{
        valueMissing:"El campo precio no puede estar vacio",
        tooShort:"Ingresa minimo un precio de una cifra",
        customError:"El precio ingresado no es valido",
        patterMissmatch:"Ingresa un precio con el siguinete formato numero(3-5).numero(1-2)"
    },
    imagen:{
        valueMissing:"El campo imagen no puede estar vcio",
        tooShort:"Ingresa una URL de 10 o más caracteres"
    }
}
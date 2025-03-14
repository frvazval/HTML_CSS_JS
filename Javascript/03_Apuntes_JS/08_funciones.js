// FUNCIONES

// LLamada o invocación, en Javascript las puedes llamar antes de declararlas
console.log(sumar(1,2));
console.log(corregirNombre("jose mARiA del CódIgo"));

// Declaración, se puede hacer al final del código, tambien se pueden poner en un fichero aparte y serian librerias
function sumar(num1, num2) {
    return num1 + num2
}

function corregirNombre(nombre) {  
    nombre = nombre.toLocaleLowerCase()
    nombre = nombre.split(" ")
    let nombreCorregido = ""
    for (palabra of nombre) {
        if (palabra != "de"  && palabra != "las" && palabra != "y" && palabra != "los") {
            let inicial  = palabra.at(0).toUpperCase() // primera letra
            let restoNombre = palabra.slice(1) // el resto de la palabra hasta el final    
            palabra = inicial + restoNombre
        }
        nombreCorregido += palabra + " "
    }
    return nombreCorregido
}

// ==================================================================================
// Sistema 2 de declarar funciones, en este caso no puedes utilizarla antes de la linea de declaración

let sumar2 = function(num1,num2) {
    return num1 + num2
}

console.log(sumar2(3,4));


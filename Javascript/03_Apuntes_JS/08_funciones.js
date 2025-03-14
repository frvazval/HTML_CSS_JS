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

// La llamada a la función debe ser posterior a su definición
console.log(sumar2(3,4));

// ==================================================================================
// Sistema 3 de declarar funciones, ARROW FUNCTION

let sumar3 = (num1, num2) => {
    return num1 + num2
}

console.log(sumar3(3,4));

// ==================================================================================
// Sistema 4 de declarar funciones, ARROW FUNCTION

let sumar4 = (num1, num2) => num1 + num2

console.log(sumar4(3,4));

// ==================================================================================
// Sistema 5 de declarar funciones, ARROW FUNCTION

let cuadrado = num1 => num1 * num1

console.log(cuadrado(3));

// ==================================================================================

const listaFrutas = ["kiwi", "piña", "pera"]
listaFrutas.forEach((fruta) => {
    console.log(fruta);
})


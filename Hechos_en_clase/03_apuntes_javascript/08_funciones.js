// FUNCIONES

// Creación "clásica" 
// Llamada o invocación
console.log(sumar(1, 2));
console.log(sumar(567, 6789));
console.log(sumar(1, 2));

// Declaración
function sumar(num1, num2) {
    return num1 + num2
}


console.log(corregirNombre("mAriA de LaS merceDeS y dE TOdaS lAs SantAS"));
console.log(corregirNombre("josÉ mARiA del CódIGo"));
console.log(corregirNombre("mAriA de LaS merceDeS y dE TOdaS lAs SantAS"));

function corregirNombre(nombre) {

    // Paso 1 : convertir todo en minúsulas
    nombre = nombre.toLowerCase()

    // Paso 2 : obtener las palabras --> split(" ")
    nombre = nombre.split(" ")

    let nombreCorregido = ""
    for (palabra of nombre) {

        if (palabra != "de" && palabra != "las" && palabra != "y" && palabra != "los") {
            let inicial = palabra.at(0).toUpperCase()
            let restoNombre = palabra.slice(1)
            palabra = inicial + restoNombre
        }

        nombreCorregido += palabra + " "
    }

    return nombreCorregido
}


// ===========================================================
// Sistema 2
let sumar2 = function (num1, num2) {
    return num1 + num2
}
// La invocación a la función debe ser posterior a su definición
console.log(sumar2(3, 4));

// ===========================================================
// Sistema 3 ARROW FUNCTION
let sumar3 = (num1, num2) => {
    return num1 + num2
}
console.log(sumar3(3, 4));

// ===========================================================
// Sistema 4 ARROW FUNCTION
let sumar4 = (num1, num2) => num1 + num2
console.log(sumar4(3, 4));

// ===========================================================
// Sistema 5 ARROW FUNCTION
let sumar5 = num1 => num1*num1

console.log(sumar5(3));

const listaFrutas = ["kiwi", "piña", "pera"]
listaFrutas.forEach((fruta) => {
    console.log(fruta);
})

// for (fruta of listaFrutas) {....}
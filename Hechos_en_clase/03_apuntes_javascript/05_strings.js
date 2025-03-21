// STRINGS

let palabra = "Abracadabra"

// Métodos de JS para STRINGS
// lenght --> obtener la longitud de la cadena
console.log(palabra.length);

console.log(palabra[3]);

// at(posicion) --> 
console.log(palabra.at(-2));
console.log(palabra.at(0));

// Métodos para pasar el texto a mayúsculas y minúsculas
let palabraMayus = palabra.toLocaleUpperCase()
palabra = palabra.toLocaleUpperCase() // a mayúsculas

palabra = palabra.toLocaleLowerCase() // a minúsculas

// trim() --> strip() de Python
palabra2 = "            " + palabra + "          "
console.log(palabra2.length);
palabra2 = palabra2.trim()
console.log(palabra2.length);

// replace("caracter/s a cambiar", "Lo que pones")
console.log(palabra.replace("ab", "ez"));

// replaceAll("caracter/s a cambiar", "Lo que pones")
console.log(palabra.replaceAll("a", "i"));

let frase = "Como no estudies Javascript te vas a enterar"

// startsWith( caracter/es de inicio)
console.log(frase.startsWith("Como"));
console.log(frase.startsWith("como"));

// endsWith( caracter/es al final)
console.log(frase.endsWith("rar"));
console.log(frase.startsWith("rir"));

// slice
console.log(palabra.slice(1));
console.log(palabra.slice(1, 4));

// split(elemento separador) --> es un array (lista)
console.log(frase.split(" "));

let lista = [] // array vacío
let string = ""
let nombre = "mAriA de LaS merceDeS y dE TOdaS lAs SantAS"

// Maria de las Mercedes y de Todas las Santas

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

nombreCorregido

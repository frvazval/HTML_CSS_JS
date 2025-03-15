// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna funcion matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
let resultado = 0
let total = 0
for (numero of arrayNumeros1) {
    resultado += numero
}

console.log(resultado);
total = resultado
resultado = 0
for (numero of arrayNumeros2) {
    resultado += numero
}

console.log(resultado);
total += resultado
console.log(total);
// 2) Mostrar por consola el promedio
let cantidadNumeros = arrayNumeros1.length
let suma = 0

for (numero of arrayNumeros1) {
    suma += numero
}

let promedio = suma / cantidadNumeros
console.log(promedio);

suma = 0
cantidadNumeros = arrayNumeros2.length

for (numero of arrayNumeros2) {
    suma += numero
}

promedio = suma / cantidadNumeros
console.log(promedio);

// 3) Encontrar los valores máximo y mí­nimo


// 4) Sumar los valores con í­ndice par y restar los impares


// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.


// 6) Lo mismo para el texto más corto.


// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.


// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

// ====================================================================================================

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["CafÃ©", 5.2, 0.5]
]
// Se muestra el nombre del artí­culo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artí­culos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artí­culos y el importe total es de 12.7 euros"

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.
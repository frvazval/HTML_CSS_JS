// ARRAYS

let frutas = ["kiwi", "pera", "fresa", "pomelo"] // El primero tiene el indice 0

console.log(frutas);

frutas[3] = "limón"

console.log(frutas);

console.log(frutas.at(-1)); // ultimo elemento

// El tamaño de un array. En Python era len(frutas)
// en JS frutas.length

let tamaño_array = frutas.length
console.log(tamaño_array);

// Cómo añadir un elemento al final: push(elemento a añadir)
frutas.push("mandarina")
console.log(frutas);

// Cómo eliminar el ultimo elemento: pop(), si quieres lo puedes guardar en una variable
let frutaEliminada = frutas.pop()
console.log(frutaEliminada);
console.log(frutas);

// Cómo añadir un elemento al principio: unshift(elemento a añadir)
frutas.unshift(frutaEliminada)
console.log(frutas);

// Cómo eliminar el elemento inicial: shift(), tambien se puede guardar en una variable
frutaEliminada = frutas.shift()
console.log(frutaEliminada);
console.log(frutas);

// Pasar el array a texto
console.log(frutas.toString()); // toString crea una cadena de texto con los elementos separados por comas
console.log(frutas.join(" - ")); // join te permite elegir el separador entre elementos

// Obtener la posición de un elemento concreto: indexOf(elemento), solo muestra el primero que existe
console.log(frutas.indexOf("kiwi"));
console.log(frutas.indexOf("mandarina")); // Si no existe devuelve -1

frutas.push("fresa") 
console.log(frutas.indexOf("fresa")); // ahora tenemos dos fresa, pero devuelve la posición del primero que encuentra
console.log(frutas.lastIndexOf("fresa")); // empieza a buscar por el final

// Para invertir el orden de los elementos
frutas.reverse() // Modifica el array original
console.log(frutas);

let arrayAlReves = frutas.toReversed() // Este no modifica el original, lo guarda invertido en el otro array

// Cortar el array
let extraccion = frutas.slice(1, 3) // Corta del 1 al 3, pero el 3 no esta incluido, no modifica el original
console.log(extraccion);

// Ordenar el array original
frutas.sort() // Ordena el array, altera el original
console.log(frutas);

// Ordenar el array y guardarlo sin alterar el original
let frutasOrdenadas = frutas.toSorted()
console.log(frutasOrdenadas);

// Destructuring
let [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas // Guarda cada elemento en una variable
console.log(fruta3);

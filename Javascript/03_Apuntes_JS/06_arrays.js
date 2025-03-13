// ARRAYS

let frutas = ["kiwi", "pera", "fresa", "pomelo"] // El primero tiene el indice 0

console.log(frutas);

frutas[3] = "limón"

console.log(frutas);

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


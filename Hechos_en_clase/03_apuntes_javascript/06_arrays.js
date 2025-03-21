// ARRAYS

let frutas = ["kiwi", "pera", "fresa", "pomelo"]
//              0       1       2           3
console.log(frutas);

frutas[3] = "limón"
console.log(frutas);

console.log(frutas.at(-1));
console.log(frutas[frutas.length -1]);

// El tamaño de un array. En Python era len(lista)
let arraySize = frutas.length 
console.log(arraySize);

// Cómo añadir un elemento al final: push(elemento a añadir)
frutas.push("mandarina")
console.log(frutas);
// Cómo eliminar el último elemento: pop()
let frutaEliminada = frutas.pop()
console.log(frutas);
console.log(frutaEliminada);
// Cómo añadir un elemento al principio: unshift(elemento a añadir)
frutas.unshift("mandarina")
console.log(frutas);
// Cómo eliminar el elemento inicial: shift()
frutaEliminada = frutas.shift()
console.log(frutas);
console.log(frutaEliminada);

// Pasar el array a texto
console.log(frutas.toString());
console.log(frutas.join(" | "));

// Obtener la posición de un elemento: indexOf(elemento)
console.log(frutas.indexOf("kiwi"));
console.log(frutas.indexOf("mandarina"));
frutas.push("fresa")
console.log(frutas);
console.log(frutas.indexOf("fresa"));
console.log(frutas.lastIndexOf("fresa"));

// Revertir una copia del array
let arrayAlReves = frutas.toReversed()

// Revertir el array original
frutas.reverse()
console.log(frutas);

// Cortar el array
let extraccion = frutas.slice(1,3)
console.log(extraccion);
console.log(frutas);

// Ordenar el array y guardarlo en una copia
let frutasOrdenadas = frutas.toSorted()
console.log(frutasOrdenadas);

// Ordenar el array original
frutas.sort()
console.log(frutas);

// Destructuring
let [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas
console.log(fruta1);
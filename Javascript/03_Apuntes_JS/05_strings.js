// STRINGS

let palabra = "Abracadabra"

// Métodos de JS para STRINGS

// lenght --> obtener la longiyud de la cadena
console.log(palabra.length);

// at(posicion)
console.log(palabra.at(-1)); // ultima letra
console.log(palabra.at(0)); // primera letra
console.log(palabra.at(-2)); // segunda letra desde el final

// Metodos para pasar el texto a mayusculas y minusculas
// a mayusculas
let palabraMayus = palabra.toLocaleUpperCase()
palabra = palabra.toLocaleUpperCase()

// a minusculas
palabra = palabra.toLocaleLowerCase()

// trim()
palabra2 = "              " + palabra + "               "
console.log(palabra2.length); // 40 caracteres

palabra2 = palabra2.trim() // Le quita los espacios
console.log(palabra2.length); // 11 caracteres

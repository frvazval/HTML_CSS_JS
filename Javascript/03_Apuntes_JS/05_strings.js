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

// replace("caracter/es a cambiar", "lo que pones")
console.log(palabra.replace("a", "e")); // cambia la primera a por una e

// replaceAll("caracter/es a cambiar", "lo que pones")
console.log(palabra.replaceAll("a", "e")); // Cambia todas las a por e

let frase = "Como no estudies Javascript te vas a enterar"

// startsWitch(caracter o caracteres de inicio)
console.log(frase.startsWith("Como")); // true
console.log(frase.startsWith("como")); // false

// endsWith(caracter o caracteres de inicio)
console.log(frase.endsWith("ar")); // true
console.log(frase.endsWith("er")); // false

// slice
console.log(palabra.slice(1)); // le quita el primer caracter
console.log(palabra.slice(1, 4)); // muestra desde el 1 hasta el 3



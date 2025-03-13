// Vamos a tener una palabra y una letra.
// Hay que mostrar un mensaje indicando cuantas veces
// aparece esa letra. Por ejemplo:
// La letra "X" aparece 2 veces en la palabra "Marta"
// La letra "r" aparece 1 vez n la palabra "Marta"
// La letra "z" no esta en la palabra "Marta"

const palabra = "Marta"
const letra = "a"
let contador = 0

for (caracter of palabra) {
    caracter = caracter.toLowerCase() // Pasa el caracter a minusculas
    if (caracter == letra) contador++
}

// Generar el mensaje de salida
if (contador == 0) {
    console.log(`La letra "${letra}" no esta en la palabra "${palabra}"`);
} else if (contador == 1) {
    console.log(`La letra "${letra}" aparece 1 vez en la palabra "${palabra}"`);
} else {
    console.log(`La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}"`);
}

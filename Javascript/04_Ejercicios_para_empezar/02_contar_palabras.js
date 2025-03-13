// Vamos a tener una frase. Por ejemplo:
// Mañana será viernes y aunque va a llover será un día maravilloso
// Hay que mostrar cuantas palabras contienen una letra determinada

const frase = "Mañana será viernes y aunque va a llover será un día maravilloso"
const letra = "l"
let contador = 0
let palabras = frase.split(" ")

for (palabra of palabras) { 
    palabra = palabra.toLowerCase() // Pasa la palabra a minusculas   
    if (palabra.indexOf(letra) != 0) {
        contador++     
    }
}

if (contador == 0) console.log(`La letra ${letra} no aparece en ninguna palabra de la frase`);
else if (contador == 1) console.log(`La letra ${letra} aparece en 1 palabra de la frase`);
else console.log(`La letra ${letra} aparece en ${contador} palabras de la frase`);

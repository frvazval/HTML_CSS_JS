// Vamos a tener una frase. Por ejemplo:
// Mañana será viernes y aunque va a llover será un día maravilloso
// Hay que mostrar cuantas palabras contienen una letra determinada

// 
const frase = "Mañana será viernes y aunque va a llover será un día maravilloso"
const letra = "e"

let contador = 0
let palabrasFrase = frase.split(" ")

for (palabra of palabrasFrase) {
    // console.log(typeof palabra);
    for (caracter of palabra) {
        if (caracter == letra) {
            contador += 1
            break
        }
    }
}

for (palabra of palabrasFrase) { 
    if (palabra.includes(letra)) contador++
}

contador



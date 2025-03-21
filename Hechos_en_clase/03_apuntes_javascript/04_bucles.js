// BUCLES

const palabra = "Abracadabra"

for (let i = 0; i < palabra.length; i++) {

    // palabra[i] = palabra[i].toLocaleLowerCase()
    // console.log(palabra); // No funciona
    if (palabra[i].toLocaleLowerCase() == "a") {
        continue
    }
    console.log(palabra[i]);
}

// for .. of
for (letra of palabra) console.log(letra);

// while

let control = true
let i = 0
while (control) {  
    console.log("Hola");
    if (i == 3) {
        control = false
    }
    i += 1 // esto es lo mismo que i++
}

let condicion = "jueves"

do {
    console.log("Estaria bien que hoy fuera viernes");
} while (condicion == "miercoles")
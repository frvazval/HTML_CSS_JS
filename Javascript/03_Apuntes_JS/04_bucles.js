// BUCLES

// for clasico
const palabra = "Abracadabra"

// Nos muestra las letras hasta que aparezca una c
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] == "c") {
        break
    }
    console.log(palabra[i]);
}

// Nos muestra todas las letras menos la a
for (let i = 0; i < palabra.length; i++) {
    
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
    console.log("hola");
    if (i == 3) control = false
    i++ // es lo mismo que i += 1
}

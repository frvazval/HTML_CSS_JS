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

// do while, se ejecuta como minimo una vez, evalua la condición al final
let condicion = "jueves"
do {
    console.log("Estaria bien que hoy fuera viernes");

} while (condicion == "miercoles")

// ForEach
const listaFrutas = ["kiwi", "piña", "pera"]
listaFrutas.forEach((fruta) => {
    console.log(fruta);
})
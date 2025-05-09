// CONDICIONALES

// Python: if - elif - else
// JS: if - else if -else

const edad = 17

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad == 17) {
    console.log("Ya te falta poco");
} else {
    console.log("Aun no puedes votar");
}

let curso = "Javascript"
let prueba = true

if (prueba) {
    let curso = "PHP"
    console.log(curso);
}

console.log(curso);

// switch

switch (curso) {
    case "PHP":
        console.log("PHP Te has vuelto loco/a");
        break
    default:
        console.log("¿Y que estudias?");
}

const diaSemana = "miercoles"

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es dia laborable");
        break
    case "sabado":
    case "domingo":
        console.log("Es fin de semana");
        break
    default:
        console.log("No sabes los nombres de los días");
}
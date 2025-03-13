// Vamos a trabajar para un comercio que vende toda clase de articulos,
// desde los más caros a los más baratos. El cambio se va a devolver en metálico
// según estas condicion:
// --- Sera usando la mínima cantidad de billetes y monedas posible

const moneda = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

let cambio = 457.28
let parteEntera = parseInt(cambio)
let parteDecimal = (cambio * 100) % 100
let mensaje = ""

let cantidadMonedas = {} // 200: cantidad, solo los que tengan alguna cantidad


for (tipo of moneda) {
    if (parseInt(parteEntera / tipo) != 0) {
        if (tipo >= 5) { // Si son billetes
            cantidadMonedas[tipo] = parseInt(parteEntera / tipo)
            mensaje += parseInt(parteEntera / tipo) + " billete/s de " + tipo + ", "
            parteEntera = parteEntera % tipo  
        } else { // Si son monedas
            cantidadMonedas[tipo] = parseInt(parteEntera / tipo)
            mensaje += parseInt(parteEntera / tipo) + " moneda/s de " + tipo + ", "
            parteEntera = parteEntera % tipo  
        }     
    } 
} 

// Le quito el espacio y la coma del final



console.log(cantidadMonedas);
console.log(mensaje);
console.log(parteDecimal);

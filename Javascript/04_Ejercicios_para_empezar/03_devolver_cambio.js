// Vamos a trabajar para un comercio que vende toda clase de articulos,
// desde los más caros a los más baratos. El cambio se va a devolver en metálico
// según estas condicion:
// --- Sera usando la mínima cantidad de billetes y monedas posible

const moneda = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

let cambio = 457.28
let parteEntera = parseInt(cambio)

let mensaje = ""

let cantidadMonedas = {} // 200: cantidad, solo los que tengan alguna cantidad


for (tipo of moneda) {
    if (parseInt(parteEntera / tipo) != 0) {
        cantidadMonedas[tipo] = parseInt(parteEntera / tipo)
        mensaje += parseInt(parteEntera / tipo) + " billetes de " + tipo + " "
        parteEntera = parteEntera % tipo
        
    } 
} 

console.log(cantidadMonedas);
console.log(mensaje);


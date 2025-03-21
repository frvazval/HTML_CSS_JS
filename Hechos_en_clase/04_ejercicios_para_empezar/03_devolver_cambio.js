// Vamos a trabajar para un comercio que vende toda clase de artículos, 
// desde los más caros a los más baratos. El cambio se va a devolver en metálico
// según estas condición :
// --- Será usando la mínima cantidad de billetes y monedas posible


let cambio = 457.23

// let numero = 4.567
// console.log(parseInt(numero));

const money = [500, 200, 100, 50, 20, 10, 5, 2, 1, .5, .2, .1, .05, .02, .01]

let objetoCambio = {} // 200: 2, 
let parcialCambio = 0
for (tipoMoney of money) {
    let cantidadMoney = parseInt((cambio * 100) / (tipoMoney * 100))
    console.log(cantidadMoney);
    if (cantidadMoney == 0) continue
    else { 
        // parcialCambio += cantidadMoney * tipoMoney
        objetoCambio[tipoMoney] = cantidadMoney
        cambio = cambio - (cantidadMoney * tipoMoney)
        // console.log(cambio);
    }
 }
// objetoCambio ['0.01'] = 0.01
console.log(objetoCambio);
// objetoCambio

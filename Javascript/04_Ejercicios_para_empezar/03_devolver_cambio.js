// Vamos a trabajar para un comercio que vende toda clase de articulos,
// desde los más caros a los más baratos. El cambio se va a devolver en metálico
// según estas condicion:
// --- Sera usando la mínima cantidad de billetes y monedas posible

const monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

let cambio = 457.28
let parteEntera = parseInt(cambio)
let parteDecimal = (cambio * 100) % 100
let mensaje = ""

let cantidadMonedas = {} // 200: cantidad, solo los que tengan alguna cantidad


for (tipo of monedas) {    
        if (parseInt(parteEntera / tipo) != 0) {
            if (tipo >= 5) { // Si son billetes
                cantidadMonedas[tipo] = parseInt(parteEntera / tipo)                
                parteEntera = parteEntera % tipo  
            } else { // Si son monedas
                cantidadMonedas[tipo] = parseInt(parteEntera / tipo)                
                parteEntera = parteEntera % tipo  
            }   
        }        
        if (parteEntera == 0) { // Si ya hay que contar los decimales
            for (i = 9; i < monedas.length; i++ ) { // Desde 0.50 hasta 0.01
                if (parseInt(parteDecimal / (tipo * 100)) != 0) {
                    cantidadMonedas[tipo] = parseInt(parteDecimal / (tipo * 100))
                    parteDecimal = parteDecimal %  (tipo * 100)
                }                
            }
        }
} 
// Creo el mensaje a mostrar
for (elemento in cantidadMonedas) {
    if (elemento > 2) { // Si es un billete
        if (cantidadMonedas[elemento] > 1) {
            mensaje += cantidadMonedas[elemento] + " billetes de " + elemento + " €, "
        } else {
            mensaje += cantidadMonedas[elemento] + " billete de " + elemento + " €, "
        }        
    } else { // Si es una moneda
        if (cantidadMonedas[elemento] > 1) {
            mensaje += cantidadMonedas[elemento] + " monedas de " + elemento + " €, "
        } else {
            mensaje += cantidadMonedas[elemento] + " moneda de " + elemento + " €, "
        }    
    }
}



console.log(cantidadMonedas);
console.log(mensaje);


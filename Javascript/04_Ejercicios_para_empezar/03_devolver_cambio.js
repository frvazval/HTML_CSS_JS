// Vamos a trabajar para un comercio que vende toda clase de articulos,
// desde los más caros a los más baratos. El cambio se va a devolver en metálico
// según estas condicion:
// --- Sera usando la mínima cantidad de billetes y monedas posible

const monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

let cambio = 457.28
let parteEntera = parseInt(cambio)
let parteDecimal = (cambio * 100) % 100
let mensaje = ""

for (tipo of monedas) {    
        if (parseInt(parteEntera / tipo) != 0) {
            if (tipo >= 5) { // Si son billetes
                
                if (parseInt(parteEntera / tipo) > 1) {
                    mensaje += parseInt(parteEntera / tipo) + " billetes de " + tipo + " €, "
                } else {
                    mensaje += parseInt(parteEntera / tipo) + " billete de " + tipo + " €, "
                }

                parteEntera = parteEntera % tipo
            } else { // Si son monedas
                                
                if (parseInt(parteEntera / tipo) > 1) {
                    mensaje += parseInt(parteEntera / tipo) + " monedas de " + tipo + " €, "
                } else {
                    mensaje += parseInt(parteEntera / tipo) + " moneda de " + tipo + " €, "
                }

                parteEntera = parteEntera % tipo  
            }   
        }        
        if (parteEntera == 0) { // Si ya hay que contar los decimales
            for (i = 9; i < monedas.length; i++ ) { // Desde 0.50 hasta 0.01
                if (parseInt(parteDecimal / (tipo * 100)) != 0) {                    

                    if (parseInt(parteDecimal / (tipo * 100)) > 1) {
                        mensaje += parseInt(parteDecimal / (tipo * 100)) + " monedas de " + tipo + " €, "
                    } else {
                        mensaje += parseInt(parteDecimal / (tipo * 100)) + " moneda de " + tipo + " €, "
                    }

                    parteDecimal = parteDecimal %  (tipo * 100)
                }                
            }
        }
} 

console.log(mensaje);

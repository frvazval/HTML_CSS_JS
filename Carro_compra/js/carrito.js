/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

 // Se ira actualizando al añadir o quitar frutas al carrito
 let precioTotal = 0 

 // Contendra todos los parrafos que se mostraran en pantalla con los detalles de la compra
 let lineaCarrito = ""

 // Esta lista contendra todas las lineas que se tienen que mostrar
 let lineasDetalle = []
  
 // Obtengo los elementos de HTML sobre los que quiero actuar
 const carrito = document.getElementById('carrito')
 const precioFinal = document.getElementById('preuFinal')
 

 // Función a la que llamara el evento click de cada fruta, pasandole el precio por kilo y el nombre de la fruta
 function agregarAlCarrito(precioKilo, nombreFruta) {
    let cantidad = prompt(`¿Que cantidad de ${nombreFruta} desea?`)

    if (isNaN(cantidad) || cantidad === "" || cantidad <= 0) { // Si se pone 0, vacio o una letra
      alert("Por favor ingrese un número válido mayor a 0.");
    } else { // Si se pone un valor valido      
      let precioParcial = cantidad * precioKilo // Calculo el precio parcial

      // Guardo los valores en un objeto
      let lineaDetalle = {'nombreFruta' : nombreFruta, 'precioKilo' : precioKilo, 'precioParcial' : precioParcial}

      // Guardo el objeto en la lista lineasDetalle[]
      lineasDetalle.push(lineaDetalle)
    }

    

      // Añado la linea al parrafo carrito y limito los decimales del precio parcial a 2
      // let linea = `<p id="carrito">
      //                <img onclick="quitarDelCarrito(${precioParcial})" id ="papelera" src="img/papelera.svg" alt="papelera">
      //                ${nombreFruta} ${cantidad} Kg x ${precioKilo}€/Kilo = ${precioParcial.toFixed(2)}
      //             </p>`
      // Añado la nueva linea a la lista
      // lineasDetalle.push(linea)

      // Actualizo el precio total y lo muestro con 2 decimales
      // precioTotal += precioParcial
      // precioFinal.textContent = `${precioTotal.toFixed(2)}€`      
    
      // LLamo a la función que lo muestra por pantalla
      // mostrarLineas()  

        
 }

 // Función a la que llamara el evento click de la papelera de cada linea
 function quitarDelCarrito(precioParcial) {
    // Actualizo el precio total y lo muestro en pantalla
   //  precioTotal -= precioParcial
   //  precioFinal.textContent = `${precioTotal.toFixed(2)}€`  
   
    
    // LLamo a la función que lo muestra por pantalla
   //  mostrarLineas()  
 }

 function mostrarLineas() {
   //  let mensajeCarrito = ""

    // Creo un mensaje con todos los parrafos que tienen que aparecer
   //  for (detalle of lineasDetalle) {
   //      mensajeCarrito += detalle
   //  }

    // Muestro los parrafos por pantalla
//     carrito.innerHTML = mensajeCarrito
 }

 




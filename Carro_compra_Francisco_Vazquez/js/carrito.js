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

 // Esta lista contendra todas las lineas que se tienen que mostrar
 let lineasDetalle = []
  
 // Obtengo los elementos de HTML sobre los que quiero actuar
 const carrito = document.getElementById('carrito')
 const precioFinal = document.getElementById('preuFinal')

 // Función a la que llamara el evento click de cada fruta, pasandole el precio por kilo y el nombre de la fruta
 function agregarAlCarrito(precioKilo, nombreFruta) {
    let cantidad = prompt(`¿Que cantidad de ${nombreFruta} desea?`)

    // Compruebo que el valor introducido sea valido
    if (isNaN(cantidad) || cantidad === "" || cantidad <= 0) { // Si se pone 0, vacio o una letra
      alert("Por favor ingrese un número válido mayor a 0.");
    } else { // Si se pone un valor valido      
      let precioParcial = cantidad * precioKilo // Calculo el precio parcial

      // Guardo los valores en un objeto
      let lineaDetalle = {'nombreFruta' : nombreFruta, 'cantidad' : cantidad, 'precioKilo' : precioKilo, 'precioParcial' : precioParcial}

      // Guardo el objeto en la lista lineasDetalle[]
      lineasDetalle.push(lineaDetalle)
    }

    // LLamo a la función que muestra las lineas por pantalla, calcula el total y lo muestra por pantalla
    mostrarLineas()          
 }

 // Función a la que llamara el evento click de la papelera de cada linea, recibe el indice para poder eliminarla
 function quitarDelCarrito(indice) {  

  // Para eliminar un elemento del array utilizo lineasDetalle.splice(indice, 1);
  // Le pongo el indice desde el que quiero eliminar y la cantidad de elementos que quiero eliminar, en este caso 1
  lineasDetalle.splice(indice, 1);   

   // LLamo a la función que muestra las lineas por pantalla, calcula el total y lo muestra por pantalla
  mostrarLineas()  
 }

 function mostrarLineas() {

  let parrafoHTML = ""
  let precioTotal = 0
  
  // Recorro la lista y creo el codigo HTML para mostrar por pantalla, tambien calculo el precio total
  lineasDetalle.forEach((linea, index) => {    
    // Actualizo el precio total       
    precioTotal += linea.precioParcial

    // Creo el codigo HTML de los parrafos con el detalle de la compra, en el onclick de la papelera
    // llamo a la función quitarDelCarrito() y le paso el indice de la linea, para poder eliminarla después
    // de la lista
    parrafoHTML += `<p id="carrito">
      <img id ="papelera" src="img/papelera.svg" alt="papelera" onclick="quitarDelCarrito(${index})">
      ${linea.nombreFruta} ${linea.cantidad} Kg x ${linea.precioKilo}€/Kilo = ${linea.precioParcial.toFixed(2)}
      </p>`

   })

   // Muestro el precio total por pantalla, con 2 decimales
   precioFinal.textContent = `${precioTotal.toFixed(2)}€`

   // Muestro los parrafos por pantalla
   carrito.innerHTML = parrafoHTML      
   
 }
 




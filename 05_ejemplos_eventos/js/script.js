// Obtener el nodo con id cabriolet
const cabriolet = document.getElementById('cabriolet')
//  const cabriolet = document.querySelector('#cabriolet')

const alquiler = document.querySelector('#alquiler')
const importe = document.querySelector('main section:nth-child(2)')
let importeTotal = 0

cabriolet.addEventListener("click", () => {
    let dias = prompt("¿Días de alquiler?")
    let precio = cabriolet.querySelector('ul li:last-child').textContent
    precio = precio.split('€')[0]   
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precio) * parseInt(dias)
    // let mensajeUsuario = `${dias} días de alquiler x ${precio}€/día = ${alquilerTotal.toFixed(2)}€`
    // alquiler.innerHTML = mensajeUsuario
    let mensajeUsuario = `<p>${dias} días de alquiler x ${precio}€/día = <span class="bold">${alquilerTotal.toFixed(2)}€</span></p>`
    alquileres.innerHTML += mensajeUsuario
    importeTotal += alquilerTotal
    total.innerHTML = `Total: <span class="bold">${importeTotal}€</span>`
    
})

function alquilarVehiculo(precioDia) {
    let dias = prompt("¿Días de alquiler?")        
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precioDia) * parseInt(dias)
    
    let mensajeUsuario = `<p>${dias} días de alquiler x ${precioDia}€/día = <span class="bold">${alquilerTotal.toFixed(2)}€</span></p>`
    // Vamos añadiendo los parrafos de cada alquiler
    alquileres.innerHTML += mensajeUsuario
    // Vamos actualizando el total de todos los alquileres y lo ponemos en el parrafo llamado total
    importeTotal += alquilerTotal
    total.innerHTML = `Total: <span class="bold">${importeTotal}€</span>`
}


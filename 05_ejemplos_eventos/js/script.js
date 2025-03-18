// Obtener el nodo con id cabriolet
const cabriolet = document.getElementById('cabriolet')
//  const cabriolet = document.querySelector('#cabriolet')

const alquiler = document.querySelector('#alquiler')
const importe = document.querySelector('main section:nth-child(2)')


cabriolet.addEventListener("click", () => {
    let dias = prompt("¿Días de alquiler?")
    let precio = cabriolet.querySelector('ul li:last-child').textContent
    precio = precio.split('€')[0]
    alert(precio)
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precio) * parseInt(dias)
    let mensajeUsuario = `${dias} días de alquiler x ${precio}€/día = ${alquilerTotal.toFixed(2)}€`
    alquiler.textContent = mensajeUsuario
    
})
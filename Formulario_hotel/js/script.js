// Control del nombre y apellidos del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change", () => {
    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')

    errorNombre.textContent = ""
    if (nombreRevisado.length < 2) {        
        errorNombre.textContent = "El nombre debe tener al menos 2 caracteres"
        nombreForm.focus()
    }
})

apellidoForm.addEventListener("change", () => {
    let apellidoRevisado = apellidoForm.value.trim()
    const errorApellido = document.querySelector('#errorApellido')

    errorApellido.textContent = ""
    if (apellidoRevisado.length < 2) {        
        errorApellido.textContent = "El apellido debe tener al menos 2 caracteres"
        apellidoForm.focus()
    }
})
// Control de la fecha



// Ventana emergente
const dialog = document.querySelector('#resumen')
const cierraVentana = document.querySelector('#cierraVentana')

cierraVentana.addEventListener("click", () => {
    dialog.close()
})


// Obtener los datos del formulario
const formReserva = document.forms['formReserva']
formReserva.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formReserva['nombre'].value);
    console.log(formReserva['apellido'].value);

    let resumenReserva = `<p>Reserva realizada a nombre de <span class="textoPrincipal">${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`

    const textoResumen = document.querySelector('#textoResumen')
    textoResumen.innerHTML = resumenReserva
    dialog.showModal()
    formReserva.reset()

})





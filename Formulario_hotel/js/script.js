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



// Obtener los datos del formulario
const formReserva = document.forms['formReserva']
formReserva.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formReserva['nombre'].value);
    console.log(formReserva['apellido'].value);





})





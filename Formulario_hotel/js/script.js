// Control del nombre y apellidos del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change", () => {
    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')

    errorNombre.textContent =""
    if (nombreRevisado.length < 2) {        
        errorNombre.textContent = "El nombre debe tener al menos 2 caracteres"
        nombreForm.focus()
    }
})
// Nombre del usuario
let buttonNombre = document.querySelector('header button');
let pNombre = document.querySelector('header p')
let respuesta = document.getElementById('respuesta')

buttonNombre.addEventListener('click', () => {
    let nombreUsuario = prompt("¿Cuál es tu nombre?")
    buttonNombre.style.display = "none";
    pNombre.textContent = `¡ Mucha suerte ${nombreUsuario} !`
})

let formJuego = document.forms['formJuego'];

formJuego.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    let jugadaHumano = formJuego['jugada'].value; // Obtener la jugada del usuario
    
    
    // Jugada del PC
    let numMinimo = 1
    let numMaximo = 3
    let JugadaPC = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo; // Generar un número aleatorio entre 1 y 3
    
    let mensaje = ""
    if (jugadaHumano == JugadaPC) {
        mensaje = "¡ Empate !"
    } else if ((jugadaHumano == 1 && JugadaPC == 3) || (jugadaHumano == 2 && JugadaPC == 1) || (jugadaHumano == 3 && JugadaPC == 2)) {
        mensaje = "¡ Has ganado !"

    } else {
        mensaje = "¡ Has perdido !"
    }

    respuesta.innerHTML = `<p>${mensaje}</p>`

})



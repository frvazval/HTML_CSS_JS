// Nombre del usuario
let buttonNombre = document.querySelector('header button');
let pNombre = document.querySelector('header p')

buttonNombre.addEventListener('click', () => {
    let nombreUsuario = prompt("¿Cuál es tu nombre?")
    buttonNombre.style.display = "none";
    pNombre.textContent = `¡ Mucha suerte ${nombreUsuario} !`
})

let formJuego = document.forms['formJuego'];

formJuego.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    let jugada = formJuego['jugada'].value; // Obtener la jugada del usuario
    alert(jugada)
})

let numMinimo = 1
let numMaximo = 3
let JugadaPC = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo; // Generar un número aleatorio entre 1 y 3

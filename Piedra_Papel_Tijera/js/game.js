// Nombre del usuario
let buttonNombre = document.querySelector('header button');
let pNombre = document.querySelector('header p')
let respuesta = document.getElementById('respuesta')
let divImagen = document.getElementById('divImagen')

let iconos = ['👊', '✋', '✌️']

let victoriasH = 0
let empates = 0
let derrotasH = 0

let nombreUsuario = ""

buttonNombre.addEventListener('click', () => {
    nombreUsuario = prompt("¿Cuál es tu nombre?")
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
    let audioVictoria = document.getElementById('victoria')
    let audioEmpate = document.getElementById('empate')
    let audioDerrota = document.getElementById('derrota')

    


    // alert(`Tu jugada es: ${iconos[jugadaHumano - 1]}
    //      y mi jugada es: ${iconos[JugadaPC - 1]}`)

    if (jugadaHumano == JugadaPC) {
        empates++;
        mensaje = '¡ Has empatado !'
        audioEmpate.play()
        divImagen.innerHTML = '<img src="img/empate.jpg" alt="Empate">'
    } else if ((jugadaHumano == 1 && JugadaPC == 3) || (jugadaHumano == 2 && JugadaPC == 1) || (jugadaHumano == 3 && JugadaPC == 2)) {
        victoriasH++;
        mensaje = '¡ Has ganado !'
        audioVictoria.play()
        divImagen.innerHTML = '<img src="img/victoria.jpg" alt="Victoria">' 
    } else {
        derrotasH++;
        mensaje = '¡ Has perdido !'
        audioDerrota.play()
        divImagen.innerHTML = '<img src="img/derrota.jpg" alt="Derrota">'   
    }

    let tabla = `<table>
        <tr>
            <th>Victorias</th>
            <th>Empates</th>
            <th>Derrotas</th>
        </tr>
        <tr>
            <td>${victoriasH}</td>
            <td>${empates}</td>
            <td>${derrotasH}</td>
        </tr>
    </table>`

    respuesta.innerHTML = `<p>${mensaje} ${nombreUsuario}</p>${tabla}`

})



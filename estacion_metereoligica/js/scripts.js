function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("date-time").textContent = "Fecha y Hora: " + now.toLocaleDateString("es-ES", options);
}
window.onload = updateDateTime;
setInterval(updateDateTime, 1000);

function actualizarInformacion() {

    const idioma = document.getElementById("idioma").value;
    const ciudad = document.getElementById("ciudad").value;
    console.log("Idioma seleccionado:", idioma);
    console.log("Ciudad ingresada:", ciudad);
    const appid = "0cb0fdd74d71dd20b2b35ef7a5b0925c"
    const nombreCiudad = document.getElementById("nombreCiudad") 
    const temperatura = document.getElementById("temperaruta")
    
    
    
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&lang=${idioma}&q=${ciudad}`

    fetch(url)
    .then(datos => datos.json())
    .then(datos => {
        nombreCiudad.textContent = `${datos.name}`
        // divDatos.innerHTML += `<p>Temperatura actual : ${datos['main']['temp']}ºC</p>`
        // divDatos.innerHTML += `<p>Descripción : ${datos['weather'][0].description}</p>`
        // divDatos.innerHTML += `<p><img id="imagen" src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${datos['weather'][0]['icon']}.svg"></p>`
    })

   


    
    
}
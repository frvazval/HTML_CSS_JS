function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeElement = document.getElementById("date-time");
    dateTimeElement.innerHTML = "Fecha y Hora: <strong>" + now.toLocaleDateString("es-ES", options) + "</strong>";

    // Move the date-time element between the language selector and city input
    const idiomaSelector = document.getElementById("idioma");
    const ciudadInput = document.getElementById("ciudad");
    idiomaSelector.parentNode.insertBefore(dateTimeElement, ciudadInput);
}

function actualizarInformacion() {

    const idioma = document.getElementById("idioma").value;
    const ciudad = document.getElementById("ciudad").value;
    console.log("Idioma seleccionado:", idioma);
    console.log("Ciudad ingresada:", ciudad);
    const appid = "0cb0fdd74d71dd20b2b35ef7a5b0925c";
    const nombreCiudad = document.getElementById("nombreCiudad");
    const temperatura = document.getElementById("temperatura");
    const presion = document.getElementById("presion");
    const humedad = document.getElementById("humedad");
    const descripcion = document.getElementById("descripcion");
    
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&lang=${idioma}&q=${ciudad}`;

    fetch(url)
    .then(datos => datos.json())
    .then(datos => {
        nombreCiudad.textContent = `${datos.name}`;
        temperatura.textContent = `${datos['main']['temp']}ºC`;
        presion.textContent = `Presión: ${datos['main']['pressure']} hPa`;
        humedad.textContent = `Humedad: ${datos['main']['humidity']}%`;
        descripcion.textContent = `Descripción: ${datos['weather'][0]['description']}`;
    });
}

// Automatically display city name and fetch data on page load
window.onload = function () {
    updateDateTime();
    const ciudadInput = document.getElementById("ciudad").value;
    document.getElementById("nombreCiudad").textContent = ciudadInput;
    actualizarInformacion();

    // Update data when the language selector changes
    document.getElementById("idioma").addEventListener("change", actualizarInformacion);
};
setInterval(updateDateTime, 1000);
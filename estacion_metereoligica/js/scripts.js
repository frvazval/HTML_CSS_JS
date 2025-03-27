async function getWeather() {
    const apiKey = '7d348ad63627628c24b590b77048a721'; // Reemplaza con tu clave de OpenWeatherMap
    const ciudad = document.getElementById("ciudad").value;
    const idioma = document.getElementById("idioma").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=${idioma}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ciudad no encontrada");
        
        const data = await response.json();
        
        // Extraer datos del JSON
        const nombreCiudad = data.name;
        const temperatura = `${data.main.temp}°C`;
        const presion = `Presión: ${data.main.pressure} hPa`;
        const humedad = `Humedad: ${data.main.humidity}%`;
        const descripcion = data.weather[0].description;
        const icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Actualizar el DOM con los datos obtenidos
        document.getElementById("nombreCiudad").textContent = nombreCiudad;
        document.getElementById("temperatura").textContent = temperatura;
        document.getElementById("presion").textContent = presion;
        document.getElementById("humedad").textContent = humedad;
        document.getElementById("descripcion").textContent = descripcion;

        // Mostrar el icono del clima
        document.getElementById("icono").innerHTML = `<img src="${icono}" alt="${descripcion}">`;
    
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Evento para buscar al presionar "Enter"
document.getElementById("ciudad").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

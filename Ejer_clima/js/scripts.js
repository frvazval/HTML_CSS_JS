async function getWeather() {
    const city = document.getElementById('city').value;
    const lang = document.getElementById('language').value;
    const apiKey = '7d348ad63627628c24b590b77048a721';
    if (!city) return alert('Introduce una ciudad');
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`);
    const data = await response.json();
    
    if (data.cod !== 200) return alert('Ciudad no encontrada');
    
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
    document.getElementById('pressure').textContent = `Presión: ${data.main.pressure} hPa`;
    document.getElementById('humidity').textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById('description').textContent = `Descripción: ${data.weather[0].description}`;
    document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
}
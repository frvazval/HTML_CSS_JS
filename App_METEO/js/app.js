// https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=0cb0fdd74d71dd20b2b35ef7a5b0925c&units=metric&lang=es

const appid = "0cb0fdd74d71dd20b2b35ef7a5b0925c"
const ciudad = "kiev"
const idioma = "es"
let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&lang=${idioma}&q=${ciudad}`


const divDatos = document.getElementById("divDatos")
fetch(url)
.then(datos => datos.json())
.then(datos => {
    divDatos.innerHTML = `<p>Ciudad : ${datos.name}</p>`
    divDatos.innerHTML += `<p>Temperatura actual : ${datos['main']['temp']}ºC</p>`
    divDatos.innerHTML += `<p>Descripción : ${datos['weather'][0].description}</p>`
    divDatos.innerHTML += `<p><img id="imagen" src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${datos['weather'][0]['icon']}.svg"></p>`
})


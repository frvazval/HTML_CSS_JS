import text from './13_texto.js'
console.log(text); // Muestra el contenido de text por la consola

const btnTexto = document.getElementById('btnTexto')
const divTexto = document.getElementById('divTexto')

btnTexto.addEventListener('click', () => {  
    fetch('13_texto.txt')

    .then(dato => dato.text())
    .then(dato => {
        console.log(dato);
        divTexto.textContent = dato       
    })
    .catch(error => {
        console.log("Error", error)
    })
    .finally(() => {
        console.log("Programa finalizado")
    })
})

const btnDatos = document.getElementById('btnDatos')
const divDatos = document.getElementById('divDatos')

btnDatos.addEventListener('click', () => {
    fetch('13_datos.json')
    .then(dato => {
        //console.log(dato)
        return dato.json()})

    .then(res => {
        console.table(res)
       
    }).catch(error => console.error("Error", error))

    .finally(() => console.log("Finalizado"))
    
})
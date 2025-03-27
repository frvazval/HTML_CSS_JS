import text from './13_texto.js'
console.log(text);

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
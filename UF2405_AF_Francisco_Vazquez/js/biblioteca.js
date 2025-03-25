// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]

// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");


// creo una constante para poder interactuar con el div, que tiene la id ejer1
const ejercicio1 = document.getElementById("ejer1");

// Muestro el resultado del ejercicio 1
mostrarListaEj1(ejercicio1)

// Función que muestra el resultado del ejercicio 1
function mostrarListaEj1(id) {
    

    // Ordeno el array alfabeticamente por titulo
    biblioteca.sort((a, b) => {
        return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true });
    });

    // Recorro el array con un bucle y voy creando la lista ordenada
    let lista = "<ol>"

    biblioteca.forEach((libro) => {
        lista += `<li>Titulo: ${libro.titulo}, Autor: ${libro.autor}</li>`
    });

    lista += "</ol>"

    // Muestro la lista en el div ejer1
    id.innerHTML = lista
}


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

const ejercicio2 = document.getElementById("ejer2");

const formEj2 = document.forms["form-filtrado"];
const categoria = formEj2.idioma.value;
const idioma = formEj2.floracion.value;
const epoca = formEj2.epoca.value;
// console.log(color, floracion, stock);

mensajeEj3(ejercicio2, categoria, idioma, epoca);

formEj3.addEventListener("change", () => {
  const categoria = formEj3.categoria.value;
  const idioma = formEj3.idioma.value;
  const epoca = formEj3.epoca.value;

  // console.log(typeof stock);
  mensajeEj3(ejercicio2, categoria, idioma, epoca);
});

function mensajeEj3(id, categoria, idioma, epoca) {
  let lineahtml = "<ul>";
  let contarLibros = 0;

  biblioteca.forEach((libro) => {
    
    if (
      libro.categoria == categoria &&
      libro.idioma == idioma &&
      libro.epoca == epoca
    ) {
      lineahtml += `<li><span class="textoRojo">${libro.autor} : </span>${libro.titulo} (${libro.categoria}), ${libro.idioma}</li>`;
      contarLibros++;
    }
  });

  lineahtml += "</ul>";

  // solución 1
  // if (html.length == 9) html = '<p>No hay flor que cumpla las condiciones</p>'
  if (contarLibros == 0)
    html = "<p>No hay ninguna obra que cumpla las condiciones</p>";

  id.innerHTML = lineahtml;
}


// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

const formEj3 = document.forms["form-autor"];
const ejercicio3 = document.getElementById("ejer3");

formEj3.addEventListener("submit", (e) => {
  e.preventDefault();
  const autor = formEj3["autor"].value.trim().toLocaleLowerCase();

  let lineahtml = "<ul>";
  biblioteca.forEach((libro) => {
    console.log(biblioteca.autor == autor);
    if (biblioteca.autor == autor) {      

      llineahtml += `<li>${libro.autor} : ${libro.titulo} (${libro.categoria}, idioma : ${libro.idioma}, época : ${libro.epoca})</li>`;
    }
    
  });
  lineahtml += "</ul>";

  ejercicio3.innerHTML= lineahtml
});

// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1

const formEj4 = document.forms["incluirObra"];

formEj4.addEventListener('submit', (event) => {
  event.preventDefault()

  const titulo = formEj4['titulo'].value
  const autor = formEj4['autor'].value
  const categoria = formEj4['categoria'].value
  const idioma = formEj4['idioma'].value
  const epoca = formEj4['epoca'].value

  
  biblioteca.push({titulo, autor, categoria, idioma, epoca})


  mostrarListaEj1(ejercicio1)

  localStorage.setItem("biblioteca", JSON.stringify(biblioteca))

})



// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage


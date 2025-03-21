// Datos de trabajo

// const flores = [
//   { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
//   { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
//   { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
//   { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
//   { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
//   { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
// ];

// Lo mismo que el anterior pero utilizando JSON, si no existe el fichero JSON carga el array, pero en el caso de que exista
// el fichero en el almacenamiento del navegador, cargara dicho fichero y mantendra los cambios realizados en el array
const flores = JSON.parse(localStorage.getItem("flores")) || [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

// Ordenar array por nombres
flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Tiene que mostrarse en el HTML los datos de las flores como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Se mostrará el resultado en #ejercicio1

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }

const ejercicio1 = document.getElementById("ejercicio1")
let lista = "<ul>"

flores.forEach((flor) => {
  lista += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y `
  if (flor.stock == true) lista += "tenemos stock"
  else lista += "no tenemos stock"
  lista += "</li>"  
})

lista += "</ul>"
ejercicio1.innerHTML = lista

// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Se mostrará el resultado en #ejercicio2

const ejercicio2 = document.getElementById("ejercicio2")
let lista2 = "<ul>"

flores.forEach((flor) => {
  if (flor.color == "blanco" && flor.floracion == "verano") {
    lista2 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y `
    if (flor.stock == true) lista2 += "tenemos stock"
    else lista2 += "no tenemos stock"
    lista2 += "</li>"
  }
})

lista2 += "</ul>"
ejercicio2.innerHTML = lista2

// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Se mostrará el resultado en #ejercicio3

const ejercicio3 = document.getElementById("ejercicio3")
const formulario = document.querySelector('#form-seleccion')

function mostrarFlores() {
  const color = formulario["color"].value
  const floracion = formulario["floracion"].value
  const stock = formulario["stock"].value

  // console.log(color);
  // console.log(floracion);
  // console.log(typeof stock);

  let existen = false 
  let lista3 = "<ul>"

  flores.forEach((flor) => {
    if (flor.color == color && flor.floracion == floracion && String(flor.stock) == stock) {
      lista3 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y `
      if (flor.stock == true) lista3 += "tenemos stock"
      else lista3 += "no tenemos stock"
      lista3 += "</li>"

      existen = true
    } 
  })

  lista3 += "</ul>"

  if (existen) {
    ejercicio3.innerHTML = lista3
  } else {
    ejercicio3.innerHTML = "<p>No hay flor que cumpla las condiciones</p>"
  }
}

// ==============================================================================
// EJERCICIO 4

// Hacer un formulario para obtener una flor del array por su nombre.
// Se mostrará el resultado en #ejercicio4

const formEj4 = document.forms["formEj4"];
const ejercicio4 = document.getElementById("ejercicio4");

formEj4.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = formEj4["nombre"].value.trim().toLocaleLowerCase();

  let html = "<ul>";
  flores.forEach((flor) => {
    console.log(flor.nombre == nombre);
    if (flor.nombre == nombre) {
      let textoStock = "";
      if (!flor.stock) {
        textoStock = "no";
      }

      html += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock} tenemos stock.`;
    }
  });
  html += "</ul>";

  ejercicio4.innerHTML= html
});



// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1

const formEj5 = document.forms["formEj5"];

formEj5.addEventListener('submit', (event) => {
  event.preventDefault()

  const nombre = formEj5['nombre'].value
  const color = formEj5['color'].value
  const floracion = formEj5['floracion'].value
  const stock = formEj5['stock'].value

  // nombre: nombre
  flores.push({nombre, color, floracion, stock})


  mostrarFlores(ejercicio1);

  localStorage.setItem("flores", JSON.stringify(flores))

})

// ============================================================================== 
/* E X T R A S */

// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1

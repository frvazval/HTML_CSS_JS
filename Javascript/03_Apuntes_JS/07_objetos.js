// OBJETOS
// Son como los diccionarios de  Python

let alumno = {}

alumno["nombre"] = "Filemon"
alumno["apellido"] = "Pi"
alumno["edad"] = 25

let alumno2 = {nombre: "Pep", apellido: "Guardiola", edad: 55} // La clave tambien se puede poner entre comillas "nombre" : "Pep"

let clase = {
    alumnos : [alumno, alumno2]
}

// Iterar por un objeto

for (claves in alumno) {    
    console.log(claves); // devuelve 'nombre', 'apellido', 'edad'
    console.log(claves, alumno[claves]); // devuelve ['nombre', 'Filemon'], ['apellido', 'Pi'], ['edad', 25]

}
// OBJETOS

// Son como los diccionarios de Python
let alumno = {}

alumno["nombre"] = "Maria"
alumno["apellido"] = "Pi"
alumno["edad"] = 25

let alumno2 = { apellido : "Guardiola", "nombre" : "Pep", edad : 55}
alumno2.cp = "08041"
alumno2["direccion familiar"] = "C/Corsega"
alumno2

let clase = {
    alumnos : [
        alumno, alumno2
    ]
}

for (claves in alumno) {
    console.log(claves, alumno[claves]);
    console.log(claves, alumno.nombre);
}
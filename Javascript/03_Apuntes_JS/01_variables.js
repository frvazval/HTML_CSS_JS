// VARIABLES

var num1 = 1
var num1 = 5 // Con var si se puede hacer, porque la reasigna

let num2 = 2 // No se puede volver a utilizar let num2 = 4 porque la variable ya esta creada
num2 = 3

let num3
console.log(typeof num3);
num3 = 2.5
console.log(typeof num3);

// Destructuring
let [txt1, txt2, txt3] = ["a", "b", "c"]
console.log(txt1, txt2, txt3);
console.log(typeof txt1);


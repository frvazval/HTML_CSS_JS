// FECHAS

const today = new Date()
console.log(today);

// Año
console.log(today.getFullYear());

// Mes
console.log(today.getMonth());

// Día
console.log(today.getDay());
console.log(today.getDate());

// Hora
console.log(today.getHours());

// Time
console.log(today.getTime());

// Formateo de fechas
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const fechaFutura = new Date("2030-08-02")
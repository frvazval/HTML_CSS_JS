function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("date-time").textContent = "Fecha y Hora: " + now.toLocaleDateString("es-ES", options);
}
window.onload = updateDateTime;
setInterval(updateDateTime, 1000);
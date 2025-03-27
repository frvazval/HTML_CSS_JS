window.onload = function () {
    // ...existing code...
    const ciudadInput = document.getElementById("ciudad");
    ciudadInput.value = "Barcelona"; // Set default city to Barcelona
    document.getElementById("nombreCiudad").textContent = ciudadInput.value;
    actualizarInformacion();
    // ...existing code...
};

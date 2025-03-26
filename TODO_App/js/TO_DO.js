
window.onload = function () {
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("dueDate").setAttribute("min", today);
};

function addTask() {
    let taskText = document.getElementById("taskInput").value.trim();
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;

    if (!taskText) {
        alert("Por favor, introduce una tarea.");
        return;
    }

    // Obtener la fecha de hoy como fecha de creación
    let today = new Date().toISOString().split("T")[0];

    // Crear el div de la tarea
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <div>
            <span><strong>${taskText}</strong></span>
            <p>📅 Creado: ${today} | ⏳ Vence: ${dueDate ? dueDate : "No definida"}</p>
        </div>
        <select onchange="moveTask(this)">
            <option value="pendiente" ${status === "pendiente" ? "selected" : ""}>pendiente</option>
            <option value="ejecucion" ${status === "ejecucion" ? "selected" : ""}>ejecucion</option>
            <option value="realizada" ${status === "realizada" ? "selected" : ""}>realizada</option>
        </select>
        <div class="actions">
            <button class="move-btn" onclick="moveTaskToExecution(this)" title="Mover a ejecución">🏃</button>
            <button class="complete-btn" onclick="completeTask(this)" title="Marcar como completada">👍</button>
            <button class="delete-btn" onclick="deleteTask(this)" title="Eliminar tarea">🗑️</button>
        </div>
    `;

    document.getElementById(status).appendChild(taskDiv);

    // Limpiar campos
    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";
}

function moveTask(selectElement) {
    let newStatus = selectElement.value;
    let taskDiv = selectElement.closest(".task");
    document.getElementById(newStatus).appendChild(taskDiv);
}

function moveTaskToExecution(button) {
    let taskDiv = button.closest(".task");
    document.getElementById("ejecucion").appendChild(taskDiv);
}

function completeTask(button) {
    let taskDiv = button.closest(".task");
    document.getElementById("realizada").appendChild(taskDiv);
}

function deleteTask(button) {
    button.closest(".task").remove();
}
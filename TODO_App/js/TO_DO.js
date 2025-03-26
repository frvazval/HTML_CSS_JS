function addTask() {
    let taskText = document.getElementById("taskInput").value.trim();
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;

    if (!taskText) {
        alert("Por favor, introduce una tarea.");
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <span>${taskText} (Creada: ${new Date().toLocaleDateString()} - Vence: ${dueDate || "No definida"})</span>
        <select onchange="moveTask(this)">
            <option value="pendiente" ${status === "pendiente" ? "selected" : ""}>pendiente</option>
            <option value="ejecucion" ${status === "ejecucion" ? "selected" : ""}>ejecucion</option>
            <option value="realizada" ${status === "realizada" ? "selected" : ""}>realizada</option>
        </select>
        <div class="actions">
            <button onclick="moveTaskToExecution(this)" title="Mover a ejecución">🏃</button>
            <button onclick="completeTask(this)" title="Completar tarea">👍</button>
            <button onclick="deleteTask(this)" title="Eliminar tarea">🗑️</button>
        </div>
    `;

    document.getElementById(status).appendChild(taskDiv);

    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";
}

function moveTask(selectElement) {
    let newStatus = selectElement.value;
    let taskDiv = selectElement.parentElement;
    document.getElementById(newStatus).appendChild(taskDiv);
}

function moveTaskToExecution(button) {
    let taskDiv = button.parentElement.parentElement;
    document.getElementById("ejecucion").appendChild(taskDiv);
}

function completeTask(button) {
    let taskDiv = button.parentElement.parentElement;
    document.getElementById("realizadas").appendChild(taskDiv);
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}
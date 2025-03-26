function addTask() {
    let taskText = document.getElementById("taskInput").value.trim();
    let status = document.getElementById("status").value;

    if (!taskText) {
        alert("Por favor, introduce una tarea.");
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <select onchange="moveTask(this)">
            <option value="pendiente" ${status === "pendiente" ? "selected" : ""}>Pendiente</option>
            <option value="ejecucion" ${status === "ejecucion" ? "selected" : ""}>En ejecución</option>
            <option value="realizada" ${status === "realizada" ? "selected" : ""}>Realizada</option>
        </select>
        <div class="actions">
            <button title="Mover a En ejecución" onclick="moveTaskToExecution(this)">🏃</button>
            <button title="Marcar como completada" onclick="completeTask(this)">👍</button>
            <button title="Eliminar tarea" onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    let targetContainer = document.getElementById(status);
    if (targetContainer) {
        targetContainer.appendChild(taskDiv);
    }

    document.getElementById("taskInput").value = "";
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
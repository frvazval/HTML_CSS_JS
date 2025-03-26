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
        <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
    `;

    document.getElementById(status).appendChild(taskDiv);
    document.getElementById("taskInput").value = "";
}

function moveTask(selectElement) {
    let newStatus = selectElement.value;
    let taskDiv = selectElement.parentElement;

    document.getElementById(newStatus).appendChild(taskDiv);
}

function deleteTask(button) {
    button.parentElement.remove();
}
function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let status = document.getElementById("status").value;
    if (!taskText) return;

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `<span>${taskText}</span>
        <select onchange="moveTask(this, '${taskText}')">
            <option value="pendiente">Pendiente</option>
            <option value="ejecucion">En ejecución</option>
            <option value="realizada">Finalizada</option>
        </select>
        <button onclick="deleteTask(this)">🗑️</button>`;

    document.getElementById(status).appendChild(taskDiv);
    document.getElementById("taskInput").value = "";
}

function moveTask(selectElement, taskText) {
    let newStatus = selectElement.value;
    let taskDiv = selectElement.parentElement;
    document.getElementById(newStatus).appendChild(taskDiv);
}

function deleteTask(button) {
    button.parentElement.remove();
}
function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let status = document.getElementById("status").value;
    if (!taskText) return;

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `<span>${taskText}</span>
        <select onchange="moveTask(this)">
            <option value="pendiente">pendiente</option>
            <option value="ejecucion">ejecucion</option>
            <option value="realizada">realizada</option>
        </select>
        <div class="actions">
            <button onclick="moveTaskToExecution(this)">🏃</button>
            <button onclick="completeTask(this)">👍</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>`;

    document.getElementById(status).appendChild(taskDiv);
    document.getElementById("taskInput").value = "";
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
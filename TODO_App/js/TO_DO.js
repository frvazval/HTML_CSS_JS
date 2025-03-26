function addTask() {
    // Obtener el texto de la tarea y el estado seleccionado
    let taskText = document.getElementById("taskInput").value.trim();
    let status = document.getElementById("status").value;

    // Validar que el texto de la tarea no esté vacío
    if (!taskText) {
        alert("Por favor, introduce una tarea.");
        return;
    }

    // Crear un nuevo elemento para la tarea
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <select onchange="moveTask(this)">
            <option value="pendiente" ${status === "pendiente" ? "selected" : ""}>pendiente</option>
            <option value="ejecucion" ${status === "ejecucion" ? "selected" : ""}>ejecucion</option>
            <option value="realizada" ${status === "realizada" ? "selected" : ""}>realizada</option>
        </select>
        <div class="actions">
            <button onclick="moveTaskToExecution(this)">🏃</button>
            <button onclick="completeTask(this)">👍</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    // Añadir la tarea al contenedor correspondiente
    let targetContainer = document.getElementById(status);
    if (targetContainer) {
        targetContainer.appendChild(taskDiv);
    } else {
        console.error(`No se encontró el contenedor con ID: ${status}`);
    }

    // Limpiar el campo de entrada
    document.getElementById("taskInput").value = "";
}

function moveTask(selectElement) {
    let newStatus = selectElement.value;
    let taskDiv = selectElement.parentElement;
    let targetContainer = document.getElementById(newStatus);
    if (targetContainer) {
        targetContainer.appendChild(taskDiv);
    }
}

function moveTaskToExecution(button) {
    let taskDiv = button.parentElement.parentElement;
    let targetContainer = document.getElementById("ejecucion");
    if (targetContainer) {
        targetContainer.appendChild(taskDiv);
    }
}

function completeTask(button) {
    let taskDiv = button.parentElement.parentElement;
    let targetContainer = document.getElementById("realizadas");
    if (targetContainer) {
        targetContainer.appendChild(taskDiv);
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}
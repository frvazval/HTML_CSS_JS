function addTask() {
    const name = document.getElementById('taskName').value;
    const priority = document.getElementById('taskPriority').value;
    if (!name) return;
    
    const task = document.createElement('li');
    task.classList.add('task');
    task.dataset.priority = priority;
    
    switch(priority) {
        case 'alta': task.style.borderLeftColor = 'red'; break;
        case 'normal': task.style.borderLeftColor = 'orange'; break;
        case 'baja': task.style.borderLeftColor = 'green'; break;
    }
    
    task.innerHTML = `
        <span>${name}</span>
        <div class="actions">
            <button onclick="moveTask(this)">▶</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;
    
    document.getElementById('pending').querySelector('.task-list').appendChild(task);
    sortTasks('pending');
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function moveTask(button) {
    const task = button.parentElement.parentElement;
    const parent = task.parentElement.parentElement.id;
    
    if (parent === 'pending') {
        document.getElementById('in-progress').querySelector('.task-list').appendChild(task);
    } else if (parent === 'in-progress') {
        document.getElementById('completed').querySelector('.task-list').appendChild(task);
    }
    sortTasks(parent);
}

function sortTasks(columnId) {
    const column = document.getElementById(columnId);
    const tasks = Array.from(column.querySelectorAll('.task'));
    
    tasks.sort((a, b) => {
        const priorities = { 'alta': 1, 'normal': 2, 'baja': 3 };
        return priorities[a.dataset.priority] - priorities[b.dataset.priority];
    });
    
    const list = column.querySelector('.task-list');
    list.innerHTML = '';
    tasks.forEach(task => list.appendChild(task));
}
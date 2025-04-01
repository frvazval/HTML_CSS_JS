document.getElementById('taskDeadline').setAttribute('min', new Date().toISOString().split('T')[0]);
        document.getElementById('taskDeadline').value = new Date().toISOString().split('T')[0]; // Fecha actual por defecto

        const now = new Date();
        now.setMinutes(now.getMinutes() + 30); // Add 30 minutes to the current time
        document.getElementById('taskDeadlineTime').value = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }); // Set default time

        // Establecer foco en el campo de texto al cargar la página
        window.onload = () => {
            document.getElementById('taskName').focus();
        };
        
        // Array para almacenar las tareas
        const tasks = [];

        function addTask() {
            const name = document.getElementById('taskName').value.trim();
            const status = document.getElementById('taskStatus').value;
            const priority = document.getElementById('taskPriority').value;
            const deadlineDate = document.getElementById('taskDeadline').value || 'Indefinida';
            const deadlineTime = document.getElementById('taskDeadlineTime').value || 'Indefinida';
            const today = new Date();
            const createdDate = today.toLocaleDateString('es-ES');
            const createdTime = today.toLocaleTimeString('es-ES');

            if (!name) {
                alert('Por favor, introduce un nombre para la tarea.');
                return;
            }

            // Crear objeto de tarea y agregarlo al array
            const taskObj = {
                id: Date.now(), // ID único basado en el timestamp
                name,
                status,
                priority,
                createdDate,
                createdTime,
                deadlineDate,
                deadlineTime
            };
            tasks.push(taskObj);

            // Crear elemento visual de la tarea
            const task = document.createElement('li');
            task.classList.add('task');
            task.setAttribute('data-id', taskObj.id); // Asociar el ID al elemento
            task.setAttribute('data-priority', priority);
            task.setAttribute('data-status', status);
            task.innerHTML = `
                <div>
                    <span class="priority">${priority.toUpperCase()}</span>
                    <span>${name}</span>
                </div>
                <div class="dates">
                    <span>Creado: ${createdDate} ${createdTime}</span><br>
                    <span>Plazo: ${deadlineDate} ${deadlineTime}</span>
                </div>
                <div class="actions">
                    <button title="Cambiar estado" onclick="changeTaskStatus(this)">🔄</button>
                    <button title="Eliminar tarea" onclick="deleteTask(this)">❌</button>
                </div>
            `;

            const list = document.getElementById(status).querySelector('.task-list');
            list.appendChild(task);
            sortTasks(list); // Ordenar tareas por prioridad
            checkDeadlines(); // Verificar plazos después de añadir la tarea
        }

        function deleteTask(button) {
            const taskElement = button.parentElement.parentElement;
            const taskId = parseInt(taskElement.getAttribute('data-id'));

            // Eliminar la tarea del array
            const taskIndex = tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
            }

            // Eliminar el elemento visual
            taskElement.remove();
        }

        function changeTaskStatus(button) {
            const taskElement = button.parentElement.parentElement;
            const taskId = parseInt(taskElement.getAttribute('data-id'));
            const currentStatus = taskElement.getAttribute('data-status');
            const nextStatus = currentStatus === 'pending' ? 'in-progress' : currentStatus === 'in-progress' ? 'completed' : 'pending';

            // Actualizar el estado en el array
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                task.status = nextStatus;
            }

            // Actualizar el estado visualmente
            taskElement.setAttribute('data-status', nextStatus);
            const nextList = document.getElementById(nextStatus).querySelector('.task-list');
            nextList.appendChild(taskElement);
            sortTasks(nextList); // Ordenar tareas por prioridad después de cambiar el estado
        }

        function sortTasks(list) {
            const tasks = Array.from(list.children);
            const priorities = { alta: 1, normal: 2, baja: 3 }; // Mapeo de prioridades
            tasks.sort((a, b) => priorities[a.getAttribute('data-priority')] - priorities[b.getAttribute('data-priority')]);
            list.innerHTML = '';
            tasks.forEach(task => list.appendChild(task));
        }

        function updateDateTime() {
            const now = new Date();
            const formattedDateTime = now.toLocaleString('es-ES', {
                dateStyle: 'full',
                timeStyle: 'medium'
            });
            document.getElementById('currentDateTime').textContent = formattedDateTime;
        }
        setInterval(updateDateTime, 1000);
        updateDateTime();

        function checkDeadlines() {
            const now = new Date();
            tasks.forEach(task => {
                const deadline = new Date(`${task.deadlineDate}T${task.deadlineTime}`);
                if (deadline < now && task.deadlineDate !== 'Indefinida') {
                    const taskElement = document.querySelector(`.task[data-id="${task.id}"]`);
                    if (taskElement && !taskElement.querySelector('.expired-message')) {
                        const expiredMessage = document.createElement('div');
                        expiredMessage.classList.add('expired-message');
                        expiredMessage.innerHTML = `
                            <span class="expired">⚠</span> <span>Plazo terminado</span>
                        `;
                        taskElement.appendChild(expiredMessage);
                    }
                }
            });
        }
        setInterval(checkDeadlines, 60000); // Verificar plazos cada minuto
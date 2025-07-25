// --- VARIABLES SIMPLES y ARREGLOS ---
// Array para almacenar las tareas. Cada tarea será un objeto.
const tasks = [];
// Referencias a los elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const warningMessage = document.getElementById('warningMessage');

// --- FUNCIONES PARA MODULARIZAR EL CÓDIGO ---

/**
 * Muestra las tareas actuales en la interfaz de usuario.
 * Utiliza sentencias iterativas (forEach).
 */
function mostrarTareas() {
    taskList.innerHTML = ''; // Limpia la lista existente para evitar duplicados
    if (tasks.length === 0) {
        const noTasksMessage = document.createElement('li');
        noTasksMessage.textContent = 'No hay tareas aún. ¡Agrega una!';
        noTasksMessage.style.textAlign = 'center';
        noTasksMessage.style.fontStyle = 'italic';
        noTasksMessage.style.color = '#777';
        noTasksMessage.style.backgroundColor = 'transparent';
        noTasksMessage.style.boxShadow = 'none';
        noTasksMessage.style.cursor = 'default';
        taskList.appendChild(noTasksMessage);
        return;
    }

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        // Usa un objeto preconstruido: Date para la fecha
        const date = new Date(task.dateAdded);
        const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) + ' ' + date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        listItem.innerHTML = `
            <span class="task-text">${task.text}</span>
            <span class="task-date">${formattedDate}</span>
        `;
        // Asigna el ID de la tarea como un atributo de datos para facilitar la eliminación
        listItem.dataset.id = task.id;
        taskList.appendChild(listItem);
    });
}

/**
 * Añade una nueva tarea a la lista.
 * Utiliza variables simples y sentencias condicionales.
 * Utiliza un objeto preconstruido: Math para el ID.
 */
function agregarTarea() {
    const taskText = taskInput.value.trim(); // .trim() elimina espacios en blanco al inicio/final

    // --- SENTENCIAS CONDICIONALES ---
    if (taskText === '') {
        warningMessage.classList.remove('hidden'); // Muestra el mensaje de advertencia
        // Opcional: Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            warningMessage.classList.add('hidden');
        }, 3000);
        return; // Detiene la función si la tarea está vacía
    }

    warningMessage.classList.add('hidden'); // Oculta el mensaje si se agrega una tarea válida

    // Crea un objeto para la tarea con ID único y fecha
    const newTask = {
        // Usa Math.random() para un ID simple. En un proyecto real, se usaría UUID.
        id: Math.random().toString(36).substring(2, 9),
        text: taskText,
        dateAdded: new Date().toISOString() // Almacena la fecha como una cadena ISO
    };

    tasks.push(newTask); // Añade la nueva tarea al arreglo
    taskInput.value = ''; // Limpia el input
    mostrarTareas(); // Actualiza la interfaz
}

/**
 * Elimina una tarea de la lista.
 * Requiere recorrer el arreglo y actualizarlo.
 */
function eliminarTarea(event) {
    // Busca el elemento 'li' que fue clickeado
    const listItem = event.target.closest('li');
    if (!listItem) return; // Si no se hizo clic en un LI, sal de la función

    // Solo permite eliminar si no es el mensaje de "No hay tareas"
    if (listItem.textContent === 'No hay tareas aún. ¡Agrega una!') {
        return;
    }

    const taskIdToDelete = listItem.dataset.id; // Obtiene el ID de la tarea del atributo de datos

    // Encuentra el índice de la tarea con el ID correspondiente
    const indexToDelete = tasks.findIndex(task => task.id === taskIdToDelete);

    if (indexToDelete !== -1) {
        // Elimina la tarea del arreglo usando splice
        tasks.splice(indexToDelete, 1);
        mostrarTareas(); // Actualiza la interfaz después de eliminar
    }
}

// --- EVENT LISTENERS ---
// Agrega un listener al botón para añadir tareas
addTaskButton.addEventListener('click', agregarTarea);

// Permite agregar tarea con la tecla Enter en el input
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

// Agrega un listener a la lista completa para detectar clics en las tareas (delegación de eventos)
taskList.addEventListener('click', eliminarTarea);

// --- INICIALIZACIÓN ---
// Muestra las tareas al cargar la página (aunque inicialmente esté vacía)
mostrarTareas();
Lista de Tareas Interactivas con JavaScript
Este proyecto es una aplicación sencilla de lista de tareas (To-Do List) desarrollada con HTML, CSS y JavaScript puro. Su objetivo principal es demostrar la aplicación práctica de conceptos fundamentales de JavaScript, como la manipulación del DOM, el uso de estructuras de datos (arreglos y objetos), control de flujo (condicionales e iteradores), modularización del código mediante funciones y la gestión de eventos.

🚀 Tecnologías Utilizadas
HTML5: Para la estructura y contenido de la página web.

CSS3: Para la presentación visual y el estilo de la aplicación.

JavaScript (ES6+): Para toda la interactividad y la lógica de la aplicación.

📦 Estructura del Proyecto
El proyecto sigue una estructura de carpetas limpia y organizada para separar los diferentes tipos de archivos:

tu-repo-todo-list/
├── index.html          // Archivo principal HTML
├── style.css                // Carpeta para los estilos CSS
│   └── 
├── script.js                // Carpeta para los scripts JavaScript
│   
└── assets/                // Carpeta de la imagen 
    └── asuka langley.png
├── README.md           // Este archivo de documentación



⚙️ Cómo Ejecutar el Código
Clona el repositorio:

Usar Live Server en Visual Studio Code:

Abre la carpeta del proyecto Evaluacion-Portafolio-Modulo-3 en Visual Studio Code.

Si aún no lo tienes, instala la extensión "Live Server" de Ritwick Dey desde el marketplace de VS Code.

Haz clic derecho en el archivo index.html y selecciona "Open with Live Server". Esto abrirá la aplicación en tu navegador con un servidor local, lo cual es ideal para el desarrollo ya que recarga la página automáticamente con cada cambio que guardes.

✨ Funcionalidades Implementadas
La aplicación permite a los usuarios:

Agregar Tareas: Introduce texto en el campo de entrada y haz clic en el botón "Agregar Tarea" o presiona Enter.

Validación de Tareas Vacías: Se muestra un mensaje de advertencia si se intenta agregar una tarea sin texto.

Eliminar Tareas: Haz clic en cualquier tarea existente en la lista para eliminarla.

Visualización Dinámica: Las tareas se muestran y actualizan en tiempo real en la interfaz de usuario.

Fecha de Creación: Cada tarea incluye la fecha y hora en que fue agregada.

🎯 Demostración de Características Fundamentales de JavaScript
Este proyecto ha sido diseñado para mostrar el uso de varias características clave de JavaScript en el desarrollo web interactivo:

1. ¿Qué es JavaScript y su rol en el desarrollo de aplicaciones web?
JavaScript es un lenguaje de programación interpretado, ligero, basado en objetos y multiplataforma. Es el lenguaje esencial para la interactividad en la web. Inicialmente diseñado para funcionar en el lado del cliente (en el navegador), su rol se ha expandido enormemente con la llegada de Node.js, permitiendo también el desarrollo en el lado del servidor y aplicaciones de escritorio o móviles.

Su rol principal en el desarrollo web frontal (lo que ves en el navegador) es:

Manipulación del DOM (Document Object Model): Permite cambiar el contenido, la estructura y el estilo de una página web en tiempo real. En esta aplicación, JavaScript crea dinámicamente elementos <li> para las tareas y los inserta en el <ul>.

Gestión de Eventos: Responde a las interacciones del usuario (clics, pulsaciones de teclas, envíos de formularios, etc.). Aquí, JavaScript escucha los clics en el botón "Agregar Tarea" y en las propias tareas para agregar o eliminar elementos.

Comunicación Asíncrona: Aunque no se usa en este proyecto, JavaScript facilita la carga de datos de servidores sin recargar la página (AJAX, Fetch API), creando experiencias de usuario más fluidas.

2. Ventajas de usar JavaScript para crear aplicaciones interactivas en el navegador
Interactividad Dinámica: Transforma páginas web estáticas en experiencias de usuario ricas y dinámicas, como se ve al añadir o eliminar tareas sin recargar la página.

Ejecución en el Cliente: Se ejecuta directamente en el navegador del usuario, lo que reduce la carga en el servidor y mejora la velocidad de respuesta de la aplicación.

Ecosistema Amplio: Cuenta con una vasta cantidad de librerías, frameworks (React, Angular, Vue) y herramientas que aceleran el desarrollo y resuelven problemas comunes.

Versatilidad: Es el único lenguaje que se ejecuta de forma nativa en todos los navegadores web modernos.

3. Ejemplos de funcionalidades posibles gracias a JavaScript
Más allá de esta To-Do List, JavaScript es fundamental para:

Interactividad en Formularios: Validar campos en tiempo real (ej: si un email es válido), mostrar/ocultar secciones basadas en la entrada del usuario.

Galerías de Imágenes o Carruseles: Moverse entre imágenes, aplicar efectos de transición.

Animaciones y Transiciones: Crear efectos visuales suaves sin recargar la página, mejorando la experiencia del usuario.

Mapas Interactivos: Integrar Google Maps u otras APIs de mapas con funcionalidades de zoom, arrastrar, etc.

Aplicaciones de Una Sola Página (SPA): Cargar todo el contenido de la aplicación en una sola carga inicial y luego actualizar solo las partes necesarias (ej: Gmail, Google Docs), proporcionando una experiencia similar a una aplicación de escritorio.

📊 Estructuras de Datos y Control de Flujo
Variables Simples y Sentencias Condicionales:

Se utiliza una variable simple (taskText) para capturar la entrada del usuario.

Una sentencia condicional (if (taskText === '')) verifica si la tarea está vacía, mostrando un mensaje de advertencia si es así.

Arreglos y Sentencias Iterativas:

Las tareas se almacenan en un arreglo (tasks).

Se utiliza forEach en la función mostrarTareas() para iterar sobre el arreglo y renderizar cada tarea en la interfaz.

La eliminación de tareas implica recorrer el arreglo (findIndex) y actualizarlo (splice).

Objetos Preconstruidos del Lenguaje:

Date: Utilizado para registrar y mostrar la fecha y hora de adición de cada tarea (new Date().toISOString(), toLocaleDateString, toLocaleTimeString).

Math: Se usa Math.random() combinado con otras funciones para generar un identificador único simple para cada tarea.

🧩 Modularización del Código con Funciones
El código JavaScript está organizado en funciones para mejorar su legibilidad, mantenibilidad y reusabilidad:

mostrarTareas(): Encargada de renderizar todas las tareas en el DOM.

agregarTarea(): Maneja la lógica de añadir una nueva tarea al arreglo, incluyendo la validación y la actualización del input.

eliminarTarea(event): Se ocupa de remover una tarea del arreglo y del DOM basándose en el clic del usuario.

📝 Gestión de Código Fuente con Git y GitHub
El proyecto se gestiona utilizando Git y está alojado en GitHub. El historial de commits refleja un desarrollo incremental y descriptivo, con mensajes claros que indican las funcionalidades añadidas o los cambios realizados. La estructura del repositorio está organizada para una fácil navegación y comprensión.# Evaluacion-Portafolio-Modulo-3

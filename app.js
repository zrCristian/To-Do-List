// Info Date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const boton = document.getElementById("boton");

// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
}

const addNewTask = event => {
    event.preventDefault();

    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder"); // con task le vamos a dar style
    task.addEventListener("click", changeTaskState);
    task.textContent = value; // para agregar dentro del elemento lo que puso el usuario
    tasksContainer.prepend(task); // prepend para agregarlo al principio de la lista
    event.target.reset()
}

const changeTaskState = event => {
    event.target.classList.toggle("done");
    // toggle quiere decir que si tiene la clase `done` se la saca y si no la tiene se lo agrega
}

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach (el => {
        el.classList.contains("done") ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done]
}

const renderOrdererTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate()

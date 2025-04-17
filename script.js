let tasks = []
document.getElementById("clearButton").style.visibility = "hidden";

function addTask(){
    const inputTask = document.getElementById("task");
    let task = inputTask.value.trim();

    const message = document.getElementById("message");

    if (task == ""){
        let errorMessage = "An empty task is invalid!";
        message.textContent = errorMessage;
        message.style.color ="#FF2F2F";
        document.getElementById("clearButton").style.visibility = "hidden";
    } else{
        document.getElementById("clearButton").style.visibility = "visible";
        let sucessMessage = "Task added successfully!";
        message.textContent = sucessMessage;
        message.style.color ="#77AD4E";
        tasks.push(task);
        renderTasks()
    }

    inputTask.value = "";
}

function renderTasks(){
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = ""

    
    for (let i = 0; i < tasks.length; i++){
        let newTask = document.createElement("li");
        newTask.textContent = tasks[i];

        let deleteButton = document.createElement("button")
        deleteButton.className ="delete"
        deleteButton.textContent = "Delete"
        deleteButton.onclick = () => deleteTask(i)

        let editButton = document.createElement("button")
        editButton.className ="edit"
        editButton.textContent = "Edit"
        editButton.onclick = () => editTask(i)

        newTask.appendChild(deleteButton)
        newTask.appendChild(editButton)
        taskList.appendChild(newTask);
    }
}

function deleteTask(i) {
    tasks.splice(i, 1)
    renderTasks()
}

function editTask(i){
    let editedTask = prompt("Edit your task:")
    if (editedTask.trim() !== "") {
        tasks[i] = editedTask
        renderTasks()
    }
}

function clearAll (){
    tasks.length = 0
    renderTasks()
    let message = document.getElementById('message')
    message.textContent = "Tasklist all cleared up!"

}

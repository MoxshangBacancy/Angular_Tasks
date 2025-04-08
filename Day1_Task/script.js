const addBtn = document.getElementById("add-task-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
});

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { text: taskText, completed: false };
        tasks.push(task);
        updateLocalStorage();
        createTaskElement(task.text, task.completed);
        taskInput.value = "";
    }
});

function createTaskElement(text, completed) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    const span = document.createElement("span");
    span.textContent = text;
    if (completed) span.style.textDecoration = "line-through";

    checkbox.addEventListener("change", function() {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        const taskIndex = Array.from(taskList.children).indexOf(li);
        tasks[taskIndex].completed = checkbox.checked;
        updateLocalStorage();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", function() {
        const taskIndex = Array.from(taskList.children).indexOf(li);
        tasks.splice(taskIndex, 1);
        updateLocalStorage();
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
document.getElementById('add-task').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});

document.getElementById('clear-tasks').addEventListener('click', function() {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
});

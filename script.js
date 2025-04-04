const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");
button.addEventListener("click", function () {
    // Code à exécuter quand on clique sur le bouton
  });
  const taskText = input.value;
  if (taskText.trim() === "") {
    return; // ne fait rien si le champ est vide
  }
  newTask.textContent = taskText;
  list.appendChild(newTask);
  input.value = "";
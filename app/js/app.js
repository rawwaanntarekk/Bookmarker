//! HTML Elements

var taskNameInput = document.getElementById("taskName");

var taskDescriptionInput = document.getElementById("taskDesc");

var taskDateInput = document.getElementById("taskDate");

var addTaskButton = document.getElementById("addTaskBtn");

console.log(taskNameInput, taskDescriptionInput, taskDateInput);

var tasks = [];

//! Functions

function addTask() {
  var task = {
    name: taskNameInput.value,
    description: taskDescriptionInput.value,
    date: taskDateInput.value,
  };

  tasks.push(task);

  console.log(tasks);
}

//! Events

addTaskButton.onclick = addTask;

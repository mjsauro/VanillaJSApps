//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners

loadEventListeners();

//Load all event listeners

function loadEventListeners() {
  //DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  //Add Task Event
  form.addEventListener('submit', addTask);
  //Remove Task Event
  taskList.addEventListener('click', removeTask);
  //Clear Tasks
  clearBtn.addEventListener('click', clearTasks);
  //Filter Tasks
  filter.addEventListener('keyup', filterTasks);
}

//Get tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item orange lighten-5';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

//Add task function
function addTask(e) {

  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item orange lighten-5';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create a new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content ';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);
  //Append li to ul
  taskList.appendChild(li);
  //Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);
  //Clear input
  taskInput.value = "";

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task function
function removeTask(e) {

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm("Are you sure you want to delete?")) {
      e.target.parentElement.parentElement.remove()
    }

    //Remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

//Remove from LS Function

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear all tasks
function clearTasks() {
  //taskList.innerHTML = "";

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //Clear from LS
  clearTasksFromLocalStorage();
};

//Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(

    function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
}
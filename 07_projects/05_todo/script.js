// DOM Elements
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const dueDateInput = document.querySelector('#due-date');
const taskList = document.querySelector('#task-list');
const clearAllBtn = document.querySelector('#clear-all');
const filterSelect = document.querySelector('#filter');
const searchInput = document.querySelector('#search');
const toggleThemeBtn = document.querySelector('#toggle-theme');

// Load tasks from localStorage on page load
window.addEventListener('load', loadTasks);

// Add a new task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText) {
    addTaskToList(taskText, dueDate, false);
    saveTasks();
    taskInput.value = '';
    dueDateInput.value = '';
  }
});

// Add a task to the DOM
function addTaskToList(text, dueDate, completed) {
  const li = document.createElement('li');
  li.draggable = true;

  const taskText = document.createElement('span');
  taskText.textContent = text;

  if (completed) li.classList.add('completed');

  const dueDateSpan = document.createElement('span');
  if (dueDate) {
    dueDateSpan.textContent = `Due: ${dueDate}`;
  }

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', text);
    if (newText) {
      taskText.textContent = newText;
      saveTasks();
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.append(taskText, dueDateSpan, completeBtn, editBtn, deleteBtn);
  taskList.appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach((li) => {
    tasks.push({
      text: li.querySelector('span').textContent,
      dueDate: li.querySelectorAll('span')[1]?.textContent.replace('Due: ', '') || '',
      completed: li.classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => addTaskToList(task.text, task.dueDate, task.completed));
}

// Clear all tasks
clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  saveTasks();
});

// Filter tasks
filterSelect.addEventListener('change', (e) => {
  const filter = e.target.value;
  taskList.querySelectorAll('li').forEach((li) => {
    if (
      filter === 'all' ||
      (filter === 'completed' && li.classList.contains('completed')) ||
      (filter === 'pending' && !li.classList.contains('completed'))
    ) {
      li.style.display = 'flex';
    } else {
      li.style.display = 'none';
    }
  });
});

// Search tasks
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  taskList.querySelectorAll('li').forEach((li) => {
    if (li.querySelector('span').textContent.toLowerCase().includes(searchTerm)) {
      li.style.display = 'flex';
    } else {
      li.style.display = 'none';
    }
  });
});

// Toggle theme
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// // Toggle theme
// toggleThemeBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

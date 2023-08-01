const colorButton = document.getElementById('colorButton');
const colorfulText = document.getElementById('colorfulText');

colorButton.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  colorfulText.style.color = randomColor;
});

let currentResult = '';
const resultElement = document.getElementById('result');

function appendToResult(value) {
  currentResult += value;
  updateResult();
}

function updateResult() {
  resultElement.value = currentResult;
}

function clearResult() {
  currentResult = '';
  updateResult();
}

function calculateResult() {
  try {
    currentResult = eval(currentResult);
    updateResult();
  } catch (error) {
    currentResult = 'Error';
    updateResult();
  }
}

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const taskList = document.getElementById('taskList');
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', toggleDone);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}
function toggleDone(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('done');
}
function removeDoneTasks() {
  const doneTasks = document.querySelectorAll('.done');
  doneTasks.forEach(task => task.remove());
}
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

removeButton.addEventListener('click', removeDoneTasks);

const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const prioritySelect = document.getElementById('priority-select');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add event listener for dark mode toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = document.getElementById('due-date').value;

  if (!taskText) {
    alert('Please enter a task.');
    return;
  }

  // Create a new list item for the task
  const taskItem = document.createElement('li');
  taskItem.classList.add(priority);

  // Task information (task + priority + due date)
  const taskInfo = document.createElement('div');
  taskInfo.classList.add('task-info');
  
  const taskDescription = document.createElement('p');
  taskDescription.textContent = taskText;

  const priorityLabel = document.createElement('span');
  priorityLabel.textContent = `${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`;
  priorityLabel.classList.add('priority');

  taskInfo.appendChild(taskDescription);
  taskInfo.appendChild(priorityLabel);

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskItem.style.transform = 'translateX(100%)';
    taskItem.style.opacity = '0';
    setTimeout(() => taskItem.remove(), 300);  // Delay to allow animation
  });

  taskItem.appendChild(taskInfo);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = '';
}

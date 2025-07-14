const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!taskText) {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item', `priority-${priority}`);

  // Task content
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.addEventListener('change', () => toggleCompletion(taskItem));

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => taskItem.remove());

  // Append elements
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
});

// Toggle completion
function toggleCompletion(taskItem) {
  taskItem.classList.toggle('completed');
}

// Filter tasks
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const tasks = taskList.childNodes;
    tasks.forEach((task) => {
      if (filter === 'all') {
        task.style.display = 'flex';
      } else if (filter === 'completed' && task.classList.contains('completed')) {
        task.style.display = 'flex';
      } else if (filter === 'pending' && !task.classList.contains('completed')) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    });
  });
});

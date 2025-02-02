let editingTaskId = null;

function addOrUpdateTask() {
  const input = document.getElementById('tf-input').value;
  if (editingTaskId) {
    // Update existing task
    const task = document.getElementById(editingTaskId);
    task.childNodes[0].nodeValue = input;
    document.getElementById('add-edit-button').textContent = 'Add Task';
    editingTaskId = null;
  } else {
    // Add new task
    const task = document.createElement('li');
    task.textContent = input;
    task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
    task.classList.add('list-item');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      editTask(task.id);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
    });

    task.appendChild(editButton);
    task.appendChild(deleteButton);
    document.getElementById('task-container').appendChild(task);
  }
  document.getElementById('tf-input').value = '';
}

function editTask(id) {
  const task = document.getElementById(id);
  const taskText = task.childNodes[0].nodeValue;
  document.getElementById('tf-input').value = taskText;
  document.getElementById('add-edit-button').textContent = 'Edit';
  editingTaskId = id;
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}
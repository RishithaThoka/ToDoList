// Add task function
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTask);

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Add to task list
    document.getElementById('taskList').appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Toggle task completion
function toggleTask(event) {
    const li = event.target.parentElement;
    li.classList.toggle('completed');
}

// Add task on Enter key
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
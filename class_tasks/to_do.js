document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        const removeButton = document.createElement('button');

        taskItem.textContent = taskText;
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        //for add into list
        taskList.appendChild(taskItem);
        taskItem.appendChild(removeButton);

        taskInput.value = '';
    }
});

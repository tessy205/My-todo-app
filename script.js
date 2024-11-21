// Select DOM elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to list
addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add event listener to toggle completed state
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add event listener to delete button
        li.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        todoList.appendChild(li);
        input.value = '';
    }
});

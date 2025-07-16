const taskList = document.getElementById('taskList');
const popup = document.getElementById('popup');
const quote = document.getElementById('quote');

const quotes = [
    "Believe you can and you're halfway there!",
    "Keep going, you're doing great!",
    "Success starts with small steps!",
    "Every day is a fresh start.",
    "You’re capable of amazing things!"
];

function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = input.value;
    li.onclick = () => completeTask(li);

    taskList.appendChild(li);
    input.value = '';
}

function completeTask(li) {
    li.remove();
    showMotivation();
}

function showMotivation() {
    quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    popup.classList.remove('hidden');
}

function closePopup() {
    popup.classList.add('hidden');
}

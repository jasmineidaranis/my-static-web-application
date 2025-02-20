document.getElementById('greetButton').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = "Hello, thanks for clicking the button!";
    greeting.classList.remove('hidden');
});
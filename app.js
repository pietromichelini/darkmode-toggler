
const button = document.querySelector('.toggleDarkMode');
const body = document.querySelector('body')
const icon = document.querySelector('button i')


function toggleDarkMode() {
    body.classList.toggle('dark');
    button.classList.toggle('dark-btn');
    icon.classList.toggle('fa-toggle-on');
}
button.addEventListener('click', toggleDarkMode);
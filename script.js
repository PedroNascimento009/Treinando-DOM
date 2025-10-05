const input = document.querySelector('#myInput');

input.addEventListener('focus', () => {
    input.style.backgroundColor = 'lightblue';
});

input.addEventListener('blur', () => {
    input.style.backgroundColor = 'blue';
});
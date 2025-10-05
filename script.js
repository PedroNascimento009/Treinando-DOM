const a = document.querySelector('a');

a.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Você clicou no link, mas não foi redirecionado.');
});
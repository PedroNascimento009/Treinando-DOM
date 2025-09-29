const titulo = document.querySelector('#titulo')
const h2 = document.createElement('h2')
h2.textContent = 'Novo titulo'

const header = titulo.parentElement

header.replaceChild(h2, titulo)
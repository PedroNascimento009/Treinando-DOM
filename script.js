let elemento = document.querySelector('#titulo')

const p = document.createElement('p')

const header = elemento.parentElement

header.insertBefore(p, elemento)

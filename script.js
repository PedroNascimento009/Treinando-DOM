const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#otherBtn')

function imprimir(){
    console.log('Clicou')
}

btn.addEventListener('click',  imprimir)

btn2.addEventListener('click', () => {
    console.log('Evento removido')
    btn.removeEventListener('click', imprimir)
})
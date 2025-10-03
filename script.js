const btn = document.querySelector('#btn')
const containder = document.querySelector('#container')

btn.addEventListener('click',  (e) => {
    e.stopPropagation()
    console.log('Clicou no botão')
})

containder.addEventListener('click', () => {
    console.log('Clicou no container')
})
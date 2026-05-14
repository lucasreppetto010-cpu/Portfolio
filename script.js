

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


document.querySelector('.btn-fechar').addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// NOVO: Fechar menu ao clicar em qualquer link do menu mobile
document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
    })
})

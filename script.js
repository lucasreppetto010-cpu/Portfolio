/* ============================================================
   MENU DO CELULAR
   Abre e fecha o menu lateral. Funciona adicionando/removendo
   a classe "abrir-menu" no #menu-mobile; quem faz a animação
   é o CSS (procure por ".menu-mobile.abrir-menu" no style.css).
   ============================================================ */

// Pegando os elementos do HTML pelo id
let btnMenu = document.getElementById('btn-menu')        // ícone ☰
let menu = document.getElementById('menu-mobile')        // o menu lateral
let overlay = document.getElementById('overlay-menu')    // fundo escuro atrás do menu

// Clicou no ☰ -> abre o menu
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

// Clicou em qualquer lugar do menu -> fecha
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Clicou no fundo escuro -> fecha
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Clicou no X -> fecha
document.querySelector('.btn-fechar').addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// Clicou num link do menu -> fecha (e a página rola até a seção)
document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
    })
})

// DECLARANDO AS VARIAVEIS NO MENU
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');


// CRIANDO AÇÃO PARA QUANDO O USUARIO CLICAR NO MENU
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// CRIANDO AÇÃO PARA QUANDO O USUARIO CLICAR NA LUPA
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// CRIANDO AÇÃO PARA QUANDO O USUARIO CLICAR NO CARRINHO DE COMPRAS
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// CRIANDO AÇÃO PARA QUANDO O ROLAR A TELA
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
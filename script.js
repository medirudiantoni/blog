const menus = document.querySelector('.menus');
const general = document.querySelector('.general');
const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');
const bgDark = document.querySelector('.switch-dark');
const bgLight = document.querySelector('.switch-light');
const body = document.getElementsByTagName('body');

bgDark.addEventListener('click', function(){
    body.setAttribute.class('bg-dark');
})

const slider = () => {
    menus.classList.toggle('slide');
    general.classList.toggle('general-slide');
}

toggle.addEventListener('click', slider);
close.addEventListener('click', slider);
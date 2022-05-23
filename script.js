const menus = document.querySelector('.menus');
const general = document.querySelector('.general');
const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');

const slider = () => {
    menus.classList.toggle('slide');
    general.classList.toggle('general-slide');
}

toggle.addEventListener('click', slider);
close.addEventListener('click', slider);

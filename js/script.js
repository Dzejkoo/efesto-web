let nav_button = document.querySelector('.nav__button');
let nav_list = document.querySelector('.nav__list');

nav_button.addEventListener('click', () => {
    nav_button.classList.toggle('nav__button--open')
    nav_list.classList.toggle('nav__list--open')
})
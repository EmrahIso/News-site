// Navigation 

let rootEl = document.querySelector('html');
let navBtnEl = document.querySelector('.nav__button');
let headerEl = document.querySelector('.header');
let navLinkEls = document.querySelectorAll('.nav__list-link');

function openNav() {
    rootEl.classList.toggle('no-scroll');
    headerEl.classList.toggle('open');
}

function navLinkClick() {
    rootEl.classList.remove('no-scroll');
    headerEl.classList.remove('open');
}

navBtnEl.addEventListener('click', openNav);
navLinkEls.forEach(navLinkEl => navLinkEl.addEventListener('click', navLinkClick));

// Navigation 

let navBtn = document.querySelector('.nav__button');

function openNav() {
    navBtn.classList.toggle('open');
}

navBtn.addEventListener('click', openNav);

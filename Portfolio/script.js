// Navbar Responsiveness

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

// Sticky Navbar

const nav =document.querySelector('nav');

function handleScroll () {
    if (window.scrollY > 0) {
        nav.classList.add('sticky-nav')
    } else {
        nav.classList.remove('sticky-nav')
    }
}

window.addEventListener('scroll', handleScroll);
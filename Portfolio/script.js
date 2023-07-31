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


// Active Links


const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(link => link.parentElement.classList.remove('active'),
      navMenu.classList.remove('active'),
      hamburger.classList.remove('active'),
      body.classList.remove('no-scroll'));
    this.parentElement.classList.add('active');
  });
});
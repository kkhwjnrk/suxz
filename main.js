// const menu = document.querySelector('.header');
// const button = document.querySelector('.btn-toggle');

// button.addEventListener('click', () => {
//   const isMenuOpen = button.getAttribute('data-toggle') === 'true';

//   if (isMenuOpen) {
//     button.setAttribute('data-toggle', 'false');
//     button.innerHTML = '<i class="bx bx-menu-alt-right"></i>';
//     menu.classList.remove('header-active');
//   } else {
//     button.setAttribute('data-toggle', 'true');
//     button.innerHTML = '<i class="bx bx-x"></i>';
//     menu.classList.add('header-active');
//   }
// })

const addEventOnElements = (elements, evenType, callback) => {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(evenType, callback);
  }
}

/*
 * Header
 */
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 80 ? 'add' : 'remove']('active');
})

/*
 * Navbar
 */
const navbar = document.querySelector('#navbar');
const toggle = document.querySelectorAll('[data-toggle]');
const overlay = document.querySelector('#overlay');

const toggleNav = () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}

addEventOnElements(toggle, 'click', toggleNav);
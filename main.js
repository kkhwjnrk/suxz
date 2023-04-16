const menu = document.querySelector('.header');
const button = document.querySelector('.btn-toggle');

button.addEventListener('click', () => {
  const isMenuOpen = button.getAttribute('data-toggle') === 'true';


  if (isMenuOpen) {
    button.setAttribute('data-toggle', 'false');
    button.innerHTML = '<i class="bx bx-menu-alt-right"></i>';
    menu.classList.remove('header-active');
  } else {
    button.setAttribute('data-toggle', 'true');
    button.innerHTML = '<i class="bx bx-x"></i>';
    menu.classList.add('header-active');
  }
})
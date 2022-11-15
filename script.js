const menuWrapper = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const background = document.querySelector('header');
let menuOpen = false;

menuWrapper.addEventListener('click', () => {
  if (!menuOpen) {
    menuWrapper.classList.add('open');
    background.style.background = '#e9e9e9';
    menuOpen = true;
  } else {
    menuWrapper.classList.remove('open');
    background.style.background = '#fff';
    menuOpen = false;
  }

  navLinks.classList.toggle('open');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menuWrapper.classList.remove('open');
    background.style.background = '#fff';
    menuOpen = false;
    navLinks.classList.toggle('open');
  });
});
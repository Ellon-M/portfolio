const menuWrapper = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
let menuOpen = false;

const openLinks = document.querySelectorAll('.work-link');
const popupCards = document.querySelectorAll('.work-details');
const closeLinks = document.querySelectorAll('.details-close-button');

menuWrapper.addEventListener('click', () => {
  if (!menuOpen) {
    menuWrapper.classList.add('open');
    menuOpen = true;
  } else {
    menuWrapper.classList.remove('open');
    menuOpen = false;
  }

  navLinks.classList.toggle('open');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menuWrapper.classList.remove('open');
    menuOpen = false;
    navLinks.classList.toggle('open');
  });
});

const setDataIndex = () => {
  for (let i = 0; i < popupCards.length; i += 1) {
    openLinks[i].setAttribute('data-index', i);
    popupCards[i].setAttribute('data-index', i);
    closeLinks[i].setAttribute('data-index', i);
  }
};

// open popup action
openLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const index = link.getAttribute('data-index');
    popupCards[index].classList.add('open');
    document.body.style.overflowY = 'hidden';
  });
});

// close popup action
closeLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const index = link.getAttribute('data-index');
    popupCards[index].classList.remove('open');
    document.body.style.overflowY = 'scroll';
  });
});

window.onload = () => {
  setDataIndex();
};
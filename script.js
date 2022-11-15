const menuWrapper = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const background = document.querySelector('header');
let menuOpen = false;

const openLinks =  document.querySelectorAll('.work-link');
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
  for (i = 0; i < popupCards.length; i++) {
    openLinks[i].setAttribute('data-index', i);
    popupCards[i].setAttribute('data-index', i);
    closeLinks[i].setAttribute('data-index', i);
  }
};

// open popup action
openLinks.forEach((link) => {
  link.addEventListener('click', () => {
    var index = link.getAttribute('data-index');
    console.log(index);
    popupCards[index].classList.add('open');
    // popupCards[index].style.display = 'flex';
  });
});

//close popup action
closeLinks.forEach((link) => {
  link.addEventListener('click', () => {
    var index = link.getAttribute('data-index');
    popupCards[index].classList.remove('open');
    // popupCards[index].style.display = 'none';
  });
});

window.onload = () => {
  setDataIndex();
}
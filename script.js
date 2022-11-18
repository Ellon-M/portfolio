const menuWrapper = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
let menuOpen = false;

const openLinks = document.querySelectorAll('.work-link');
const popupCards = document.querySelectorAll('.work-details');
const closeLinks = document.querySelectorAll('.details-close-button');

const formSubmit = document.querySelector('#form-button');
const formSubmit = document.querySelector('#form-button');

const mail = document.querySelector('#email');

const errorMsg = document.querySelector('#error-message');

const formData = {
  firstName: document.getElementById('first-name'),
  lastName: document.getElementById('last-name'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
};

const mail = document.querySelector('#email');

const errorMsg = document.querySelector('#error-message');

const setDataIndex = () => {
  for (let i = 0; i < popupCards.length; i += 1) {
    openLinks[i].setAttribute('data-index', i);
    popupCards[i].setAttribute('data-index', i);
    closeLinks[i].setAttribute('data-index', i);
  }
};

const validateInput = (email) => email.toLowerCase() === email;

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

// form submission validation
formSubmit.addEventListener('click', (e) => {
  const val = validateInput(mail.value);
  if (!val) {
    errorMsg.style.display = 'flex';
    e.preventDefault();
  }
});
formSubmit.addEventListener('click', (e) => {
  const val = validateInput(mail.value);
  if (!val) {
    errorMsg.style.display = 'flex';
    e.preventDefault();
  }
});

const inputs = Object.values(formData);

inputs.forEach((input) => {
  inputPersist(input);
});

window.onload = () => {
  setDataIndex();
};

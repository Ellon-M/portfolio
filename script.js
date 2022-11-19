const menuWrapper = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
let menuOpen = false;

const openLinks = document.querySelectorAll('.work-link');
const popupCards = document.querySelectorAll('.work-details');
const closeLinks = document.querySelectorAll('.details-close-button');

const formSubmit = document.querySelector('#form-button');

const mail = document.querySelector('#email');

const errorMsg = document.querySelector('#error-message');

const contactForm = document.querySelector('form');

contactForm.addEventListener('input', () => {
    const formData = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    localStorage.setItem('userData', JSON.stringify(formData));
});


const retreived = JSON.parse(localStorage.getItem('userData'));

document.getElementById('first-name').value = retreived.firstName;
document.getElementById('last-name').value = retreived.lastName;
document.getElementById('email').value = retreived.email;
document.getElementById('message').value = retreived.message;

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

window.onload = () => {
  setDataIndex();
};

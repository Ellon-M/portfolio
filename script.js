const menuWrapper = document.querySelector(".menu-button-wrap");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

menuWrapper.addEventListener("click", (e) => {
  if (!menuOpen) {
    menuWrapper.classList.add("open");
    document.body.style.overflowY = 'hidden';
    menuOpen = true;
  } else {
    menuWrapper.classList.remove("open");
    document.body.style.overflowY = 'visible';
    menuOpen = false;
  }

  navLinks.classList.toggle("open");
});
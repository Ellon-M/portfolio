const menuWrapper = document.querySelector(".menu-button-wrap");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

menuWrapper.addEventListener("click", (e) => {
  if (!menuOpen) {
    menuWrapper.classList.add("open");
    menuOpen = true;
  } else {
    menuWrapper.classList.remove("open");
    menuOpen = false;
  }

  navLinks.classList.toggle("open");
});

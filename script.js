const hamburgerButton = document.querySelector(".c-hamburger");
const navMenu = document.querySelector(".c-nav_menu");
const closeButton = document.querySelector(".c-close");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  closeButton.classList.remove("uc-desktop-hide");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("show");
  closeButton.classList.add("uc-desktop-hide");
});

let menu = document.querySelector(".btn-menu");
let navBar = document.querySelector(".nav-bar");

function menuMobile() {
  navBar.classList.toggle(".active");
}

menu.addEventListener("click", menuMobile);

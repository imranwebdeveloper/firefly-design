// import "./Counter";
// import "./mobileMenu";

const menuButton = document.querySelector(".show_menu");
const navigationMenu = document.querySelector(".navigation_menu");
const menuCloseBtn = document.querySelector(".close_menu");

menuButton.addEventListener("click", () => {
  navigationMenu.classList.add("mobile_menu");
});
menuCloseBtn.addEventListener("click", () => {
  navigationMenu.classList.remove("mobile_menu");
});

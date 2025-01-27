document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__toggle");
  const navList = document.querySelector(".nav-bar__list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("nav-bar__list--visible");
  });
});

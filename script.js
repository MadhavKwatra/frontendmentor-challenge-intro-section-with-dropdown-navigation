const menuButton = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const closeIcon = document.querySelector("img.close");

// Show Menu when Hamburger clicked
menuButton.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

// Hide menu when Close clicked
closeIcon.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

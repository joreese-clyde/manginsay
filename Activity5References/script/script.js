const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
const demoBtn = document.getElementById("demoBtn");
const heroText = document.getElementById("heroText");

demoBtn.addEventListener("click", () => {
  heroText.textContent =
    "JavaScript changed this text without reloading the page!";

  demoBtn.textContent = "Interaction Complete ✓";
});
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
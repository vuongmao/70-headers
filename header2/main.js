const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".search-toggle");
const sidebarOpen = document.querySelector(".sidebar-open");
const sidebarClose = document.querySelector(".sidebar-close");

const theme = localStorage.getItem("theme");
if (theme) {
  body.classList.add(theme);
  if (theme === "dark") {
    modeToggle.classList.add("active");
  }
}

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.toggle("active");
});

sidebarClose.addEventListener("click", () => {
  nav.classList.toggle("active");
});

body.addEventListener("click", (e) => {
  const clickedElement = e.target;

  if (
    !clickedElement.classList.contains("sidebar-open") &&
    !clickedElement.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

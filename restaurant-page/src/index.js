import "./styles/style.css";

import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

const content = document.getElementById("content");

function render(page) {
  content.textContent = "";
  content.appendChild(page());
}

// Load Home by default
render(loadHome);

// Navigation buttons
document.getElementById("home-btn").addEventListener("click", () => {
  render(loadHome);
});

document.getElementById("menu-btn").addEventListener("click", () => {
  render(loadMenu);
});

document.getElementById("contact-btn").addEventListener("click", () => {
  render(loadContact);
});
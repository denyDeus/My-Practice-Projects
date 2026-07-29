import "./styles/style.css";

import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

import "@fontsource/playfair-display";
import "@fontsource/poppins";

const content = document.getElementById("content");

const logo = document.querySelector(".logo");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

function loadPage(page, darkLogo = false) {
    content.textContent = "";
    content.appendChild(page());

    if (darkLogo) {
        logo.classList.add("dark");
    } else {
        logo.classList.remove("dark");
    }
}

// Load Home first
loadPage(loadHome);

// Navigation
homeBtn.addEventListener("click", () => {
    loadPage(loadHome);
});

menuBtn.addEventListener("click", () => {
    loadPage(loadMenu, true);
});

contactBtn.addEventListener("click", () => {
    loadPage(loadContact, true);
});
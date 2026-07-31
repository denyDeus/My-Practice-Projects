import "./styles/style.css";

import loadHome from "./modules/home.js";
import loadAbout from "./modules/about.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

import "@fontsource/playfair-display";
import "@fontsource/poppins";
import "@fortawesome/fontawesome-free/css/all.min.css";

import createFooter from "./modules/footer";

const header = document.querySelector("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const logo = document.querySelector(".logo");

const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

function loadPage(page, darkLogo = false) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    content.style.opacity = "0";

    setTimeout(() => {
        content.textContent = "";
        content.appendChild(page());

        if (darkLogo) {
            logo.classList.add("dark");
        } else {
            logo.classList.remove("dark");
        }

        content.style.opacity = "1";
    }, 150);
}

function setActiveButton(button) {
    document.querySelectorAll(".nav-links button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// Load Home first
loadPage(loadHome);

// Create the footer once
footer.appendChild(createFooter());
setActiveButton(homeBtn);

// Navigation
homeBtn.addEventListener("click", () => {
    loadPage(loadHome);
    setActiveButton(homeBtn);
});

aboutBtn.addEventListener("click", () => {
    loadPage(loadAbout, true);
    setActiveButton(aboutBtn);
})

menuBtn.addEventListener("click", () => {
    loadPage(loadMenu, true);
    setActiveButton(menuBtn);
});

contactBtn.addEventListener("click", () => {
    loadPage(loadContact, true);
    setActiveButton(contactBtn);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
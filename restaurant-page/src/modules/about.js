export default function loadAbout() {

    const about = document.createElement("section");
    about.classList.add("about");

    const title = document.createElement("h1");
    title.textContent = "About Delicious Dish";

    const text = document.createElement("p");

    text.textContent = "For over fifteen years, Delicious Dish has served unforgettable meals prepared with fresh ingredients, exceptional hospitality, and a passion for fine dining.";

    about.append(title, text);

    return about;
}
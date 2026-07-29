import heroImage from "../images/hero.jpg";

export default function loadHome() {
  const home = document.createElement("section");
  home.classList.add("hero");

  home.style.backgroundImage = `url(${heroImage})`;

  const title = document.createElement("h1");
  title.textContent = "Delicious Dish Restaurant";

  const slogan = document.createElement("p");
  slogan.textContent = "Every plate tells a story. Every bite creates a memory.";

  const description = document.createElement("p");
  description.textContent = "Fresh ingredients, exceptional services, and unforgettable dining experiences."

  const button = document.createElement("button");
  button.textContent = "Reserve a Table";
  button.classList.add("hero-btn");

  home.append(
    title, 
    slogan, 
    description, 
    button);

  return home;
}
export default function loadHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Delicious Dish Restaurant";

  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Where every meal is crafted with passion and served with love.";

  const button = document.createElement("button");
  button.textContent = "Reserve a Table";

  home.append(title, subtitle, button);

  return home;
}
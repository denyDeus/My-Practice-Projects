import steakImg from "../images/menu/steak.jpg";
import pizzaImg from "../images/menu/pizza.jpg";
import cakeImg from "../images/menu/cake.jpg";

function createCard(name, category, description, price, image) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = category;

  const title = document.createElement("h3");
  title.textContent = name;

  const desc = document.createElement("p");
  desc.textContent = description;

  const cost = document.createElement("span");
  cost.classList.add("price");
  cost.textContent = price;

  card.append(img, badge, title, desc, cost);

  return card;
}

export default function loadMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Special Menu";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("menu-grid");

  const menuItems = [
  {
    name: "Grilled Steak",
    category: "🥩 Main Course",
    description: "Tender grilled beef served with roasted vegetables and our signature pepper sauce.",
    price: "£18.99",
    image: steakImg,
  },
  {
    name: "Margherita Pizza",
    category: "🍕 Pizza",
    description: "Stone-baked pizza topped with fresh mozzarella, basil, and rich tomato sauce.",
    price: "£12.99",
    image: pizzaImg,
  },
  {
    name: "Chocolate Lava Cake",
    category: "🍰 Dessert",
    description:  "Warm chocolate cake with a gooey molten centre, served with vanilla ice cream.",
    price: "£6.50",
    image: cakeImg,
  },
];

  menuItems.forEach((item) => {
    cardsContainer.appendChild(
        createCard(
        item.name,
        item.category,
        item.description,
        item.price,
        item.image
        )
    );
});
  menu.append(heading, cardsContainer);

  return menu;
}
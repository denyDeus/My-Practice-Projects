import steakImg from "../images/menu/steak.jpg";
import pizzaImg from "../images/menu/pizza.jpg";
import cakeImg from "../images/menu/cake.jpg";
import pastaImg from "../images/menu/pasta.jpg";
import HerbChikenBowlImg from "../images/menu/HerbChikenBowl.jpg";
import seafoodImg from "../images/menu/seafood.jpg";
import cheesecakeImg from "../images/menu/cheesecake.jpg";
import VegetablewrapImg from "../images/menu/Vegetablewrap.jpg";

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
    price: "$18.99",
    image: steakImg,
  },
  {
    name: "Margherita Pizza",
    category: "🍕 Pizza",
    description: "Stone-baked pizza topped with fresh mozzarella, basil, and rich tomato sauce.",
    price: "$12.99",
    image: pizzaImg,
  },
  {
    name: "Chocolate Lava Cake",
    category: "🍰 Dessert",
    description:  "Warm chocolate cake with a gooey molten centre, served with vanilla ice cream.",
    price: "$6.50",
    image: cakeImg,
  },
  {
    name: "Herb Chicken Bowl",
    category: "🥗 Main Course",
    description: "Grilled chicken breast with herbed rice, avocado, and a citrus dressing.",
    price: "$14.75",
    image: HerbChikenBowlImg,
  },
  {
    name: "Truffle Pasta",
    category: "🍝 Pasta",
    description: "Creamy truffle tagliatelle finished with parmesan and black pepper.",
    price: "$13.50",
    image: pastaImg,
  },
  {
    name: "Seafood Risotto",
    category: "🍤 Chef Special",
    description: "Slow-cooked arborio rice with prawns, mussels, and a delicate saffron broth.",
    price: "$16.20",
    image: seafoodImg,
  },
  {
    name: "Berry Cheesecake",
    category: "🍰 Dessert",
    description: "Silky cheesecake layered with fresh berries and a crumbly biscuit base.",
    price: "$5.95",
    image: cheesecakeImg,
  },
  {
    name: "Vegetable Wrap",
    category: "🌯 Light Meal",
    description: "A warm tortilla filled with grilled vegetables, hummus, and crisp greens.",
    price: "$9.80",
    image: VegetablewrapImg,
  }
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
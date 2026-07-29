export default function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const items = [
    "🍕 Margherita Pizza",
    "🍔 Classic Beef Burger",
    "🍝 Creamy Alfredo Pasta",
    "🥗 Caesar Salad",
    "🍰 Chocolate Lava Cake"
  ];

  menu.appendChild(heading);

  items.forEach(item => {
    const food = document.createElement("p");
    food.textContent = item;
    menu.appendChild(food);
  });

  return menu;
}
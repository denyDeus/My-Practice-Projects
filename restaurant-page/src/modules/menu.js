function createCard(name, description, price) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const title = document.createElement("h3");
  title.textContent = name;

  const desc = document.createElement("p");
  desc.textContent = description;

  const cost = document.createElement("span");
  cost.textContent = price;

  card.append(title, desc, cost);

  menu.append(
    createCard(
        "Grilled Steak",
        "Juicy premium beef served with seasonal vegetables",
        "£18.99"
    ),
    createCard(
        "Margherita Pizza",
        "Fresh mozzarella, basil and tomato sauce.",
        "£12.99"
    ),
    createCard(
        "Chocolate Lava Cake",
        "Warm chocolate cake with vanilla ice cream.",
        "£6.50"
    )
  );

  return card;
}
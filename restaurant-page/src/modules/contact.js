export default function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +255 700 123 456";

  const email = document.createElement("p");
  email.textContent = "📧 info@deliciousdish.com";

  const address = document.createElement("p");
  address.textContent = "📍 Dar es Salaam, Tanzania";

  contact.append(heading, phone, email, address);

  return contact;
}
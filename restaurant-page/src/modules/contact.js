export default function loadContact() {
    const contact = document.createElement("section");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const intro = document.createElement("p");
    intro.textContent = "We'd love to welcome you. Visit us, give us a call, or send us an email.";

    const infoGrid = document.createElement("div");
    infoGrid.classList.add("contact-grid");

    const details = [
        {
            icon: "📍",
            title: "Address",
            text: "Magomeni Mapipa, Dar es Salaam"
        },
        {
            icon: "📞",
            title: "Phone",
            text: "+255 670 345 512"
        },
        {
            icon: "📧",
            title: "Email",
            text: "hello@deliciousdish.com"
        },
        {
            icon: "🕒",
            title: "Opening Hours",
            text: "Mon–Fri: 9:00 AM – 10:00 PM\nSat–Sun: 10:00 AM – Midnight"
        }
    ];

    details.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("contact-card");

        const icon = document.createElement("div");
        icon.classList.add("contact-icon");
        icon.textContent = item.icon;

        const title = document.createElement("h3");
        title.textContent = item.title;

        const text = document.createElement("p");
        text.textContent = item.text;
        text.style.whiteSpace = "pre-line";

        card.append(icon, title, text);
        infoGrid.appendChild(card);
    });

    const reserveBtn = document.createElement("button");
    reserveBtn.classList.add("reserve-btn");
    reserveBtn.textContent = "Reserve a Table";

    const map = document.createElement("div");
    map.classList.add("map-placeholder");
    map.textContent = "📍 Interactive Map Coming Soon";

    contact.append(
        heading,
        intro,
        infoGrid,
        reserveBtn,
        map
    );

    return contact;
}
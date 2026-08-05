import aboutImage from "../images/about.jpg";
import chef1 from "../images/chefs/chef1.jpg";
import chef2 from "../images/chefs/chef2.jpg";
import chef3 from "../images/chefs/chef3.jpg";

export default function loadAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    about.append(
        createHero(),
        createStory(),
        createStats(),
        createChefs(),
        createFeatures(),
        createQuote()
);

    return about;
}

function createHero() {

    const hero = document.createElement("section");
    hero.classList.add("about-hero");

    const title = document.createElement("h1");
    title.textContent = "About Delicious Dish";

    const subtitle = document.createElement("p");
    subtitle.textContent =
        "Fine Dining Since 2010 • Where every meal becomes a memorable experience.";

    hero.append(title, subtitle);

    return hero;
}

function createStory() {

    const section = document.createElement("section");
    section.classList.add("about-story");

    const image = document.createElement("img");
    image.src = aboutImage;
    image.alt = "Restaurant Interior";

    const content = document.createElement("div");
    content.classList.add("story-content");

    const heading = document.createElement("h2");
    heading.textContent = "Our Story";

    const text1 = document.createElement("p");
    text1.textContent =
        "Founded in 2010, Delicious Dish was created with one simple vision: to serve unforgettable meals crafted with fresh ingredients, exceptional skill, and genuine hospitality.";

    const text2 = document.createElement("p");
    text2.textContent =
        "Every dish reflects our commitment to quality, while every guest is welcomed like family. Our chefs combine timeless recipes with modern creativity to create dining experiences that people remember long after the last bite.";

    const signature = document.createElement("h3");
    signature.textContent = "— Chef Daniel";

    content.append(
        heading,
        text1,
        text2,
        signature
    );

    section.append(image, content);

    return section;
}

function createStats() {
    const section = document.createElement("section");
    section.classList.add("about-stats");

    const stats = [
        ["15+", "Years of Excellence"],
        ["50K+", "Happy Customers"],
        ["30+", "Signature Dishes"],
        ["12", "Professional Chefs"]
    ];

    stats.forEach(([number, label]) => {
        const card = document.createElement("div");
        card.classList.add("stat-card");

        const h2 = document.createElement("h2");
        h2.textContent = number;

        const p = document.createElement("p");
        p.textContent = label;

        card.append(h2, p);
        section.appendChild(card);
    });

    return section;
}

function createChefs() {

    const section = document.createElement("section");
    section.classList.add("about-chefs");

    const title = document.createElement("h2");
    title.textContent = "Meet Our Culinary Masters";

    const subtitle = document.createElement("p");
    subtitle.textContent =
        "Our talented chefs bring years of passion, creativity, and excellence to every dish.";

    const grid = document.createElement("div");
    grid.classList.add("chef-grid");

    const chefs = [
        {
            image: chef1,
            name: "Chef Daniel",
            role: "Executive Chef",
            bio: "15 years of fine dining experience with a passion for premium cuisine."
        },
        {
            image: chef2,
            name: "Chef Emma",
            role: "Pastry Chef",
            bio: "Specializes in handcrafted desserts that delight every guest."
        },
        {
            image: chef3,
            name: "Chef Marco",
            role: "Sous Chef",
            bio: "Combining modern techniques with timeless culinary traditions."
        }
    ];

    chefs.forEach(chef => {

        const card = document.createElement("div");
        card.classList.add("chef-card");

        const img = document.createElement("img");
        img.src = chef.image;
        img.alt = chef.name;

        const name = document.createElement("h3");
        name.textContent = chef.name;

        const role = document.createElement("span");
        role.classList.add("chef-role");
        role.textContent = chef.role;

        const bio = document.createElement("p");
        bio.textContent = chef.bio;

        card.append(img, name, role, bio);

        grid.appendChild(card);

    });

    section.append(title, subtitle, grid);

    return section;

}

function createFeatures() {
    const section = document.createElement("section");
    section.classList.add("about-features");

    const title = document.createElement("h2");
    title.textContent = "Why Choose Us";

    const grid = document.createElement("div");
    grid.classList.add("features-grid");

    const features = [
        ["🥩", "Premium Ingredients"],
        ["👨‍🍳", "World-Class Chefs"],
        ["🍷", "Luxury Dining"],
        ["⭐", "5-Star Service"]
    ];

    features.forEach(([icon, text]) => {
        const card = document.createElement("div");
        card.classList.add("feature-card");

        const iconEl = document.createElement("div");
        iconEl.textContent = icon;

        const heading = document.createElement("h3");
        heading.textContent = text;

        card.append(iconEl, heading);

        grid.appendChild(card);
    });

    section.append(title, grid);

    return section;
}

function createQuote() {
    const section = document.createElement("section");
    section.classList.add("about-quote");

    const quote = document.createElement("blockquote");

    quote.textContent =
        "“Great food is not just about taste. It's about creating memories that stay with you forever.”";

    section.appendChild(quote);

    return section;
}
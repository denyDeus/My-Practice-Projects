import aboutImage from "../images/about.jpg";

import chef1 from "../images/chefs/chef1.jpg";
import chef2 from "../images/chefs/chef2.jpg";
import chef3 from "../images/chefs/chef3.jpg";


export default function loadAbout(goToContact) {

    const about = document.createElement("div");
    about.classList.add("about");

    about.append(
        createHero(),
        createStory(),
        createStats(),
        createChefs(),
        createFeatures(),
        createQuote(goToContact)
    );

    return about;
}


/* ABOUT HERO */

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


/* OUR STORY */
function createStory() {

    const section = document.createElement("section");
    section.classList.add("about-story");

    const image = document.createElement("img");

    image.src = aboutImage;
    image.alt = "Elegant interior of Delicious Dish restaurant";

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

    section.append(
        image,
        content
    );

    return section;
}


/* RESTAURANT STATS */

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


        const numberElement = document.createElement("h2");

        numberElement.textContent = number;


        const labelElement = document.createElement("p");

        labelElement.textContent = label;


        card.append(
            numberElement,
            labelElement
        );


        section.appendChild(card);

    });


    return section;
}


/* CHEFS */

function createChefs() {

    const section = document.createElement("section");

    section.classList.add("about-chefs");


    const title = document.createElement("h2");

    title.textContent =
        "Meet Our Culinary Masters";


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
            bio:
                "15 years of fine dining experience with a passion for premium cuisine."
        },

        {
            image: chef2,
            name: "Chef Emma",
            role: "Pastry Chef",
            bio:
                "Specializes in handcrafted desserts that delight every guest."
        },

        {
            image: chef3,
            name: "Chef Marco",
            role: "Sous Chef",
            bio:
                "Combining modern techniques with timeless culinary traditions."
        }

    ];


    chefs.forEach(chef => {

        const card = document.createElement("div");

        card.classList.add("chef-card");


        const image = document.createElement("img");

        image.src = chef.image;

        image.alt = chef.name;


        const name = document.createElement("h3");

        name.textContent = chef.name;


        const role = document.createElement("span");

        role.classList.add("chef-role");

        role.textContent = chef.role;


        const bio = document.createElement("p");

        bio.textContent = chef.bio;


        card.append(
            image,
            name,
            role,
            bio
        );


        grid.appendChild(card);

    });


    section.append(
        title,
        subtitle,
        grid
    );


    return section;
}


/* WHY CHOOSE US */

function createFeatures() {

    const section = document.createElement("section");

    section.classList.add("about-features");


    const title = document.createElement("h2");

    title.textContent = "Why Choose Us";


    const subtitle = document.createElement("p");

    subtitle.classList.add("features-subtitle");

    subtitle.textContent =
        "At Delicious Dish, we believe exceptional dining is about more than just food. It is about quality, atmosphere, service, and unforgettable moments.";


    const grid = document.createElement("div");

    grid.classList.add("features-grid");


    const features = [

        {
            icon: "🥩",
            title: "Premium Ingredients",
            description:
                "We carefully select fresh, high-quality ingredients to ensure every dish delivers exceptional flavor."
        },

        {
            icon: "👨‍🍳",
            title: "World-Class Chefs",
            description:
                "Our experienced chefs combine culinary expertise, creativity, and passion in every plate."
        },

        {
            icon: "🍷",
            title: "Luxury Dining",
            description:
                "Enjoy an elegant atmosphere designed to make every celebration, dinner, and gathering special."
        },

        {
            icon: "⭐",
            title: "5-Star Service",
            description:
                "From the moment you arrive, our team is committed to making you feel welcomed, valued, and cared for."
        }

    ];


    features.forEach(feature => {

        const card = document.createElement("div");

        card.classList.add("feature-card");


        const icon = document.createElement("div");

        icon.classList.add("feature-icon");

        icon.textContent = feature.icon;


        const heading = document.createElement("h3");

        heading.textContent = feature.title;


        const description = document.createElement("p");

        description.textContent = feature.description;


        card.append(
            icon,
            heading,
            description
        );


        grid.appendChild(card);

    });


    section.append(
        title,
        subtitle,
        grid
    );


    return section;
}


/* QUOTE */

function createQuote(goToContact) {

    const section = document.createElement("section");

    section.classList.add("about-quote");


    const quote = document.createElement("blockquote");

    quote.textContent =
        "“Great food is not just about taste. It's about creating memories that stay with you forever.”";


    const button = document.createElement("button");

    button.classList.add("reserve-btn");

    button.textContent = "Reserve Your Table";

    button.addEventListener("click", goToContact);


    section.append(
        quote,
        button
    );


    return section;
}
export default function loadContact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const subtitle = document.createElement("p");
  subtitle.classList.add("contact-subtitle");
  subtitle.textContent =
    "We'd love to serve you. Reserve a table or reach out anytime.";

  const container = document.createElement("div");
  container.classList.add("contact-container");

  // Left Side
  const info = document.createElement("div");
  info.classList.add("contact-info");

  info.innerHTML = `
      <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
              <h3>Address</h3>
              <p>Kinondoni, Dsm, TZ</p>
          </div>
      </div>

      <div class="contact-item">
          <i class="fas fa-phone"></i>
          <div>
              <h3>Phone</h3>
              <p>+255 764 263 871</p>
          </div>
      </div>

      <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <div>
              <h3>Email</h3>
              <p>hello@deliciousdish.com</p>
          </div>
      </div>

      <div class="contact-item">
          <i class="fas fa-clock"></i>
          <div>
              <h3>Opening Hours</h3>
              <p>Mon - Sun : 9:00 AM - 11:00 PM</p>
          </div>
      </div>
  `;

  // Right Side
  const form = document.createElement("form");
  form.classList.add("contact-form");

  form.innerHTML = `
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Email Address" required>
      <textarea rows="6" placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
  `;

  container.append(info, form);

  contact.append(heading, subtitle, container);

  return contact;
}
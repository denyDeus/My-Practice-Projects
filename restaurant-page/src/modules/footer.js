export default function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
      <div class="footer-container">

          <div class="footer-brand">
              <h2>🍽 Delicious Dish</h2>
              <p>Fine Dining Experience</p>
          </div>

          <div class="footer-links">
              <h3>Quick Links</h3>

              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
          </div>

          <div class="footer-contact">
              <h3>Contact</h3>

              <p><i class="fas fa-map-marker-alt"></i> Kinondoni, Dsm, TZ</p>
              <p><i class="fas fa-phone"></i> +255 764 263 871</p>
              <p><i class="fas fa-envelope"></i> hello@deliciousdish.com</p>
          </div>

          <div class="footer-newsletter">

              <h3>Newsletter</h3>

              <p>Receive exclusive offers and updates.</p>

              <div class="newsletter-box">
                  <input type="email" placeholder="Email address">
                  <button>Subscribe</button>
              </div>

              <div class="social-icons">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-x-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
              </div>

          </div>

      </div>

      <div class="footer-bottom">
          © 2026 Delicious Dish Restaurant • Designed & Developed with ❤️ by <strong>DenDev</strong>
      </div>
  `;

  return footer;
}
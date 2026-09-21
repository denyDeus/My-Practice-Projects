/**
 * Bertha Magomere — Portfolio Redesign JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize EmailJS with Bertha's public key
  if (window.emailjs) {
    try {
      window.emailjs.init({
        publicKey: "0v0X4vee2FoW-FcTR",
      });
    } catch (e) {
      console.warn("EmailJS initialization warning:", e);
    }
  }

  // 2. Mobile Navigation Toggle
  const menuToggle = document.querySelector("#menuToggle");
  const siteNav = document.querySelector("#siteNav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // 3. Dynamic Publications Filter System
  const publicationGrid = document.querySelector("#publicationGrid");
  const publicationEmpty = document.querySelector("#publicationEmpty");
  const filters = document.querySelectorAll(".filter");

  function publicationTypeLabel(type) {
    return type || "Publication";
  }

  function renderPublications(filter = "all") {
    if (!publicationGrid || !publicationEmpty) return;

    // Check if publications array is available from data/publications.js
    const pubList = typeof publications !== "undefined" ? publications : [];

    const list = filter === "all"
      ? pubList
      : pubList.filter((item) => item.category === filter);

    publicationGrid.innerHTML = "";

    if (!list.length) {
      publicationEmpty.style.display = "block";
      return;
    }

    publicationEmpty.style.display = "none";

    list.forEach((item) => {
      const card = document.createElement("article");
      card.className = "publication-card";

      const authors = Array.isArray(item.authors) ? item.authors.join(", ") : item.authors || "";
      const meta = [authors, item.year, item.area].filter(Boolean).join(" • ");

      card.innerHTML = `
        <span class="publication-type">${publicationTypeLabel(item.type)}</span>
        <h3>${item.title}</h3>
        <p class="publication-meta">${meta}</p>
        <p class="publication-abstract">${item.abstract || ""}</p>
        <div class="publication-links">
          ${item.pdf ? `<a href="${item.pdf}" target="_blank" rel="noopener">PDF ↗</a>` : ""}
          ${item.doi ? `<a href="${item.doi}" target="_blank" rel="noopener">DOI ↗</a>` : ""}
          ${item.externalLink ? `<a href="${item.externalLink}" target="_blank" rel="noopener">View ↗</a>` : ""}
        </div>
      `;

      publicationGrid.appendChild(card);
    });
  }

  filters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      filters.forEach((button) => button.classList.remove("active"));
      filterButton.classList.add("active");
      renderPublications(filterButton.dataset.filter);
    });
  });

  renderPublications();

  // 4. Contact Form Handler (Dual EmailJS & Netlify Forms compatibility)
  const contactForm = document.querySelector("#contactForm");
  const submitBtn = document.querySelector("#submitBtn");
  const formFeedback = document.querySelector("#formFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.querySelector("#name")?.value.trim() || "";
      const email = document.querySelector("#email")?.value.trim() || "";
      const subject = document.querySelector("#subject")?.value.trim() || "General Inquiry";
      const message = document.querySelector("#message")?.value.trim() || "";

      if (!name || !email || !message) {
        showFeedback("error", "Please fill out all required fields.");
        return;
      }

      setSubmittingState(true);

      try {
        // Attempt EmailJS first
        if (window.emailjs) {
          const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
          };

          await window.emailjs.send("service_whmujie", "template_keqrd4v", templateParams);
          showFeedback("success", "Thank you, " + name + "! Your message has been delivered to Bertha successfully.");
          contactForm.reset();
        } else {
          // Netlify Forms fallback via AJAX POST
          const formData = new FormData(contactForm);
          const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          });

          if (response.ok) {
            showFeedback("success", "Thank you! Your message has been sent successfully.");
            contactForm.reset();
          } else {
            throw new Error("Form submission response failed.");
          }
        }
      } catch (error) {
        console.error("Submission error:", error);
        showFeedback(
          "error",
          "There was an issue sending your message. Please reach Bertha directly at magomerebertha@gmail.com or on WhatsApp."
        );
      } finally {
        setSubmittingState(false);
      }
    });
  }

  function setSubmittingState(isSubmitting) {
    if (!submitBtn) return;
    submitBtn.disabled = isSubmitting;
    const btnText = submitBtn.querySelector(".btn-text");
    if (btnText) {
      btnText.textContent = isSubmitting ? "Sending..." : "Send Message";
    }
  }

  function showFeedback(type, message) {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.textContent = message;
    formFeedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 5. Dynamic Year for Footer
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

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

const publicationGrid = document.querySelector("#publicationGrid");
const publicationEmpty = document.querySelector("#publicationEmpty");
const filters = document.querySelectorAll(".filter");

function publicationTypeLabel(type) {
  return type || "Publication";
}

function renderPublications(filter = "all") {
  if (!publicationGrid || !publicationEmpty) return;

  const list = filter === "all"
    ? publications
    : publications.filter((item) => item.category === filter);

  publicationGrid.innerHTML = "";

  if (!list.length) {
    publicationEmpty.hidden = false;
    return;
  }

  publicationEmpty.hidden = true;

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

document.querySelector("#year").textContent = new Date().getFullYear();

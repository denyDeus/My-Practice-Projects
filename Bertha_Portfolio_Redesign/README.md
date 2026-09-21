# Bertha Magomere — Professional Portfolio Website

An earthy, sustainable, responsive, and recruiter-ready single-page portfolio for **Bertha Magomere** — Hydrogeologist, Accountant, Founder & CEO at Mimi Ni Maji Hub, and Climate Change Advocate based in Dar es Salaam, Tanzania.

---

## Project Structure

```
Bertha_Portfolio_Redesign/
├── index.html                   # Semantic structure, sections, SEO meta & OpenGraph tags
├── style.css                    # Earthy & sustainable design system (responsive, tokens)
├── main.js                      # Navigation, publication filter logic, EmailJS & Netlify form
├── netlify.toml                 # Netlify deployment configuration & cache headers
├── data/
│   └── publications.js          # Publication data store (ready for Bertha's finalized papers)
├── publications/                # Dedicated folder for research PDFs
│   └── README.md
└── assets/
    ├── documents/
    │   └── Bertha-Magomere-CV.pdf
    ├── images/
    │   ├── hero.png
    │   ├── about.jpg
    │   ├── awards.png
    │   ├── innovation.png
    │   ├── leadership.png
    │   └── speaking.png
    └── videos/
        ├── a-guest-with-no-invitation.mp4
        └── tumerithi-tuwarithishe.mp4
```

---

## Features & Highlights

1. **Earthy & Sustainable Aesthetic**:
   - Palette built on deep ocean/forest teals, paper sage creams, organic gold accents, and deep ink typography.
   - Distinctive typography using *Playfair Display* and *DM Sans*.

2. **Dual-Discipline Positioning**:
   - Accentuates Bertha's unique synergy: **Water Resource Management / Hydrogeology** (Water Institute) + **Accounting & Finance** (Tumaini University) for accountable, sustainable water governance.

3. **Climate Advocacy & Spoken Word Media**:
   - Integrated HTML5 video players showcasing Bertha's spoken-word environmental advocacy:
     - *"Tumerithi Tuwarithishe"* (Intergenerational water ethics)
     - *"A Guest With No Invitation"* (Flood management & rainwater harvesting infrastructure)

4. **Interactive Research & Publications Filter**:
   - Filter buttons for Research Papers, Journal Articles, Conference Papers, and Technical Reports.
   - Clean, dignified status state while Bertha completes her final manuscript submissions.

5. **Recruiter-Ready Contact & Dual Form Support**:
   - One-click links for **WhatsApp Direct**, **LinkedIn**, **Instagram**, and **Email**.
   - Interactive contact form supporting **EmailJS** for instant inbox delivery and **Netlify Forms** (`data-netlify="true"`).
   - In-app status alerts for submission feedback without jarring browser alert popups.

---

## How to Test Locally

1. **Option A (VS Code / Live Server)**:
   - Open this folder in VS Code.
   - Right click `index.html` and click **"Open with Live Server"**.

2. **Option B (Direct Browser)**:
   - Double-click `index.html` to open directly in Google Chrome, Edge, Firefox, or Safari.

3. **Option C (Local Python HTTP Server)**:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## Adding Bertha's Finalized Publications

When Bertha finishes sorting and completing her papers:
1. Put the PDF files into the `publications/` directory (e.g., `publications/paper-groundwater.pdf`).
2. Open `data/publications.js` and uncomment or add entries matching the format:
   ```javascript
   {
     title: "Groundwater Vulnerability Assessment in Coastal Aquifers",
     authors: ["Bertha Magomere"],
     year: 2026,
     type: "Research Paper",
     category: "research-paper",
     area: "Hydrogeology & Water",
     abstract: "Summary of research and findings...",
     pdf: "publications/paper-groundwater.pdf",
     doi: "",
     externalLink: ""
   }
   ```
The website will automatically display them in the research section and make them instantly filterable.

---

## Deploying to Netlify

1. Push this folder to a GitHub repository or drag-and-drop the `Bertha_Portfolio_Redesign` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. The included `netlify.toml` automatically handles:
   - Publish directory: `.`
   - Form detection for Netlify Forms
   - Asset caching and security headers
3. Connect your custom domain if applicable!

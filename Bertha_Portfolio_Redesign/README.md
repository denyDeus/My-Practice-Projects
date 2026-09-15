# Bertha Magomere — Portfolio Redesign

A responsive, academic/professional single-page portfolio for Bertha Magomere.

## Structure

- `index.html` — page structure and content
- `style.css` — responsive visual system
- `main.js` — navigation and publication filtering
- `data/publications.js` — publication data
- `assets/images/` — supplied portfolio photography
- `assets/documents/` — CV
- `assets/videos/` — reserved for future speaking/media videos

## Run locally

No build system is required.

Open `index.html` directly in a browser, or use VS Code Live Server.

## Adding publications

Edit `data/publications.js` and add only verified publication information.

Supported fields:

- `title`
- `authors`
- `year`
- `type`
- `category`
- `area`
- `abstract`
- `pdf`
- `doi`
- `externalLink`

For PDFs, create a `publications/` directory at the project root and point `pdf` to the file path.

## Next implementation stage

1. Replace placeholder publication state with verified papers/articles.
2. Add Bertha's LinkedIn and Instagram URLs.
3. Add the existing speaking/media videos to `assets/videos/`.
4. Add any verified project details and dates.
5. Decide whether the publication library remains static or becomes CMS-backed.

# GoIT JavaScript Homework 11 — Image Search

A vanilla JavaScript homework app that searches [Pixabay](https://pixabay.com/) for photos and displays the results in a gallery. Submit a query, browse image cards with engagement stats, and open a full-size preview in a lightbox.

## Live demo

[https://groteskzp.github.io/goit-js-hw-11/](https://groteskzp.github.io/goit-js-hw-11/)

## Features

- Search form with a required text field and a **Search** button
- Extra check that a query is not empty after trimming whitespace
- HTTP requests to the Pixabay API through Axios (`image_type=photo`, `orientation=horizontal`, `safesearch=true`)
- Gallery of result cards: preview image, likes, views, comments, and downloads
- SimpleLightbox on gallery links, with captions taken from the image `alt` (Pixabay tags) and a 250 ms caption delay
- Animated three-dot loader while a request is in progress
- Previous results are cleared before a new search
- iziToast warning when the query is empty, error when Pixabay returns no hits, and error when the request fails
- Form reset after the request finishes (success or failure)

## Tech stack

- HTML and CSS
- Vanilla JavaScript (ES modules)
- [Vite](https://vite.dev/)
- [Axios](https://axios-http.com/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [Pixabay API](https://pixabay.com/api/docs/)
- GitHub Pages (GitHub Actions deploy to `gh-pages`)

## Getting started

1. Install an [LTS version of Node.js](https://nodejs.org/en/).
2. Clone the repository and install dependencies:

```bash
git clone https://github.com/groteskzp/goit-js-hw-11.git
cd goit-js-hw-11
npm install
```

3. Start the Vite dev server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in the browser. The page reloads when you save changes.

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start the Vite development server |
| `build` | `npm run build` | Production build with base path `/goit-js-hw-11/` |
| `preview` | `npm run preview` | Preview the production build locally |

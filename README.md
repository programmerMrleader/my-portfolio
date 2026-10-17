# Wai Yan Hein — Portfolio

A responsive, Apple-inspired glassmorphism portfolio for Wai Yan Hein
(@programmerMrleader), built with Express, EJS, and CSS. The projects section
highlights selected repositories from [GitHub](https://github.com/programmerMrleader).

## Requirements

- Node.js 18 or newer
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server with automatic restarts:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Set the `PORT` environment
variable to use a different port.

## Project structure

```text
.
├── index.js            # Express application entry point
├── routes/
│   └── index.js        # Homepage route and featured repository data
├── views/
│   ├── index.ejs       # Portfolio page
│   └── 404.ejs         # Not-found page
└── public/
    ├── script.js       # Mobile navigation and active section links
    └── styles.css      # Responsive glassmorphism styles
```

Featured project descriptions and links are maintained in `routes/index.js`.
The profile avatar and typefaces are loaded from GitHub and Google Fonts.

## Deploying to GitHub Pages

The portfolio is built into a static `build/` folder and deployed with GitHub Pages.
After pushing to `main`, the workflow in `.github/workflows/deploy-pages.yml` creates the site automatically.

If you need to deploy manually instead:

```bash
npm run deploy
```

Then enable GitHub Pages in the repo settings and choose the `gh-pages` branch or use the GitHub Actions Pages deployment flow.
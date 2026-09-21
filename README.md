# Sania Sinha — portfolio

A responsive, static portfolio for GitHub Pages. No build step or dependencies required.

## Preview

From this directory, run `python3 -m http.server 8000` and visit http://localhost:8000.

## Edit

- `index.html`: bio, projects, experience, and contact links. Project categories are space-separated values in `data-category`.
- `style.css`: colors, layouts, responsive styles, and decorative project illustrations.
- `script.js`: mobile navigation, project filters, copy email, and active navigation.
- `media/`: existing portrait and résumé files.

The page works without JavaScript; filters and mobile navigation are enhanced by JavaScript. Fonts load from Google Fonts with local fallbacks. Motion respects the visitor's reduced-motion preference.

## Content review

Content is adapted from the previous portfolio. Experience descriptions do not assert current employment or unverified end dates. The linked résumé is explicitly labeled December 2023; replace it and update the link when a current version is available. Review the MSU email, education, and experience before publishing.

## Publishing

Develop on `dev`, then merge into `main` when ready. For branch-based GitHub Pages publishing, configure `main` and the repository root in Settings → Pages. This redesign does not change deployment settings or publish the dev branch.

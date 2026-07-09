# Personal Academic Homepage

A zero-dependency static site (plain HTML/CSS/JS). Clean academic style.

## Files
- `index.html` — page content (edit text here)
- `style.css` — styling (colors live in the `:root` block at the top)
- `script.js` — mobile menu + footer year
- `photo.jpg` — your portrait (add this; a placeholder shows if missing)
- `cv.pdf` — your CV (add this; the CV button links to it)

## Preview locally
Just open `index.html` in a browser, or run a local server:

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

## Customize
- **Text & links**: edit `index.html` (name, bio, publications, social links).
- **Accent color**: change `--accent` in `style.css` (`:root`).
- **Photo**: drop a square `photo.jpg` in this folder.

## Deploy to GitHub Pages
1. Create a repo named `<your-username>.github.io`.
2. Put these files in the repo root and push.
3. In repo Settings → Pages, set source to the `main` branch.
4. Visit `https://<your-username>.github.io`.

Alternatives: Netlify or Vercel (drag-and-drop this folder), or KU Leuven personal web space.

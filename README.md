# Three.js Portfolio (Vite + TypeScript)

This repo is now a clean **Three.js portfolio site**.

## Edit your content

Update:
- `src/data/profile.ts`

## Run locally

Install deps:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Host it (recommended: GitHub Pages)

1. Push this repo to GitHub (default branch should be `main`).
2. In GitHub: **Settings → Pages**
   - **Build and deployment**: select **GitHub Actions**
3. Push any commit to `main`.
4. Your site will deploy to:
   - `https://<your-github-username>.github.io/<repo-name>/`

The workflow file is: `.github/workflows/deploy-gh-pages.yml`.

## Alternative hosting

- **Vercel**: import the repo → Framework: Vite → Build: `npm run build` → Output: `dist`
- **Netlify**: import the repo → Build: `npm run build` → Publish: `dist`

## Structure

- `src/main.ts`: boots UI + 3D scene
- `src/three/scene.ts`: Three.js background (animated knot + particles)
- `src/data/profile.ts`: resume-driven content



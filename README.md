# Abdullah Mazhar — Portfolio

A responsive dark-theme personal portfolio built with React and Vite.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production-ready website is generated in `dist/`.

## Personalise before publishing

Open `src/main.jsx` and update the `profile` object:
- Confirm the email address.
- Replace the LinkedIn placeholder with your actual profile URL.
- Update the GitHub links on each project to the exact repository URLs.

Also review the Experience section. It intentionally avoids inventing employer names or dates; replace the prompt about adding employer details with verified information. The portfolio's project descriptions are based on the work described so far. Make sure each project is public and its details accurately reflect the repository before sharing it.

## Deploy

- **Vercel:** Import the repository; Vercel should detect Vite automatically. Build command `npm run build`, output directory `dist`.
- **Netlify:** Build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** Configure Vite's `base` if deploying to a project subpath, then use a GitHub Actions workflow to publish `dist`.

## Notes

- No backend or environment variables are required.
- Contact uses `mailto:` and the copy-email button uses the browser clipboard API.
- LinkedIn is a placeholder link until you replace it.

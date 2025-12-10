# Deployment (short + practical)

## Vercel (fastest)
```bash
npm install -g vercel
vercel       # preview
vercel --prod
```
`vercel.json` already handles SPA routing.

## Netlify
```bash
npm run build
netlify deploy --prod   # needs netlify-cli and auth
```
`netlify.toml` sets the SPA redirect.

## GitHub Pages (if needed)
1) Set `base` in `vite.config.js` to `/<repo>/`
2) Add script: `"deploy": "gh-pages -d dist"`
3) `npm run build && npm run deploy`

## Env vars
Add your own (e.g., `VITE_API_URL`) in Vercel/Netlify dashboards. This demo ships with mock data only.

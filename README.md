# System Observability & Monitoring (Interview Demo)

This repo is a small React/Vite site to demo how I approach observability, CI/CD, and incident response. Use it live in an interview to walk through architecture, metrics, pipelines, and alerting.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## What to show live
- Architecture: microservices (Spring Boot), Kubernetes/Docker, Prometheus/Grafana, Jenkins, Slack/Sentry.
- Metrics: CPU/memory, latency buckets, error rate, service health table.
- CI/CD: Jenkins pipeline stages with sample logs (build → test → image → deploy → smoke).
- Code: Micrometer-instrumented Spring endpoint, Prometheus scrape config, Jenkinsfile, K8s deploy.
- Alerting: Slack/Sentry-style alerts with filters (critical/warning/info, status).

## Stack
- React 18 + Vite, React Router
- Tailwind CSS for layout
- Chart.js via react-chartjs-2
- Prism.js for code highlighting
- Dummy data only (no external APIs)

## Project layout (short)
```
src/
  components/   # navbar, footer
  pages/        # Home, Architecture, Metrics, CI/CD, CodeSnippets, Alerting, Conclusion
  data/         # dummyData.js (metrics, logs, alerts, snippets)
  App.jsx       # routes
```

## Deploy (short)
- Vercel: `vercel` (uses `vercel.json` routing)
- Netlify: `npm run build` then `netlify deploy --prod` (see `netlify.toml`)
- GitHub Pages: set `base` in `vite.config.js`, add `gh-pages` deploy script if needed

## Notes
- All metrics/logs/alerts are mocked for storytelling.
- MIT license. Adjust branding/links as needed.

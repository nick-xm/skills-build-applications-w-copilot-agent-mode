# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API Configuration

Define `VITE_CODESPACE_NAME` when running in GitHub Codespaces, for example in `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is defined, the frontend calls backend endpoints with:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

If `VITE_CODESPACE_NAME` is unset, the app safely falls back to local backend endpoints under:

```text
http://localhost:8000/api/[component]/
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

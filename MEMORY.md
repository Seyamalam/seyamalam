# Project Environment

- Project: Next.js App Router web portfolio (not React Native; no native iOS/Android targets).
- Package manager: Bun (`bun.lock`).
- Commands: `bun run dev` (port 3000), `bun run build`.
- Routes: `/`, `/about`, `/projects`, `/research`, `/experience`, `/contact`.
- Browser QA: Argent Chromium/CDP is available; repository initially had no automated browser tests.
- Initial architecture: Next.js 15.3.8 rewrote all routes to `/shell`, which mounted a client-only React Router SPA with `ssr: false`.

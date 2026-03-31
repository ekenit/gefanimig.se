# External Integrations

**Analysis Date:** 2026-01-22

## APIs & External Services

**Analytics:**
- Umami Analytics - Website analytics and visitor tracking
  - SDK/Client: Custom script injection via `app/plugins/umami.client.ts`
  - Auth: UMAMI_WEBSITE_ID environment variable
  - Instance: https://umami-gefanimig.fly.dev/script.js (self-hosted on Fly.io)
  - Configuration: Script injected client-side with data-website-id attribute
  - Deployed separately in `umami-deploy/` directory

**External Content Links (No SDK):**
- Multiple Swedish GDPR removal databases (Ratsit, Merinfo, Hitta, Eniro, etc.)
  - Method: Direct HTTP links from `app/data/sites.ts`
  - No bidirectional integration - links only for navigation
- Buy Me a Coffee - Donation/sponsorship link
- Reddit - Social reference link
- GitHub - Source repository link
- Google Remove Content - GDPR removal request form
- Swedish Authority Links (IMY, Skatteverket, Adressändring)

## Data Storage

**Databases:**
- Not applicable - No backend database integration
- Application is stateless static content generator with analytics only

**File Storage:**
- Local filesystem only
- Static assets in `public/` directory (favicons, OG image, manifest)

**Caching:**
- Nitro compression enabled for public assets
- HTTP caching via standard headers (managed by Fly.io)

## Authentication & Identity

**Auth Provider:**
- None - Public application with no user authentication
- No login system or user state management
- Some linked services (Ratsit, Eniro, Hitta) use Mobilt BankID externally, but not integrated here

## Monitoring & Observability

**Error Tracking:**
- None configured - Application uses console error logging
- Global error handler in `app/app.vue` with commented note about potential Sentry/LogRocket integration
- Client-side error boundary with Vue's onErrorCaptured

**Logs:**
- Console logging in development
- Server health endpoint: `GET /api/health` returns status, timestamp, uptime, environment
- Deployed to Fly.io with standard Docker logging

**Performance:**
- Core Web Vitals monitoring via PerformanceObserver in `app/app.vue`
- LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift) tracked
- Results logged to console only (no external service)

## CI/CD & Deployment

**Hosting:**
- Fly.io (fly.toml configuration)
- Primary region: ARN (Stockholm)
- Force HTTPS enabled
- Auto-scaling: min 1 machine, auto-stop disabled, auto-start enabled

**CI Pipeline:**
- Not detected - No GitHub Actions workflows configured
- Manual deployment via Fly CLI (typical Fly.io usage)

**Build Process:**
- Multi-stage Dockerfile with Node.js 20 Alpine
- Build: `npm run build` (Nuxt SSR build)
- Production: Runs `.output/server/index.mjs` as Node process

## Environment Configuration

**Required env vars:**
- UMAMI_WEBSITE_ID - Analytics website tracking ID (required for analytics to work)
- NODE_ENV - Set to 'production' on Fly.io

**Optional env vars:**
- None others detected

**Secrets location:**
- Environment variables set in Fly.io deployment configuration
- `umami-deploy/env.example` shows DATABASE_URL, HASH_SALT, JWT_SECRET format for Umami instance

## Security Headers (via Nitro route rules)

**Headers configured in nuxt.config.ts:**
- X-Frame-Options: DENY (prevent clickjacking)
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Denies camera, microphone, geolocation
- Content-Security-Policy:
  - default-src 'self'
  - script-src allows 'self', 'unsafe-inline', 'unsafe-eval', https://umami-gefanimig.fly.dev
  - style-src 'self' 'unsafe-inline'
  - img-src 'self' data: https:
  - font-src 'self' data:
  - connect-src 'self' https: (allows API calls)
  - frame-ancestors 'none'

## Webhooks & Callbacks

**Incoming:**
- None configured - No webhook endpoints

**Outgoing:**
- Analytics data sent to Umami endpoint (https://umami-gefanimig.fly.dev)
- No other external API calls or callbacks

---

*Integration audit: 2026-01-22*

# Metrics System

This application includes a GDPR-compliant Prometheus metrics system that tracks essential analytics without collecting personal data.

## What We Track

### Privacy-Safe Metrics

- **Page Views**: Anonymous page view counts by page
- **Unique Visitors**: Session-based visitor counts (not personal identification)
- **Session Duration**: How long users spend on pages (anonymous)
- **Site Interactions**: When users interact with site buttons (email modals, etc.)
- **Click Tracking**: Which elements users click on (anonymous)
- **Email Template Usage**: When users copy templates or open email clients
- **Response Times**: HTTP request performance metrics
- **Active Sessions**: Current session count (gauge)

### What We DON'T Track

- Personal information (names, emails, addresses)
- User identification or tracking
- IP addresses or location data
- Session data or user behavior patterns
- Any data that could identify individuals
- Cross-site tracking or fingerprinting

## Architecture

### Components

1. **`app/utils/metrics.ts`**: Core metrics definitions and tracking functions
2. **`server/api/metrics.get.ts`**: Prometheus metrics endpoint (`/api/metrics`)
3. **`server/api/metrics/track.post.ts`**: Client tracking endpoint
4. **`app/plugins/metrics.client.ts`**: Client-side tracking plugin
5. **`app/types/plugins.d.ts`**: TypeScript declarations

### Data Flow

1. Client-side plugin tracks user interactions
2. Data sent to `/api/metrics/track` endpoint
3. Server updates Prometheus metrics
4. Fly.io scrapes `/api/metrics` endpoint every 15 seconds
5. Metrics available in Grafana dashboard

## Configuration

### Fly.io Configuration

```toml
[metrics]
port = 9091
path = "/api/metrics"
```

This enables Fly.io's built-in Prometheus scraping of your custom metrics.

### Environment Variables

- `NODE_ENV=production`: Only tracks metrics in production

## Available Metrics

### Counters

- `page_views_total`: Total page views by page
- `unique_visitors_total`: Session-based visitor counts by page
- `site_interactions_total`: Site interaction counts by action and site
- `clicks_total`: Click counts by element and page
- `email_template_usage_total`: Email template usage by action

### Histograms

- `session_duration_seconds`: Session duration distribution by page
- `http_request_duration_seconds`: Response time distribution

### Gauges

- `active_sessions_current`: Current active session count

## Usage Examples

### Tracking Page Views

```typescript
// Automatic via plugin
// Tracks all route changes
```

### Tracking Site Interactions

```typescript
const { $trackInteraction } = useNuxtApp()
$trackInteraction('email_modal_open', 'Ratsit.se')
```

### Tracking Clicks

```typescript
const { $trackClick } = useNuxtApp()
$trackClick('email_modal_button', 'Ratsit.se')
```

### Tracking Email Template Usage

```typescript
const { $trackEmailTemplateUsage } = useNuxtApp()
$trackEmailTemplateUsage('copy')
$trackEmailTemplateUsage('open_email_client')
```

## Privacy Compliance

This metrics system is designed to be GDPR-compliant:

1. **No Personal Data**: Only anonymous, aggregated metrics
2. **No User Tracking**: No cookies, sessions, or user identification
3. **Minimal Data**: Only essential operational metrics
4. **Transparent**: Clear documentation of what is tracked
5. **Optional**: Can be disabled by setting environment variables
6. **Session-Based**: Visitor counts are session-based, not personal

## Monitoring

### Fly.io Dashboard

- Built-in Grafana dashboard available in Fly.io console
- Real-time metrics visualization
- Historical data and trends
- Visitor analytics and engagement metrics

### Custom Grafana

- Connect external Grafana instance
- Custom dashboards and alerts
- Advanced analytics and reporting
- Filter by page, element, or action

## Key Insights You'll Get

### Visitor Analytics

- **Most Popular Pages**: Which pages get the most views
- **Visitor Engagement**: How long users spend on each page
- **Unique Visitors**: Session-based visitor counts per page

### User Behavior

- **Most Clicked Elements**: Which buttons/elements get the most clicks
- **Site Popularity**: Which sites users interact with most
- **Email Template Usage**: How often users use email templates

### Performance

- **Response Times**: Page load and API performance
- **Active Sessions**: Real-time user activity
- **Error Rates**: Application performance monitoring

## Security

- Metrics endpoint is public (required for Prometheus scraping)
- No sensitive data exposed
- Rate limiting recommended for production
- Consider IP whitelisting for metrics endpoint if needed

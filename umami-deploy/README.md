# Umami Analytics Deployment

This directory contains the deployment configuration for Umami Analytics on Fly.io.

## Setup

1. Copy `env.example` to `.env` and fill in your secrets:

   ```bash
   cp env.example .env
   ```

2. Generate secure secrets:

   ```bash
   # Generate HASH_SALT
   openssl rand -base64 32

   # Generate JWT_SECRET
   openssl rand -base64 32
   ```

3. Update the `.env` file with your generated secrets.

## Deployment

Deploy to Fly.io:

```bash
fly deploy
```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `HASH_SALT`: Secret for password hashing
- `JWT_SECRET`: Secret for JWT token signing

These are configured in `fly.toml` for production deployment.

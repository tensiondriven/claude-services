# Vaultwarden on Railway

Deploy Vaultwarden (Bitwarden-compatible server) on Railway.

## Deploy

1. Fork this repository
2. Connect to Railway
3. Deploy from your fork
4. Set environment variables:
   - `ADMIN_TOKEN`: Admin panel access token
   - `DOMAIN`: Your Railway domain (auto-configured)

## Environment Variables

- `ADMIN_TOKEN`: Required for admin panel access
- `SIGNUPS_ALLOWED`: Allow new user signups (default: true)
- `WEB_VAULT_ENABLED`: Enable web vault (default: true)
- `DATABASE_URL`: SQLite database path (default: data/db.sqlite3)

## API Access

- Web Vault: `https://your-app.railway.app`
- Admin Panel: `https://your-app.railway.app/admin`
- API Base: `https://your-app.railway.app/api`
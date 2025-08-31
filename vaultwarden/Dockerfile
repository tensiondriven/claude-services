FROM vaultwarden/server:latest

# Railway expects the app to bind to 0.0.0.0:$PORT
ENV ROCKET_ADDRESS=0.0.0.0

# Set default admin token - should be overridden via Railway env vars
ENV ADMIN_TOKEN=changeme

# Use SQLite by default (can be changed to PostgreSQL later)  
ENV DATABASE_URL=data/db.sqlite3

# Create data directory
RUN mkdir -p /data

# Expose default port (Railway will override with PORT env var at runtime)
EXPOSE 8000

# Start Vaultwarden - PORT will be set at runtime by Railway
CMD sh -c 'export ROCKET_PORT=${PORT:-8000} && /vaultwarden'
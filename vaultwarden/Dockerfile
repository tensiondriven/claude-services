FROM vaultwarden/server:latest

# Railway configuration
ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=8000
ENV ADMIN_TOKEN=changeme
ENV DATABASE_URL=/data/db.sqlite3
ENV WEB_VAULT_ENABLED=true

# Create data directory  
RUN mkdir -p /data

EXPOSE 8000

CMD ["/vaultwarden"]
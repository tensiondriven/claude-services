FROM outlinewiki/outline:latest

# Railway expects the app to bind to 0.0.0.0:$PORT
ENV HOST=0.0.0.0
ENV PORT=$PORT

# Required environment variables for Railway deployment
ENV NODE_ENV=production
ENV SECRET_KEY=changeme-secret-key
ENV UTILS_SECRET=changeme-utils-secret

# Database configuration (will use Railway PostgreSQL)
ENV DATABASE_URL=$DATABASE_URL

# File storage (using local filesystem initially)
ENV FILE_STORAGE=local
ENV FILE_STORAGE_LOCAL_ROOT_DIR=/var/lib/outline/data

# Redis URL (will be provided by Railway Redis service)
ENV REDIS_URL=$REDIS_URL

# URL configuration (Railway will provide this)
ENV URL=https://$RAILWAY_PUBLIC_DOMAIN

# Create data directory
RUN mkdir -p /var/lib/outline/data

# Expose the port
EXPOSE $PORT
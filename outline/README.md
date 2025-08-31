# Outline Wiki on Railway

Modern, collaborative wiki with excellent API support.

## Required Railway Services

1. **PostgreSQL Database** - Add from Railway marketplace
2. **Redis** - Add from Railway marketplace  
3. **Outline App** - Deploy this repository

## Deploy

1. Fork this repository
2. Create new Railway project
3. Add PostgreSQL service
4. Add Redis service  
5. Deploy this app and connect to both services
6. Set required environment variables

## Required Environment Variables

Set these in Railway:
- `SECRET_KEY`: Random 32-character string
- `UTILS_SECRET`: Different random 32-character string  
- `DATABASE_URL`: Auto-provided by PostgreSQL service
- `REDIS_URL`: Auto-provided by Redis service

## Optional Configuration

- `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET`: Google OAuth
- `SLACK_CLIENT_ID` + `SLACK_CLIENT_SECRET`: Slack OAuth
- `SMTP_*` variables: Email notifications

## API Access

- Web Interface: `https://your-app.railway.app`
- API Base: `https://your-app.railway.app/api`
- API Documentation: Available in-app under Settings → API

## Default Setup

- Authentication: Email/password (add OAuth later)
- File Storage: Local filesystem
- Search: Full-text search enabled
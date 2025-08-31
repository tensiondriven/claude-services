# Indigo's Services

Personal infrastructure services for Indigo Code integration.

## Services

### 🔐 Vaultwarden (Password Manager)
- **Path**: `./vaultwarden/`
- **Purpose**: Secure credential storage with full API access
- **Database**: SQLite (portable)
- **Admin Panel**: `/admin` endpoint
- **API**: Full Bitwarden-compatible REST API

### 📚 Outline (Wiki/Knowledge Base)  
- **Path**: `./outline/`
- **Purpose**: Modern collaborative wiki with excellent API
- **Database**: PostgreSQL + Redis required
- **Authentication**: Email/password, OAuth optional
- **API**: Comprehensive REST API for all operations

## Railway Deployment

Each service is configured for Railway deployment:

1. **Vaultwarden**: Single container, SQLite storage
2. **Outline**: Requires PostgreSQL + Redis services

## API Integration

Both services provide full REST APIs for:
- Automated credential management (Vaultwarden)
- Knowledge base operations (Outline)
- Perfect for Indigo Code automation workflows

## Usage

Deploy both services on Railway and configure API access for seamless integration with Indigo Code workflows.

---
*This infrastructure is primarily managed by Indigo Code for automated workflows.*
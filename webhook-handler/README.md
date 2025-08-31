# Indigo Webhook Handler

AI-powered webhook handler for Plane collaboration events.

## Features

- 🤖 **AI Analysis** - Automatic issue categorization and priority suggestions
- 📊 **Event Processing** - Handles all Plane webhook events
- 💬 **Comment Analysis** - Sentiment analysis and action item extraction  
- 🏗️ **Project Intelligence** - Smart project setup suggestions
- 🔄 **Progress Tracking** - Sprint and cycle analysis

## Endpoints

- `POST /plane-webhook` - Main Plane event webhook
- `POST /webhook` - Generic webhook for testing
- `GET /health` - Health check
- `GET /` - Service information

## Supported Plane Events

- Issue created/updated
- Comments added
- Project changes
- Cycle/sprint updates
- Page modifications

## AI Capabilities

### Issue Analysis
- **Auto-categorization**: Bug, Feature, Task, Improvement
- **Priority suggestions**: High, Medium, Low based on keywords
- **Complexity estimation**: Based on description length and keywords
- **Tag extraction**: Relevant technology tags

### Advanced Features
- **Progress tracking** for sprints and cycles  
- **Sentiment analysis** for comments
- **Action item extraction** from discussions
- **Project setup recommendations**

## Usage

1. Deploy to Railway
2. Get webhook URL: `https://your-service.railway.app/plane-webhook`
3. Configure in Plane workspace settings
4. Watch AI analyze collaboration events in real-time!

## Environment Variables

- `PORT` - Server port (set by Railway)
- `NODE_ENV` - Environment (production/development)

---
*Built for Indigo Code collaboration workflows* 🚀
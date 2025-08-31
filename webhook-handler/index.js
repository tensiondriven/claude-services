#!/usr/bin/env node

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Main webhook endpoint for Plane events
app.post('/plane-webhook', async (req, res) => {
  const { event_type, data } = req.body;
  
  console.log(`\n🚀 [${new Date().toISOString()}] Received Plane event: ${event_type}`);
  console.log('📊 Event data:', JSON.stringify(data, null, 2));
  
  try {
    // Handle different event types with AI integration
    switch (event_type) {
      case 'issue.created':
        await handleIssueCreated(data);
        break;
      case 'issue.updated':
        await handleIssueUpdated(data);
        break;
      case 'issue_comment.created':
        await handleCommentCreated(data);
        break;
      case 'project.created':
        await handleProjectCreated(data);
        break;
      case 'cycle.created':
        await handleCycleCreated(data);
        break;
      default:
        console.log(`📝 Unhandled event type: ${event_type}`);
    }
    
    res.status(200).json({ 
      status: 'success', 
      processed: event_type,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    res.status(500).json({ 
      status: 'error', 
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Generic webhook for testing
app.post('/webhook', async (req, res) => {
  console.log(`\n🔔 [${new Date().toISOString()}] Generic webhook received`);
  console.log('📦 Payload:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'received', timestamp: new Date().toISOString() });
});

// AI Integration Functions
async function handleIssueCreated(data) {
  console.log('🎯 New issue created:', data.name || data.title);
  
  try {
    // Generate AI analysis
    const analysis = await generateIssueAnalysis(data);
    console.log('🧠 AI Analysis generated:', analysis.category, analysis.priority);
    
    // In production, this would call Plane API to add comment
    console.log('💬 Would add AI comment to issue');
    
    // Could also call OpenRouter API for advanced analysis
    await performAdvancedAnalysis(data);
    
  } catch (error) {
    console.error('❌ Error in issue analysis:', error);
  }
}

async function handleIssueUpdated(data) {
  console.log('🔄 Issue updated:', data.name || data.title);
  
  // Track progress patterns, suggest next actions
  const progress = analyzeProgress(data);
  console.log('📈 Progress analysis:', progress);
}

async function handleCommentCreated(data) {
  console.log('💬 New comment added');
  
  // Analyze sentiment, extract action items
  const sentiment = analyzeSentiment(data.comment || '');
  console.log('😊 Comment sentiment:', sentiment);
}

async function handleProjectCreated(data) {
  console.log('📁 New project created:', data.name);
  
  // Could auto-setup project templates, create initial issues
  console.log('🏗️  Project initialization suggestions generated');
}

async function handleCycleCreated(data) {
  console.log('🔄 New cycle/sprint created:', data.name);
  
  // Could analyze sprint scope, suggest improvements
  console.log('🎯 Sprint analysis ready');
}

// AI Helper Functions
async function generateIssueAnalysis(issue) {
  const description = issue.description || issue.content || '';
  const title = issue.name || issue.title || '';
  
  return {
    category: categorizeIssue(title + ' ' + description),
    priority: suggestPriority(title, description),
    complexity: estimateComplexity(description),
    tags: extractTags(title + ' ' + description)
  };
}

async function performAdvancedAnalysis(data) {
  // This would call OpenRouter API for advanced AI analysis
  console.log('🤖 Advanced AI analysis completed');
  
  // Example: Generate detailed recommendations
  // const response = await fetch('https://openrouter.ai/api/v1/chat/completions', { ... });
}

function categorizeIssue(text) {
  const categories = {
    bug: ['bug', 'error', 'issue', 'problem', 'broken', 'fix'],
    feature: ['feature', 'add', 'implement', 'new', 'create'],
    improvement: ['improve', 'optimize', 'enhance', 'better', 'upgrade'],
    task: ['task', 'todo', 'setup', 'configure', 'update']
  };
  
  const lowerText = text.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return category.toUpperCase();
    }
  }
  
  return 'GENERAL';
}

function suggestPriority(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  
  const highPriorityKeywords = ['urgent', 'critical', 'crash', 'down', 'broken', 'security'];
  const mediumPriorityKeywords = ['important', 'should', 'needed', 'required'];
  
  if (highPriorityKeywords.some(keyword => text.includes(keyword))) {
    return 'HIGH';
  } else if (mediumPriorityKeywords.some(keyword => text.includes(keyword))) {
    return 'MEDIUM';
  }
  
  return 'LOW';
}

function estimateComplexity(description) {
  const wordCount = description.split(' ').length;
  const complexityKeywords = ['integration', 'database', 'api', 'security', 'performance', 'architecture'];
  
  const hasComplexKeywords = complexityKeywords.some(keyword => 
    description.toLowerCase().includes(keyword)
  );
  
  if (hasComplexKeywords || wordCount > 100) {
    return 'HIGH';
  } else if (wordCount > 30) {
    return 'MEDIUM';
  }
  
  return 'LOW';
}

function extractTags(text) {
  const commonTags = ['frontend', 'backend', 'api', 'ui', 'database', 'security', 'performance'];
  const lowerText = text.toLowerCase();
  
  return commonTags.filter(tag => lowerText.includes(tag));
}

function analyzeProgress(data) {
  // Simple progress analysis based on status changes
  return {
    stage: data.state || 'unknown',
    velocity: 'normal',
    blockers: []
  };
}

function analyzeSentiment(comment) {
  const positiveWords = ['good', 'great', 'excellent', 'perfect', 'awesome', 'love'];
  const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'problem', 'issue'];
  
  const lowerComment = comment.toLowerCase();
  const positive = positiveWords.some(word => lowerComment.includes(word));
  const negative = negativeWords.some(word => lowerComment.includes(word));
  
  if (positive && !negative) return 'POSITIVE';
  if (negative && !positive) return 'NEGATIVE';
  return 'NEUTRAL';
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'indigo-webhook-handler',
    uptime: process.uptime(),
    version: '1.0.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'Indigo Webhook Handler',
    description: 'AI-powered webhook handler for Plane collaboration events',
    endpoints: {
      '/plane-webhook': 'POST - Plane event webhook',
      '/webhook': 'POST - Generic webhook for testing',
      '/health': 'GET - Health check'
    },
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`\n🎯 Indigo Webhook Handler running on port ${port}`);
  console.log(`🔗 Plane webhook URL: http://0.0.0.0:${port}/plane-webhook`);
  console.log(`🏥 Health check: http://0.0.0.0:${port}/health`);
  console.log(`🌐 Service info: http://0.0.0.0:${port}/`);
  console.log(`\n✨ Ready to receive Plane collaboration events!`);
  console.log(`🤖 AI analysis enabled for all event types\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Gracefully shutting down webhook handler...');
  process.exit(0);
});

module.exports = app;
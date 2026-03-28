import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Load CLAUDE.md system prompt
function loadSystemPrompt(): string {
  const claudePath = path.join(process.cwd(), '..', 'CLAUDE.md');
  if (fs.existsSync(claudePath)) {
    return fs.readFileSync(claudePath, 'utf-8');
  }
  return 'You are a marketing agency AI assistant with 32 specialized agents.';
}

// Load available skills
function loadSkills(): string[] {
  const skillsPath = path.join(process.cwd(), '..', '.claude', 'skills');
  if (!fs.existsSync(skillsPath)) return [];
  
  const skills: string[] = [];
  const dirs = fs.readdirSync(skillsPath);
  
  for (const dir of dirs) {
    const skillFile = path.join(skillsPath, dir, 'SKILL.md');
    if (fs.existsSync(skillFile)) {
      const content = fs.readFileSync(skillFile, 'utf-8');
      const { data } = matter(content);
      if (data.name) {
        skills.push(`/${data.name}`);
      }
    }
  }
  
  return skills;
}

// Check if a skill exists and load its content
function loadSkillContent(skillName: string): string | null {
  const skillPath = path.join(
    process.cwd(),
    '..',
    '.claude',
    'skills',
    skillName.replace('/', ''),
    'SKILL.md'
  );
  
  if (fs.existsSync(skillPath)) {
    return fs.readFileSync(skillPath, 'utf-8');
  }
  
  return null;
}

export async function chat(messages: Array<{ role: string; content: string }>) {
  const systemPrompt = loadSystemPrompt();
  const availableSkills = loadSkills();
  
  // Check if user message is a skill invocation
  const lastMessage = messages[messages.length - 1];
  let enhancedSystemPrompt = systemPrompt;
  
  if (lastMessage.content.startsWith('/')) {
    const skillName = lastMessage.content.split(' ')[0];
    const skillContent = loadSkillContent(skillName);
    
    if (skillContent) {
      enhancedSystemPrompt += `\n\n## Active Skill: ${skillName}\n\n${skillContent}`;
    } else {
      return {
        response: `Skill ${skillName} not found. Available skills:\n${availableSkills.join(', ')}`,
        agent: 'System',
      };
    }
  }
  
  // Add available skills to system prompt
  enhancedSystemPrompt += `\n\n## Available Skills\n${availableSkills.join(', ')}`;
  
  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4',
      max_tokens: 4096,
      system: enhancedSystemPrompt,
      messages: messages.map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content,
      })),
    });
    
    const content = response.content[0];
    const text = content.type === 'text' ? content.text : '';
    
    // Try to extract agent name from response
    const agentMatch = text.match(/\[(.*?)\]/);
    const agent = agentMatch ? agentMatch[1] : 'Chief Strategy Officer';
    
    return {
      response: text,
      agent,
    };
  } catch (error) {
    console.error('Claude API error:', error);
    throw error;
  }
}

// Check what foundation files exist
export function checkFoundation() {
  const checks = {
    brand: false,
    content: false,
    social: false,
  };
  
  const brandPath = path.join(process.cwd(), '..', 'strategy', 'brand', 'positioning.md');
  const contentPath = path.join(process.cwd(), '..', 'strategy', 'content', 'editorial-calendar.md');
  const socialPath = path.join(process.cwd(), '..', 'strategy', 'social', 'platform-strategy.md');
  
  checks.brand = fs.existsSync(brandPath);
  checks.content = fs.existsSync(contentPath);
  checks.social = fs.existsSync(socialPath);
  
  return checks;
}

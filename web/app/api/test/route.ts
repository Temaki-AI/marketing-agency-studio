import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const checks = {
    apiKey: !!process.env.ANTHROPIC_API_KEY,
    apiKeyLength: process.env.ANTHROPIC_API_KEY?.length || 0,
    claudeMd: fs.existsSync(path.join(process.cwd(), '..', 'CLAUDE.md')),
    skillsDir: fs.existsSync(path.join(process.cwd(), '..', '.claude', 'skills')),
    cwd: process.cwd(),
  };
  
  return NextResponse.json(checks);
}

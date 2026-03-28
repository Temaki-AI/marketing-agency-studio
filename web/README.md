# Marketing Studio Web UI

Web interface for the Marketing Agency AI Studio.

## Features

- **Chat Interface** - Natural conversation with 32 specialized agents
- **Skill Invocation** - Click buttons or type `/skill-name` to run workflows
- **Progress Tracker** - Visual indicator of what foundation exists
- **Agent Context** - See which agent is responding
- **File Browser** - (Coming soon) View generated strategy docs

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set API Key

```bash
cp .env.local.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3300

## Project Structure

```
web/
├── app/
│   ├── page.tsx           # Main chat interface
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── api/
│       └── chat/
│           └── route.ts   # Chat API endpoint
├── lib/
│   └── claude.ts          # Claude client + skill loader
└── components/            # (Future: reusable components)
```

## How It Works

1. **Loads `.claude/` config** - Reads CLAUDE.md, agents, skills from parent directory
2. **Skill detection** - When you type `/brand-workshop`, loads that skill's SKILL.md
3. **System prompt enhancement** - Adds skill content to Claude's context
4. **Agent extraction** - Parses `[Agent Name]` from responses to show who's talking

## Usage

### Chat Naturally

```
I want to launch a campaign for our new product
```

Claude will guide you through prerequisites (brand → content → campaign).

### Invoke Skills

```
/start
```

or

```
/brand-workshop
```

or click a skill button in the sidebar.

### Progress Tracking

Sidebar shows:
- ✅ Complete (green) - Foundation files exist
- ⏳ In Progress (yellow) - Partially complete
- ⏸️ Locked (gray) - Prerequisites not met

## Environment Variables

- `ANTHROPIC_API_KEY` - Your Claude API key (required)

## Port

Default: 3300 (configurable in package.json)

## Production Build

```bash
npm run build
npm start
```

## Roadmap

- [ ] File browser (view generated strategy docs)
- [ ] Progress auto-detection (scan strategy/ folder)
- [ ] Multi-session support (save conversation history)
- [ ] Export conversation as PDF
- [ ] Agent profile cards (show agent details on click)
- [ ] Real-time file updates (watch strategy/ folder)
- [ ] Markdown rendering in messages
- [ ] Code syntax highlighting
- [ ] Image upload support
- [ ] Voice input

## Troubleshooting

**"Module not found" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Skills not loading:**
- Check that `.claude/skills/` exists in parent directory
- Each skill needs a `SKILL.md` file with YAML frontmatter

**API key errors:**
- Make sure `.env.local` exists with `ANTHROPIC_API_KEY`
- Restart dev server after adding .env.local

**Port already in use:**
Change port in package.json:
```json
"dev": "next dev -p 3400"
```

## License

MIT

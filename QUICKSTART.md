# Quick Start — 5 Minutes to First Campaign Brief

## Prerequisites

```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

## Step 1: Get the Template

```bash
cd ~
git clone file:///Users/openclaw/clawd-agents/legolas/projects/marketing-agency-studio marketing-test
cd marketing-test
```

## Step 2: Start a Session

```bash
claude
```

## Step 3: Run Your First Workflow

### Option A: Structured Onboarding

```
/start
```

The Chief Strategy Officer will ask where you are:
- New client? → Start with client brief
- Existing campaign? → Jump to optimization
- Ad hoc request? → Direct to relevant agent

### Option B: Jump to Campaign Brief

```
/campaign-brief
```

Walk through:
1. What are we promoting?
2. Target audience?
3. Primary goal?
4. Budget?
5. Timeline?

Get back: Structured brief ready for execution.

### Option C: Review Existing Copy

```
/ad-copy-review
```

Paste your ad copy → Get brand voice, CTA, and compliance feedback.

## Step 4: Explore Agents

```
What agents are available?
```

See full 32-agent roster with domains and delegation paths.

## Step 5: Check Skills

```
What workflows can I run?
```

Get list of all 25 skills with categories and timing.

## Example Workflow

**Scenario:** Launching a new product

```
> /campaign-brief

[Chief Strategy Officer]
Let's structure your campaign...

> SaaS product for marketing teams
> Target: Marketing managers, 50-500 employees
> Goal: 500 trial signups in 90 days
> Budget: $30k
> Timeline: 3 weeks

[Chief Strategy Officer presents 3 strategic options]

> Option C (hybrid approach)

[Chief Strategy Officer drafts full brief]

> Approve brief

[Chief Strategy Officer]
Great! Next steps:
1. Creative Lead will design ad concepts
2. Media Lead will set up campaigns
3. Analytics Lead will configure tracking

Run /team-launch when ready to coordinate launch.
```

## Common Commands

```bash
# See all agents
list agents

# See agent details
describe chief-strategy-officer

# See all skills
list skills

# Get help on a skill
help /campaign-brief

# Check project status
status

# End session
exit
```

## Testing the Hierarchy

**Test delegation:**

```
I need ad copy for a LinkedIn campaign promoting our new product.
```

Watch it route:
1. Chief Strategy Officer → confirms campaign exists
2. Brand Lead → reviews brand voice requirements
3. Copywriter → drafts LinkedIn ad copy
4. Brand Lead → reviews draft
5. You → approve final

**Test quality gates:**

Try to launch without a brief:

```
Set up a LinkedIn campaign
```

Should escalate:
- Media Lead asks for campaign brief
- If missing → suggests /campaign-brief first

## Next Steps

1. **Run through `/campaign-brief`** — Feel the structured workflow
2. **Test `/ad-copy-review`** — See brand voice feedback
3. **Try `/team-launch`** — Watch multi-agent coordination
4. **Customize agents** — Edit `.claude/agents/*.md` to tune behavior
5. **Add your brand** — Create `strategy/brand-guidelines.md`

## Troubleshooting

**"Agent not found":**
- Check `.claude/agents/` directory exists
- Agent file names must match references in CLAUDE.md

**"Skill not working":**
- Skills are in `.claude/skills/` subdirectories
- Each skill needs a `skill.md` file

**"Too many options":**
- Start with `/start` — it guides you
- Or jump to specific skill if you know what you need

## Customization

**Add your brand voice:**

```bash
# Create brand guidelines
cat > strategy/brand-guidelines.md << 'EOF'
# Brand Voice

Tone: Professional but approachable
Voice: Helpful expert, not salesperson
Key terms: [product name], [feature], [benefit]
Prohibited: "world-class", "innovative", "leading"
EOF
```

**Tune an agent:**

Edit `.claude/agents/tier2-brand-lead.md`:
- Add client-specific guidelines
- Reference your brand doc
- Adjust review checklist

**Create a new skill:**

```bash
mkdir -p .claude/skills/competitor-research
cat > .claude/skills/competitor-research/skill.md << 'EOF'
---
name: competitor-research
category: strategy
agents: [chief-strategy-officer]
---

# Competitor Research

[Your workflow here]
EOF
```

## Time Investment

- **First session:** 30-45 minutes (exploration + test workflow)
- **First real campaign:** 60-90 minutes (full `/campaign-brief` → `/team-launch`)
- **Daily use:** 5-15 minutes per review/approval

## What You Get

After 2-3 campaigns, you'll have:
- Consistent brand voice across all channels
- Quality gates preventing mistakes
- Structured workflows (no ad-hoc chaos)
- Historical context (briefs, learnings, optimizations)
- Reusable templates and patterns

## Ready?

```bash
cd ~/marketing-test
claude
/start
```

Build your first campaign in 5 minutes.

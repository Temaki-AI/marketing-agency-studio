# Marketing Agency AI Studio

Turn Claude Code into a full-service marketing agency — 32 AI agents, 25 workflow skills, and a complete coordination system mirroring real agency hierarchy.

## What This Is

A structured framework for delegating marketing work to AI agents:

- **32 specialized agents** across strategy, creative, media, analytics, and compliance
- **3-tier hierarchy** (Directors, Leads, Specialists) with clear delegation paths
- **25 workflow skills** (`/campaign-brief`, `/ad-copy-review`, `/funnel-analysis`, etc.)
- **Path-scoped rules** enforcing platform requirements and brand standards
- **Quality gates** at every stage (strategy → creative → compliance → launch)

## Who This Is For

- **Marketing leaders** running campaigns solo or with small teams
- **Fractional CMOs** managing multiple clients
- **Agencies** experimenting with AI workflows
- **In-house marketers** who want structured AI assistance

## Core Philosophy

**You stay in control.** Agents provide structure, expertise, and quality checks — not autonomy.

Every decision follows: **Ask → Present Options → You Decide → Draft → Approve**

## Quick Start

### 1. Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Clone This Template

```bash
git clone https://github.com/[your-repo]/marketing-agency-studio.git
cd marketing-agency-studio
```

### 3. Start a Session

```bash
claude
```

### 4. Initialize

```
/start
```

The Chief Strategy Officer will guide you based on your needs:
- New client onboarding
- Campaign planning
- Creative review
- Performance optimization

## Project Structure

```
marketing-agency-studio/
├── .claude/
│   ├── agents/          # 32 agent definitions (tier 1, 2, 3)
│   ├── skills/          # 25 workflow scripts
│   ├── rules/           # Path-scoped quality standards
│   └── hooks/           # Git hooks for quality gates
├── campaigns/           # Active and archived campaigns
├── creative/            # Design assets, templates, brand guidelines
├── analytics/           # Reports, dashboards, data models
├── content/             # Blog posts, social content, email copy
├── strategy/            # Briefs, positioning docs, research
├── compliance/          # Legal approvals, accessibility audits
├── docs/
│   ├── AGENT_ROSTER.md       # Who does what
│   ├── SKILLS_CATALOG.md     # All 25 workflows
│   ├── DELEGATION_GUIDE.md   # How to use agents effectively
│   └── PATH_RULES.md         # Quality standards by work type
└── templates/           # Campaign briefs, creative specs, reports
```

## Agent Hierarchy

### Tier 1 — Directors (Opus)
Make strategic decisions, resolve conflicts, coordinate departments

- **Chief Strategy Officer** — Campaign strategy, positioning, client alignment
- **Head of Performance** — Paid media, attribution, ROI optimization  
- **Account Director** — Client relations, delivery, quality assurance

### Tier 2 — Department Leads (Sonnet)
Execute department work, delegate to specialists, review quality

- **Brand Lead** — Voice, guidelines, consistency
- **Content Lead** — Editorial calendar, content strategy
- **Creative Lead** — Art direction, design systems
- **Media Lead** — Channel strategy, budget allocation
- **Analytics Lead** — Measurement, reporting, insights
- **Compliance Lead** — Legal, accessibility, privacy

### Tier 3 — Specialists (Haiku/Sonnet)
Hands-on execution: copywriting, design, media buying, analysis, etc.

23 specialists across creative, media, analytics, and operations.

**Full roster:** See [`docs/AGENT_ROSTER.md`](docs/AGENT_ROSTER.md)

## Core Workflows

### Strategy
- `/campaign-brief` — Structure requirements (audience, positioning, channels, KPIs)
- `/positioning-map` — Competitive differentiation analysis
- `/audience-personas` — Buyer persona development
- `/competitor-audit` — Messaging and creative benchmarking

### Creative
- `/ad-copy-review` — Brand voice, CTA, compliance check
- `/landing-page-critique` — Conversion optimization review
- `/design-review` — Visual quality, accessibility, mobile responsiveness
- `/creative-brief` — Structure creative requirements

### Media
- `/channel-plan` — Budget allocation across platforms
- `/campaign-setup` — Platform configuration and targeting
- `/ab-test-plan` — Hypothesis, variants, success criteria
- `/bid-strategy` — ROAS-optimized bidding approach

### Analytics
- `/funnel-analysis` — Conversion bottlenecks and drop-offs
- `/attribution-report` — Multi-touch attribution and channel ROI
- `/performance-review` — Campaign post-mortem with learnings
- `/dashboard-setup` — Real-time reporting configuration

### Team Coordination
- `/team-launch` — Coordinate all departments for campaign launch
- `/team-rebrand` — Multi-agent rebrand across touchpoints
- `/team-crisis` — Rapid PR crisis response
- `/team-optimization` — Cross-functional performance improvement

**Full catalog:** See [`docs/SKILLS_CATALOG.md`](docs/SKILLS_CATALOG.md)

## Path-Scoped Rules

Different standards apply to different work:

**Paid Search (`campaigns/paid-search/**`)**
- Headlines: 30 chars max
- Descriptions: 90 chars max
- CTA required in every ad
- Minimum 2 headline variants for testing

**Email (`campaigns/email/**`)**
- Mobile-first design
- Unsubscribe link required
- Subject line under 50 chars
- Personalization tokens validated

**Social (`creative/social/**`)**
- Aspect ratios: 1:1, 4:5, 9:16
- Alt text required for all images
- Watermark brand assets
- File naming: brand_platform_date_variant

**Analytics (`analytics/**`)**
- Metric definitions documented
- Attribution model specified
- Refresh cadence defined
- Data quality checks automated

**See all rules:** [`docs/PATH_RULES.md`](docs/PATH_RULES.md)

## Quality Gates

Every campaign passes through:

1. **Strategy Review** — Positioning, messaging, channel fit
2. **Creative Review** — Brand consistency, visual quality, accessibility
3. **Compliance Review** — Legal, privacy, industry regulations
4. **Technical Review** — Tracking setup, UTM parameters, page speed
5. **Launch Approval** — Final sign-off from Account Director

## Example Session

```
> /campaign-brief

[Chief Strategy Officer]
Let's structure your campaign. I need to understand:

1. What are we promoting?
2. Who is the target audience?
3. What is the primary goal?
4. What is the budget?
5. What is the timeline?

> We're launching a new SaaS product for marketing teams.
> Target: Marketing managers at B2B companies, 50-500 employees.
> Goal: 500 free trial signups in 90 days.
> Budget: $30,000.
> Timeline: Launch in 3 weeks.

[Chief Strategy Officer]
Here are 3 strategic approaches:

**Option A: Thought Leadership + Paid Search**
- Content marketing to build authority
- Capture intent with branded + competitor keywords
- Pros: Lower CPA, builds long-term value
- Cons: Slower ramp, requires content production

**Option B: LinkedIn Ads + Retargeting**
- Sponsored Content to target job titles
- Retarget website visitors across display
- Pros: Precise B2B targeting, fast results
- Cons: Higher CPM, ad fatigue risk

**Option C: Hybrid (50/50 split)**
- LinkedIn for awareness
- Search for conversion
- Pros: Balanced approach, multiple touchpoints
- Cons: Diluted budget, complex attribution

Which direction?

> Option C, hybrid approach.

[Chief Strategy Officer]
Great. I'll draft the full brief and coordinate with:
- Brand Lead for messaging review
- Creative Lead for ad concepts
- Media Lead for campaign setup
- Analytics Lead for tracking

Give me 10 minutes...
```

## Customization

This is a **template, not a locked framework**. Adapt it:

- **Add/remove agents** — Delete agents you don't need, add specialists for your niche
- **Edit agent prompts** — Tune behavior, add client-specific knowledge
- **Modify skills** — Adjust workflows to match your process
- **Add rules** — Create path-scoped standards for your project structure
- **Tune hooks** — Adjust validation strictness, add new quality checks

## Testing & Compatibility

- Developed with **Claude Code CLI** (Anthropic's official tool)
- Tested on **macOS** and **Linux**
- Windows users: Use Git Bash or WSL
- All hooks use POSIX-compatible patterns

## Roadmap

- [ ] Google Ads API integration for automated campaign setup
- [ ] Meta Ads API integration
- [ ] LinkedIn Campaign Manager API
- [ ] Analytics dashboard generation (Looker Studio, Tableau)
- [ ] Brand asset library integration
- [ ] Client portal for approvals
- [ ] Multi-language support for global campaigns

## Contributing

Open to contributions:
- New agent roles (TikTok specialist, podcast producer, etc.)
- Additional skills (influencer outreach, PR coordination, etc.)
- Platform-specific rules (Pinterest, Snapchat, Reddit, etc.)
- Integration scripts (GA4, HubSpot, Salesforce, etc.)

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Support

- **Discussions** — [GitHub Discussions](https://github.com/[your-repo]/marketing-agency-studio/discussions) for questions and showcasing work
- **Issues** — [Bug reports and feature requests](https://github.com/[your-repo]/marketing-agency-studio/issues)

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built by [Your Name] | Inspired by [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Powered by [Claude](https://claude.ai)

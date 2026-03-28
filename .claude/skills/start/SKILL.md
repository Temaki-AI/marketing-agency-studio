---
name: start
description: "Onboarding — asks what you need, then routes to the right workflow"
argument-hint: "[no arguments]"
user-invocable: true
allowed-tools: Read, Glob, AskUserQuestion
---

# Marketing Agency Onboarding

Entry point for new users. Asks where you are, then routes to the right workflow.

---

## Workflow

### 1. Detect Project State (Silent)

Check context before asking:
- **Brand guidelines exist?** Check `strategy/brand-guidelines.md`
- **Active campaigns?** Glob for files in `campaigns/*/`
- **Campaign briefs?** Check `strategy/briefs/`
- **Creative assets?** Check `creative/` subdirectories
- **Analytics setup?** Check for dashboard configs in `analytics/`

Store findings internally to tailor recommendations.

---

### 2. Ask Where the User Is

> **Welcome to Marketing Agency AI Studio!**
>
> What brings you here today?
>
> **A) New client onboarding** — I'm starting fresh with a new client or product
> **B) Campaign planning** — I need to plan and launch a new campaign
> **C) Creative review** — I have ad copy, designs, or landing pages to review
> **D) Performance analysis** — I want to analyze and optimize existing campaigns
> **E) Ad hoc request** — I need specific help (copy, design, funnel analysis, etc.)

---

### 3. Route Based on Response

**Option A: New Client Onboarding**
```
Great! Let's start with understanding your client and their goals.

Run /campaign-brief to create your first campaign.

Before that, I recommend creating brand guidelines:
- Tone and voice
- Key messaging
- Visual identity
- Prohibited terms

Should I help you create a brand guidelines doc first?
```

**Option B: Campaign Planning**
```
Perfect. Let's structure your campaign.

Run /campaign-brief to define:
- Objective and KPIs
- Target audience
- Channel strategy
- Creative approach
- Timeline

Ready to start?
```

**Option C: Creative Review**
```
I can help review:
- Ad copy (/ad-copy-review)
- Landing pages (/landing-page-critique)
- Design assets (/design-review)
- Brand consistency (/brand-consistency-check)

What would you like me to review?
```

**Option D: Performance Analysis**
```
Let's dive into your data.

I can help with:
- Funnel analysis (/funnel-analysis)
- Attribution reporting (/attribution-report)
- Campaign post-mortem (/performance-review)
- A/B test planning (/ab-test-plan)

What would you like to analyze?
```

**Option E: Ad Hoc Request**
```
Got it. What specific help do you need?

I can assist with:
- Strategy: positioning, audience personas, competitor research
- Creative: copywriting, design, landing pages
- Media: channel selection, budget allocation, campaign setup
- Analytics: reporting, dashboards, attribution
- Compliance: legal review, accessibility, privacy

What's the task?
```

---

### 4. Provide Context

After routing, explain:
- Which agents will help (e.g., Chief Strategy Officer, Brand Lead, Creative Lead)
- Expected timeline
- What you'll need to provide
- What output you'll get

---

## Example Interaction

```
> /start

[Chief Strategy Officer]
Welcome to Marketing Agency AI Studio!

What brings you here today?

A) New client onboarding
B) Campaign planning
C) Creative review
D) Performance analysis
E) Ad hoc request

> B

Perfect. Let's structure your campaign.

Run /campaign-brief to define:
- Objective and KPIs
- Target audience
- Channel strategy
- Creative approach
- Timeline

Ready to start?

> Yes

Great! I'll ask you a few questions...

1. What are we promoting?
```

---

## Follow-Up Commands

After routing, suggest:
- `/campaign-brief` for campaign planning
- `/ad-copy-review` for creative review
- `/funnel-analysis` for performance analysis
- Type "help" to see all 25 available skills

---

## Notes

- Don't assume user knows marketing terminology
- Offer examples for each option
- If user is confused, break it down further
- Always show next steps clearly

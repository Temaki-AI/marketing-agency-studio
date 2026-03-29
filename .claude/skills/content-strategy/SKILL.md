---
name: content-strategy
description: "Plan editorial calendar, topics, formats, and publishing cadence"
argument-hint: "[no arguments]"
user-invocable: true
allowed-tools: Read, Write, AskUserQuestion
agents: [content-lead, seo-specialist]
prerequisites: [brand-workshop, website-foundation]
---

# Content Strategy

Plan your content foundation: topics, formats, cadence, distribution.

**This is Level 3.** Requires brand positioning + website from `/brand-workshop` and `/website-foundation`.

---

## Prerequisites Check

Before starting, verify:
- `strategy/brand/positioning.md` exists (who you serve, their problems)
- `strategy/brand/voice-guidelines.md` exists (tone and style)
- `strategy/assets/website-blueprint.md` exists (where content will live)

If missing:
```
Content strategy needs foundation first:
→ /brand-workshop (positioning and voice)
→ /website-foundation (website to publish content on)

You can't publish content without a website. Build your core assets first.
```

---

## Workflow

### Part 1: Content Goals

Ask the user:

1. **What's the primary goal of content?**
   - Brand awareness (reach new audiences)
   - Thought leadership (establish expertise)
   - Lead generation (capture emails/trials)
   - SEO (organic search traffic)
   - Customer education (reduce support load)
   - Community building (engagement and retention)

2. **Success metrics:**
   - Traffic volume
   - Engagement (time on page, scroll depth)
   - Conversions (email signups, trial starts)
   - Rankings (specific keyword targets)

---

### Part 2: Audience & Topics

Load `strategy/brand/positioning.md` to understand audience.

Ask the user:

1. **What problems does your audience have?**
   (Should align with brand positioning)

2. **What questions do they ask?**
   - Before they know you exist
   - When evaluating solutions
   - When using your product

3. **What topics establish your expertise?**
   - Industry trends
   - How-to guides
   - Best practices
   - Case studies
   - Tool comparisons

4. **Competitive content audit:**
   - What are competitors writing about?
   - What gaps exist?
   - What's ranking well for them?

**Output:** Topic list grouped by funnel stage:
- **Top of funnel (awareness):** Broad industry topics
- **Middle of funnel (consideration):** Solution comparisons, guides
- **Bottom of funnel (decision):** Product-specific content, case studies

---

### Part 3: Content Formats

Ask the user which formats make sense:

**Written:**
- [ ] Blog posts (1000-2000 words)
- [ ] Long-form guides (3000+ words)
- [ ] Case studies
- [ ] Whitepapers / Ebooks

**Visual:**
- [ ] Infographics
- [ ] Video tutorials
- [ ] Webinars
- [ ] Podcasts

**Interactive:**
- [ ] Tools / calculators
- [ ] Quizzes / assessments
- [ ] Templates / downloads

**Repurposed:**
- [ ] Newsletter (weekly/monthly)
- [ ] Social snippets (from blog posts)
- [ ] Email courses (from guides)

Recommend starting with 1-2 primary formats, then expanding.

---

### Part 4: Publishing Cadence

Ask the user:

1. **How often can you realistically publish?**
   - Daily (aggressive, needs dedicated writer)
   - 2-3x per week (healthy cadence)
   - Weekly (sustainable for small teams)
   - Bi-weekly (minimum for momentum)

2. **Who creates content?**
   - In-house writer
   - Freelancers
   - Subject matter experts (CEO, product team)
   - AI-assisted (drafts, then human polish)

3. **Review process:**
   - Who reviews for accuracy?
   - Who reviews for brand voice?
   - Who approves before publish?

**Output:** Realistic weekly/monthly content calendar template.

---

### Part 5: Distribution Channels

Ask the user where content will live and how it gets promoted:

**Owned:**
- [ ] Company blog
- [ ] Resource center
- [ ] Email newsletter

**Shared:**
- [ ] LinkedIn (company + personal profiles)
- [ ] Twitter/X
- [ ] Reddit (relevant subreddits)
- [ ] Medium
- [ ] Substack

**Earned:**
- [ ] Guest posts on industry blogs
- [ ] Podcast appearances
- [ ] Press mentions

**Promotion tactics:**
- Email to existing list
- Share on social channels
- Paid social (boost best performers)
- Outreach to influencers
- Repurpose into LinkedIn carousel, Twitter thread, etc.

---

### Part 6: SEO Foundation

With Content Lead + SEO Specialist:

1. **Keyword research:**
   - What keywords does your audience search?
   - What's the search volume and difficulty?
   - Which keywords align with your topics?

2. **Content-to-keyword mapping:**
   - Assign primary keyword to each content piece
   - Define secondary keywords
   - Plan internal linking strategy

3. **On-page SEO checklist:**
   - Title tag format: [Primary Keyword] | [Brand]
   - Meta description (155 chars)
   - H1 = article title, H2/H3 = section headers
   - Image alt text
   - Internal links (3-5 per article)

---

### Part 7: Generate Documents

Create two files:

**`strategy/content/editorial-calendar.md`**
```markdown
# Editorial Calendar

## Goals
**Primary:** [goal]
**Metrics:** [how you measure success]

## Target Audience
[From brand positioning]

## Topic Pillars
1. **[Pillar 1]** - [Description]
   - Top-of-funnel topics: [examples]
   - Middle-of-funnel: [examples]
   - Bottom-of-funnel: [examples]

2. **[Pillar 2]** - [Description]
   [Same structure]

## Publishing Cadence
- Frequency: [X per week]
- Publication day(s): [day(s)]
- Review deadline: [day before publish]

## Content Formats
- Primary: [format 1]
- Secondary: [format 2]
- Repurpose: [social, email, etc.]

## Distribution
**Owned:** [blog, newsletter]
**Shared:** [LinkedIn, Twitter, etc.]
**Promotion:** [tactics]

## Q2 2026 Calendar
| Week | Topic | Keyword | Format | Status |
|------|-------|---------|--------|--------|
| Apr 1 | [Title] | [keyword] | Blog | Planned |
| Apr 8 | [Title] | [keyword] | Guide | Planned |
| ... | ... | ... | ... | ... |

## Q3 2026 Calendar
[Same structure]
```

**`strategy/content/seo-foundation.md`**
```markdown
# SEO Foundation

## Target Keywords
| Keyword | Volume | Difficulty | Priority | Assigned Content |
|---------|--------|------------|----------|------------------|
| [keyword 1] | 2.4K | Medium | High | [article title] |
| [keyword 2] | 890 | Low | High | [article title] |
| ... | ... | ... | ... | ... |

## On-Page SEO Checklist
- [ ] Title: [Primary Keyword] | [Brand]
- [ ] Meta description (155 chars, includes keyword)
- [ ] URL slug (lowercase, hyphens, includes keyword)
- [ ] H1 = article title
- [ ] H2/H3 = section headers (include variations of keyword)
- [ ] Image alt text (descriptive, includes keyword where natural)
- [ ] Internal links (3-5 to related content)
- [ ] External links (2-3 to authoritative sources)

## Internal Linking Strategy
**Hub pages:** [pillar content]
**Spoke pages:** [supporting articles linking to hubs]

## Content Refresh Schedule
- Review top 20 posts quarterly
- Update outdated info, stats, screenshots
- Add new sections if search intent evolved
- Republish with current date
```

---

### Part 8: Next Steps

After creating files:

```
✅ Content strategy complete!

Created:
- strategy/content/editorial-calendar.md
- strategy/content/seo-foundation.md

You now have:
✅ Topic pillars mapped to funnel stages
✅ Publishing cadence and workflow
✅ SEO keyword targets
✅ Distribution plan

Next steps:
→ /content-production - Write your first blog post
→ /social-strategy - Define social media presence
→ /email-strategy - Plan newsletter and nurture sequences

Once you have content flowing, you can amplify with:
→ /campaign-brief - Paid campaigns to promote content
```

---

## Example Interaction

```
> /content-strategy

[Content Lead + SEO Specialist]

Let's plan your content foundation.

Checking prerequisites...
✅ Brand positioning found
✅ Brand voice guidelines found

Great! Let's build on that.

**Part 1: Content Goals**

What's the primary goal?
A) Brand awareness (reach new audiences)
B) Thought leadership (establish expertise)
C) Lead generation (emails/trials)
D) SEO (organic search traffic)
E) Customer education (reduce support)

> C - Lead generation

Perfect. How will you measure success?
> Email signups from content, 500/month target

**Part 2: Audience & Topics**

I see from brand positioning you serve: "Marketing managers at B2B companies."

What problems do they have? (from positioning):
> "Campaigns fall through cracks, deadlines missed, no visibility"

What questions do they ask?
> "How do other teams stay organized?"
> "What tools actually work for campaign management?"
> "How to get executive buy-in for new tools?"

Based on this, I recommend three topic pillars:

1. **Campaign Organization**
   - Top: "10 signs your campaign management is broken"
   - Middle: "Spreadsheets vs. PM tools: What works for marketing"
   - Bottom: "How [Customer] launched 3x more campaigns"

2. **Team Collaboration**
   - Top: "Why marketing teams miss deadlines"
   - Middle: "Async vs. sync: What marketing teams need"
   - Bottom: "Getting your team to actually use PM tools"

3. **Executive Stakeholder Management**
   - Top: "Marketing's visibility problem"
   - Middle: "Dashboard your exec team will actually read"
   - Bottom: "ROI case study: PM tool vs. status quo"

Sound good?

> Yes, looks great

**Part 3: Formats**

[Continues through remaining sections...]

[After all questions:]

✅ Content strategy complete!

Review:
- strategy/content/editorial-calendar.md
- strategy/content/seo-foundation.md

Ready to write your first post? Run /content-production
```

---

## Notes

- This is a 45-60 minute exercise
- SEO keyword research can take extra time (worth it)
- Start with 1 primary format, expand later
- Calendar should be 3-6 months ahead
- Review and adjust quarterly based on performance

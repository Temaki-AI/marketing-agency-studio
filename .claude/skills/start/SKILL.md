---
name: start
description: "Onboarding — detects what foundation exists, then routes to next step"
argument-hint: "[no arguments]"
user-invocable: true
allowed-tools: Read, Glob, AskUserQuestion
---

# Marketing Agency Onboarding

Entry point that checks what foundation exists, then guides you to the right next step.

**Marketing hierarchy:** Brand → Content/Social → Campaigns

You can't run effective campaigns without a brand foundation.

---

## Workflow

### 1. Detect Foundation (Silent)

Check what exists:
- **Brand foundation?** Check `strategy/brand/`
  - `positioning.md` - Who we are, who we serve, how we're different
  - `voice-guidelines.md` - Tone, terminology, examples
  - `visual-identity.md` - Logo, colors, typography, imagery
- **Content strategy?** Check `strategy/content/editorial-calendar.md`
- **Social presence?** Check `strategy/social/platform-strategy.md`
- **SEO foundation?** Check `strategy/seo/keyword-research.md`
- **Active campaigns?** Glob `campaigns/*/brief.md`

### 2. Route Based on Foundation

**Scenario A: Nothing exists (Fresh start)**
```
Welcome to Marketing Agency AI Studio!

I checked your workspace and don't see any brand foundation yet.

Before we can create campaigns, content, or social posts, we need to establish:

1. **Brand Positioning** - Who you are, who you serve, how you're different
2. **Brand Voice** - How you communicate (tone, terminology, style)
3. **Visual Identity** - Logo, colors, typography, design principles

This is your foundation. Everything else builds on top.

Ready to start with brand positioning?

→ Run /brand-workshop to establish your brand foundation
```

**Scenario B: Brand exists, no core assets**
```
Great! I see you have brand positioning and voice guidelines.

Next layer: Core Assets

Before creating content or campaigns, you need fundamental assets:

1. **Website** - Homepage, product pages, about, contact
2. **Landing Pages** - Campaign templates
3. **Email Templates** - Design system
4. **Sales Collateral** - Deck, one-pager

You can't publish content without a website. You can't run ads without landing pages.

What would you like to build next?

→ /website-foundation - Build homepage + core pages
→ /landing-page-template - Campaign landing page template
→ /email-templates - Email design system
→ /sales-deck - Sales presentation
```

**Scenario C: Brand + Assets exist, ready for content**
```
Perfect! You have:
✅ Brand foundation
✅ Website and core assets

Now you're ready for content and distribution:

1. **Content Strategy** - Topics, formats, publishing cadence
2. **Social Strategy** - Platforms, voice per channel
3. **SEO Foundation** - Keywords, optimization

What would you like to build?

→ /content-strategy - Plan editorial calendar
→ /social-strategy - Define platform presence
→ /seo-audit - Keyword research and optimization
```

**Scenario D: Brand + Assets + Content exist, ready for campaigns**
```
Perfect! You have:
✅ Brand foundation
✅ Website and core assets
✅ Content strategy
✅ Social presence

Now you're ready for paid campaigns.

What's your goal?

→ /campaign-brief - Launch a new campaign
→ /performance-review - Optimize existing campaigns
→ /funnel-analysis - Find conversion bottlenecks
```

**Scenario E: Everything exists, optimization mode**
```
Welcome back! You have a full marketing foundation.

What do you need help with today?

**Strategy:**
→ /competitor-audit - See what competitors are doing
→ /audience-research - Deepen customer understanding

**Creative:**
→ /ad-copy-review - Review ad copy
→ /landing-page-critique - Optimize conversion
→ /content-review - Review blog post or social content

**Media:**
→ /campaign-setup - Launch new campaign
→ /ab-test-plan - Design A/B test
→ /channel-plan - Reallocate budget

**Analytics:**
→ /funnel-analysis - Find drop-off points
→ /attribution-report - Understand channel contribution
→ /performance-review - Campaign post-mortem
```

### 3. Enforce Prerequisites

If user tries to skip steps:

```
> /campaign-brief

[Chief Strategy Officer]
I see you want to create a campaign, but I don't see brand positioning in 
strategy/brand/positioning.md.

Campaigns need a clear brand foundation:
- Who are you?
- Who do you serve?
- What makes you different?

Without this, we can't create consistent, effective campaigns.

Run /brand-workshop first to establish your foundation.
```

---

## Marketing Hierarchy

```
Level 1: BRAND FOUNDATION (Required first)
├─ Brand positioning
├─ Brand voice guidelines
├─ Visual identity
└─ StoryBrand messaging

Level 2: CORE ASSETS (Build before content/campaigns)
├─ Website (homepage, product, about, contact)
├─ Landing page templates
├─ Email templates
└─ Sales deck / collateral

Level 3: CONTENT & DISTRIBUTION (After assets exist)
├─ Content strategy
├─ Social media strategy
├─ SEO foundation
└─ Email marketing foundation

Level 4: PAID CAMPAIGNS (After foundation + assets + content)
├─ Campaign planning
├─ Media buying
├─ Performance optimization
└─ Attribution analysis

Level 5: OPTIMIZATION (Ongoing)
├─ A/B testing
├─ Conversion rate optimization
├─ Analytics and reporting
└─ Competitive intelligence
```

**You can't skip levels.** Each builds on the previous.

---

## Example Interactions

**Fresh start:**
```
> /start

I checked your workspace - no brand foundation yet.

Before campaigns, we need your brand foundation.

Run /brand-workshop to define:
- Positioning (who you are, who you serve, differentiation)
- Voice (tone, terminology, style)
- Visual identity (colors, typography, imagery)

Ready to start?

> Yes

Great! /brand-workshop will walk you through this...
```

**Trying to skip:**
```
> /campaign-brief

Hold on - I don't see brand positioning yet.

You need brand foundation before campaigns:
→ /brand-workshop first

Then we can build campaigns on top of that.
```

**All foundation exists:**
```
> /start

Perfect! Full foundation in place:
✅ Brand
✅ Content/Social
✅ SEO

Ready for:
→ /campaign-brief - New campaign
→ /content-review - Review blog post
→ /ad-copy-review - Review ad copy
→ /funnel-analysis - Optimize conversion

What do you need?
```

---

## Notes

- **Enforce sequence** - Check prerequisites before running advanced skills
- **Show progress** - Tell user what they've completed, what's next
- **Be helpful** - Don't just block, guide them to the right next step
- **Context-aware** - Recommendations based on what exists

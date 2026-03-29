---
name: storybrand
description: "Clarify your marketing message using the StoryBrand 7-part framework"
argument-hint: "[no arguments]"
user-invocable: true
allowed-tools: Read, Write, AskUserQuestion
agents: [brand-lead, copywriter]
prerequisites: [brand-workshop]
---

# StoryBrand Framework

Clarify your marketing message using Donald Miller's 7-part story framework.

**Key insight:** Your customer is the hero, not your brand. You're the guide.

**This is Level 1.** Works best after `/brand-workshop` to translate positioning into narrative.

---

## Prerequisites Check

Before starting, verify:
- `strategy/brand/positioning.md` exists (who you serve, their problem)

If missing:
```
StoryBrand needs brand positioning first.
Run /brand-workshop to establish who you serve and their problem.
```

---

## The 7-Part Framework

### 1. A Character (The Hero)
**Your customer, not your brand.**

Ask the user:
- Who is your customer? (Be specific: not "everyone")
- What do they want? (Their external goal/desire)
- Why does this matter to them?

**Example:**
- Bad: "Small businesses need project management"
- Good: "Marketing managers at B2B companies want to launch campaigns without missing deadlines"

---

### 2. Has a Problem

**Three levels:**

**External Problem** (the surface-level issue)
- What tactical problem do they face?
- What's broken, missing, or frustrating?

**Internal Problem** (how it makes them feel)
- What emotion does this create?
- Frustration? Stress? Embarrassment? Fear?

**Philosophical Problem** (why it's unjust)
- What shouldn't be this way?
- What's the injustice or unfairness?

Ask the user for all three:

**Example:**
- External: "Campaigns fall through cracks, deadlines missed"
- Internal: "Feel disorganized, stressed, out of control"
- Philosophical: "Marketing teams shouldn't have to fight their tools"

**Most marketing only addresses external. Internal is where the emotion lives.**

---

### 3. Meets a Guide (Your Brand)

**You are NOT the hero. You're Yoda, not Luke.**

Two elements of a guide:
1. **Empathy** - "We understand your problem"
2. **Authority** - "We've helped others solve it"

Ask the user:

**Empathy:**
- How do you show you understand their struggle?
- What have you experienced that connects you to them?

**Authority:**
- What proof do you have that you can help?
- Stats, testimonials, years in business, case studies?

**Example:**
- Empathy: "We've seen too many great campaigns derailed by spreadsheet chaos"
- Authority: "We've helped 500+ marketing teams organize 10K+ campaigns"

---

### 4. Who Gives Them a Plan

**Make it simple. 3 steps max.**

Two types of plans:

**Process Plan** (how to work with you)
- Step 1: [Simple first action]
- Step 2: [Next step]
- Step 3: [Outcome]

**Agreement Plan** (what you promise)
- Removes fear
- Builds trust
- "We promise [X], so you never have to worry about [Y]"

Ask the user which type (or both):

**Example Process Plan:**
1. Sign up in 2 minutes
2. Import your campaigns
3. Never miss a deadline again

**Example Agreement Plan:**
- No long-term contracts
- 30-day money-back guarantee
- Your data stays yours

**The plan reduces confusion and fear.**

---

### 5. And Calls Them to Action

**Two types:**

**Direct CTA** (transaction)
- "Buy now"
- "Schedule demo"
- "Start free trial"
- "Get started"

**Transitional CTA** (relationship)
- "Download guide"
- "Watch webinar"
- "Take assessment"
- "Read case study"

Ask the user:

**Primary CTA** (Direct):
- What action do you want them to take?
- Make it clear, visible, repeated

**Secondary CTA** (Transitional):
- What can they do if they're not ready?
- Lead magnet, tool, resource

**Example:**
- Direct: "Start your free trial"
- Transitional: "Download: The Campaign Manager's Survival Guide"

**Without a clear call to action, nothing happens.**

---

### 6. That Helps Them Avoid Failure

**What's at stake if they do nothing?**

People are more motivated by loss avoidance than gain seeking.

Ask the user:

**What happens if they don't solve this problem?**
- Lost revenue?
- Wasted time?
- Missed opportunities?
- Career setbacks?
- Embarrassment?

**Example:**
- "Without campaign organization, you'll keep missing launches, disappointing stakeholders, and fighting fires instead of doing strategic work."

**Don't be melodramatic, but paint the picture.**

---

### 7. And Ends in Success

**What does their life look like after?**

Three types of transformation:

**Status** (how others see them)
- "Be seen as the organized, on-top-of-it marketing leader"

**Completeness** (self-actualization)
- "Finally have control over your campaigns"

**External** (tangible result)
- "Launch 3x more campaigns with the same team"

Ask the user for all three:

**Example:**
- Status: "Your exec team trusts your deadlines"
- Completeness: "You leave work on time, stress-free"
- External: "Ship 50+ campaigns per quarter"

**Paint the success vision. Make it aspirational but believable.**

---

## Generate BrandScript

After gathering all 7 elements, create:

**`strategy/brand/brandscript.md`**
```markdown
# BrandScript

Based on the StoryBrand Framework by Donald Miller.

---

## 1. A Character (The Hero)
**Who they are:**
[Customer description]

**What they want:**
[Their goal/desire]

---

## 2. Has a Problem

**External Problem:**
[Tactical issue they face]

**Internal Problem:**
[How it makes them feel]

**Philosophical Problem:**
[Why it's unjust]

---

## 3. Meets a Guide

**Empathy (We understand):**
[Statement showing you get their struggle]

**Authority (We can help):**
[Proof you've solved this before]

---

## 4. Who Gives Them a Plan

**Process Plan:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Agreement Plan:**
- [Promise 1]
- [Promise 2]
- [Promise 3]

---

## 5. And Calls Them to Action

**Direct CTA:**
[Primary call to action]

**Transitional CTA:**
[Secondary, lower-commitment CTA]

---

## 6. That Helps Them Avoid Failure

**Stakes (what they lose if they do nothing):**
[Paint the failure scenario]

---

## 7. And Ends in Success

**Status:**
[How others see them after success]

**Completeness:**
[Internal fulfillment]

**External:**
[Tangible results]

---

## One-Liner

[Customer] struggling with [Problem] finally [Success] with [Product].

**Example:**
"Marketing managers struggling with campaign chaos finally launch with confidence using [Your Product]."

---

## Website Copy Starter

**Hero Section:**
Headline: [Success statement - what they get]
Subhead: [Problem they avoid]
CTA: [Direct CTA]

**Stakes Section:**
"Without [solution], you'll continue to [failure scenario]."

**Plan Section:**
"Here's how it works:"
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Success Section:**
"Imagine: [Paint the success vision]"

CTA: [Direct CTA]
```

---

## Apply to Website Copy

After creating BrandScript:

**Homepage Structure:**
1. **Hero** - Character's goal + CTA
2. **Stakes** - What they avoid (pain)
3. **Value Prop** - How you guide them
4. **Plan** - 3 simple steps
5. **Explanatory** - More details, proof
6. **Success** - Paint the vision
7. **CTA** - Repeat call to action

**Every page should:**
- Position customer as hero (not your brand)
- Address internal AND external problem
- Show empathy + authority
- Make the plan simple
- Have clear CTA

---

## Example Interaction

```
> /storybrand

[Brand Lead + Copywriter]

Let's clarify your marketing message using the StoryBrand framework.

Checking prerequisites...
✅ Brand positioning found

Great! StoryBrand will turn your positioning into a clear story.

**Part 1: A Character**

Your customer is the hero, not your brand.

From your positioning, I see you serve: "Marketing managers at B2B companies"

But let's get more specific. Who exactly?
> Marketing managers at tech companies, 50-500 employees, managing 10+ campaigns/quarter

What do they want (external goal)?
> Launch campaigns on time without chaos

Why does this matter to them?
> Their boss judges them on hitting deadlines, and their team is drowning

Perfect. Now...

**Part 2: Has a Problem**

Three levels:

**External Problem** (tactical issue):
> Campaigns slip, deadlines missed, no single source of truth

**Internal Problem** (how it makes them feel):
> Stressed, disorganized, feel like they're constantly putting out fires

**Philosophical Problem** (why it's unjust):
> Marketing teams shouldn't have to fight their tools to do great work

Great! This is where the emotion lives.

[Continues through all 7 parts...]

[After all answers:]

✅ BrandScript complete!

Created:
- strategy/brand/brandscript.md

This is your messaging foundation. Use it to write:
- Website copy
- Sales emails
- Ad copy
- Pitch decks

Next steps:
→ /website-copy - Apply BrandScript to homepage
→ /ad-copy - Write ads using this story
→ /email-production - Turn this into email sequence

Your message is now clear, story-driven, and customer-focused.
```

---

## Key Principles

1. **Customer = Hero, You = Guide**
   - Stop saying "We're the best"
   - Start saying "We help you succeed"

2. **Story Creates Clarity**
   - Every story has these 7 parts
   - Your marketing should too

3. **Internal Problem > External**
   - External: "Tool doesn't work"
   - Internal: "I feel stupid/stressed" ← This is where emotion lives

4. **Confusion = Lost Sales**
   - Simple plan beats complex features
   - Clear CTA beats clever copy

5. **Paint Both Pictures**
   - Failure (what they avoid)
   - Success (what they gain)

---

## Common Mistakes

❌ **Making your brand the hero**
- "We're the leading provider of..."
- Nobody cares. They care about their success, not yours.

❌ **Only addressing external problem**
- "Our tool has X features"
- Customers buy based on how you make them feel

❌ **Vague success**
- "Improve your marketing"
- Be specific: "Launch 3x more campaigns, leave work on time"

❌ **No clear plan**
- Confused customers don't buy
- 3 steps max, make it obvious

❌ **Weak CTA**
- "Learn more" is not a call to action
- Direct: "Start free trial" / Transitional: "Download guide"

---

## Notes

- Budget 45-60 minutes for full framework
- BrandScript = foundation for ALL marketing copy
- Revisit quarterly as market/customer evolves
- Works for B2B, B2C, SaaS, services, nonprofits
- Read "Building a StoryBrand" by Donald Miller for full context

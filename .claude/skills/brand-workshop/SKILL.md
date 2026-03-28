---
name: brand-workshop
description: "Establish brand foundation: positioning, voice, visual identity"
argument-hint: "[no arguments]"
user-invocable: true
allowed-tools: Read, Write, AskUserQuestion
agents: [chief-strategy-officer, brand-lead]
---

# Brand Workshop

Establish your brand foundation through structured questions and exercises.

**This is Level 1.** Everything else builds on this.

---

## Workflow

### Part 1: Brand Positioning

**Outcome:** `strategy/brand/positioning.md`

Ask the user:

1. **Who are you?**
   - Company/product name
   - What do you do? (one sentence)
   - Category (SaaS, agency, ecommerce, etc.)

2. **Who do you serve?**
   - Primary audience (demographics, role, company size)
   - Their main problem/pain point
   - Their desired outcome

3. **How are you different?**
   - What makes you unique vs. competitors?
   - What can you do that others can't (or won't)?
   - Why should someone choose you?

4. **What do you value?**
   - Core company values (3-5 max)
   - How do these show up in your work?

5. **Positioning statement:**
   Draft: "For [audience] who [problem], [product] is a [category] that [unique benefit]. Unlike [competitors], we [differentiation]."

Present 2-3 positioning options, let user choose or refine.

---

### Part 2: Brand Voice

**Outcome:** `strategy/brand/voice-guidelines.md`

Ask the user:

1. **Tone spectrum** (choose one per pair):
   - Formal ↔ Casual
   - Serious ↔ Playful
   - Respectful ↔ Irreverent
   - Enthusiastic ↔ Matter-of-fact
   - Funny ↔ Serious

2. **Voice characteristics** (pick 3-4):
   - Helpful
   - Expert
   - Friendly
   - Bold
   - Witty
   - Empathetic
   - Direct
   - Inspiring

3. **Terminology:**
   - Preferred terms (what you always say)
   - Prohibited terms (what you never say)
   - Industry jargon (use or avoid?)

4. **Example sentences:**
   Ask user to provide 3-5 sentences that "sound like your brand."
   Analyze them for patterns (sentence length, word choice, punctuation).

5. **Voice do's and don'ts:**
   Generate 5 do's and 5 don'ts based on the above.

---

### Part 3: Visual Identity

**Outcome:** `strategy/brand/visual-identity.md`

Ask the user:

1. **Logo:**
   - Do you have a logo? (URL or file path)
   - Logo variations (full, icon-only, wordmark)
   - Clear space requirements
   - Don'ts (stretching, recoloring, etc.)

2. **Color palette:**
   - Primary color (hex code)
   - Secondary colors (2-3 hex codes)
   - Accent color (optional)
   - When to use each

3. **Typography:**
   - Heading font (name, weights)
   - Body font (name, weights)
   - Mono font (optional, for code/data)

4. **Imagery style:**
   - Photography style (lifestyle, product, abstract, illustrations)
   - Color treatment (vibrant, muted, black & white)
   - Composition preferences (close-up, wide angle, etc.)

5. **Design principles:**
   - Clean/minimal vs. rich/detailed
   - Modern vs. classic
   - Bold vs. subtle

---

### Part 4: Generate Guidelines

Create three files:

**`strategy/brand/positioning.md`**
```markdown
# Brand Positioning

## Who We Are
[Company name] is a [category] that [what you do].

## Who We Serve
**Primary Audience:** [description]
**Their Problem:** [pain point]
**Desired Outcome:** [goal]

## How We're Different
[Unique value proposition]

**Unlike competitors, we:**
- [Differentiation point 1]
- [Differentiation point 2]
- [Differentiation point 3]

## Core Values
1. [Value 1] - [How it shows up]
2. [Value 2] - [How it shows up]
3. [Value 3] - [How it shows up]

## Positioning Statement
For [audience] who [problem], [product] is a [category] that [benefit].
Unlike [competitors], we [differentiation].
```

**`strategy/brand/voice-guidelines.md`**
```markdown
# Brand Voice Guidelines

## Tone
- [Formal/Casual]
- [Serious/Playful]
- [etc.]

## Voice Characteristics
We are: [characteristic 1], [characteristic 2], [characteristic 3]

## Preferred Terminology
**Always say:**
- [Term 1]
- [Term 2]

**Never say:**
- [Prohibited term 1]
- [Prohibited term 2]

## Voice Do's
1. [Do 1]
2. [Do 2]
3. [Do 3]
4. [Do 4]
5. [Do 5]

## Voice Don'ts
1. [Don't 1]
2. [Don't 2]
3. [Don't 3]
4. [Don't 4]
5. [Don't 5]

## Example Sentences
✅ "[Good example]"
✅ "[Good example]"
❌ "[Bad example]"
❌ "[Bad example]"
```

**`strategy/brand/visual-identity.md`**
```markdown
# Visual Identity

## Logo
- Primary logo: [file path or URL]
- Icon only: [file path or URL]
- Wordmark: [file path or URL]

**Usage:**
- Minimum size: [dimension]
- Clear space: [dimension]
- Don't: stretch, rotate, recolor, add effects

## Color Palette
**Primary:** #[hex] - [Usage notes]
**Secondary:** #[hex] - [Usage notes]
**Accent:** #[hex] - [Usage notes]

## Typography
**Headings:** [Font name], [weights]
**Body:** [Font name], [weights]
**Monospace:** [Font name] (optional)

## Imagery Style
- [Description of preferred photography/illustration style]
- Color treatment: [vibrant/muted/etc.]
- Composition: [close-up/wide angle/etc.]

## Design Principles
- [Principle 1]
- [Principle 2]
- [Principle 3]
```

---

### Part 5: Confirmation

After generating all three files:

```
✅ Brand foundation complete!

Created:
- strategy/brand/positioning.md
- strategy/brand/voice-guidelines.md
- strategy/brand/visual-identity.md

Next steps:
→ /content-strategy - Plan your content and topics
→ /social-strategy - Define social media presence
→ /seo-audit - Establish keyword foundation

Your brand is now ready to guide all marketing work.
```

---

## Example Interaction

```
> /brand-workshop

[Chief Strategy Officer + Brand Lead]

Let's establish your brand foundation. This will guide everything else.

**Part 1: Brand Positioning**

1. Who are you?

Company/product name:
> Acme Project Manager

What do you do (one sentence):
> We help marketing teams manage campaigns without spreadsheet chaos.

Category:
> SaaS project management

2. Who do you serve?

Primary audience:
> Marketing managers at B2B companies, 50-500 employees

Their main problem:
> Campaigns fall through cracks, deadlines missed, no visibility across team

Desired outcome:
> Every campaign on track, team aligned, nothing slips

3. How are you different?

What makes you unique:
> Built specifically for marketing workflows, not adapted from dev tools

What you can do that others can't:
> Native integrations with all major ad platforms, automatic budget tracking

4. Core values (3-5):
> 1. Clarity - no hidden complexity
> 2. Speed - fast to set up, fast to use
> 3. Reliability - campaigns never fall through cracks

[Continues through voice and visual identity...]

[After all questions answered:]

✅ Brand foundation complete!

Created:
- strategy/brand/positioning.md
- strategy/brand/voice-guidelines.md  
- strategy/brand/visual-identity.md

Review these files and let me know if any adjustments are needed.

Ready to move to content strategy? Run /content-strategy
```

---

## Notes

- This is **not** a 10-minute exercise - budget 60-90 minutes
- Encourage thoughtful answers, not quick ones
- Show examples to help user articulate preferences
- Draft positioning statements and get feedback
- Save all outputs to files for future reference
- These files become the source of truth for all future work

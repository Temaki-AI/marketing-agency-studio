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

4. **Icons:**
   - Style: line, solid, duotone, outline, filled
   - Stroke weight (1px, 1.5px, 2px)
   - Corner radius (sharp, rounded, pill)
   - Size scale (16px, 24px, 32px, 48px)
   - Library/source (custom, Heroicons, Lucide, Feather, custom set)
   - Color usage (monochrome, brand colors, semantic colors)
   - States (default, hover, active, disabled)
   - Animation style (static, subtle hover, animated)

5. **Illustrations:**
   - Style: flat, isometric, 3D, hand-drawn, minimalist, abstract
   - Color palette: brand colors only, extended palette, gradients
   - Complexity: simple shapes, detailed scenes, somewhere between
   - Character style (if people): realistic, stylized, abstract, geometric
   - Perspective: flat/2D, isometric, side view, three-quarter
   - Use cases: hero images, spot illustrations, backgrounds, diagrams
   - Do's and don'ts

6. **Photography:**
   
   **Subject Matter:**
   - People (team, customers, diverse representation)
   - Products (in use, staged, lifestyle)
   - Environments (office, home, outdoor, abstract)
   - Abstract (textures, patterns, colors)
   
   **Composition:**
   - Rule of thirds, centered, asymmetric
   - Negative space usage (minimal, generous)
   - Framing (tight crops, wide shots, medium)
   
   **Lighting:**
   - Natural light, studio lighting, high-key, low-key, dramatic
   - Time of day feel (bright morning, golden hour, evening)
   
   **Color Treatment:**
   - Natural colors, desaturated/muted, vibrant/saturated
   - Filters (none, warm, cool, vintage, black & white)
   - Color grading consistency
   
   **Depth of Field:**
   - Shallow focus/bokeh (subject sharp, background blurred)
   - Deep focus (everything sharp)
   
   **Mood/Emotion:**
   - Professional, casual, aspirational, authentic, playful, serious
   
   **Product Photography (if applicable):**
   - Angle preferences (front, three-quarter, top-down)
   - Background style (white seamless, lifestyle setting, textured)
   - Lighting setup (soft, dramatic, natural)
   - Props usage (minimal, contextual, none)
   
   **Diversity & Representation:**
   - Age range, ethnicity, gender, ability
   - Authentic vs. stock feel
   - Scenarios that reflect real customers
   
   **Do's:**
   - [Specific guidance: e.g., "Show products in real-world use"]
   - [e.g., "Natural expressions, not posed smiles"]
   - [e.g., "Bright, airy spaces"]
   
   **Don'ts:**
   - [e.g., "No cheesy stock photos with fake enthusiasm"]
   - [e.g., "Avoid cluttered backgrounds"]
   - [e.g., "No overly styled, unrealistic scenarios"]

7. **Design principles:**
   - Clean/minimal vs. rich/detailed
   - Modern vs. classic
   - Bold vs. subtle
   - Friendly vs. professional
   - Playful vs. serious

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

---

## Color Palette

**Primary:** #[hex] - [Usage notes]
**Secondary:** #[hex] - [Usage notes]
**Accent:** #[hex] - [Usage notes]

**Semantic Colors:**
- Success: #[hex]
- Warning: #[hex]
- Error: #[hex]
- Info: #[hex]

**Neutral Scale:**
- Gray 50: #[hex] (backgrounds)
- Gray 100-900: [provide full scale]

**Accessibility:**
- All text on primary meets WCAG AA (4.5:1 contrast)
- Interactive elements meet WCAG AAA (7:1 contrast)

---

## Typography

**Headings:** [Font name], [weights: 600, 700]
**Body:** [Font name], [weights: 400, 500, 600]
**Monospace:** [Font name] (optional, for code/data)

**Scale:**
- H1: [size/line-height/weight]
- H2: [size/line-height/weight]
- H3: [size/line-height/weight]
- Body: [size/line-height]
- Small: [size/line-height]

**Line Length:**
- Optimal: 60-75 characters per line
- Maximum: 90 characters

---

## Icons

**Style:** [line/solid/duotone]
**Stroke Weight:** [1px, 1.5px, 2px]
**Corner Radius:** [sharp/rounded/pill]
**Size Scale:** 16px, 24px, 32px, 48px

**Library/Source:** [Heroicons/Lucide/custom]

**Color Usage:**
- Default: [color]
- Hover: [color]
- Active: [color]
- Disabled: [color]

**Animation:**
- [Static/subtle hover/animated]

**Examples:**
- Navigation icons: [style]
- Social icons: [style]
- Feature icons: [style]

---

## Illustrations

**Style:** [flat/isometric/3D/hand-drawn/minimalist]

**Color Palette:**
- [Brand colors only / extended palette / gradients]

**Complexity:**
- [Simple shapes / detailed scenes / balanced]

**Character Style (if people):**
- [Realistic / stylized / abstract / geometric]

**Perspective:**
- [Flat 2D / isometric / side view / three-quarter]

**Use Cases:**
- Hero images: [style/complexity]
- Spot illustrations: [style/complexity]
- Background elements: [style/complexity]
- Diagrams/charts: [style/complexity]

**Do's:**
- [Specific guidance]
- [Example]

**Don'ts:**
- [What to avoid]
- [Example]

---

## Photography

### Subject Matter
- **People:** [team/customers, diverse representation]
- **Products:** [in use/staged/lifestyle]
- **Environments:** [office/home/outdoor/abstract]
- **Abstract:** [textures/patterns/colors]

### Composition
- **Framing:** [rule of thirds / centered / asymmetric]
- **Negative space:** [minimal / generous]
- **Crop style:** [tight / wide / medium]

### Lighting
- **Style:** [natural / studio / high-key / low-key]
- **Time of day:** [bright morning / golden hour / evening]

### Color Treatment
- **Saturation:** [natural / desaturated / vibrant]
- **Filters:** [none / warm / cool / vintage / B&W]
- **Grading:** [consistent color palette notes]

### Depth of Field
- [Shallow focus (bokeh) / deep focus / mixed]

### Mood/Emotion
- [Professional / casual / aspirational / authentic / playful / serious]

### Product Photography (if applicable)
- **Angle:** [front / three-quarter / top-down]
- **Background:** [white seamless / lifestyle / textured]
- **Lighting:** [soft / dramatic / natural]
- **Props:** [minimal / contextual / none]

### Diversity & Representation
- **Age range:** [specifics]
- **Ethnicity:** [authentic diversity]
- **Gender:** [inclusive representation]
- **Ability:** [visible and invisible disabilities]
- **Authenticity:** [real customers preferred over stock]

### Do's
- ✅ [Specific guidance: "Show products in real-world use"]
- ✅ [e.g., "Natural expressions, not posed smiles"]
- ✅ [e.g., "Bright, airy spaces"]

### Don'ts
- ❌ [e.g., "No cheesy stock photos with fake enthusiasm"]
- ❌ [e.g., "Avoid cluttered backgrounds"]
- ❌ [e.g., "No overly styled, unrealistic scenarios"]

---

## Design Principles

1. **[Principle 1]** - [Description and how it manifests]
2. **[Principle 2]** - [Description and how it manifests]
3. **[Principle 3]** - [Description and how it manifests]

---

## Grid & Spacing

**Grid:**
- Column count: [12-column / 16-column]
- Gutter width: [24px / 32px]
- Margin: [responsive values]

**Spacing Scale:**
- 4px base unit
- 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

**Layout Density:**
- [Compact / comfortable / spacious]

---

## Elevation & Shadows

**Shadow Scale:**
- SM: [box-shadow values]
- MD: [box-shadow values]
- LG: [box-shadow values]
- XL: [box-shadow values]

**Usage:**
- Cards: [shadow level]
- Modals: [shadow level]
- Dropdowns: [shadow level]

---

## Motion & Animation

**Duration:**
- Fast: [150ms]
- Normal: [250ms]
- Slow: [350ms]

**Easing:**
- [ease-in-out / cubic-bezier values]

**Use Cases:**
- Hover states: [duration/easing]
- Page transitions: [duration/easing]
- Modal open/close: [duration/easing]

**Principles:**
- Purposeful (guides attention)
- Subtle (doesn't distract)
- Consistent (same patterns everywhere)

---

## Accessibility Standards

**Contrast Ratios:**
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Interactive elements: 7:1 preferred (WCAG AAA)

**Focus States:**
- Visible outline on all interactive elements
- Color: [color]
- Width: [2px / 3px]
- Offset: [2px]

**Screen Reader Support:**
- All images have alt text
- Icon-only buttons have aria-labels
- Semantic HTML structure

---

## File Organization

**Assets Location:**
- Logo files: `/brand/logo/`
- Color swatches: `/brand/colors/`
- Typography specimens: `/brand/typography/`
- Icon set: `/brand/icons/`
- Illustration library: `/brand/illustrations/`
- Photo library: `/brand/photography/`

**Naming Convention:**
- [brand]-logo-[variation].[format]
- [brand]-icon-[name]-[size].[format]
- [brand]-photo-[subject]-[descriptor].[format]

---

## Tools & Resources

**Design Tools:**
- [Figma / Sketch / Adobe XD]
- Component library: [location/link]

**Font Loading:**
- [Google Fonts / Adobe Fonts / self-hosted]
- WOFF2 format, subset, preload

**Icon Library:**
- [Heroicons / Lucide / custom SVG set]
- Delivery: [inline SVG / icon font / sprite]

**Stock Photo Sources (if needed):**
- [Unsplash / custom photography]
- Editing guidelines: [link or inline]

---

## Version History

- v1.0 - [Date] - Initial guidelines
- [Future updates tracked here]

---

## Contact

**Questions or clarifications:**
[Name / email of brand lead]
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

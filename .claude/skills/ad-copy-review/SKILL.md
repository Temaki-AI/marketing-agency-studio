---
name: ad-copy-review
description: "Review ad copy for brand voice, CTA clarity, and compliance"
argument-hint: "[paste your ad copy]"
user-invocable: true
allowed-tools: Read, AskUserQuestion
agents: [brand-lead, copywriter]
---

# Ad Copy Review

Review ad copy for brand voice consistency, CTA effectiveness, and compliance.

---

## Workflow

### 1. Get the Copy

Ask the user to provide:
- Ad copy text
- Platform (Google Ads, Facebook, LinkedIn, etc.)
- Campaign context (what are you promoting?)
- Target audience

### 2. Load Brand Guidelines

Check if `strategy/brand-guidelines.md` exists:
- If yes, read and apply those standards
- If no, ask user for brand voice preferences

### 3. Review Against Checklist

**Brand Voice:**
- [ ] Tone matches brand (formal/casual, playful/serious)
- [ ] Terminology consistent with brand glossary
- [ ] No prohibited words or phrases
- [ ] Claims are accurate and substantiated

**CTA (Call-to-Action):**
- [ ] CTA is clear and specific
- [ ] Action verb used (Download, Start, Get, Try)
- [ ] Value proposition clear
- [ ] Urgency appropriate (not false scarcity)

**Compliance:**
- [ ] No trademark violations
- [ ] No unsubstantiated claims
- [ ] Disclaimers included if required
- [ ] No prohibited content (political, adult, etc.)

**Platform Requirements:**
- [ ] Character limits met (if Google/Meta ads)
- [ ] Special characters allowed (check platform rules)
- [ ] Capitalization appropriate (no ALL CAPS)

### 4. Provide Feedback

Present findings in three tiers:

**❌ Must Fix (Blockers):**
- Issues that prevent approval
- Compliance violations
- Platform rule violations

**⚠️ Should Improve:**
- Weak CTA
- Off-brand language
- Unclear value prop

**✅ Looks Good:**
- What's working well
- Strong elements to keep

### 5. Suggest Edits

For each "Must Fix" and "Should Improve" item:
- Show current version
- Suggest revised version
- Explain why

---

## Example Interaction

```
> /ad-copy-review

[Brand Lead]
Please share the ad copy you'd like me to review.

Also tell me:
1. Platform (Google Ads, Facebook, LinkedIn, etc.)
2. What are you promoting?
3. Target audience

> Platform: Google Search
> Promoting: Project management software
> Audience: Marketing managers at B2B companies

Copy:
Headline: Best PM Tool For Teams
Description: Try our world-class project management software. Free trial!

[Brand Lead]
Thanks! Let me review this against brand standards...

**❌ Must Fix:**

1. **"Best PM Tool"** — Superlative claim needs substantiation
   - Current: "Best PM Tool For Teams"
   - Suggested: "Project Management For Marketing Teams"
   - Why: Avoid unsubstantiated superlatives

2. **"world-class"** — Vague, overused marketing term
   - Current: "world-class project management software"
   - Suggested: "project management software built for marketing teams"
   - Why: Specific, differentiated messaging

**⚠️ Should Improve:**

3. **Weak CTA** — "Free trial" is generic
   - Current: "Free trial!"
   - Suggested: "Start free 14-day trial — no credit card required"
   - Why: More specific, removes friction

4. **Character limits** — Headline is 23 chars (good), description is 73 chars (room for improvement)
   - Could add more value: "Built for marketing teams. Start your free 14-day trial — no credit card."

**✅ Looks Good:**

- Headline is under 30 chars
- Audience is clear (teams)
- Free trial mentioned

Would you like me to write a revised version?
```

---

## Output Format

Structured feedback:
```markdown
# Ad Copy Review: [Campaign Name]

## Copy Reviewed
[paste original copy]

## Platform
[platform name + any special requirements]

## Brand Voice Check
✅ Tone: [passes/needs adjustment]
⚠️ Terminology: [specific issues]

## CTA Analysis
[assessment of call-to-action effectiveness]

## Compliance
✅ [all clear] or ⚠️ [specific issues]

## Recommended Changes
1. [issue] → [suggested fix]
2. [issue] → [suggested fix]

## Revised Version
[paste clean, approved copy ready to use]
```

---

## Escalation

If copy has serious issues:
- Trademark violations → Escalate to Compliance Lead
- Off-brand positioning → Escalate to Chief Strategy Officer
- Platform policy violations → Flag immediately, don't launch

---

## Notes

- Be constructive, not just critical
- Explain the "why" behind every suggestion
- Offer alternatives, don't just say "no"
- Remember: user always decides, you advise

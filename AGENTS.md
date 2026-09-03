# Sway project instructions

## Objective

Build a polished OpenAI WebMCP Challenge entry where humans express visual taste through pairwise choices and an agent turns those choices into increasingly relevant candidates, transparent insights, and a useful shortlist.

## Sources of truth

- Use `CHALLENGE_RULES.md` for grading, compliance, and submission review. The linked Devpost Official Rules always control.
- Use `PRODUCT_BRIEF.md` for product scope, audience, principles, and the travel MVP.

Evaluate material work against all four equally weighted criteria: WebMCP Leverage, Execution, Potential Impact, and Creativity & Ambition.

## Engineering rules

- Prefer accessible semantic HTML and dependency-light browser JavaScript.
- Human UI and WebMCP tools must call the same domain functions and update the same visible state.
- Keep domain logic, UI rendering, and WebMCP registration in separate modules.
- Give each tool a task-oriented description and precise JSON schema.
- Validate all agent input and return useful structured results.
- Make AI inferences inspectable, correctable, and reversible.
- Require human confirmation for purchases, bookings, sharing, deletion, or other consequential actions.
- Never place secrets in client-side code or commit credentials.
- Preserve a useful fallback experience in browsers without WebMCP.

## Required checks

Before considering a code change complete, run the project's lint, test, and production build commands. Visually verify the relevant desktop and mobile workflows and test tool discovery and invocation in a WebMCP-compatible browser.

## Product-quality bar

- A new user can make the first comparison immediately.
- Agent actions are visible and labeled.
- Taste insights cite the choices that support them.
- Community sentiment is revealed only after voting.
- The user retains final authority over recommendations and consequential actions.
- The challenge demo tells one complete hotel-selection story in under three minutes.

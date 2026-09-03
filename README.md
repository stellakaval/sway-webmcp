# Sway

**Find what moves you.**

Sway is a visual decision app where people teach an AI their taste through quick, low-pressure “this or that” choices. The agent turns those choices into better candidates, an explainable taste profile, and a useful shortlist.

Built for the [OpenAI WebMCP Challenge](https://openai.com/webmcp-challenge/).

## The idea

Wishbone made expressing an opinion effortless: tap one of two images and immediately see how everyone else voted. Sway evolves that loop from entertainment into a useful decision tool.

1. Pick a category and goal.
2. An agent assembles relevant candidates.
3. Choose visually between two options at a time.
4. Reveal social sentiment and practical details.
5. Let the agent learn what drives your taste.
6. Review an evidence-backed shortlist and make the final call.

The human supplies visual judgment. The agent handles search, organization, comparison, and synthesis. Both act on the same visible workspace.

## Initial category

The challenge MVP will focus deeply on **travel**, using hotel selection as the complete demonstration workflow. Fashion, beauty, home, food, and gifts are designed as future category packs.

## Core WebMCP tools

- `understand_session` — read the goal, constraints, candidates, choices, and current taste profile.
- `add_candidates` — add relevant options to the visible comparison pool.
- `create_comparison` — present a pairing chosen to resolve a specific preference uncertainty.
- `record_context` — add budget, occasion, destination, or other practical constraints.
- `propose_taste_insight` — show an evidence-backed preference for the user to accept or correct.
- `create_shortlist` — turn comparison history into visible finalists.
- `recommend_finalist` — explain the best match and its strongest alternative.

## Repository source of truth

- [`CHALLENGE_RULES.md`](./CHALLENGE_RULES.md) — grading, compliance, and submission requirements.
- [`PRODUCT_BRIEF.md`](./PRODUCT_BRIEF.md) — product vision, audience, interaction loop, and MVP.
- [`AGENTS.md`](./AGENTS.md) — durable implementation guidance for Codex and contributors.

## Status

Product definition and challenge plan are complete. Implementation is the next milestone.

## License

MIT

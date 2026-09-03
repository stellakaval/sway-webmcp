# Sway

**AI can find it. Only you can feel it.**

Sway is a human-in-the-loop decision layer for occasion shopping. A browser agent organizes candidates and checks practical constraints; the shopper and trusted friends supply every aesthetic signal and the shopper approves the final edit.

## Working demos

- **Birthday Night Out** — outfit, beauty look, and venue (flagship)
- **Wedding Weekend** — outfit, beauty look, and hotel
- **Festival Weekend** — outfit, durable beauty look, and lodging

Every demo works without an account or WebMCP. State is kept in local storage for the deterministic challenge demo. The optional Supabase migration in `supabase/migrations` defines anonymous-auth persistence, Realtime tables, and role-scoped RLS for cross-device sharing.

## Run and verify

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

Open the shown local URL in Chrome with WebMCP enabled or in ChatGPT's in-app browser.

## WebMCP tools

Sway registers nine imperative tools through `document.modelContext.registerTool(...)`:

- `get_board_state`, `update_brief`, `search_catalog`
- `get_item_details`, `add_candidates`, `present_comparison`
- `assess_constraints`, `propose_insight`, `build_sway_edit`

The tools reuse the same functions as the human UI. Read tools are annotated; catalog/social content is treated as untrusted; inputs are allow-listed and length-bounded. Agent mutations appear in the activity feed. Agents cannot vote, react, accept insights, approve winners, purchase, book, post, or share.

Suggested prompt:

> Organize my birthday options, check the practical plan, and show me the most useful next comparison. Do not choose my style for me.

## Architecture

- `src/decision-engine.ts` — shared transitions and practical scoring
- `src/App.tsx` — accessible React UI and human actions
- `src/webmcp.ts` — tool registration, schemas, validation, and authority boundaries
- `src/catalog.ts` — deterministic original demo catalog
- `supabase/migrations` — optional production sharing schema and RLS
- `CHALLENGE_RULES.md` — canonical grading and compliance checklist

No model API or secret is embedded in the client. Generated demo art is original and stored in `public/assets`.

## Judging fit

- **WebMCP leverage:** nine non-trivial tools act on live, visible state.
- **Execution:** three responsive occasion flows reach a shopper-approved final edit.
- **Potential impact:** replaces tabs, screenshots, and scattered group-chat feedback with a structured choice loop.
- **Creativity & ambition:** taste remains a transparent human signal instead of an opaque AI score.

See [CHALLENGE_RULES.md](CHALLENGE_RULES.md) for the complete checklist and controlling links.

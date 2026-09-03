# Sway

**AI searches. You choose.**

Sway is a human-in-the-loop product-shopping experience. A ChatGPT browser agent searches current retailer pages, records its source trail, and checks practical constraints; the shopper supplies every aesthetic signal and approves the final pick.

The experience is intentionally shopping-only: choose outfit or beauty, set practical guardrails, optionally describe the item in one sentence, then make fast visual choices until Sway produces a human-ranked top three.

Without WebMCP, Sway uses its starter pool. With WebMCP, ChatGPT reads the live intent, searches at least three current retailer pages, records used and rejected sources, and adds 4–8 verified candidates—with price, availability, image, retailer, and direct URL—to the same pairwise flow.

## Judge demo: chat and page working together

Open the deployed site inside ChatGPT's in-app browser. Then type:

> Help me find a red birthday dress under $200 in size M. Search at least three real retailers, show the research trail in Sway, and let me decide through visual comparisons. After two choices, read my votes and add one matchup that tests what is still unclear. Do not choose or purchase for me.

ChatGPT should call `start_shopping`, browse retailer pages, call `record_research`, and call `add_candidates`. The human then clicks two visual choices on the page and tells ChatGPT **“I made two choices—continue from my votes.”** ChatGPT calls `get_board_state`, explains the observed tradeoff, and may call `present_comparison`. See [AGENT_DEMO_TASK.md](AGENT_DEMO_TASK.md) for the deterministic task contract.

## Run and verify

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

Open the shown local URL in Chrome with WebMCP enabled or in ChatGPT's in-app browser.

## Supabase persistence

Copy `.env.example` to `.env.local`, then provide the project URL and publishable anonymous key. Apply both migrations in `supabase/migrations` and enable anonymous sign-ins in Supabase Auth. Sway signs in anonymously and persists the complete live board state automatically; without credentials it remains fully usable with local persistence.

For GitHub Pages, configure repository variable `VITE_SUPABASE_URL` and repository secret `VITE_SUPABASE_ANON_KEY`. The deployment workflow injects them only at build time. Never use a service-role key in the browser.

## WebMCP tools

Sway registers eleven imperative tools through `document.modelContext.registerTool(...)`:

- `get_board_state`, `start_shopping`, `record_research`, `update_brief`, `search_catalog`
- `get_item_details`, `add_candidates`, `present_comparison`
- `assess_constraints`, `propose_insight`, `build_sway_edit`

`add_candidates` accepts live product records rather than fixed demo IDs. The tools reuse the same functions as the human UI. Read tools are annotated; retailer/social content is treated as untrusted; URLs, inputs, counts, and lengths are validated. Agent mutations appear in the activity feed. Agents cannot vote, react, accept insights, approve winners, purchase, book, post, or share.

The `add_candidates` tool rejects unverified workflows until three retailer pages appear in the visible research trail.

## Architecture

- `src/decision-engine.ts` — shared transitions and practical scoring
- `src/App.tsx` — accessible React UI and human actions
- `src/webmcp.ts` — tool registration, schemas, validation, and authority boundaries
- `src/catalog.ts` — deterministic original demo catalog
- `supabase/migrations` — optional production sharing schema and RLS
- `CHALLENGE_RULES.md` — canonical grading and compliance checklist

No model API or secret is embedded in the client. Generated demo art is original and stored in `public/assets`.

## Judging fit

- **WebMCP leverage:** eleven non-trivial tools coordinate external research and live human interaction through shared visible state.
- **Execution:** outfit and beauty searches reach a shopper-approved top three.
- **Potential impact:** replaces tabs, screenshots, and scattered group-chat feedback with a structured choice loop.
- **Creativity & ambition:** taste remains a transparent human signal instead of an opaque AI score.

See [CHALLENGE_RULES.md](CHALLENGE_RULES.md) for the complete checklist and controlling links.

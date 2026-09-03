# WebMCP Challenge — Rules and Grading Source of Truth

Last verified: **September 2, 2026**

This is Sway's canonical checklist for scope, implementation review, demo planning, and submission readiness. It summarizes the rules for practical use; the [Devpost Official Rules](https://webmcp.devpost.com/rules) are the controlling legal source if any wording conflicts. Also consult the [official challenge overview](https://webmcp.devpost.com/) before submitting.

## Deadline and judging period

- Registration and submission close **September 3, 2026 at 1:00 p.m. Pacific Time**.
- Judging runs from September 4 at 10:00 a.m. PT through September 21 at 5:00 p.m. PT.
- Winners are expected on or around September 23 at 2:00 p.m. PT.
- Do not modify the submitted entry after the deadline unless the Sponsor or Devpost specifically permits a correction.

## Stage one: pass/fail viability

The project must:

- fit the theme of a WebMCP-powered web app where humans and agents interact, collaborate, or create together;
- meaningfully apply WebMCP rather than merely include unused tool definitions;
- run consistently on its stated platform and match the submitted description and video; and
- be available to judges as a working live project.

## Stage two: equally weighted judging criteria

### 1. WebMCP Leverage — 25%

How thoroughly and skillfully does the project use WebMCP? Does its code reflect genuine effort and a working, non-trivial implementation?

For Sway, this means agents must operate on the same visible candidate pool, comparisons, taste insights, and shortlist as the user. Tool schemas must be precise, calls must be reliable, and the demonstrated workflow must be materially better than brittle UI automation.

### 2. Execution — 25%

Does the project deliver a working, coherent product experience rather than a technical proof of concept?

For Sway, the travel workflow must work end to end, feel polished on mobile and desktop, communicate agent actions clearly, and preserve human review for consequential actions.

### 3. Potential Impact — 25%

Does the project make a credible, specific case for a real audience and problem, and does the demonstrated solution address that problem?

For Sway, the story is that visual shoppers struggle to articulate taste and become overwhelmed by large result sets. Pairwise choices let people contribute judgment while an agent handles search, organization, and synthesis.

### 4. Creativity & Ambition — 25%

How novel is the concept, and how meaningfully does it differ from existing products?

For Sway, novelty must come from a transparent human-agent learning loop—not simply reproducing a “this or that” poll or attaching chat to a shopping grid.

## Tie-breaking priority

Ties are broken in criterion order: WebMCP Leverage, Execution, Potential Impact, then Creativity & Ambition. If entries remain tied, the judges vote. WebMCP Leverage is therefore Sway's first optimization priority.

## Required submission package

- A working live URL accessible in ChatGPT's in-app browser or Google Chrome 149+ with WebMCP testing enabled.
- A text description explaining:
  - why the use case strongly fits WebMCP;
  - how it improves the user experience;
  - what people and agents can do together that was difficult or impossible before; and
  - how WebMCP was implemented.
- A public GitHub, GitLab, or Bitbucket repository containing:
  - all required source code and assets;
  - complete setup and testing instructions;
  - a detectable open-source license; and
  - visible use of `document.modelContext.registerTool(...)`.
- A public YouTube demo with audio, **under three minutes**, showing the working project and explaining its WebMCP use.
- English submission materials or English translations.

Judges are not required to build or test the app. The description, images, repository, and video must communicate Sway's complete value independently.

## Project constraints

- Work must be original, owned by the entrant or team, and compliant with third-party IP, privacy, licenses, and service terms.
- Third-party APIs, datasets, SDKs, product imagery, fonts, and media require authorization and appropriate attribution.
- Pre-existing projects are judged only on meaningful WebMCP extensions created during the submission period; dated commits must distinguish new work.
- The working project must remain available free of charge and without testing restrictions through judging. Provide test credentials if authentication is required.
- Teams and organizations must appoint an eligible representative.
- Verify age, residency, sanctions, conflict-of-interest, and all other eligibility requirements directly in Section 3 of the Official Rules.

## Sway grading checklist

- [ ] A browser agent can discover and successfully invoke non-trivial Sway tools.
- [ ] Agent calls visibly update the same comparison state used by the human UI.
- [ ] The hotel-selection workflow works end to end.
- [ ] Taste inferences cite observable choices and can be accepted, corrected, or reset.
- [ ] Purchase, booking, sharing, deletion, and other consequential actions remain human-controlled.
- [ ] The app is polished, accessible, responsive, and understandable without narration.
- [ ] The audience, problem, impact, and differentiation are explicit.
- [ ] The live URL works in a supported WebMCP browser.
- [ ] The repository is public and contains all source, assets, setup instructions, commit history, and a detected license.
- [ ] The public YouTube demo is under three minutes, includes audio, and shows the actual workflow.
- [ ] Every third-party asset and integration is authorized.
- [ ] Devpost registration and submission are complete before the deadline.

## Official references

- [Devpost Official Rules](https://webmcp.devpost.com/rules)
- [Devpost Challenge Overview](https://webmcp.devpost.com/)
- [OpenAI WebMCP Challenge](https://openai.com/webmcp-challenge/)
- [WebMCP specification and explainer](https://github.com/webmachinelearning/webmcp)

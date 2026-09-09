# ogcio/govie-ds context
> refreshed 2026-09-09 | upstream default: main @ 13cfc6ff

## Identity & policies
- upstream: ogcio/govie-ds, default branch `main`, primary language TypeScript, English-first: yes (all docs/README in English)
- CLA/DCO: none (CONTRIBUTING.md / GOVERNANCE.md mention no CLA, DCO, or sign-off)
- AI-assisted PR policy: unstated (no AI-disclosure requirement found)
- signed commits required: no
- PR template: `.github/PULL_REQUEST_TEMPLATE.md` (Description / Type of Issue / Checklist / Related Issues / Additional Notes)
- external tracker: Azure Boards (commit scope uses `AB#<ticket>`); GitHub Issues also used
- CI: Azure Pipelines (`.azure/pipeline.yaml`, `.azure/visual-regression.yaml`) — NOT connected to forks; fork PRs show no substantive check

## Conventions (verified from merged PRs)
- branch naming: dominant patterns `ab-<ticket>-<desc>`, `feat/<ticket>-<desc>`, `fix/<ticket>-<desc>`, `chore/<ticket>-<desc>`; docs-only PRs use `docs/<desc>`
- commit style: Conventional Commits `type(scope): subject` with `AB#<ticket>` scope; docs-only `docs: ...`
- test command: `pnpm test` (root, `pnpm -r`); lint: `pnpm lint`; format: `pnpm format:check`; typecheck: `pnpm typecheck`
- apps/docs has a spelling lint: `spellchecker -l en-GB -d dictionary.txt -f '**/*.mdx'` (docs content is en-GB)
- packages/react `format:check` is `prettier . --check` (covers README.md); other packages scope prettier to `src/**/*.{ts,tsx}`
- how outside PRs merge: CONTRIBUTING says external PRs are accepted at maintainer discretion, typically tied to an issue; repo is active (45 external merges/60d)

## Maintainer picture
- OGCIO (Office of the Government Chief Information Officer) team; active, high merge velocity
- Areas in flight: Vue/Angular/React framework outputs, Mitosis core, release-please automation

## Issue-area health
- Repo is a design system; docs/README are the low-risk surface for trivial fixes
- No maintainer-engaged open issues targeted for this pass

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` README license-report command names (gen:licences/licences.sh/LICENCES.md -> American names) — pr-opened-locally-verified (fork PR #1, closed) — do NOT re-pick; still present upstream but already attempted
- `2026-09-09` trivial-fix pass (typos/broken links/stale commands) — pr-opened (fork PR) — see mined gaps

## Mined gaps (discovered, not yet attempted)
- `2026-09-09` packages/react/README.md: "optinionated" -> "opinionated" (typo) — status: attempted
- `2026-09-09` packages/react/README.md: broken French string `previous: 'Précédent:,` -> `'Précédent',` (docs site has it correct) — status: attempted
- `2026-09-09` packages/react/README.md: stale link `http://ds.blocks.gov.ie/components/library/pagination/#i18n-keys` -> `https://ds.services.gov.ie/...` (old domain redirects to homepage) — status: attempted
- `2026-09-09` packages/html/ds/README.md: "and and" duplicate word — status: attempted
- `2026-09-09` packages/html/ds/README.md: duplicate list number "2." -> "3." — status: attempted
- `2026-09-09` packages/design/theme-builder/README.md: "provides tool creating" -> "provides a tool for creating" — status: attempted
- `2026-09-09` apps/docs/content/3-components/1-setup-guides/2-react.mdx: "if you interested" -> "if you are interested" — status: attempted

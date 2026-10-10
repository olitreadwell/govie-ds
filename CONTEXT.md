# ogcio/govie-ds context
> refreshed 2026-10-10 | upstream default: main @ c1a3ea80

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
- Re-verified 2026-09-30: upstream has ZERO open issues (only 7 open PRs, all internal); no maintainer-engaged open issue → repo-audit path used
- Re-verified 2026-10-02: still ZERO open issues and 7 open PRs (all internal) — no maintainer-engaged issue → repo-audit path used again
- Re-verified 2026-10-03: still ZERO open issues and 7 open PRs (all internal) — no maintainer-engaged issue → repo-audit path used
- Re-verified 2026-10-04: still ZERO open issues and 7 open PRs (all internal) — no maintainer-engaged issue → trivial-fix path used
- Re-verified 2026-10-10: still ZERO open GitHub issues (the `open_issues_count` badge counts PRs); 6 open PRs, all internal/OGCIO → no maintainer-engaged issue → repo-audit path used. Fork `main` was 3 commits behind upstream, fast-forwarded via merge-upstream to c1a3ea80 before branching.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` README license-report command names (gen:licences/licences.sh/LICENCES.md -> American names) — pr-opened-locally-verified (fork PR #1, closed) — do NOT re-pick; still present upstream but already attempted
- `2026-09-09` trivial-fix pass (typos/broken links/stale commands) — pr-opened (fork PR #22, docs/fix-typos-and-broken-links) — 7 fixes across 4 files
- `2026-09-30` packages/react score-select `aria-checked` frozen (a11y bug) — pr-opened (fork, fix/score-select-aria-checked) — do NOT re-pick
- `2026-10-02` React `TabPanel` + vanilla `createTabs` panel `aria-labelledby` self-reference (a11y bug) — pr-opened (fork PR #30, fix/tabs-tabpanel-aria-labelledby) — do NOT re-pick
- `2026-10-03` `Details` content id hard-coded to `details-content` (React + vanilla helper), so multiple `Details` on a page share one id and React's `aria-controls`/`aria-details` resolve to the first instance — pr-opened (fork PR #31, fix/details-unique-content-id) — do NOT re-pick
- `2026-10-04` trivial-fix pass (typos + dead links + stale commands) — pr-opened (fork PR #32, docs/fix-typos-links-and-stale-commands) — 10 fixes across 8 files; deliberately did NOT re-pick PR #22 or PR #1 items — do NOT re-pick that set
- `2026-10-10` React `AccordionItem` disclosure semantics (no button role / `aria-expanded` / `aria-controls`; panel `aria-labelledby` referenced a nonexistent `${label}-button` id, ids contained spaces) — pr-opened (fork, fix/accordion-disclosure-semantics) — do NOT re-pick

## Mined gaps (discovered, not yet attempted)
- `2026-09-09` packages/react/README.md: "optinionated" -> "opinionated" (typo) — status: pr-opened
- `2026-09-09` packages/react/README.md: broken French string `previous: 'Précédent:,` -> `'Précédent',` (docs site has it correct) — status: pr-opened
- `2026-09-09` packages/react/README.md: stale link `http://ds.blocks.gov.ie/components/library/pagination/#i18n-keys` -> `https://ds.services.gov.ie/...` (old domain redirects to homepage) — status: pr-opened
- `2026-09-09` packages/html/ds/README.md: "and and" duplicate word — status: pr-opened
- `2026-09-09` packages/html/ds/README.md: duplicate list number "2." -> "3." — status: pr-opened
- `2026-09-09` packages/design/theme-builder/README.md: "provides tool creating" -> "provides a tool for creating" — status: pr-opened
- `2026-09-09` apps/docs/content/3-components/1-setup-guides/2-react.mdx: "if you interested" -> "if you are interested" — status: pr-opened
- `2026-09-30` packages/react/src/score-select/score-select.tsx: hard-coded `aria-checked={value === option.value}` pins the attribute to the INITIAL prop, so after the user picks an option the internal ButtonGroup selection moves (visual highlight + selected class) but every radio keeps `aria-checked="false"` for assistive tech. Dropping the override lets ButtonGroupItem derive it from its own selected state. Verified: fails at upstream a140fcfd, passes after fix. — status: pr-opened
- `2026-10-02` `packages/react/src/tabs/tab-panel.tsx` and `packages/html/ds/src/helpers/tabs.ts`: every `role="tabpanel"` rendered `aria-labelledby="tab-panel-<value>"` while its own `id` was `tab-panel-<value>`, so the panel referenced itself and had no accessible name. Expected `aria-labelledby="tab-<value>"` (the tab id). Repro: React `getByRole('tabpanel', { name: 'Tab 1' })` fails on main; `createTabs` panel attribute equals its own id. — status: pr-opened
- `2026-10-03` `packages/react/src/details/details.tsx` + `packages/html/ds/src/helpers/details.ts`: the content div id was the literal `details-content`, so two `Details` on one page produced duplicate ids and the React `aria-controls`/`aria-details` references pointed at the first instance. Repro: render two `Details`; both content divs get `id="details-content"` and the unit test fails on `expected 'details-content' not to be 'details-content'`. Fix: per-instance id via `useDomId` / `generateRandomId`, and the vanilla module looks its content up by `.gi-details-text`. — status: pr-opened
- `2026-10-04` packages/html/ds/src/toast/styles.css: comment spelling "overide" -> "override" (8x) — status: pr-opened (fork PR #32)
- `2026-10-04` apps/docs/content/3-components/2-library/input-radio/design.mdx: preview value "radio-with-foucs" -> "radio-with-focus" — status: pr-opened (fork PR #32)
- `2026-10-04` README.md: getting-started "pnpm ds" -> "pnpm docs" (root `ds` script removed/renamed to `docs`) — status: pr-opened (fork PR #32)
- `2026-10-04` packages/design/figma/README.md: "pnpm figma:build" -> "pnpm --filter @ogcio/design-system-figma build" (root script removed with Nx) — status: pr-opened (fork PR #32)
- `2026-10-04` packages/html/ds/README.md: "pnpm postbuild" -> "pnpm dist" (script renamed) — status: pr-opened (fork PR #32)
- `2026-10-04` apps/docs/README.md: Nx tools deployment URL moved to gperdomor/oss with a new path — status: pr-opened (fork PR #32)
- `2026-10-04` packages/react/vitest.config.ts + packages/html/ds/vitest.config.ts: Storybook Vitest docs URL moved to writing-tests/integrations/vitest-addon — status: pr-opened (fork PR #32)
- `2026-10-04` NOT picked (dedupe/risk): popper.js.org/docs/v2/ 404s in popover docs (html + react) but no meaning-preserving replacement exists; PR #22 + PR #1 items still present upstream; CHANGELOG-generated typos (`Сontainer`, `accessbility`) left alone
- `2026-10-10` accessibility packages/react/src/accordion/accordion-item.tsx: the disclosure header is a plain focusable `div` (no `role="button"`, no `aria-expanded`, no `aria-controls`), and the panel's `aria-labelledby` points at `${label}-button` — an id that no element has — so each `role="region"` panel has no accessible name. Repro at upstream c1a3ea80: render two `AccordionItem`s; `container.querySelectorAll('[id="First question-button"]')` is empty and axe reports `landmark-unique` ("The landmark must have a unique aria-label, aria-labelledby, or title"). Also `Space` was not handled (only `Enter`), and the `${label}`-derived ids contain spaces and collide across accordions with the same label. Fix: `useDomId()` for a unique header id, `role="button"` + `aria-expanded` + `aria-controls` + `aria-disabled` on the focusable header, panel `aria-labelledby` = header id, and `Space` handled. Repro/verify: `pnpm --filter @ogcio/design-system-react exec vitest run --project unit src/accordion/accordion-item.test.tsx` (5 tests fail on the old code, pass after; axe clean). Dedupe: `gh search prs/issues ogcio/govie-ds accordion` → zero upstream attempts (last accordion PR #974, chevron animation only) — status: pr-opened
- `2026-10-10` audit notes, other dimensions (no pick this cycle): pre-existing `pnpm --filter @ogcio/design-system-react typecheck` errors in `tests/visual.spec.ts` (missing generated `storybook-static/index.json`) — reproduced on a clean stash, not ours; other `aria-labelledby`/`aria-controls` references checked (`header-slot.tsx` `SlotContainer-${index + 1}` off-by-one in the deprecated `HeaderLegacy`, `progress-stepper` index-based ids) — left for a later, separate PR

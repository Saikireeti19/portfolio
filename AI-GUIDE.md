# Guide for AI assistants working on this repository

**Read this file completely before changing anything.** It tells you how the site
is built, the facts you may not invent, and the things that will break if you
touch them carelessly. If you are a human who just wants to edit text, read
[EDITING-GUIDE.md](EDITING-GUIDE.md) instead.

*Accurate as of 2026-09-07.*

---

## 1. Whose site this is

**Saikireeti Yenugula.** ~4 years delivering enterprise technology for UK
insurance, banking and utility clients, across three firms:

| Employer | Real title | Dates | Client |
|---|---|---|---|
| Cognizant | **Programmer Analyst** — Delivery & Resourcing | Jul 2025 – **Sep 2026** | Chubb (UK & AU) |
| Paragon Customer Communications (UK) | **Quadient Analyst & PMO** | Feb 2025 – Jul 2025 | multiple UK clients |
| Atos Syntel | **Associate Consultant** — CCM Developer & Support | Sep 2022 – Feb 2025 | Paragon Customer Communications (UK) |

He was moved in-house from Atos to Paragon on merit. **MBA at Aston Business
School, Birmingham: Sep 2026 – Sep 2027.**

The site is aimed at: Technical Project Manager · Project / Delivery Manager ·
Technology Consultant · AI Transformation Consultant · Cyber Security Consultant.
All five are **targets, not roles held** — see rule 2 below.

---

## 2. RULE ONE — never invent anything

This is a real person's job-hunting site. **Do not fabricate, embellish or round
up.** No invented employers, dates, metrics, certifications, clients, tools or
achievements. If a change needs a number you were not given, **ask** — do not
estimate.

Every figure on the site was explicitly confirmed by the owner:

| Figure | Meaning |
|---|---|
| ~4 years | Delivery experience across 3 global firms |
| **0** | UAT defects at go-live, Xpression→Quadient migration for Chubb |
| **0** | Failed deployments |
| **10+/day** | Production releases coordinated (at both Paragon and Atos — same account, he moved in-house) |
| **15** | Engineers led and trained on Quadient from scratch |
| **30–40** | Lateral hires guided from offer to first day |
| 30% | Faster form delivery (PDPX→JLD converter, built at Cognizant) |
| 30% | Development time saved by that converter |
| 40% | Increase in AI-assisted delivery vs previous cycles |
| ~20% | Faster new-joiner ramp-up |
| ~40% | Reduced reliance on external hiring (he trained the team) |

### Figures that were REMOVED and must not come back

- **60% account revenue growth.** Removed at his request from both the dial and
  the `og:description`. It invites a question about absolute figures he cannot
  disclose. Still true, but off the site.
- **100–200 lateral hires.** Retired. The correct figure is 30–40.
- **20–25 releases a day.** Retired. The correct figure is 10+.
- **"99.8% deployment success", "zero production rollbacks", "40% faster
  processing", "reduced turnaround".** All proposed and all declined — no
  defensible basis. His real record (**zero** failed deployments) is both true
  and stronger than an invented percentage.
- **Java, Python, PL/SQL, Perl.** Proposed, then withdrawn by him. Not his skills.

### Other hard content rules

- **Never state a title he does not hold.** Headlines describe *capability*.
  The current headline is `Technical Project Management | Technology Consulting |
  AI Transformation` — a discipline list, not a claim. Target roles appear only
  under the hero label **"Open to roles in"**.
- **Never name Paragon's clients.** Use *"multiple UK clients across insurance,
  banking and other domains"*. **Chubb may be named** — it is Cognizant's client.
- **Do not lead on change management.** He did it briefly and dislikes the
  positioning. Lead on technical delivery / project management / full SDLC.
- **Certifications are exactly these seven, add none:** Microsoft Azure
  Fundamentals (AZ-900); Power BI (Basic); Quadient Inspire Designer, Scaler and
  Interactive; Claude AI Fluency for Small Businesses; Claude Code in Action;
  Claude 101. **Inspire Content Manager (ICM) is a tool he uses, not a
  certification** — he confirmed he does not hold it.
- **"BT" means Base Template**, never "Business Template".
- **Cyber security is a target only.** No professional security experience. It
  lives under "Currently Building". Never imply otherwise.
- **Revenue:** percentages only, phrased defensively. Never "I generated £X".
- **No GitHub link.** `basics.github` stays `""` — he was offered it twice and
  declined. Do not "helpfully" fill it in.
- **Languages:** English (Fluent), Hindi (Conversational). Telugu was removed.

---

## 3. RULE TWO — nothing may depend on a future edit

**He loses the machine and accounts he built this with.** Assume the site will
never be edited again.

That means **no wording that expires**:

- ❌ "I begin an MBA in September 2026" — wrong from September 2026 onward.
- ❌ "Jul 2025 – Present" — wrong the moment he leaves.
- ❌ "currently studying", "mid-MBA", "already in Birmingham".
- ✅ **Closed, dated ranges.** "Jul 2025 – Sep 2026". "My MBA … runs from
  September 2026 to September 2027". "MBA Candidate" is accurate from admission
  through graduation.

If he takes a new role later, that becomes a **new** timeline entry — do not
reopen the Cognizant one to "Present".

---

## 4. Stack and file map

Deliberately **zero dependencies** — no framework, no build step, no npm. Chosen
so a non-coder can maintain it and nothing can break at runtime.

```
index.html                        semantic shell; sections are empty containers JS fills
assets/css/styles.css             the whole design system (CSS custom properties)
assets/js/content.js              ★ ALL CONTENT — the only file he normally edits
assets/js/main.js                 the engine: renders content.js into the DOM + motion
assets/img/profile.jpg            his photo (falls back to initials if missing)
assets/img/og-image.jpg           1200x630 social share card
assets/Saikireeti_Yenugula_CV.pdf the "Download CV" target
.nojekyll                         stops GitHub Pages running Jekyll over the files
```

**The contract:** `content.js` defines `window.PORTFOLIO`; `main.js` reads it and
builds the DOM; `index.html` holds only structure with `data-*` hooks.

- Wording, numbers, sections, ordering → **`content.js` only**
- Look and feel → **`styles.css`**
- Behaviour → **`main.js`** (rarely)

### How main.js renders

- Everything goes through `h(tag, opts, children)`, which sets text with
  `textContent`, **never `innerHTML`**. Keep it that way — an ampersand or angle
  bracket in the content can then never break the page.
- Each section renderer is a self-contained IIFE. **If its data is empty it
  removes its own section**, so emptying a list in `content.js` cleanly hides
  that part of the page, menu link included.

---

## 5. The content.js shapes you need to know

Most sections are `{heading, kicker, items[]}`. These four are less obvious:

**Career Direction** (`careerDirection`, section 3c) — sits *before* About on
purpose, so it answers "why is someone technical applying for a PM role?" before
a recruiter forms the question. `stages[]` renders three numbered cards;
`paragraphs[]` renders below. **The middle paragraph is the openness/breadth
signal** and is written as *evidence of adaptability*, not "open to anything" —
that framing is deliberate, because "I'll do anything" reads as unfocused.

**Certifications** (`certifications`) accept two shapes:

```js
// grouped (current) — renders category bands of hexagonal badges
{ category: "Cloud & Data", items: [ {mark, issuer, name, url}, … ] }
// or flat — a plain string still works
"Some Certificate"
```

`mark` is the 1–2 letters in the coloured hexagon. **`url` is optional and
currently empty on all eight** — adding a Credly or Microsoft Learn link turns
the badge into a clickable, verifiable claim. That is the single biggest
remaining credibility upgrade on the site.

**Skills** (`skills`) accept either `items[]` (chips) **or** `subgroups[]`
(labelled lines). The Technology group uses `subgroups` deliberately: labelled
lines read as organised range, whereas 15 chips read as a developer CV — which
works against the MBA transition. Keep it to about four short lines.

**Hero pills** — `basics.status` is the first pill, `basics.availabilityBadge`
the second. Keep both **short**; a long one wraps to two lines on a phone.

---

## 6. Invariants you must not regress

Each of these was a real, observed bug.

1. **Content must never depend on JS to be visible.** Reveal styles are scoped to
   `html.js` (set by an inline `<head>` script). If JS fails, content is simply
   visible. Do not move those rules out of `html.js`.
2. **A hidden/background tab freezes CSS transitions**, and `IntersectionObserver`
   reports nothing while hidden. So reveal logic needs *all* of: an in-viewport
   sweep on load, a `visibilitychange` re-check, a failsafe timeout, and a
   `.no-anim` class when `document.hidden`. Without these the page can render
   permanently blank at `opacity:0`.
3. **Theme is set before first paint** by the inline `<head>` script, to avoid a
   colour flash.
4. **`--accent-lift` is derived in JS**, not with `color-mix()`. The
   two-declaration fallback trick does not work for custom properties, so older
   browsers would get an invalid colour and the text would vanish.
5. **WCAG AA everywhere** — ≥4.5:1 text, ≥3:1 marks, in *both* themes. If you
   change any colour, re-measure.
6. **`.card--quiet` uses `--surface`**, not `--surface-2`, so accent-coloured card
   titles stay above 4.5:1.
7. **The scroll progress bar is driven by `transform:scaleX()`, never `width`.**
   Animating `width` forces a layout pass on every scroll frame and was the
   measured cause of scroll lag. The element is `width:100%` with
   `transform-origin:0 50%`.
8. **The nav burger breakpoint is 1160px and was measured, not guessed.** Nine
   nav links plus the logo, theme toggle and CV button need ~1160px. Below that
   the burger takes over. **If you add or remove a nav link, re-measure** — at
   860px the row overflowed.
9. **Reveal budget ~0.69s max.** Duration 0.45s, stagger delays to 0.24s. It was
   0.75s + 0.42s and he reported it as sluggish. Longer reads as lag mid-scroll.
10. **No blur filter on `.hero__glow`.** A soft radial gradient already *is* a
    blur; a 24px filter over a 760px box was pure cost. The gradient carries it.

---

## 7. Measuring things properly in this repo

Two traps that will make you draw the wrong conclusion:

- **The headless preview tab is always `document.hidden`.** Screenshots time out,
  `requestAnimationFrame` never fires (so scroll handlers appear dead), and CSS
  transitions freeze mid-fade — so reading a computed colour right after flipping
  `data-theme` returns a **half-transitioned value**. To measure contrast, either
  inject `*{transition:none !important}` first or read the tokens directly. To
  test a scroll handler, temporarily make `requestAnimationFrame` synchronous.
- **Browsers cache `content.js` aggressively**, and GitHub Pages sends
  `max-age=600`. After an edit, the rendered page can be stale while the file is
  correct. Verify with `fetch(url, {cache:'no-store'})` against the file, not by
  trusting what the page shows.

---

## 8. The impact dials — read before touching colours

**Radial meters** (one value against 100%), not pie charts. Unrelated KPI values
must never go in a pie: a pie shows parts of a whole.

There are now **three** dials (the 60% revenue one was removed). Colours come
from `--gauge-1..4` and were chosen by **running a palette validator**, not by
eye:

| | Light | Dark |
|---|---|---|
| 1 violet | `#4a3aa7` | `#b48bfa` |
| 2 blue | `#2a78d6` | `#7dd3fc` |
| 3 green | `#008300` | `#4ade80` |
| 4 red *(unused)* | `#e34948` | `#fb7185` |

Measured: light — colourblind ΔE 7.2, normal-vision 16.3; dark — 7.5 / 18.9; all
≥3:1. Those sit in the 6–8 colourblind band, which is acceptable **only because
colour carries no meaning here** — every dial shows its own number and caption
and appears in a `<table>` twin. If colour ever becomes the only way to tell
marks apart, these values are invalid and must be re-validated.

`#1e40af` (the brand accent) **fails** as a chart colour — OKLCH lightness 0.424,
below the 0.43 light-mode floor. That is why marks use their own tokens.

The grid is `auto-fit`, so adding or removing a dial cannot leave a broken row.

---

## 9. Accessibility that must survive edits

- One `<h1>`; sections `<h2>`; cards `<h3>`.
- Skip link, `:focus-visible` outlines, logical tab order.
- Case-study cards are `<button>`s with `aria-expanded` + `aria-controls`.
- Dials are `<button>`s with full `aria-label`; hover **and** keyboard focus drive
  the same `aria-live` readout.
- Every chart has a text alternative and a `<table>` twin.
- `prefers-reduced-motion` honoured. **`reduceMotion` is declared near the top of
  `main.js`** because the chart renderer needs it — do not move it back down.
- No horizontal overflow at 375 / 880 / 1200 / 1280.
- **Both nav menus must cover every section.** Desktop and mobile currently list
  all nine. Career Direction was once missing from both.

---

## 10. Share previews and search

- **`og:image` and `twitter:image` must be absolute URLs.** LinkedIn, WhatsApp
  and Slack fetch the image from their own servers; a relative path silently
  fails. `twitter:card` is `summary_large_image`, so **declaring the card without
  a real image renders worse than declaring nothing.**
- `assets/img/og-image.jpg` is 1200×630, generated from the site's own tokens.
- **JSON-LD `Person` is deliberately minimal** — no `jobTitle`, `worksFor` or
  `alumniOf`, because each expires when a role or course changes and this site
  cannot be edited later. Only durable facts belong there.
- `pageTitle` and `metaDesc` lead with the target discipline and the two hardest
  numbers. That pair is often all a recruiter reads before deciding to click.

---

## 11. How to verify a change

There is no test suite. Serve it and check:

```bash
python -m http.server 5500 --directory portfolio
```

Confirm: no console errors · all assets 200 · no horizontal scrollbar at 375px ·
both themes readable · case studies expand · dials animate and the table toggles ·
the CV link returns 200 · both nav menus cover every section · nothing on the page
contains wording that will expire (see rule two).

---

## 12. Deployment

GitHub Pages from `main`, root folder. `.nojekyll` must stay. Content edits can be
made in the GitHub web editor; the site rebuilds in about a minute, and assets are
cached for 10 minutes after that.

---

## 13. The CV and the wider resume set

`assets/Saikireeti_Yenugula_CV.pdf` is served here and is a **copy of
`Resume_1_PM_Delivery_Consulting`**, which lives outside this repo in the owner's
`Documents/Resume/` folder alongside six others (HR ops, marketing, coordinator,
master, UK internships, part-time).

**The site and that CV are kept fact-for-fact identical.** If you change a figure
here, the CV contradicts it — flag that to him rather than letting them drift.
If you replace the CV, keep the filename or update `basics.cvUrl`.

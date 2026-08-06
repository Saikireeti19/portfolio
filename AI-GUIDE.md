# Guide for AI assistants working on this repository

**Read this file first.** It tells you how this site is built, what the rules are,
and what you must not break. If you are a human, you probably want
[EDITING-GUIDE.md](EDITING-GUIDE.md) instead.

---

## 1. Who this belongs to

Saikireeti Yenugula — **Programmer Analyst at Cognizant** (functionally leading delivery,
project management and resourcing) with ~4 years delivering
enterprise technology for major UK insurers and utilities, now an **MBA candidate
at Aston Business School, Birmingham (UK)**. The site targets:

- Technical Project Manager / Project & Delivery Manager
- Technology Consultant
- AI Transformation Consultant
- Cyber Security Consultant *(an aspiration — he has no security experience yet;
  see the honesty rules below)*

## 2. THE MOST IMPORTANT RULE — never invent facts

This is a real person's job-hunting site. **Do not fabricate, embellish or
"round up" anything**: no invented employers, dates, metrics, certifications,
clients or achievements.

Every number currently on the site was explicitly confirmed by the owner:

| Figure | Meaning |
|---|---|
| ~4 years | Experience across 3 firms (Atos Syntel → Paragon → Cognizant) |
| 0 UAT defects | At go-live on the Xpression→Quadient migration for Chubb |
| 30–40 | Lateral hires he personally guided from offer to day one |
| 15 | Engineers he led and trained |
| 30% | Faster form delivery after the PDPX→JLD automation tool |
| 30% | Development time saved by that tool |
| 40% | Increase in AI-assisted delivery vs previous cycles |
| 60% | Account revenue growth vs the pre-automation baseline |

Additional constraints he has asked for explicitly:

- **Do not name Paragon's clients.** Say "multiple UK insurance & utility
  brands". (Chubb may be named — it is the Cognizant client.)
- **Do not lead on change management.** He did it for a limited period and it is
  not how he wants to be positioned. Lead on **technical delivery / project
  management / full SDLC**.
- **Certifications are exactly these** — do not add any: Microsoft Azure
  Fundamentals (AZ-900); Power BI (Basic); Quadient Inspire Designer, Scaler and
  Interactive; Claude AI Fluency for Small Businesses; Claude Code in Action;
  Claude 101.
- **"BT" means Base Template**, not "Business Template".
- **Never state a job title he does not hold.** His real titles are *Programmer Analyst* (Cognizant), *Quadient Analyst / PMO* (Paragon) and *Associate Consultant* (Atos Syntel). "Technical Project Manager" is a **target role**, shown only under the "Targeting" label in the hero. Headlines must describe capability ("Technology Delivery, Project Management & Transformation"), never assert an unheld title.
- Cyber security consulting is a **target role only**. It is listed under
  "Currently Building" in Capabilities. Never imply security experience.

## 3. Stack and architecture

Deliberately **zero dependencies** — no framework, no build step, no npm, no
bundler. Chosen so the owner (a non-coder) can maintain it and so nothing can
break at runtime.

```
index.html                 semantic shell. Sections are empty containers that JS fills.
assets/css/styles.css      the whole design system (CSS custom properties)
assets/js/content.js       ★ ALL CONTENT. This is the only file the owner edits.
assets/js/main.js          the engine: renders content.js into the DOM + motion
assets/img/profile.jpg     his photo (falls back to initials if missing)
assets/Saikireeti_Yenugula_CV.pdf   the "Download CV" target
.nojekyll                  stops GitHub Pages running Jekyll over the files
```

**The contract:** `content.js` defines `window.PORTFOLIO`. `main.js` reads it and
builds the DOM. `index.html` holds only structure with `data-*` hooks.

If you are asked to change **wording, numbers, sections or ordering** → edit
`content.js` only.
If you are asked to change **look and feel** → edit `styles.css`.
Touch `main.js` only for behaviour changes.

### How main.js renders

- Everything goes through a small `h(tag, opts, children)` helper that sets text
  with `textContent`, **never `innerHTML`**. Keep it that way — it means an
  ampersand or angle bracket in the content can never break the page.
- Each section's renderer is a self-contained IIFE. If its data array is empty it
  **removes its own section**, so emptying a list in `content.js` cleanly hides
  that part of the page.

## 4. Invariants you must not regress

These were each found by testing and fixed. Re-breaking them is a real bug.

1. **Content must never depend on JS to be visible.** Scroll-reveal styles are
   scoped to `html.js` (the class is set by an inline script in `<head>`). If JS
   fails, everything is simply visible. Do not move those rules out of `html.js`.
2. **A hidden/background tab freezes CSS transitions.** `IntersectionObserver`
   also reports nothing while hidden. So reveal logic has: an in-viewport sweep
   on load, a `visibilitychange` re-check, a failsafe timeout, and a `.no-anim`
   class applied when `document.hidden`. Without these the page can render
   permanently blank at `opacity: 0`.
3. **Theme is set before first paint** by the inline script in `<head>`, to avoid
   a colour flash. `main.js` then reconciles it with `settings.defaultTheme`.
4. **`--accent-text` / `--accent-lift`.** The brand navy `#1e40af` is unreadable
   on a dark background, so text uses a lightened variant that `main.js` derives
   in JS from `settings.accent`. Do **not** implement this with `color-mix()` —
   the two-declaration fallback trick does not work for custom properties, so
   older browsers get an invalid colour and the text disappears.
5. **WCAG AA.** Every text/background pair on the site was measured at ≥4.5:1 in
   both themes; chart marks ≥3:1. If you change any colour, re-measure.
6. **`.card--quiet` uses `--surface`**, not `--surface-2`, specifically so the
   accent-coloured card titles stay above 4.5:1.

## 5. The charts — read before touching colours

The impact section uses **radial meters** (one value against 100%), not pie
charts. Four unrelated KPI values must never be put in a pie: a pie shows parts
of a whole.

Dial colours are VIBGYOR by the owner's explicit request, and the steps were
chosen by **running a palette validator**, not by eye:

| | Light | Dark |
|---|---|---|
| 1 violet | `#4a3aa7` | `#b48bfa` |
| 2 blue | `#2a78d6` | `#7dd3fc` |
| 3 green | `#008300` | `#4ade80` |
| 4 red | `#e34948` | `#fb7185` |

Measured: light — colourblind ΔE 7.2, normal-vision 16.3, all ≥3:1 contrast;
dark — ΔE 7.5, normal-vision 18.9, all ≥3:1.

Both sit in the 6–8 colourblind band, which is only acceptable **because colour
carries no meaning here**: every dial shows its own number, its own caption, and
appears in a table view. If you ever make colour the *only* way to tell marks
apart, these colours are no longer valid and you must re-validate.

Note: `#1e40af` (the brand accent) **fails** as a chart colour — OKLCH lightness
0.424, below the 0.43 light-mode band floor. That is why chart marks use their
own tokens rather than the accent.

## 6. Accessibility features that must survive edits

- One `<h1>`; section headings are `<h2>`; cards use `<h3>`.
- Skip link, `:focus-visible` outlines, and a logical tab order.
- Case-study cards are `<button>`s with `aria-expanded` + `aria-controls`.
- Dials are `<button>`s with a full `aria-label`; hover **and** keyboard focus
  drive the same `aria-live` readout.
- Every chart has a text alternative plus a `<table>` twin.
- `prefers-reduced-motion` is honoured (and `reduceMotion` is declared near the
  top of `main.js` because the chart renderer needs it — do not move it back down).
- No horizontal overflow at 375 / 768 / 1280.

## 7. How to verify a change

There is no test suite. Serve it and check in a browser:

```bash
python -m http.server 5500 --directory portfolio
```

Then confirm: no console errors, all assets 200, no horizontal scrollbar at
375px, both themes readable, case studies expand, dials animate and the table
toggles.

## 8. Deployment

GitHub Pages from the `main` branch, root folder. `.nojekyll` must stay.
Content edits can be made directly in the GitHub web editor; the site rebuilds
in about a minute.

## 9. Where the CV lives

`assets/Saikireeti_Yenugula_CV.pdf`. The master resume set lives outside this
repo in the owner's `Documents/Resume/` folder. If you update the CV, keep the
filename or update `basics.cvUrl` in `content.js`.

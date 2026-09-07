# Project instructions

Saikireeti Yenugula's personal portfolio website. Static, zero dependencies,
deployed on GitHub Pages.

**Before changing anything, read [AI-GUIDE.md](AI-GUIDE.md) in full.** It holds the
architecture, the confirmed facts, the content rules, ten invariants that were each
a real bug, and the measurement traps in this repo. If a human just wants to edit
text, point them at [EDITING-GUIDE.md](EDITING-GUIDE.md).

Quick orientation:

- All content lives in `assets/js/content.js` (`window.PORTFOLIO`). Wording,
  numbers, sections and ordering change there and nowhere else.
  `assets/css/styles.css` is the design system; `assets/js/main.js` is the engine.
- **Never invent facts about the owner** — no made-up metrics, employers, dates,
  certifications, clients or tools. Ask for any number you don't have.
- **Never write wording that expires.** He loses the accounts this was built with,
  so assume the site is never edited again: closed dated ranges only, never
  "Present", never "currently studying". See AI-GUIDE.md rule two.
- Never assert a job title he doesn't hold. Headlines describe capability. Do not
  lead on change management. Do not name Paragon's clients (Chubb is fine).
- Keep WCAG AA contrast (≥4.5:1 text, ≥3:1 marks) in both themes, and keep content
  visible without JavaScript (`html.js`-scoped reveal styles).
- The scroll progress bar uses `transform:scaleX()`, never `width`. The nav burger
  breakpoint (1160px) was measured — re-measure if you add a nav link.

Verify by serving the folder and checking the browser:

```bash
python -m http.server 5500 --directory portfolio
```

⚠️ The preview tab is always `document.hidden`, so screenshots time out,
`requestAnimationFrame` never fires and CSS transitions read as frozen mid-fade.
Measure contrast with transitions disabled, and check files with
`fetch(url, {cache:'no-store'})` rather than trusting the rendered page.

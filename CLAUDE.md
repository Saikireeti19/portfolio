# Project instructions

This is Saikireeti Yenugula's personal portfolio website (static, zero
dependencies, deployed on GitHub Pages).

**Before making any change, read [AI-GUIDE.md](AI-GUIDE.md).** It contains the
architecture, the confirmed facts, the accessibility invariants and the
colour-validation rules for this project.

Quick orientation:

- All content lives in `assets/js/content.js` (`window.PORTFOLIO`). Wording,
  numbers, sections and ordering are changed there and nowhere else.
- `assets/css/styles.css` is the design system. `assets/js/main.js` is the engine.
- **Never invent facts about the owner** — no made-up metrics, employers, dates
  or certifications. Ask for any number you don't have.
- Do not lead on "change management"; lead on technical delivery and project
  management. Do not name Paragon's clients.
- Keep WCAG AA contrast (≥4.5:1 text, ≥3:1 marks) in both light and dark themes,
  and keep content visible without JavaScript (`html.js`-scoped reveal styles).

Verify changes by serving the folder and checking the browser:

```bash
python -m http.server 5500 --directory portfolio
```

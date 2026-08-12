# Project context — for future maintenance

Practical notes for whoever (human or AI) works on this site next. Start with
[AI-GUIDE.md](AI-GUIDE.md) for the rules and architecture, and
[EDITING-GUIDE.md](EDITING-GUIDE.md) if you just want to change text.

---

## Where things live

| | |
|---|---|
| **Live site** | https://saikireeti19.github.io/portfolio/ |
| **Repo** | https://github.com/Saikireeti19/portfolio (`main`, root folder) |
| **Hosting** | GitHub Pages — commit to `main` and it redeploys in ~1 minute |
| **All content** | `assets/js/content.js` — the only file you normally edit |
| **Design** | `assets/css/styles.css` |
| **Engine** | `assets/js/main.js` — rarely needs changing |
| **CV served** | `assets/Saikireeti_Yenugula_CV.pdf` |
| **Photo** | `assets/img/profile.jpg` (falls back to initials if missing) |

No build step, no dependencies, no npm. What you commit is what goes live.

## How to work on it locally

```bash
python -m http.server 5500 --directory portfolio
```

Then open http://localhost:5500 — a server is needed because the page loads its
JS as separate files.

## Verify before you call a change done

- No errors in the browser console; all assets return 200
- No horizontal scrollbar at 375 px wide
- Both light and dark themes readable (theme toggle, top right)
- Case-study cards expand; the four impact dials animate; "View as table" works
- The "Download CV" button opens the PDF

## Gotchas that have already bitten (worth knowing)

1. **Do not round-trip files through PowerShell `Get-Content`/`Set-Content`.** It
   double-encodes UTF-8 and turns em dashes into `â€"`. Use Python with an
   explicit `encoding="utf-8"`, or restore the file from git and redo the edit.
2. **A hidden or background browser tab freezes CSS transitions** and stops
   `IntersectionObserver` reporting. That is why the reveal logic has a sweep, a
   `visibilitychange` re-check, a failsafe timeout and a `.no-anim` class. Without
   them the page can render permanently blank. Do not simplify it.
3. **Reveal styles are scoped to `html.js`** on purpose, so the page is fully
   visible if JavaScript fails. Keep that scoping.
4. **Colour changes need re-measuring.** Every text/background pair is at or above
   WCAG AA 4.5:1 in both themes, and chart marks are above 3:1. The brand navy
   `#1e40af` fails as a *chart* colour (too dark for the light-mode band), which is
   why the dials use their own tokens.
5. **PDF exports fail while the PDF is open** in a viewer — close it first.
6. **The GitHub username is `Saikireeti19`.** Not any other variation.

## Wording that must stay durable

The site is written so it does not need editing as time passes. Do not introduce
phrases that go stale, such as "currently studying", "now completing" or
"mid-MBA". "MBA Candidate · Aston Business School" is accurate from admission
through graduation, and dated ranges (Sep 2026 to Sep 2027) are stated explicitly.

## Planned next step

A recruiter Q&A assistant, built as a **Cloudflare Worker** proxy so the API key
is never exposed in client-side code, with the assistant grounded strictly in
prepared content and instructed to refuse anything it cannot support. Development
happens in a separate sandbox copy, not in this repo, and is ported here as a
single reviewed change once it works.

## If you are an AI asked to make changes

Read [AI-GUIDE.md](AI-GUIDE.md) first. The short version: **never invent facts**
about the owner — no employers, dates, metrics, certifications or clients that are
not already in `content.js`. If you need a figure you do not have, ask.

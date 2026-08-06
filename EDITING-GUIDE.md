# How to change anything on your website

**You do not need to know how to code.** Almost everything on this site lives in
one file, written in plain English with comments.

That file is:

```
assets/js/content.js
```

---

## The 3 rules (this is the whole skill)

1. Only change the text **inside the "quotes"**.
2. Keep every comma `,` and every `{ }` `[ ]` exactly where it is.
3. To hide something, leave it empty: `""` — or empty a whole list: `[]`

That's it. If you follow those three rules you cannot break the site.

---

## How to make an edit (no software needed)

1. Go to your repository on GitHub.
2. Click into `assets` → `js` → **`content.js`**
3. Click the **pencil icon** (✏️ Edit this file) at the top right.
4. Change your text.
5. Scroll to the bottom, type a short note like `Update headline`, and click
   **Commit changes**.
6. Wait about **1 minute**, then refresh your live site. Done.

### If the page ever goes blank

You broke rule 2 (a missing comma or quote). Fix it in seconds:

1. Go to the repository → click **History** (or the clock icon).
2. Find the commit **before** your change and open it.
3. Click the `...` menu → **View file** → copy everything.
4. Edit `content.js` and paste it back over the top. Commit.

Your site is never permanently broken — every old version is saved.

---

## Common jobs — exactly where to look

Open `content.js` and find the numbered section.

| I want to change… | Go to section | Field |
|---|---|---|
| My name / the navbar name | 1. THE BASICS | `fullName`, `shortName` |
| The line under my name | 1. THE BASICS | `headline` |
| The paragraph in the hero | 1. THE BASICS | `intro` |
| The pill at the very top | 1. THE BASICS | `status` |
| My email | 1. THE BASICS | `email` |
| **Add my phone number** | 1. THE BASICS | `phone` (currently empty) |
| My LinkedIn link | 1. THE BASICS | `linkedin` |
| Add a GitHub link | 1. THE BASICS | `github` (currently empty) |
| Google / LinkedIn preview text | 1. THE BASICS | `pageTitle`, `metaDesc` |
| The roles I'm targeting | 2. THE ROLES | `targetRoles` list |
| The 4 big numbers | 3. HEADLINE NUMBERS | `metrics` |
| The % dials | 3b. PROJECT IMPACT | `impact.items` |
| My "About" paragraphs | 4. ABOUT | `paragraphs` |
| The 3 "how I work" boxes | 4. ABOUT | `principles` |
| A case study | 5. CASE STUDIES | `caseStudies` |
| My job history | 6. CAREER TIMELINE | `experience` |
| My skills | 7. SKILLS | `skills` |
| Education / certifications | 8. EDUCATION | `education`, `certifications` |
| Volunteering / outreach | 9. BEYOND WORK | `beyond` |
| Availability wording | 10. CONTACT | `availability`, `availabilityNote` |
| The accent colour | 11. LOOK & FEEL | `accent` |
| Light or dark by default | 11. LOOK & FEEL | `defaultTheme` |

---

## Step-by-step for the things you'll actually do

### Add your UK phone number (once you have one)

Find this in section 1 and put your number between the quotes:

```js
phone:     "",          →      phone:     "+44 7xxx xxxxxx",
```

Leave it as `""` and the phone simply doesn't appear anywhere.

### Replace your photo

Upload your new photo into `assets/img/` and name it **exactly** `profile.jpg`
(overwrite the old one). Nothing else to change.

- Portrait shape works best (taller than wide), around 800×1000 pixels.
- Keep it under about 400 KB so the site stays fast.
- If the file is missing, the site automatically shows your initials instead.

### Replace your CV

Upload the new PDF into `assets/`, then update this line in section 1 to match
your file name exactly:

```js
cvUrl:     "assets/Saikireeti_Yenugula_CV.pdf",
```

### Change one of the % dials

In section 3b, each dial looks like this:

```js
{
  label: "Revenue growth",
  value: 60,
  note:  "Higher delivery throughput grew the account's revenue…"
},
```

`value` is a plain number (no `%` sign — the site adds that).

### Add a new dial

Copy one whole `{ … },` block including the comma, paste it below, and edit it.
Delete a block to remove a dial. **Keep at least one.**

### Add a new case study

In section 5, copy one entire `{ … },` block and edit the copy. Keep the same
field names. `results` shows the big coloured numbers; `tags` are the little
chips at the bottom.

### Hide a whole section

Empty its list. For example, to remove "Beyond the Day Job" entirely:

```js
beyond: [],
```

The section disappears cleanly, including its menu link.

---

## Asking an AI to make changes for you

This works well. Give the AI (ChatGPT, Claude, Gemini…) your repository link and
a prompt like:

```
Here is my portfolio website repository: <paste your repo link>

Please read AI-GUIDE.md first — it explains the architecture and the rules.

I want you to: <describe your change in plain English>

Important: all content lives in assets/js/content.js. Do not invent any facts,
numbers, employers or certifications about me. If you need a number I have not
given you, ask me for it.
```

The `AI-GUIDE.md` file in this repository was written specifically so an AI can
understand the whole project without any explanation from you. It covers the
architecture, the accessibility rules, and the facts it must not change.

---

## Things worth knowing

- **You cannot break it permanently.** Every version is saved in GitHub history.
- **Nothing is secret in this repo.** Never put passwords or private documents here
  — it is a public website.
- The site works in light and dark mode, follows the visitor's system setting,
  and remembers whatever they choose.
- It works on phones, tablets and desktops, and prints cleanly if a recruiter
  saves it as a PDF.
- There is no build step. What you commit is what goes live.

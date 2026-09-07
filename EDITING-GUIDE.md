# How to change anything on your website

**You do not need to know how to code.** Almost everything lives in one file,
written in plain English with comments:

```
assets/js/content.js
```

---

## The 3 rules (this is the whole skill)

1. Only change the text **inside the "quotes"**.
2. Keep every comma `,` and every `{ }` `[ ]` exactly where it is.
3. To hide something, leave it empty: `""` — or empty a whole list: `[]`

Follow those three and you cannot break the site.

---

## The 4th rule — never write anything that goes out of date

This one matters more than the other three, because **you may not be able to edit
this site later**. Write everything so it stays true on its own.

| ❌ Don't write | ✅ Write instead |
|---|---|
| "I begin my MBA in September 2026" | "My MBA runs from September 2026 to September 2027" |
| "Jul 2025 – Present" | "Jul 2025 – Sep 2026" |
| "currently studying", "recently joined" | "MBA Candidate", or a dated range |
| "I am in Birmingham" *(before you move)* | "I relocate to Birmingham in late September 2026" |

If you start a new job later, **add a new entry** to the timeline. Don't change
the Cognizant one back to "Present".

---

## How to make an edit (no software needed)

1. Go to your repository on GitHub.
2. Click `assets` → `js` → **`content.js`**
3. Click the **pencil icon** (✏️ Edit this file), top right.
4. Change your text.
5. Scroll down, type a short note like `Update headline`, click **Commit changes**.
6. Wait about **1 minute**, then refresh your live site.

**If you don't see your change:** the browser caches files for 10 minutes. Hard
refresh with `Ctrl` + `F5`, or just wait.

### If the page ever goes blank

You broke rule 2 (a missing comma or quote). Fix it in seconds:

1. Repository → **History** (clock icon).
2. Open the commit **before** your change.
3. `...` menu → **View file** → copy everything.
4. Edit `content.js`, paste it over the top, commit.

Nothing is ever permanently broken — every old version is saved.

---

## Where everything is

| I want to change… | Section | Field |
|---|---|---|
| My name / navbar name | 1. THE BASICS | `fullName`, `shortName` |
| The line under my name | 1. THE BASICS | `headline` |
| The paragraph in the hero | 1. THE BASICS | `intro` |
| The first pill at the top | 1. THE BASICS | `status` |
| **The "Open to UK opportunities" pill** | 1. THE BASICS | `availabilityBadge` |
| My email | 1. THE BASICS | `email` |
| **Add my phone number** | 1. THE BASICS | `phone` *(empty)* |
| My LinkedIn link | 1. THE BASICS | `linkedin` |
| A GitHub link | 1. THE BASICS | `github` *(deliberately empty)* |
| Google / share preview text | 1. THE BASICS | `pageTitle`, `metaDesc` |
| My photo | — | see **Replace your photo** below |
| The roles I'm open to | 2. THE ROLES | `targetRoles`, `targetRolesLabel` |
| **The 6 big numbers** | 3. HEADLINE NUMBERS | `metrics` |
| The % dials | 3b. PROJECT IMPACT | `impact.items` |
| **The Technology → Delivery → Transformation section** | 3c. CAREER DIRECTION | `stages`, `paragraphs` |
| My "About" paragraphs | 4. ABOUT | `paragraphs` |
| The 3 "how I work" boxes | 4. ABOUT | `principles` |
| A case study | 5. CASE STUDIES | `caseStudies` |
| My job history | 6. CAREER TIMELINE | `experience` |
| **The tools listed under each job** | 6. CAREER TIMELINE | `tech` in each job |
| My skills | 7. SKILLS | `skills` |
| Education | 8. EDUCATION | `education` |
| **Certificate badges** | 8. EDUCATION | `certifications` |
| Volunteering / outreach | 9. BEYOND WORK | `beyond` |
| Availability wording | 10. CONTACT | `availability`, `availabilityNote` |
| The accent colour | 11. LOOK & FEEL | `accent` |
| Light or dark by default | 11. LOOK & FEEL | `defaultTheme` |

---

## Replace your photo — read this bit properly

Two steps, and **the second one is easy to miss.**

### Step 1 — upload it

Put your new photo in `assets/img/` named **exactly** `profile.jpg` (overwrite the
old one).

- **Portrait shape works best** (taller than wide), around 800×1000 pixels.
- Keep it under about 400 KB so the site stays fast.
- If the file is ever missing, the site shows your initials instead — it won't break.

### Step 2 — fix the crop, or your face will sit off-centre

The photo frame is portrait-shaped (4:5) but photos are often landscape, so the
site has to crop the sides. **It currently crops to a position tuned to your old
photo**, measured from where your head actually was.

Open `assets/css/styles.css`, find this line (search for `object-position`):

```css
.portrait img{width:100%;height:100%;object-fit:cover;object-position:43% center}
```

**With a new photo, change `43%` to `center`:**

```css
.portrait img{width:100%;height:100%;object-fit:cover;object-position:center}
```

That is the safe default. Then look at the live site:

- Face too far **left**? Lower the number — try `40%`, then `35%`.
- Face too far **right**? Raise it — try `55%`, then `60%`.
- `50%` is dead centre. Anything between `0%` and `100%` is valid.

**Or avoid it entirely:** crop your photo to a **portrait 4:5 shape before
uploading** (e.g. 800×1000), with your face slightly above the middle. Then
`object-position:center` is correct and you never touch this again.

---

## Replace your CV

Upload the new PDF into `assets/`, then make this line in section 1 match your
file name **exactly**:

```js
cvUrl:     "assets/Saikireeti_Yenugula_CV.pdf",
```

⚠️ The CV on the site is a copy of `Resume_1_PM_Delivery_Consulting` from your
`Documents/Resume/` folder, and **the two are kept saying the same things**. If you
change a number on the site, change it on the CV too, or a recruiter reading both
sees a contradiction.

---

## Add a verification link to a certificate

**This is the most valuable 10 minutes left on the site.** Right now your eight
certificate badges are claims. With a link they become *checkable*, which
recruiters trust far more.

Get the link from Credly (Microsoft) or wherever the certificate lives, then paste
it into that badge's `url`:

```js
{ mark: "MS", issuer: "Microsoft", name: "Azure Fundamentals (AZ-900)", url: "" },
                                                                        ↑ paste here
```

The badge then becomes clickable with a small ↗ arrow. Leave `url` empty and it
stays plain text — nothing breaks either way.

---

## Add your UK phone number

Section 1 — put it between the quotes:

```js
phone:     "",          →      phone:     "+44 7xxx xxxxxx",
```

It then appears **automatically in two places** — the contact block and the
footer — as a tappable link on a phone. Leave it `""` and both stay hidden.

---

## The six big numbers

Section 3. Keep the count a **multiple of 3** (currently 6, shown as 3 + 3) or the
last row looks unbalanced.

```js
{ value: "0", suffix: "", label: "UAT defects at go-live on a major migration" },
```

`value` can be text like `"30–40"`. `suffix` is small text after it, like `"yrs"`
or `"%"`.

**Only put numbers here you can defend in an interview.** Two striking, true
numbers beat five vague ones — and an invented one is worse than none.

---

## Change or add a % dial

Section 3b. Each dial:

```js
{
  label: "Faster form delivery",
  value: 30,
  note:  "The converter removed the manual rebuild step…"
},
```

`value` is a plain number — the site adds the `%`. Copy a whole `{ … },` block to
add one, delete a block to remove one. **Keep at least one.** The layout adjusts
itself to any number of dials.

---

## Add a case study

Section 5. Copy one entire `{ … },` block and edit the copy, keeping the field
names. `results` are the big coloured numbers; `tags` are the chips at the bottom.

---

## Hide a whole section

Empty its list:

```js
beyond: [],
```

The section disappears cleanly, **including its menu links**.

---

## Change the share image

`assets/img/og-image.jpg` is what appears when your link is shared on LinkedIn,
WhatsApp or Slack. To replace it, upload a new **1200 × 630** JPG with that exact
name. If you change your name or headline on the site, the image won't update
itself — it's a picture, so it has to be remade.

---

## Asking another AI to make changes

This works well. Give it your repository link and this prompt:

```
Here is my portfolio website repository: <paste your repo link>

Please read AI-GUIDE.md in full before changing anything. It contains the
architecture, the confirmed facts, the content rules and ten invariants that
were each a real bug.

I want you to: <describe your change in plain English>

Rules you must follow:
- All content lives in assets/js/content.js. Wording, numbers, sections and
  ordering are changed there and nowhere else.
- Never invent any fact about me - no employers, dates, metrics, certifications,
  clients or tools. If you need a number I have not given you, ask me for it.
- Never write wording that will go out of date, because I may not be able to
  edit this site later. Use closed, dated ranges.
- Keep WCAG AA contrast in both light and dark themes, and keep the content
  visible if JavaScript fails.
- Show me the change before pushing it.
```

`AI-GUIDE.md` was written so an AI can understand the whole project with no
explanation from you — including the traps that make measurements read wrong.

---

## Things worth knowing

- **You cannot break it permanently.** Every version is saved in GitHub history.
- **Nothing here is private.** This is a public website — never put passwords,
  personal documents or anything confidential in this repository.
- Light and dark mode both work, follow the visitor's system setting, and remember
  whatever they choose.
- It works on phones, tablets and desktops, and prints cleanly if a recruiter
  saves it as a PDF.
- There is no build step. What you commit is what goes live.

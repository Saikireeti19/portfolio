# Saikireeti Yenugula â€” Portfolio

A fast, accessible, one-page professional portfolio for a **technical project
manager and MBA candidate**. No frameworks, no build step, no dependencies.

**Live site:** https://saikireeti.github.io/portfolio/

---

## Which document do I need?

| You areâ€¦ | Read this |
|---|---|
| **Me, wanting to change some text** | **[EDITING-GUIDE.md](EDITING-GUIDE.md)** â€” plain English, no coding |
| An **AI assistant** asked to work on this | **[AI-GUIDE.md](AI-GUIDE.md)** â€” architecture, rules, invariants |
| Setting it up / deploying | this file, below |

---

## What's in here

```
portfolio/
â”œâ”€â”€ index.html                     the page structure (rarely needs changing)
â”œâ”€â”€ EDITING-GUIDE.md               â˜… how to change anything, for non-coders
â”œâ”€â”€ AI-GUIDE.md                    â˜… full brief for AI assistants
â”œâ”€â”€ CLAUDE.md                      pointer file AI coding tools read first
â”œâ”€â”€ README.md                      this file
â”œâ”€â”€ .nojekyll                      tells GitHub Pages to serve files as-is
â””â”€â”€ assets/
    â”œâ”€â”€ Saikireeti_Yenugula_CV.pdf the CV that the "Download CV" button gives
    â”œâ”€â”€ css/styles.css             all the design (colours, spacing, motion)
    â”œâ”€â”€ img/profile.jpg            the photo  â† replace this to change it
    â””â”€â”€ js/
        â”œâ”€â”€ content.js             â˜… ALL TEXT AND NUMBERS LIVE HERE
        â””â”€â”€ main.js                the engine (you never need to touch this)
```

**The only file you normally edit is `assets/js/content.js`.**

## What's on the page

Hero (name, headline, target roles, photo, CV/LinkedIn/email) â†’ four headline
numbers â†’ About + how-I-work â†’ three STAR case studies that expand â†’ career
timeline â†’ **Measured impact** (four animated % dials with a table view) â†’
capabilities â†’ education & certifications â†’ community work â†’ contact.

Light and dark themes, keyboard accessible, WCAG AA contrast verified in both
themes, no horizontal overflow from 375px up, and it prints cleanly.

---

## PART 1 â€” Putting it on GitHub (one time only)

### Step 1. Create the repository

1. Go to **https://github.com/new** (sign in as `LinoVibe`).
2. **Repository name:** `portfolio`
3. **Description:** `My professional portfolio website`
4. Choose **Public** â€” this is required for free GitHub Pages.
5. Do **NOT** tick "Add a README file" (we already have one).
6. Click **Create repository**.

### Step 2. Upload the files

The easiest way, no commands needed:

1. On the new empty repository page, click **"uploading an existing file"**.
2. Open the `portfolio` folder on your computer.
3. Select **everything inside it** â€” `index.html`, `README.md`, `.nojekyll` and the
   whole `assets` folder â€” and drag it all into the browser window.
   - If dragging the folder doesn't work, drag `index.html` first, then use
     **Add file â†’ Upload files** again for the `assets` folder.
4. In the "Commit changes" box type: `Add portfolio site`
5. Click **Commit changes**.

> If you can't see `.nojekyll` in your folder, it's because Windows hides files
> that start with a dot. In File Explorer go to **View â†’ Show â†’ Hidden items**.

### Step 3. Turn on GitHub Pages

1. In your repository click **Settings** (top right).
2. In the left sidebar click **Pages**.
3. Under **Source** choose **Deploy from a branch**.
4. Under **Branch** choose **main**, keep the folder as **/ (root)**, click **Save**.
5. Wait about 1â€“2 minutes, then refresh the page. GitHub will show:
   *"Your site is live at https://saikireeti.github.io/portfolio/"*

### Step 4. Check it worked

Open **https://saikireeti.github.io/portfolio/** on your laptop and on your phone.

You should see your name, your photo, the blue metric strip, and the three
"Selected Work" cards that open when clicked.

---

## PART 2 â€” Updating the site later

You never need a computer or any software. Do it straight on GitHub:

1. Go to your repository â†’ `assets` â†’ `js` â†’ **`content.js`**
2. Click the **pencil icon** (Edit this file) at the top right.
3. Change the text inside the `"quotes"`.
4. Scroll down, type a short note like `Update headline`, click **Commit changes**.
5. Wait about a minute and refresh your live site. Done.

### The 3 rules for editing `content.js`

1. Only change text **inside the "quotes"**.
2. Keep every comma `,` and every `{ }` `[ ]` exactly where it is.
3. To hide something, make it empty: `""` â€” or empty a whole list: `[]`

If the page ever goes blank after an edit, you broke rule 2. Press
**Ctrl + Z** to undo in the GitHub editor, or open the previous version from the
repository's **History** and copy it back.

---

## Common jobs

| I want toâ€¦ | Do this |
|---|---|
| Change my photo | Upload a new square/portrait photo to `assets/img/` named exactly `profile.jpg` |
| Change my CV | Upload your new PDF to `assets/` then update `cvUrl` in `content.js` |
| Add my phone number | Set `phone: "+44 7xxx xxxxxx"` in `content.js` (leave `""` to hide it) |
| Add a GitHub link | Set `github: "https://github.com/saikireeti"` in `content.js` |
| Change the accent colour | Change `accent` in `settings` at the bottom of `content.js` |
| Add a new case study | Copy one whole `{ ... }` block inside `caseStudies` and edit the copy |
| Hide a whole section | Empty its list, e.g. `beyond: []` |
| Start in dark mode | Set `defaultTheme: "dark"` in `settings` |

---

## Previewing on your own computer (optional)

You need a local web server â€” opening `index.html` by double-clicking works, but a
server matches how GitHub Pages behaves. With Python installed:

```bash
python -m http.server 5500 --directory portfolio
```

Then open http://localhost:5500

---

## Notes

- Works in all modern browsers, on phones, tablets and desktop.
- Light and dark themes; follows the visitor's system setting and remembers their choice.
- Keyboard accessible, screen-reader friendly, and passes WCAG AA colour contrast.
- Respects "reduce motion" accessibility settings.
- Prints cleanly if a recruiter saves it as a PDF.

# Jerry Musa — Portfolio

Static portfolio for Yonaura Jerry Musa: robotics mentor, STEM educator, and
chief technical trainer of Team Kenya at the FIRST Global Challenge
(2nd place worldwide, Panama 2025).

One page, no build step, no framework. Plain HTML, CSS, and JavaScript.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole page — semantic HTML, one `<dialog>`-based lightbox |
| `styles.css` | Editorial theme, light + dark, single green accent, Hanken Grotesk |
| `main.js` | Theme toggle, mobile nav, lightbox, Netlify form (~140 lines) |
| `netlify.toml` | Publish dir + cache/security headers |
| `yoyzie-*.jpg` | Screenshots of the Yoyzie AI landing page (live site) |
| `*.jpg` | Photos (originals, untouched) |

## Design rules followed

These come from the project skills (`no-slop-ui`, `frontend-design`,
`stop-slop`):

- No gradients, glows, glassmorphism, or pill buttons; 1px borders and ≤10px radii
- No hover transforms or entrance animations; color/background transitions only, 150ms
- One typeface (Hanken Grotesk), no gradient text, no emoji in headings
- One accent color (green); photos carry the rest of the color
- Copy states facts (places, years, awards) — no marketing filler or AI phrasing
- Labels above form fields, visible focus rings, `prefers-reduced-motion` respected

## Light & dark mode

- Defaults to the visitor's OS preference; the header toggle overrides it
- Choice persists in `localStorage`; clearing it returns to OS-following
- Theme is applied before first paint (no flash); `color-scheme` is set so
  native controls (scrollbars, form fields) follow the theme too

## Reading contact form messages

The form is a Netlify Form (`data-netlify="true"`). After the site is
redeployed, every submission lands in the Netlify dashboard:

1. Open **app.netlify.com** → your site → **Forms** → `contact`
2. Submissions show name, email, message, and timestamp
3. Under **Form settings → Form notifications** you can add an email
   address to get each message by email, or an RSS/Slack notification

## Running locally

```bash
python3 -m http.server 8080
# or: npx serve .
```

Then open http://localhost:8080.

## Deploying on Netlify

The site is already wired for Netlify:

1. Push this repo to GitHub (`git push`).
2. Netlify reads `netlify.toml` — publish directory is the repo root, no build
   command needed.
3. The contact form uses Netlify Forms (`data-netlify="true"`). After the first
   deploy, submissions appear under **Forms** in the Netlify dashboard.

Note: Netlify Forms only activates after the first deploy with the form present.

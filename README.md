# Jerry Musa — Portfolio

Static portfolio for Yonaura Jerry Musa: robotics mentor, STEM educator, and
chief technical trainer of Team Kenya at the FIRST Global Challenge
(2nd place worldwide, Panama 2025). CEO & founder of Yoyzie AI.

One page, no build step, no framework. Plain HTML, CSS, and JavaScript.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole page — semantic HTML, one `<dialog>`-based lightbox |
| `styles.css` | Editorial theme, light + dark, single green accent, Hanken Grotesk |
| `main.js` | Theme toggle, mobile nav, lightbox, contact form (~150 lines) |
| `vercel.json` | Cache + security headers for Vercel |
| `404.html` | Not-found page, same theme |
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

## Contact form messages

The form posts to **FormSubmit**, which emails every submission to
`yo.jerrymusa2018@gmail.com` — no dashboard needed, messages arrive in Gmail
with the sender's name, email, and message.

One-time setup after the first deploy: submit a test message on the live site.
FormSubmit sends an **activation email** to that address — click the link in
it once, and all future messages deliver automatically.

## Running locally

```bash
python3 -m http.server 8080
# or: npx serve .
```

Then open http://localhost:8080.

## Deploying on Vercel

The repo is ready as-is — it's a static site with no build step.

1. Go to **vercel.com/new** and import the `Jerrymusaaa/Jerry-s-Portfolio`
   GitHub repo (or run `npx vercel` from this folder and follow the prompts).
2. Leave all build settings at their defaults — Vercel auto-detects "Other"
   (static) and serves the repo root. `vercel.json` adds caching and security
   headers automatically.
3. Deploy. Every later `git push` to `main` redeploys automatically.
4. After deploying, do the one-time FormSubmit activation from a test message
   (see "Contact form messages" above).
5. Optional: add your custom domain under **Settings → Domains**.

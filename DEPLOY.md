# Deploying the portfolio on Vercel — step by step

The repo is static (plain HTML/CSS/JS, no build step), so deployment is
simple. Two ways to do it: the dashboard (recommended first time) or the CLI.
Pick one.

---

## Before you start

1. **Push the repo to GitHub.** From `/home/jerry-musa/portfolio`:

   ```bash
   git push
   ```

   If prompted for credentials, use a GitHub Personal Access Token
   (GitHub → Settings → Developer settings → Tokens (classic) → Generate new
   token, tick `repo`) — GitHub no longer accepts account passwords on the
   command line.

2. Verify all five commits are up:

   ```bash
   git status
   # should say: Your branch is up to date with 'origin/main'
   ```

---

## Method 1 — Vercel dashboard (recommended)

### Step 1: Create the project

1. Go to **https://vercel.com/new** and sign in (continue with GitHub is
   easiest — it also installs the Vercel GitHub app).
2. In **Import Git Repository**, find `Jerrymusaaa/Jerry-s-Portfolio` and
   click **Import**.
3. If it's not listed, click **Adjust GitHub App Permissions** and grant
   Vercel access to that repo, then come back.

### Step 2: Configure (almost nothing to do)

On the configure screen:

| Setting | What to set |
|---|---|
| Framework Preset | **Other** (auto-detected — leave it) |
| Root Directory | leave default (`./`) |
| Build Command | leave **empty** |
| Output Directory | leave default |
| Install Command | leave default |

No environment variables are needed — the site has none.

### Step 3: Deploy

1. Click **Deploy**.
2. Wait ~30 seconds for **Congratulations!** — the site is live at
   `https://jerry-s-portfolio.vercel.app` (or similar).
3. Click **Continue to Dashboard** and bookmark it.

### Step 4: Activate the contact form (required, one time)

The form emails messages to `yo.jerrymusa2018@gmail.com` via FormSubmit.
It only starts delivering after a one-time activation:

1. Open your live site, scroll to **Contact**, and submit a real test
   message (name, email, anything).
2. Within a minute, FormSubmit sends an **activation email** to
   yo.jerrymusa2018@gmail.com.
3. Open it and click the **activation link**. That's it — from now on every
   portfolio message lands in that Gmail inbox, with the sender's name and
   reply-to set so you can answer directly.
4. Send one more test message to confirm it arrives.

---

## Method 2 — Vercel CLI (alternative)

Good if you don't want to open a browser.

```bash
cd /home/jerry-musa/portfolio
npx vercel login        # opens a confirmation link in your browser
npx vercel              # first run: answer 4 prompts, then deploys a preview
npx vercel --prod       # promotes to production
```

The prompts, and what to answer:

1. **Set up and deploy?** → `Y`
2. **Which scope?** → your personal account
3. **Link to existing project?** → `N`
4. **What's your project's name?** → `jerry-portfolio` (or press Enter)
5. **In which directory is your code located?** → `./` (press Enter)

Vercel auto-detects a static project: no build command, serves the root.
`vercel.json` supplies the headers automatically.

Subsequent deploys are just `npx vercel --prod` from the folder.

---

## Auto-redeploys (both methods)

Because you deployed from GitHub, every future `git push` to `main` triggers
a fresh production deploy automatically. Push-and-forget; check progress at
the **Deployments** tab of the dashboard.

---

## Custom domain (optional)

1. Dashboard → your project → **Settings → Domains → Add**.
2. Enter your domain (e.g. `jerrymusa.com`). If it's bought elsewhere,
   Vercel shows the exact DNS records to add; if it's registered at
   Namecheap/GoDaddy/etc., either:
   - change the nameservers to Vercel's (`ns1.vercel-dns.com`,
     `ns2.vercel-dns.com`), or
   - add an `A` record pointing `@` to `76.76.21.21` and a `CNAME` for
     `www` pointing to `cname.vercel-dns.com`.
3. Wait for DNS to propagate (minutes to a few hours). HTTPS certificates
   are issued by Vercel automatically — no action needed.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Push rejected | Credentials issue — use a Personal Access Token (see top). |
| Deploy fails at "Building" | Shouldn't happen (no build). If it does, check Build Command is **empty**, not `npm run build`. |
| Site deploys but CSS/JS 404 | Ensure the repo root contains `index.html`, `styles.css`, `main.js` and Root Directory is `./`. |
| Form says sent but no email | The activation step wasn't done (Step 4 above), or the message went to Gmail's spam folder. |
| Old version showing after push | Hard-refresh (Ctrl+Shift+R). `styles.css`/`main.js` cache for 1 hour; images cache for a year but filenames don't change. |
| 404 for unknown URLs | Expected — the themed `404.html` renders. |

---

## What's already configured in the repo

- `vercel.json` — security headers (nosniff, frame-deny, referrer policy,
  permissions policy) + caching (1 year immutable for `.jpg`, 1 hour for
  CSS/JS).
- `404.html` — themed not-found page.
- Contact form → FormSubmit → your Gmail (host-agnostic).

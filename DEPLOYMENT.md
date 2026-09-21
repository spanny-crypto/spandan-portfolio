# Portfolio Deployment Guide

Your founder portfolio is ready to deploy to Netlify. Follow one of these methods.

## Quick Start (Recommended: GitHub + Netlify)

### Step 1: Push to GitHub

```bash
# Create a new repository on github.com
# Name it: spandan-portfolio (or any name you prefer)

# Then run these commands in the project directory:
git remote add origin https://github.com/YOUR_USERNAME/spandan-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy to Netlify

**Option A: Netlify UI (Easiest)**

1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose GitHub
4. Select your `spandan-portfolio` repository
5. Netlify will auto-detect:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

That's it! Your site will be live in 2-3 minutes.

**Option B: Netlify CLI**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from the project directory
netlify deploy --prod
```

### Step 3: Custom Domain (Optional)

In Netlify dashboard:
1. Domain settings → Add custom domain
2. Point your domain to Netlify's nameservers
3. Wait 24 hours for DNS propagation

---

## Local Development

Before deploying, test locally:

```bash
# Install dependencies (one-time)
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

The site auto-reloads on file changes.

---

## Editing Your Portfolio

All content is in `data.ts`. To update:

```bash
# Edit the data
# Example: Update a project, add achievement, modify timeline

# Git workflow
git add data.ts
git commit -m "Update portfolio: added new project"
git push origin main

# Netlify auto-deploys when you push to main
```

No need to touch component files—just edit `data.ts`.

---

## Build & Deploy Manually

If you want to build locally:

```bash
# Install dependencies
npm install

# Build
npm run build

# The build output is in `.next` folder

# To run the built version locally:
npm start
# Visit http://localhost:3000
```

---

## Environment Setup

The portfolio requires:
- Node.js 18+
- npm or yarn
- A GitHub account (for deployment)
- A Netlify account (free)

No environment variables needed.

---

## Troubleshooting

### Build fails on Netlify

1. Check Netlify build logs
2. Make sure Node version is 18+:
   ```bash
   node --version
   npm --version
   ```
3. Rebuild from Netlify dashboard

### Site looks broken

1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Check console errors: `F12` → Console

### Want to change the site URL

In Netlify dashboard:
- Site settings → Change site name
- New URL: `yourname.netlify.app`

---

## Going Live

Your portfolio will be live at: `https://your-site.netlify.app`

Share this link everywhere:
- Twitter/X
- LinkedIn
- Email signature
- YC application
- GitHub bio

---

## Continuous Updates

As you build more:

1. Update `data.ts` with new projects
2. Add achievements
3. Update timeline
4. Modify research ideas
5. `git push origin main`
6. Netlify deploys automatically

---

## Support

- Netlify docs: https://docs.netlify.com/
- Next.js docs: https://nextjs.org/docs
- Questions? Email: priyankanilesh2011@gmail.com

---

## What's Next

After deployment:

✓ Share your portfolio URL  
✓ Add it to your GitHub profile  
✓ Post on social media  
✓ Include in YC application  
✓ Keep updating as you build  
✓ Monitor analytics (optional: add Vercel Analytics)

---

**Your founder portfolio is live. The world can now see your work.**

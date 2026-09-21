# Deploy Your Portfolio to Netlify — Quickest Way

Your website is **built and ready**. Here's the fastest way to get it live:

---

## **Option 1: GitHub + Netlify (Easiest, 5 minutes)**

### Step 1: Create GitHub Repo

```bash
cd C:\Users\Admin\Documents\spandan-portfolio

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/spandan-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to **https://app.netlify.com**
2. Sign up (or login)
3. Click **"New site from Git"**
4. Select **GitHub** → Choose your repository
5. **Build settings are auto-detected:**
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click **"Deploy site"**

**Done!** Your site goes live in 2-3 minutes.

Your URL: `https://spandan-portfolio.netlify.app`

---

## **Option 2: Drag & Drop (1 minute)**

1. Go to **https://app.netlify.com**
2. Click **"Deploy manually"**
3. Drag the `.next` folder to Netlify
4. Your site is live

---

## **Option 3: CLI Deployment (What we tried)**

This requires browser authentication:

```bash
cd C:\Users\Admin\Documents\spandan-portfolio
npx netlify deploy --prod --dir=.next
```

Follow the prompts to authenticate.

---

## **Next Steps After Deployment**

✅ Your site will be live at: `https://spandan-portfolio.netlify.app`

Share it:
- Twitter/X
- LinkedIn
- GitHub profile
- YC Application
- Email signature

---

## **Edit & Update**

Edit `data.ts`, commit, and push:

```bash
git add data.ts
git commit -m "Update portfolio"
git push origin main
```

Netlify auto-deploys. Your site updates in 2 minutes.

---

**Recommended: Use Option 1 (GitHub + Netlify) — it's the smoothest experience and gives you automatic deploys on every push.**

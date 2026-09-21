# Spandan's Portfolio — Setup in 5 Minutes

## What's been created

✅ Complete Next.js portfolio website  
✅ 8 projects documented (Falcon OS, Haven, Mimo, etc.)  
✅ Interactive sections (Hero, Projects, Timeline, Achievements, Learning, Research)  
✅ Minimal grey/light grey design (Apple-quality)  
✅ Fully data-driven (edit `data.ts` to update content)  
✅ Mobile-responsive  
✅ Git initialized locally  
✅ Ready for Netlify deployment  

## File Structure

```
spandan-portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page
│   └── globals.css              # Global styles
├── components/
│   ├── Navigation.tsx           # Top nav
│   ├── Footer.tsx               # Footer
│   └── sections/                # Page sections
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── ProgrammingLanguage.tsx
│       ├── Timeline.tsx
│       ├── Achievements.tsx
│       ├── Learning.tsx
│       ├── Research.tsx
│       └── About.tsx
├── data.ts                      # ⭐ ALL YOUR CONTENT HERE
├── package.json
├── tailwind.config.js           # Colors, fonts
├── tsconfig.json
├── postcss.config.js
├── next.config.js
├── netlify.toml                 # Netlify config
├── README.md                    # Project overview
└── DEPLOYMENT.md                # Deployment guide
```

## To Deploy in 3 Steps

### 1. Install & Test Locally (Optional but Recommended)

```bash
cd C:\Users\Admin\Documents\spandan-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` to preview.

### 2. Push to GitHub

```bash
# Create new repo on github.com (name: spandan-portfolio)

git remote add origin https://github.com/YOUR_USERNAME/spandan-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Netlify

**Easiest way:**

1. Go to https://app.netlify.com/
2. Click "New site from Git"
3. Select GitHub → choose spandan-portfolio
4. Netlify auto-detects everything
5. Click "Deploy site"
6. Done! Your site is live in 2-3 minutes

**Alternative (CLI):**

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Editing Your Portfolio

All content is in **`data.ts`**. No code changes needed.

### Example: Add a New Project

Open `data.ts`, find `projects: [`, and add:

```typescript
{
  id: 'my-new-project',
  name: 'Project Name',
  tagline: 'Short description',
  description: 'Full description here',
  status: 'BUILDING', // or LIVE, PROTOTYPE, EXPERIMENT
  color: 'from-slate-900 to-slate-700',
  icon: '🚀',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  tech: ['Tech1', 'Tech2'],
  links: {
    website: 'https://...',
    github: 'https://...',
  },
}
```

Then:

```bash
git add data.ts
git commit -m "Add new project: My New Project"
git push origin main
```

Netlify auto-deploys. Your site updates in 2 minutes.

### Example: Update Your About Section

Find `about:` in `data.ts` and edit the text.

### Example: Add Timeline Event

Find `timeline: [` and add:

```typescript
{
  year: 2025,
  title: 'New milestone',
  description: 'What happened',
  type: 'milestone', // or achievement, building, experiment, future
}
```

---

## What Each Section Does

| Section | File | What It Shows |
|---------|------|---------------|
| Hero | Hero.tsx | Name, tagline, CTAs |
| Projects | Projects.tsx | All your products (expandable) |
| Language | ProgrammingLanguage.tsx | Arkh language + code example |
| Timeline | Timeline.tsx | Your building journey over time |
| Achievements | Achievements.tsx | Verified wins |
| Learning | Learning.tsx | Knowledge map (4 categories) |
| Research | Research.tsx | Ideas you're exploring |
| About | About.tsx | Your founder story |

---

## Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  bg: '#FAFAFA',           // Background
  'bg-secondary': '#F5F5F5',
  text: '#1A1A1A',         // Text
  accent: '#0A0A0A',       // Buttons, highlights
}
```

### Change Fonts

The site currently uses system fonts (Inter via Google Fonts). To change:

1. Edit `app/layout.tsx`
2. Update Google Fonts import
3. Update `tailwind.config.js` fontFamily

### Disable Animations

Remove or comment out Framer Motion `<motion>` components in section files.

---

## Important Notes

✅ All content editable from `data.ts`  
✅ No environment variables needed  
✅ No backend required  
✅ No database  
✅ No authentication  
✅ Fully static site (except for Next.js SSR)  
✅ Ready to customize further  

## Your Portfolio URL

Once deployed, you'll get a URL like:
- `https://spandan-portfolio.netlify.app`
- Or custom: `https://yourdomain.com`

Share this everywhere:
- Twitter/X
- LinkedIn  
- GitHub
- Email signature
- YC application
- Resume/CV

---

## Keep Building

As you launch new projects:

1. Edit `data.ts`
2. Add the project
3. `git push origin main`
4. Site updates automatically

Your portfolio is a **living document of your work**.

---

## Questions?

- Netlify docs: https://docs.netlify.com/
- Next.js docs: https://nextjs.org/
- React/Framer Motion: https://www.framer.com/motion/

**Ready? Let's ship this. The world needs to see your work.**

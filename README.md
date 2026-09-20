# Spandan's Founder Portfolio

A premium, minimal, technical portfolio showcasing real work, real experiments, and real execution.

## Philosophy

This isn't a résumé website. It's a workspace.

The site communicates one core message: **"I don't wait to know enough. I build, learn, and figure it out."**

The visual identity is:
- Minimal
- Technical
- Premium
- Youthful without looking childish
- Highly intentional
- Slightly experimental
- Apple/Linear/Arc quality

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## Features

✓ Hero section with positioning  
✓ Interactive projects showcase  
✓ Programming language section  
✓ Timeline of building journey  
✓ Verified achievements  
✓ Learning map  
✓ Research/ideas exploration  
✓ Founder story  
✓ Social links  
✓ Data-driven architecture (editable from `data.ts`)  
✓ Mobile-responsive design  
✓ Fast loading & animations  

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio.

## Editing Content

All portfolio content is in `data.ts`. You can edit:

- Hero section (name, tagline, subtitle)
- Projects (add, remove, or update any project)
- Programming language details
- Timeline events
- Achievements
- Learning categories
- Research ideas
- Social links

No need to touch component files—just update the data and redeploy.

## Deployment to Netlify

### Option 1: Connect GitHub (Recommended)

1. Push this project to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Deploy

### Option 2: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 3: Direct File Upload

```bash
# Build for export
npm run build
npm run export

# Upload the `out` folder to Netlify
```

## Project Structure

```
spandan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx       # Top navigation
│   ├── Footer.tsx          # Footer
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── ProgrammingLanguage.tsx
│       ├── Timeline.tsx
│       ├── Achievements.tsx
│       ├── Learning.tsx
│       ├── Research.tsx
│       └── About.tsx
├── data.ts                 # All portfolio content
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` theme colors:

```js
colors: {
  bg: '#FAFAFA',
  'bg-secondary': '#F5F5F5',
  text: '#1A1A1A',
  // ...
}
```

### Fonts

Currently uses system fonts. To add custom fonts:

1. Import from Google Fonts in `app/layout.tsx`
2. Update `fontFamily` in `tailwind.config.js`

### Animations

All animations use Framer Motion. Edit `variants` in component files or disable completely by removing `motion` imports.

## Performance

- Server-side rendering with Next.js
- Optimized images
- Lazy loading with Framer Motion
- Minimal JavaScript overhead
- ~50KB bundle size (gzipped)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on all interactive elements
- High contrast ratios

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Video demonstrations
- [ ] Live project previews
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Search functionality

## License

MIT

## Questions?

Email: priyankanilesh2011@gmail.com

---

**Built with curiosity. Shipped with code.**

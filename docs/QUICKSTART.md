# Quick Start Guide 🚀

Get your NaasAI website running in 3 simple steps!

## Step 1: Install Dependencies

Open your terminal in this directory and run:

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- Vite (build tool)
- Lucide React (icons)

**Installation time:** ~2-3 minutes

## Step 2: Start Development Server

```bash
npm run dev
```

You'll see output like:
```
  VITE v5.0.8  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Open `http://localhost:5173/` in your browser!

## Step 3: Start Building! 🎉

The website is now running. You can:
- View the live site
- Make changes to files
- See updates instantly (Hot Module Replacement)

## File Structure Quick Reference

```
src/
├── components/
│   ├── layout/          # Header and Footer
│   └── sections/        # All main sections
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Making Changes

### Change Colors
Edit `src/index.css` → `:root` variables

### Update Content
Edit files in `src/components/sections/`:
- `Hero.tsx` - Main headline section
- `Features.tsx` - Feature cards
- `Pricing.tsx` - Pricing tables
- etc.

### Add New Section
1. Create `NewSection.tsx` and `NewSection.css`
2. Import in `App.tsx`
3. Add to the page layout

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Production Build

When ready to deploy:

```bash
npm run build
```

Built files will be in `dist/` folder.

## Need Help?

- 📖 Full docs: See `README.md`
- 🚀 Deployment: See `DEPLOYMENT.md`
- 📁 Structure: See `PROJECT_STRUCTURE.md`

## Troubleshooting

### Port already in use?
```bash
# Vite will automatically try next port
# Or specify a different port:
npm run dev -- --port 3000
```

### Changes not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check terminal for errors

### Module not found?
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

**That's it! You're ready to build amazing websites! 🎨**

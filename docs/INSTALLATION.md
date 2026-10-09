# Installation Instructions

Complete guide to install and run the NaasAI website project.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Check version: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - npm check: `npm --version`
   - yarn alternative: `npm install -g yarn`

3. **Git** (optional, for version control)
   - Download: https://git-scm.com/

### System Requirements

- **Operating System**: Windows, macOS, or Linux
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 500MB for project + dependencies

---

## Installation Steps

### Method 1: Using the Existing Project

If you already have the project files:

#### Step 1: Open Terminal

Navigate to the project directory:

```bash
cd c:\Users\Israel Iraoya\Documents\Codes\shopperly-fe
```

#### Step 2: Install Dependencies

Run one of these commands:

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

This will install:
- react & react-dom (^18.2.0)
- typescript (^5.2.2)
- vite (^5.0.8)
- @vitejs/plugin-react (^4.2.1)
- lucide-react (^0.292.0)
- @types/react & @types/react-dom
- eslint & related packages

**Installation time:** 2-5 minutes depending on internet speed

#### Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### Step 4: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

🎉 **Success!** The website should now be running.

---

### Method 2: Starting from Scratch

If you want to create the project from scratch:

#### Step 1: Create Project Directory

```bash
mkdir naasai-website
cd naasai-website
```

#### Step 2: Initialize Vite Project

```bash
npm create vite@latest . -- --template react-ts
```

Follow the prompts:
- Package name: `naasai-website`
- Select framework: `React`
- Select variant: `TypeScript`

#### Step 3: Copy Source Files

Copy all files from the existing project:
- Copy `src/` folder
- Copy `public/` folder
- Copy configuration files
- Copy documentation files

#### Step 4: Install Dependencies

```bash
npm install
npm install lucide-react
```

#### Step 5: Run Development Server

```bash
npm run dev
```

---

## Available Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `npm install` | Install dependencies | First time setup |
| `npm run dev` | Start dev server | Development |
| `npm run build` | Build for production | Before deployment |
| `npm run preview` | Preview production build | Testing |
| `npm run lint` | Run ESLint | Code quality |

---

## Troubleshooting

### Issue: npm not found

**Solution:**
```bash
# Install Node.js from https://nodejs.org/
# Verify installation
node --version
npm --version
```

---

### Issue: Port 5173 already in use

**Solution 1:** Use a different port
```bash
npm run dev -- --port 3000
```

**Solution 2:** Kill process using port 5173
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

---

### Issue: Module not found

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

---

### Issue: Permission denied

**Windows Solution:**
```bash
# Run terminal as Administrator
```

**Mac/Linux Solution:**
```bash
# Use sudo (not recommended)
sudo npm install

# Or fix permissions
sudo chown -R $USER:$USER ~/.npm
```

---

### Issue: TypeScript errors

**Solution:**
```bash
# Reinstall TypeScript
npm install --save-dev typescript @types/react @types/react-dom
```

---

### Issue: Vite not starting

**Solution:**
```bash
# Clear Vite cache
npm run dev -- --force
```

---

## Verifying Installation

### Check 1: Dependencies Installed

```bash
npm list --depth=0
```

Should show:
```
naasai-website@0.0.0
├── lucide-react@0.292.0
├── react@18.2.0
├── react-dom@18.2.0
└── ...
```

### Check 2: Dev Server Running

Visit: http://localhost:5173

You should see:
- ✅ NaasAI logo in header
- ✅ "Build websites with AI" headline
- ✅ All sections visible
- ✅ No console errors

### Check 3: Build Works

```bash
npm run build
```

Should show:
```
vite v5.0.8 building for production...
✓ 123 modules transformed.
dist/index.html                   0.45 kB
dist/assets/index-abc123.js      145.23 kB
✓ built in 2.43s
```

---

## IDE Setup (Optional)

### Visual Studio Code

1. **Install VS Code**: https://code.visualstudio.com/

2. **Recommended Extensions:**
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features
   - Vite

3. **Open project:**
```bash
code .
```

### Other IDEs

- **WebStorm**: Full TypeScript support built-in
- **Sublime Text**: Install TypeScript package
- **Vim/Neovim**: Use CoC or LSP

---

## Environment Setup

### Create .env file (Optional)

If you need environment variables:

```bash
# .env
VITE_APP_NAME=NaasAI
VITE_API_URL=https://api.example.com
```

**Usage in code:**
```typescript
const appName = import.meta.env.VITE_APP_NAME
```

---

## Post-Installation

### 1. Test All Pages

- ✅ Header navigation works
- ✅ All sections visible
- ✅ Mobile menu toggles
- ✅ Buttons are clickable
- ✅ Hover effects work

### 2. Check Responsive Design

Test on different screen sizes:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

**Chrome DevTools:**
- Press F12
- Click "Toggle device toolbar" (Ctrl+Shift+M)
- Test different devices

### 3. Customize

Start customizing:
1. Change colors in `src/index.css`
2. Update content in section components
3. Replace logo and images
4. Modify text and descriptions

---

## Common Workflows

### Daily Development

```bash
# Start work
npm run dev

# Make changes
# ... edit files ...

# Test changes
# ... browser auto-reloads ...

# Stop server
# Ctrl+C in terminal
```

### Before Committing

```bash
# Lint code
npm run lint

# Build to check for errors
npm run build

# Preview production build
npm run preview
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update specific package
npm install react@latest
```

---

## Getting Help

### Resources

1. **Project Documentation**
   - README.md
   - QUICKSTART.md
   - COMPONENTS_GUIDE.md

2. **External Resources**
   - [Vite Docs](https://vitejs.dev)
   - [React Docs](https://react.dev)
   - [TypeScript Docs](https://typescriptlang.org)

3. **Community**
   - Stack Overflow
   - GitHub Issues
   - Discord/Slack channels

---

## Next Steps

After successful installation:

1. ✅ Read `README.md` for project overview
2. ✅ Check `QUICKSTART.md` for quick start
3. ✅ Review `COMPONENTS_GUIDE.md` to understand structure
4. ✅ See `DEPLOYMENT.md` when ready to deploy
5. ✅ Reference `DESIGN_SPECIFICATIONS.md` for design system

---

## Installation Checklist

- [ ] Node.js installed (v16+)
- [ ] npm/yarn installed
- [ ] Project files downloaded
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Website opens in browser
- [ ] No console errors
- [ ] Build works (`npm run build`)
- [ ] All sections visible
- [ ] Responsive design works

---

**Installation Complete! 🎉**

You're now ready to develop and customize your NaasAI website.

For questions or issues, refer to the documentation files or check the troubleshooting section above.

Happy coding! 🚀

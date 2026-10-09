# NaasAI Website - Complete Project Structure

## 📁 Folder Organization

```
shopperly-fe/
├── .freebuff/
│   └── project-id
├── inspo/
│   ├── inspo pic.jpeg
│   ├── inspo pic2.jpeg
│   └── WhatsApp Video 2026-10-07 at 5.32.16 PM.mp4
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Hero.css
│   │       ├── Stats.tsx
│   │       ├── Stats.css
│   │       ├── Features.tsx
│   │       ├── Features.css
│   │       ├── HowItWorks.tsx
│   │       ├── HowItWorks.css
│   │       ├── Pricing.tsx
│   │       ├── Pricing.css
│   │       ├── WebsiteTypes.tsx
│   │       ├── WebsiteTypes.css
│   │       ├── CTA.tsx
│   │       └── CTA.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎨 Component Breakdown

### Layout Components

#### **Header** (`src/components/layout/Header.tsx`)
- Sticky navigation bar
- Responsive menu with mobile hamburger
- Navigation links: Features, How it works, Pricing
- Sign in and Get Started buttons
- Mobile-friendly dropdown menu

#### **Footer** (`src/components/layout/Footer.tsx`)
- Company branding
- Four column layout with links
- Social media icons (Facebook, Twitter, Instagram)
- Copyright and legal links

### Section Components

#### **Hero** (`src/components/sections/Hero.tsx`)
- Large headline with gradient "AI" text
- AI-powered website builder badge
- Interactive input box with placeholder
- Action buttons (attach, suggestions, generate)
- Suggestion chips for quick ideas
- Grid background pattern

#### **Stats** (`src/components/sections/Stats.tsx`)
- Four key metrics:
  - 10K+ Websites Created
  - 50+ Happy Users
  - 99.9% Uptime
  - 24/7 AI Support

#### **Features** (`src/components/sections/Features.tsx`)
- Eight feature cards with colored icons:
  1. **AI SEO Optimizer** (Blue)
  2. **Website Translator** (Purple)
  3. **Performance Optimizer** (Green)
  4. **Error Detection** (Red)
  5. **AI-Driven Development** (Blue)
  6. **Live Preview** (Purple)
  7. **Integrated Code Editor** (Green)
  8. **Build & Launch** (Orange)

#### **HowItWorks** (`src/components/sections/HowItWorks.tsx`)
- Three-step process:
  1. Describe Your Vision
  2. AI Builds It
  3. Optimize & Launch

#### **Pricing** (`src/components/sections/Pricing.tsx`)
- Three pricing tiers:
  - **Free**: $0/month (basic features)
  - **Pro**: $29/month (most popular, gradient background)
  - **Enterprise**: $99.99/month (all features)
- Feature checkmarks
- CTA buttons

#### **WebsiteTypes** (`src/components/sections/WebsiteTypes.tsx`)
- 12 website type options:
  - Portfolio, E-commerce, Blog, Business
  - Landing Page, Photography, Restaurant
  - Education, Non-profit, Event, Dashboard, Web App
- Icon-based cards with hover effects

#### **CTA** (`src/components/sections/CTA.tsx`)
- Gradient background (teal)
- "Ready to build your dream website?" headline
- Call-to-action button

## 🎨 Design Features

### Color Palette
```css
--primary-color: #3dd9b3      /* Teal green */
--primary-dark: #2bb89a       /* Darker teal */
--secondary-color: #1a1a1a    /* Near black */
--text-primary: #1a1a1a       /* Dark text */
--text-secondary: #6b7280     /* Gray text */
--bg-light: #f9fafb           /* Light background */
--bg-white: #ffffff           /* White */
--border-color: #e5e7eb       /* Light gray border */
--purple: #a78bfa             /* Purple accent */
--blue: #60a5fa               /* Blue accent */
--green: #34d399              /* Green accent */
--red: #f87171                /* Red accent */
--orange: #fb923c             /* Orange accent */
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Animations
- Fade in effects
- Hover transformations
- Smooth transitions
- Card elevation on hover

## 🚀 Key Features

### Mobile Responsive
- Mobile-first design approach
- Hamburger menu for mobile devices
- Responsive grid layouts
- Touch-friendly buttons and links

### Modern UI/UX
- Clean, minimalist design
- Consistent spacing and typography
- Smooth animations and transitions
- Intuitive navigation

### Performance
- Optimized with Vite
- Fast build times
- Hot Module Replacement (HMR)
- Tree-shaking for smaller bundles

### Accessibility
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance

## 🛠️ Technology Stack

- **React 18.2**: Modern React with hooks
- **TypeScript**: Type-safe code
- **Vite 5.0**: Lightning-fast build tool
- **Lucide React**: Beautiful icon library
- **CSS3**: Custom styles with CSS variables

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layouts
- Stacked navigation
- Full-width buttons
- Optimized touch targets

### Tablet (768px - 1023px)
- 2-column grids
- Horizontal navigation
- Balanced layouts

### Desktop (1024px+)
- Multi-column grids
- Full navigation bar
- Maximum width containers
- Enhanced hover effects

## 🎯 Sections Flow

1. **Header** → Always visible (sticky)
2. **Hero** → First impression with AI input
3. **Stats** → Build credibility
4. **Features** → Showcase capabilities
5. **How It Works** → Explain process
6. **Pricing** → Present options
7. **Website Types** → Show versatility
8. **CTA** → Convert visitors
9. **Footer** → Additional info & links

## 📦 Installation & Usage

See README.md for detailed instructions on:
- Installing dependencies
- Running the development server
- Building for production
- Customization options

---

**Built with ❤️ using React, TypeScript, and Vite**

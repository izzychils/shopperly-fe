# Components Guide

Complete reference for all components in the Shopperly project.

## 📁 Component Structure

```
components/
├── layout/
│   ├── Header
│   └── Footer
└── sections/
    ├── Hero
    ├── Stats
    ├── Features
    ├── HowItWorks
    ├── Pricing
    ├── WebsiteTypes
    └── CTA
```

---

## 🧩 Layout Components

### Header Component

**Location:** `src/components/layout/Header.tsx`

**Purpose:** Sticky navigation bar with responsive menu

**Features:**
- Logo/brand name
- Desktop navigation links
- Mobile hamburger menu
- Sign in / Get Started buttons
- Smooth scroll to sections

**Props:** None (standalone component)

**State:**
```typescript
isMenuOpen: boolean  // Controls mobile menu visibility
```

**Usage:**
```tsx
import { Header } from './components/layout/Header'

<Header />
```

**Customization:**
```typescript
// Change navigation links
const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' }
]
```

---

### Footer Component

**Location:** `src/components/layout/Footer.tsx`

**Purpose:** Site footer with links and social media

**Features:**
- Company branding
- Four-column link layout
- Social media icons
- Copyright notice
- Legal links

**Props:** None

**Usage:**
```tsx
import { Footer } from './components/layout/Footer'

<Footer />
```

**Customization:**
```typescript
// Update footer links
const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', ...]
  },
  // ... more columns
]
```

---

## 🎨 Section Components

### 1. Hero Component

**Location:** `src/components/sections/Hero.tsx`

**Purpose:** Main landing section with headline and AI input

**Features:**
- Large headline with gradient text
- AI badge
- Interactive input box
- Suggestion chips
- Grid background pattern

**Data:**
```typescript
suggestions: string[] = [
  'a modern portfolio website',
  'an e-commerce store for fashion',
  // ... more suggestions
]
```

**Usage:**
```tsx
import { Hero } from './components/sections/Hero'

<Hero />
```

**Customization:**
```typescript
// Change headline
<h1>
  Build websites with <span className="gradient-text">AI</span>
</h1>

// Update suggestions
const suggestions = ['your', 'custom', 'suggestions']
```

---

### 2. Stats Component

**Location:** `src/components/sections/Stats.tsx`

**Purpose:** Display key metrics and achievements

**Features:**
- Four stat cards
- Large numbers with labels
- Responsive grid

**Data:**
```typescript
stats = [
  { number: '10K+', label: 'Websites Created' },
  { number: '50+', label: 'Happy Users' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'AI Support' }
]
```

**Usage:**
```tsx
import { Stats } from './components/sections/Stats'

<Stats />
```

**Customization:**
```typescript
// Update stats
const stats = [
  { number: 'YOUR_NUMBER', label: 'Your Label' }
]
```

---

### 3. Features Component

**Location:** `src/components/sections/Features.tsx`

**Purpose:** Showcase 8 AI-powered features

**Features:**
- Eight feature cards
- Colored icon backgrounds
- Hover animations
- Responsive grid (1/2/4 columns)

**Data Structure:**
```typescript
interface Feature {
  icon: ReactElement    // Lucide icon
  title: string        // Feature name
  description: string  // Feature description
  color: string       // Icon background color
}
```

**Icons Used:**
- Search (AI SEO)
- Languages (Translator)
- Gauge (Performance)
- AlertCircle (Error Detection)
- Wand2 (AI Development)
- Eye (Live Preview)
- Code (Code Editor)
- Rocket (Build & Launch)

**Usage:**
```tsx
import { Features } from './components/sections/Features'

<Features />
```

**Customization:**
```typescript
// Add new feature
{
  icon: <YourIcon />,
  title: 'Your Feature',
  description: 'Description here',
  color: '#hex-color'
}
```

---

### 4. HowItWorks Component

**Location:** `src/components/sections/HowItWorks.tsx`

**Purpose:** Explain the 3-step process

**Features:**
- Three numbered steps
- Circular number badges
- Clean, centered layout

**Data:**
```typescript
steps = [
  {
    number: '01',
    title: 'Describe Your Vision',
    description: 'Tell our AI what you want...'
  },
  // ... steps 02, 03
]
```

**Usage:**
```tsx
import { HowItWorks } from './components/sections/HowItWorks'

<HowItWorks />
```

**Customization:**
```typescript
// Modify steps
const steps = [
  { number: '01', title: '...', description: '...' }
]
```

---

### 5. Pricing Component

**Location:** `src/components/sections/Pricing.tsx`

**Purpose:** Display pricing tiers

**Features:**
- Three pricing cards
- Feature checkmarks
- Highlighted "Pro" plan
- "Most Popular" badge
- CTA buttons

**Data Structure:**
```typescript
interface Plan {
  name: string
  tagline: string
  price: string
  period: string
  buttonText: string
  isPrimary: boolean
  badge?: string
  features: string[]
}
```

**Usage:**
```tsx
import { Pricing } from './components/sections/Pricing'

<Pricing />
```

**Customization:**
```typescript
// Update pricing
{
  name: 'Pro',
  price: '$29',
  features: ['Feature 1', 'Feature 2', ...]
}
```

---

### 6. WebsiteTypes Component

**Location:** `src/components/sections/WebsiteTypes.tsx`

**Purpose:** Show 12 website type options

**Features:**
- 12 clickable cards
- Icon + label layout
- Hover effects
- Responsive grid (2/3/6 columns)

**Icons:**
```typescript
types = [
  { icon: <Briefcase />, name: 'Portfolio' },
  { icon: <ShoppingCart />, name: 'E-commerce' },
  { icon: <BookOpen />, name: 'Blog' },
  // ... 9 more types
]
```

**Usage:**
```tsx
import { WebsiteTypes } from './components/sections/WebsiteTypes'

<WebsiteTypes />
```

**Customization:**
```typescript
// Add new type
{ icon: <YourIcon />, name: 'Your Type' }
```

---

### 7. CTA Component

**Location:** `src/components/sections/CTA.tsx`

**Purpose:** Call-to-action section

**Features:**
- Gradient teal background
- Dot pattern overlay
- Large headline
- CTA button with icon

**Usage:**
```tsx
import { CTA } from './components/sections/CTA'

<CTA />
```

**Customization:**
```typescript
// Change headline
<h2>Your Custom Headline</h2>

// Update button text
<button>Your CTA Text</button>
```

---

## 🎨 Styling System

### CSS Files

Each component has its own CSS file:
```
ComponentName.tsx
ComponentName.css
```

### Import Pattern
```typescript
import './ComponentName.css'
```

### CSS Variables

Global colors defined in `src/index.css`:
```css
:root {
  --primary-color: #3dd9b3;
  --text-primary: #1a1a1a;
  --bg-light: #f9fafb;
  /* ... more variables */
}
```

### Usage in Components
```css
.my-component {
  color: var(--text-primary);
  background: var(--primary-color);
}
```

---

## 🔧 Component Patterns

### Standard Component Structure

```typescript
import './Component.css'

export const Component = () => {
  return (
    <section className="component">
      <div className="container">
        {/* Content here */}
      </div>
    </section>
  )
}
```

### With State

```typescript
import { useState } from 'react'
import './Component.css'

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <section className="component">
      {/* Content */}
    </section>
  )
}
```

### With Data

```typescript
export const Component = () => {
  const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' }
  ]
  
  return (
    <section>
      {items.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </section>
  )
}
```

---

## 🎯 Best Practices

### Component Guidelines

1. **One component per file**
2. **Co-locate CSS with component**
3. **Use semantic HTML**
4. **Add proper TypeScript types**
5. **Include ARIA labels**
6. **Keep components focused**

### Naming Conventions

- **Components**: PascalCase (`Header.tsx`)
- **CSS files**: PascalCase (`Header.css`)
- **CSS classes**: kebab-case (`.header-content`)
- **Functions**: camelCase (`handleClick`)

### File Organization

```
Component/
├── Component.tsx     # Component logic
└── Component.css    # Component styles
```

---

## 🚀 Adding New Components

### Step-by-Step

1. **Create files:**
```bash
src/components/sections/NewSection.tsx
src/components/sections/NewSection.css
```

2. **Write component:**
```typescript
// NewSection.tsx
import './NewSection.css'

export const NewSection = () => {
  return (
    <section className="new-section">
      <div className="container">
        <h2>New Section</h2>
      </div>
    </section>
  )
}
```

3. **Add styles:**
```css
/* NewSection.css */
.new-section {
  padding: 5rem 0;
  background: var(--bg-light);
}
```

4. **Import in App.tsx:**
```typescript
import { NewSection } from './components/sections/NewSection'

// Add to render
<NewSection />
```

---

## 📦 Icons Library

Using **Lucide React** for all icons.

### Installation
```bash
npm install lucide-react
```

### Usage
```typescript
import { Search, User, Menu } from 'lucide-react'

<Search size={24} />
<User color="#3dd9b3" />
<Menu strokeWidth={2} />
```

### Available Props
- `size`: number (default: 24)
- `color`: string
- `strokeWidth`: number (default: 2)
- `className`: string

---

## 🎓 Component Examples

### Simple Card
```typescript
const Card = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)
```

### With Icon
```typescript
import { Star } from 'lucide-react'

const IconCard = ({ icon, title }) => (
  <div className="icon-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
  </div>
)

// Usage
<IconCard icon={<Star />} title="Featured" />
```

### Button Component
```typescript
const Button = ({ children, onClick, variant = 'primary' }) => (
  <button 
    className={`btn btn-${variant}`}
    onClick={onClick}
  >
    {children}
  </button>
)
```

---

## 🔍 Debugging Tips

### Component Not Rendering?
1. Check import path
2. Verify export statement
3. Check for syntax errors
4. Look at browser console

### Styles Not Applying?
1. Check CSS file import
2. Verify class names match
3. Check CSS specificity
4. Use browser dev tools

### Icons Not Showing?
1. Check lucide-react installed
2. Verify import statement
3. Check icon name spelling

---

## 📚 Additional Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

---

**Need Help?** Check other documentation files:
- `README.md` - Project overview
- `QUICKSTART.md` - Get started
- `DESIGN_SPECIFICATIONS.md` - Design details

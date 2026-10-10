# Design Specifications

## Visual Design Overview

This project replicates the Shopperly website design from the provided inspiration images with pixel-perfect accuracy and responsive mobile support.

## Color System

### Primary Colors
```css
Teal/Green Primary: #3dd9b3
Teal Dark: #2bb89a
Black/Dark Text: #1a1a1a
Gray Text: #6b7280
```

### Accent Colors
```css
Purple: #a78bfa  (Website Translator, Live Preview)
Blue: #60a5fa    (AI SEO, AI Development)
Green: #34d399   (Performance, Code Editor)
Red: #f87171     (Error Detection)
Orange: #fb923c  (Build & Launch)
```

### Background Colors
```css
Light Background: #f9fafb
White: #ffffff
Border: #e5e7eb
```

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 
  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
  'Cantarell', 'Fira Sans', 'Droid Sans', 
  'Helvetica Neue', sans-serif;
```

### Font Sizes

#### Headings
- H1 (Hero): 2.5rem - 4rem (responsive)
- H2 (Sections): 2rem - 3rem (responsive)
- H3 (Cards): 1.5rem - 2rem (responsive)

#### Body Text
- Large: 1.25rem
- Regular: 1rem
- Small: 0.95rem
- Tiny: 0.875rem

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing System

### Padding Scale
```
Small: 0.5rem (8px)
Medium: 1rem (16px)
Large: 1.5rem (24px)
XLarge: 2rem (32px)
XXLarge: 3rem (48px)
Huge: 4rem (64px)
Massive: 5rem (80px)
```

### Section Spacing
- Mobile: 3rem (48px) vertical padding
- Desktop: 5rem (80px) vertical padding

## Layout Specifications

### Container
- Max Width: 1200px
- Padding: 1.5rem (mobile), 2rem (desktop)
- Centered with margin: 0 auto

### Grid Systems

#### Features Grid
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns
- Gap: 2rem

#### Pricing Grid
- Mobile: 1 column
- Desktop: 3 columns
- Gap: 2rem

#### Website Types Grid
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 6 columns
- Gap: 2rem

## Component Specifications

### Header
- Height: Auto
- Background: White
- Border Bottom: 1px solid #e5e7eb
- Position: Sticky (top: 0)
- Z-index: 1000

### Buttons

#### Primary Button
```css
background: #3dd9b3
color: white
padding: 0.65rem 1.5rem
border-radius: 8px
font-weight: 600
```

**Hover State:**
```css
background: #2bb89a
transform: translateY(-2px)
box-shadow: 0 4px 12px rgba(61, 217, 179, 0.3)
```

#### Secondary Button
```css
background: transparent
color: #1a1a1a
border: 1px solid #e5e7eb
padding: 0.65rem 1.5rem
border-radius: 8px
```

### Cards

#### Feature Card
```css
background: white
padding: 2rem
border-radius: 16px
border: 1px solid #e5e7eb
transition: all 0.3s ease
```

**Hover:**
```css
transform: translateY(-8px)
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1)
border-color: transparent
```

#### Pricing Card (Pro/Featured)
```css
background: linear-gradient(135deg, #3dd9b3, #2dd4bf)
color: white
transform: scale(1.05)
```

### Icons
- Size: 28px × 28px (in colored boxes)
- Container: 56px × 56px
- Border Radius: 12px
- Centered with flex

## Animations

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover Transforms
- Cards: `translateY(-8px)`
- Buttons: `translateY(-2px)`
- Duration: 0.3s ease

## Responsive Breakpoints

```css
/* Mobile First */
Base: 0px - 767px

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1200px) { ... }
```

## Section-Specific Design

### Hero Section
- Background: White to light teal gradient
- Grid pattern overlay
- Input box with shadow: `0 10px 30px rgba(0, 0, 0, 0.1)`
- Badge: Black background, white text, pill shape

### Stats Section
- Background: White
- Numbers: 2.5rem - 3.5rem, Bold (700)
- Labels: 1rem, Medium gray

### Features Section
- Background: Light gray (#f9fafb)
- 8 feature cards in 4-column grid (desktop)
- Each icon has unique color

### Pricing Section
- Background: Light gray
- Center card (Pro) is highlighted
- "MOST POPULAR" badge in yellow (#fbbf24)

### CTA Section
- Background: Teal gradient
- Dot pattern overlay
- White text
- Large button

### Footer
- Background: Dark (#1a1a1a)
- White text with opacity variants
- 4-column layout (desktop)

## Accessibility Features

### Color Contrast
- All text meets WCAG AA standards
- Minimum 4.5:1 contrast ratio

### Interactive Elements
- Hover states clearly visible
- Focus outlines for keyboard navigation
- ARIA labels on icon buttons

### Mobile Touch Targets
- Minimum 44px × 44px
- Adequate spacing between elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

## Image Specifications

### Icons
- Format: SVG (via Lucide React)
- Color: Inherited or specific hex values
- Size: Scalable, typically 20-28px

### Logo
- Text-based: "Shopperly"
- Font weight: 700
- Size: 1.5rem

## States & Interactions

### Button States
1. Default
2. Hover (elevated with shadow)
3. Active (pressed)
4. Focus (keyboard outline)
5. Disabled (reduced opacity)

### Card States
1. Default
2. Hover (elevated)
3. Focus
4. Active (when clickable)

### Input States
1. Default (gray border)
2. Focus (primary color border)
3. Error (red border)
4. Disabled (gray background)

## Micro-interactions

- Smooth page scrolling
- Button hover elevation
- Card hover effects
- Icon animations on hover
- Menu slide-in (mobile)
- Smooth color transitions

---

**Design System Version:** 1.0  
**Last Updated:** October 2026  
**Maintained by:** Development Team

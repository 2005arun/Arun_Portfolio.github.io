# Arun R S — Portfolio Website

A modern, premium, dark-themed personal portfolio website showcasing Backend Engineering, AI Engineering, Distributed Systems, and competitive programming achievements.

**Live**: [Deploy on Vercel](#deployment)

---

## Tech Stack

| Category   | Technology                                       |
|------------|--------------------------------------------------|
| Framework  | React 19 + TypeScript                            |
| Build Tool | Vite                                             |
| Styling    | Tailwind CSS v4                                  |
| Animations | Framer Motion                                    |
| Icons      | Lucide React + custom SVG brand icons            |

## Features

- 🎨 **Premium Dark Theme** — Glassmorphism, gradient accents, subtle glow effects
- ✨ **Interactive Particle Background** — Canvas-based with mouse interaction
- 🖱️ **Cursor Glow** — Radial gradient following the mouse on desktop
- ⌨️ **Typing Animation** — Rotating roles in the hero section
- 📊 **Animated Counters** — Number animations triggered on scroll
- 🗂️ **Project Modals** — Click-to-expand project detail overlays
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- 🚀 **Fast Loading** — < 120KB gzipped JavaScript
- 🔍 **SEO Optimized** — Meta tags, Open Graph, semantic HTML

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedCounter.tsx
│   ├── BackToTop.tsx
│   ├── CursorGlow.tsx
│   ├── Icons.tsx          # Custom GitHub/LinkedIn SVG icons
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── ProjectModal.tsx
│   ├── SectionHeading.tsx
│   └── TechBadge.tsx
├── sections/            # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts     # All portfolio content (single source of truth)
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/2005arun/Arun_Portfolio.github.io.git
cd Arun_Portfolio.github.io
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

All portfolio content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit this single file to update:

- Personal info, social links
- About section text
- Skills categories
- Work experience
- Projects
- Achievements & awards
- Certifications

### Adding Your Profile Photo

Place your photo as `person.jpeg` (or any format) in the `public/` directory, then update the `profileImage` path in `src/data/portfolio.ts`.

### Adding Your Resume

Place your resume PDF as `resume.pdf` in the `public/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Vite settings
4. Click **Deploy**

### Git Commands

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/2005arun/Arun_Portfolio.github.io.git
git push -u origin main
```

## License

MIT © Arun R S

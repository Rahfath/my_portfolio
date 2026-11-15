# Personal Portfolio Website

A minimal, editorial personal portfolio website implemented in Next.js (App Router), TypeScript, and Tailwind CSS v4, built directly from the Figma design specification.

## 🎨 Design Tokens (Theme Customization)

All theme colors and font tokens are defined in a single source of truth in [`src/app/globals.css`](src/app/globals.css):

```css
:root {
  --color-background: #F8F6F1; /* Warm linen canvas */
  --color-foreground: #1C1F1A; /* Primary charcoal/ink text */
  --color-accent: #C73013;     /* Warm vermilion accent */
  --color-muted: #5E5F5A;      /* Subtext and secondary labels */
}
```

Components consume these variables via Tailwind utility classes (`bg-background`, `text-foreground`, `text-accent`, `text-muted`, `font-display`, `font-sans`).

---

## 📝 Updating Portfolio Content

Content is decoupled from UI components and lives inside the `src/data/` folder:

- **Personal Info & Navigation**: Edit [`src/data/personal.ts`](src/data/personal.ts) (Name, tagline, contact email, navigation links).
- **Projects ("A few good apps.")**: Edit [`src/data/projects.ts`](src/data/projects.ts) (Titles, descriptions, URLs).
- **Tech Stack ("Tech stack.")**: Edit [`src/data/techStack.ts`](src/data/techStack.ts) (Categories and technology items).
- **Skills**: Edit [`src/data/skills.ts`](src/data/skills.ts) (Skill items list).
- **Work Experience ("Along the way.")**: Edit [`src/data/experience.ts`](src/data/experience.ts) (Companies, roles, timelines).
- **Education ("Education.")**: Edit [`src/data/education.ts`](src/data/education.ts) (Institutions, degrees, fields, timelines, highlights).

---

## 🏗️ Project Architecture

```
src/
├── app/
│   ├── globals.css      # Theme tokens & CSS variables
│   ├── layout.tsx       # Root layout, next/font optimization & SEO metadata
│   └── page.tsx         # Page assembly and section orchestration
├── components/
│   ├── sections/        # Section components (Intro, Projects, Skills, Experience, Contact, Navbar)
│   └── ui/              # Small reusable primitives (Container, Heading, Section, AnimatedFade)
├── data/                # Data sources for all content
├── lib/                 # Utility functions (cn)
└── types/               # TypeScript interfaces
```

---

## 🚀 Development & Build

```bash
# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Production build check
npm run build
```

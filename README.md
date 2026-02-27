# Louis Chan | Full-Stack Software Engineer

> A performance-driven developer portfolio built with Next.js, showcasing modern UI/UX architecture and full-stack capabilities. 

[Live Demo](https://www.louisdev314.com/)

## Tech Stack

**Frontend**
* Next.js 16 (App Router)
* React 19 & TypeScript
* Tailwind CSS v4 (with `tailwind-merge` & `clsx`)
* Framer Motion (Micro-animations & seamless transitions)
* Three.js & React Three Fiber (Interactive 3D elements)
* Lenis (Smooth scrolling API)

**Backend / API**
* Node.js
* Next.js Server Components & Server Actions

**AI / Data**
* LLM API integrations for application tools
* Structured output generation & JSON validation pipelines
* Automated data processing pipelines

**DevOps / Tools**
* Vercel (Edge network deployment & hosting)
* Vercel Analytics
* Strict ESLint & Prettier configurations
* pnpm workspace

## Features

* **Premium UI/UX Quality**: Apple/Linear-inspired design language utilizing smooth spring physics (`motion/react`), zero-delay navigation transitions, and custom expandable card modal architecture.
* **Component Architecture**: Built entirely on reusable, strictly typed React Client and Server components. Component variants are managed securely with Class Variance Authority.
* **Performance Optimizations**: Fully responsive across breakpoints, utilizing Next.js layout optimization, native server component rendering, and custom scroll-lock behaviors while seamlessly supporting `prefers-reduced-motion`.
* **Interactive 3D Elements**: Uses Three.js and `react-three-fiber` to render high-performance, responsive WebGL globe visualizations directly within the UI without layout shifts.

## Architecture & Implementation Highlights

This project implements advanced Next.js design patterns, heavily leveraging the App Router for clean logic separation. Significant focus was placed on state-driven animations, handling complex hydration constraints across dark/light themes (`next-themes`), and building custom scroll controls. The layout cleanly abstracts logic across data-driven array mapping and strict UI components while enforcing the single-responsibility principle.

## AI Integrations

While I focus heavily on robust web and backend architectures, I design modern software for modularity to support AI implementation. This architecture seamlessly supports server-side data extraction, LLM integrations requiring strict structured JSON output parsing, and prompt-driven logic for scalable internal automations.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/LouisDev314/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
my-portfolio/
├── app/                  # Next.js App Router (pages & global layouts)
├── components/           # Reusable UI elements (animated modals, badges, layout grids)
├── public/               # Static assets & optimized resources
├── package.json          # Project configurations & dependency locking
└── eslint.config.mjs     # Strict, zero-any linting rules
```

## Performance & Optimization Notes

* Interactive components manage aggressive layout shifts during complex interactions (e.g. strict backdrop click-to-close, escape key handling, locked background body scrolling).
* Dynamic elements and heavy logic are selectively opted into Client boundaries only when necessary to preserve initial payload size and Server Component speed.
* Mobile-first responsive techniques guarantee smooth rendering of the Canvas 3D globe instances.

## Deployment

The application runs seamlessly with zero-config deployment on Vercel:

```bash
pnpm run build
```
Push the code to your `main` branch connected to a Vercel project to trigger automatic deployment pipelines across the global Edge network.

## Future Improvements

* Add progressive enhancement for dynamic components using React Suspense boundaries.
* Introduce an intelligent search tool leveraging underlying semantic matching to traverse project case studies.
* Finalize 100% WCAG accessibility compliances with comprehensive aria-tagging.

## Author

**Louis Chan**
* GitHub: [@LouisDev314](https://github.com/LouisDev314)
* LinkedIn: [in/your-profile](https://www.linkedin.com/in/lcch/)

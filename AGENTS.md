# AGENTS.md

## Project Purpose

This is Louis Chan's personal software engineering portfolio. It is optimized for recruiters, hiring managers, and engineers who are reviewing Louis's work for internship, new-grad, and full-stack engineering opportunities.

The site should quickly communicate that Louis is a full-stack developer building production-ready AI and e-commerce systems. Prioritize clear evidence of strong engineering judgment, polished UI/UX, and real production depth.

Key project highlights:

- **Paper Bridge**: AI/RAG document intelligence platform.
- **PopBox Studio**: Production-ready anime e-commerce platform with SSR storefront, Stripe checkout, guest checkout, inventory reservation, admin workflows, Supabase/PostgreSQL, and production deployment.

## Design Principles

- Clarity before decoration.
- Optimize for recruiter scan speed: strong hierarchy, short sections, and clear calls to action.
- Maintain a dark, premium, technical visual style.
- Use minimal but intentional motion; respect the user's attention.
- Avoid generic SaaS card grids, unnecessary visual clutter, and gimmicky effects.
- Keep important text readable as HTML. Do not hide critical claims only inside animations, images, canvas, or decorative components.

## Engineering Principles

- Make production-ready changes only.
- Prefer simple, explicit components over clever abstractions.
- Avoid unnecessary dependencies.
- Prefer React Server Components unless client-side interactivity is required.
- Keep TypeScript strict, explicit, and easy to review.
- Centralize reusable site, project, and social data where reasonable.
- Avoid duplicated placeholder content.
- Preserve accessibility and SEO behavior when changing UI.

## Performance Rules

- Use `next/image` for local images where practical.
- Always provide `width`/`height`, or use `fill` with stable parent dimensions.
- Avoid `next/image` aspect ratio warnings.
- Use `priority` only for true above-the-fold images.
- Lazy-load below-the-fold visuals.
- Respect `prefers-reduced-motion`.
- Avoid heavy client-side animation, especially for content that should be fast to scan.

## Accessibility Rules

- Use one semantic `h1` per page.
- Keep heading order logical.
- Ensure links and buttons are keyboard-accessible.
- Add `aria-label` to icon-only links and buttons.
- Maintain strong color contrast.
- Use meaningful `alt` text for content images.
- Use empty `alt=""` only for decorative images.

## SEO Rules

- Maintain the canonical URL: `https://www.louisdev314.com/`.
- Preserve Open Graph and Twitter metadata.
- Keep project descriptions readable in HTML.
- Do not hide important content only inside animations, canvas, or interaction-dependent UI.

## UI/UX Guidance

- The hero should immediately communicate who Louis is and what he builds.
- Project cards should explain what the project is, what problem it solves, its technical depth, and available live/GitHub actions.
- The About section should stay professional, concise, and scannable.
- Aceternity UI Terminal may be used when it improves developer-brand clarity, but it should not become gimmicky.
- Avoid major redesigns unless explicitly requested.

## Project Data Guidance

- PopBox Studio live URL must be `https://www.popboxstudio.com/`.
- Do not render empty demo, live, or repo buttons.
- Do not leave placeholder footer or project links.
- External links must use `target="_blank"` and `rel="noopener noreferrer"`.
- Do not introduce fake content, fake metrics, exaggerated claims, or unverifiable results.

## Verification

Before handing off changes, run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

If scripts differ, inspect `package.json` and use the closest equivalent commands. Report verification failures clearly instead of hiding them. The current repository also includes `pnpm check`, which runs lint, typecheck, and build together.

In the end of changes, provide a recommended commit message for the changes/differences.

## Change Discipline

- Keep diffs focused.
- Do not combine large visual redesigns with production-readiness fixes.
- Explain important trade-offs in the final handoff.
- Preserve existing working behavior unless there is a clear reason to change it.
- Do not modify app code when the request is only for documentation.

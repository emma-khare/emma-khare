## Emma's Portfolio Site

A modern, high-contrast white portfolio with expressive headline type and a page for every project.

### Pages (TanStack Start routes)

```
/                    Home — hero, featured projects, short intro
/about               Bio, photo, skills
/projects            Index grid of all projects
/projects/$slug      One page per project (cover, overview, role, process, gallery, links)
/resume              Embedded PDF viewer + download button
/contact             Email + social links (no form)
```

Each route gets its own `head()` with unique title + description for SEO. Shared header nav + footer in `__root.tsx`.

### Design system

- **Base**: white background, near-black text for AAA contrast on body copy
- **Accents**: pink, blue, purple — used for hover states, link underlines, project tags, hero accent shapes. Never as text on white unless darkened to meet AA.
- **Typography**: Abril Fatface for H1/H2 (character in headlines), Cabin for body and UI (legible)
- **Tokens** added to `src/styles.css` as oklch CSS vars: `--accent-pink`, `--accent-blue`, `--accent-purple`, plus gradient tokens for hero/decorative use
- **Motion**: subtle fade/slide on section enter, accent-color hover transitions on project cards

### Content sourcing

Once you upload the **portfolio PDF** and **resume**:
1. Parse the portfolio PDF to extract each project's title, description, role, images, and links — one project per detail page
2. Save the resume PDF to `/public/emma-resume.pdf`, embed it on `/resume` via `<iframe>` with a download button
3. Pull bio + skills from the resume for the About page
4. Extract any project cover images from the PDF into `src/assets/` and use them as hero images on detail pages

### Technical notes

- File-based routes under `src/routes/`. Dynamic project route: `src/routes/projects.$slug.tsx`
- Project data in `src/data/projects.ts` (typed array) — drives both the index and detail pages
- All images go through `src/assets/` as ES6 imports
- No backend needed (no contact form, no DB)

### Open items

- **Need the PDF + resume uploads** before I can populate real project content. If you want, I can scaffold the site with placeholder projects first and swap in real content once files arrive.

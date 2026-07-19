# Josiah Catabay — Portfolio

Personal portfolio for **Josiah Daniel D. Catabay**, a full-stack engineer focused on applied AI, backend systems, and data-driven products.

The site presents selected academic and professional work through concise case studies, measurable engineering outcomes, an experience timeline, and an evidence-based technical stack. It is designed for fast recruiter review while remaining responsive, accessible, and search-engine friendly.

## Highlights

- Recruiter-focused landing page with profile, project, experience, and stack summaries
- Detailed case studies for CropForecast, DagupanGovLedger, PyVidNote, and Greenovation
- Transparent academic-project and personal-role labels
- Responsive desktop and mobile project galleries with accessible lightboxes
- Dedicated Projects, Experience, and Stack routes
- Downloadable CV and Gmail, default-mail, and copy-email contact options
- Route-specific metadata, structured data, sitemap, and crawlable HTML
- Vercel-compatible routing and asset caching

## Technology

- React 19
- TypeScript
- Vite
- React Compiler
- CSS with responsive and print styles
- Oxlint
- Vercel

## Local Development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create and inspect a production build:

```bash
npm run build
npm run preview
```

Run static analysis:

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/       Images and other bundled media
├── components/   Reusable interface and layout components
├── config/       Portfolio content and project metadata
├── hooks/        Shared browser and routing behavior
├── pages/        Route-level page components
├── routes/       Application route composition
├── services/     Shared contact and external-service utilities
├── styles/       Global and application styles
└── types/        Shared TypeScript contracts
```

Portfolio content is centralized in `src/config/portfolio.ts`. Project screenshots are stored under `src/assets/images/projects`.

## Routes

| Route | Description |
| --- | --- |
| `/` | Recruiter-focused portfolio overview |
| `/projects` | Project case studies and media galleries |
| `/experience` | Work, academic engineering roles, and education |
| `/stack` | Technical skills with supporting project evidence |

Each route has its own HTML entry for meaningful content and metadata before client-side JavaScript loads.

## Deployment

The project is configured for Vercel through `vercel.json`.

1. Import the repository into Vercel.
2. Use the Vite framework preset.
3. Keep `npm run build` as the build command and `dist` as the output directory.
4. Deploy and verify all four routes through direct navigation and page refreshes.

If the production domain changes, update the canonical URLs, Open Graph URLs, `public/robots.txt`, and `public/sitemap.xml` before deployment.

## Contact

- Email: [catabayjosiah19@gmail.com](mailto:catabayjosiah19@gmail.com)
- LinkedIn: [linkedin.com/in/hosayah](https://linkedin.com/in/hosayah)
- GitHub: [github.com/Hosayah](https://github.com/Hosayah)

## License

The source code may be used for reference. Personal information, written content, project materials, screenshots, and branding remain the property of their respective owners and may not be reused without permission.

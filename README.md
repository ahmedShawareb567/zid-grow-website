# Zid Grow Website

A modern, headless Next.js website powered by Directus CMS. This project showcases a scalable architecture for building dynamic content-driven websites with server-side rendering and real-time CMS integration.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.9](https://nextjs.org) - React-based full-stack framework
- **CMS**: [Directus 20.3.0](https://directus.io) - Headless CMS platform
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com) - Unstyled, accessible component library
- **Animations**: [GSAP](https://gsap.com) - Professional-grade animation library
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com) - React carousel component
- **Database**: PostgreSQL (via Docker)
- **Package Manager**: [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 📁 Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout wrapper
│   ├── page.tsx             # Homepage
│   ├── [slug]/page.tsx      # Dynamic page routes
│   └── error.tsx, not-found.tsx, global-error.tsx
├── components/              # Reusable React components
│   ├── blocks/              # Page section components
│   │   ├── hero.tsx         # Hero section
│   │   ├── cta.tsx          # Call-to-action section
│   │   ├── faqs.tsx         # FAQ section
│   │   ├── pricing/         # Pricing card components
│   │   ├── feature/         # Feature card components
│   │   ├── testimonials/    # Testimonial card components
│   │   └── buttons.tsx      # Button blocks
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       ├── carousel.tsx
│       ├── scroll-reveal.tsx
│       └── empty.tsx
├── lib/                     # Utility functions and helpers
│   ├── directus-client.ts   # Directus SDK configuration
│   ├── image-loader.ts      # Custom image optimization
│   ├── constants.ts         # App constants
│   ├── maps.ts              # Data mapping utilities
│   └── utils.ts             # General utilities
├── hooks/                   # Custom React hooks
│   └── use-scroll-reveal.ts # Scroll animation hook
├── types/                   # TypeScript type definitions
│   └── index.d.ts           # Global type definitions
├── assets/                  # Static assets
│   ├── fonts.ts             # Font configuration
│   ├── globals.css          # Global styles
│   └── images/              # Image assets
├── api/                     # API utilities
│   └── pages.ts             # Page data fetching
├── public/                  # Static files served directly
├── directus/                # Directus CMS data
│   ├── db/                  # PostgreSQL database files
│   ├── uploads/             # CMS media uploads
│   ├── extensions/          # Directus extensions
│   └── cache/               # Cache directory
├── docker-compose.yml       # Docker services configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.mjs        # ESLint rules
└── package.json             # Project dependencies
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zid-grow-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server with Docker**

   ```bash
   pnpm run dev
   ```

   This command automatically:
   - Starts Docker containers (Directus + PostgreSQL)
   - Runs the Next.js development server on `http://localhost:3000`

### Available Scripts

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `pnpm run dev`       | Start dev server and Docker containers |
| `pnpm run build`     | Build for production                   |
| `pnpm run start`     | Start production server with Docker    |
| `pnpm run docker:up` | Start Docker containers                |
| `pnpm run lint`      | Run ESLint                             |
| `pnpm run lint:fix`  | Fix ESLint issues                      |
| `pnpm run format`    | Format code with Prettier              |
| `pnpm run ts:check`  | Type check TypeScript                  |
| `pnpm run prepare`   | Set up Husky git hooks                 |

## 🏗️ Architecture

### Content Management

- **Directus CMS** runs in Docker and manages all content
- **PostgreSQL** database stores all content and user data
- **Directus SDK** (`lib/directus-client.ts`) handles API communication

### Frontend

- **Next.js App Router** for file-based routing and SSR
- **Server Components** for data fetching from Directus
- **Tailwind CSS** for styling with custom animations
- **GSAP** for complex animations and scroll effects

### Pages & Routing

- Dynamic pages fetched from Directus using `[slug]` route
- Static pages like homepage, contact, etc. via `page.tsx` files
- Error handling with `error.tsx` and `not-found.tsx`

## 🎨 Components

### Page Sections (Blocks)

These are composable page building blocks:

- **Hero**: Large banner sections
- **CTA**: Call-to-action sections
- **FAQs**: Accordion-based FAQ sections
- **Pricing**: Pricing table with pricing cards
- **Features**: Feature cards in grid layout
- **Testimonials**: Customer testimonial cards with carousel
- **Buttons**: Interactive button blocks

### UI Components

Reusable components built with Radix UI:

- **Button**: Styled button component
- **Card**: Container component
- **Accordion**: Collapsible content
- **Carousel**: Image/content carousel
- **ScrollReveal**: Animated reveal on scroll
- **Empty**: Empty state component

## 📝 Styling & Animation

### Tailwind CSS

- Custom utility-first CSS framework
- PostCSS 4 integration for modern CSS features
- Tailwind Merge for class conflict resolution
- Custom animations via `tw-animate-css`

### GSAP Animations

- Scroll-triggered animations via `useScrollReveal` hook
- Smooth transitions and transforms
- Performance-optimized animations

## 🔌 Directus Integration

### Setup

The Directus client is configured in `lib/directus-client.ts`:

```typescript
// Access Directus API for content fetching
import { directusClient } from "@/lib/directus-client";
```

### Fetching Data

- Use the Directus SDK to query content
- Server-side rendering with `async` server components
- Real-time updates via Directus webhooks

## 🚢 Deployment

### Docker Containers

```bash
docker-compose -f docker-compose.yml up -d
```

### Build & Production

```bash
pnpm run build
pnpm run start
```

### Environment Variables

Create a `.env` file in the project root with the following configuration:

```dotenv
NEXT_PUBLIC_NODE_ENV=development

## Website configuration
NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
NEXT_PUBLIC_PORT=3000

## Directus configuration
SECRET=8ZET4uO4KvQ8f/+6SjSgKCgWQ54785r8NOnCyY0IFV0=
PUBLIC_KEY=Directus
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=123456
DB_CLIENT=pg
DB_HOST=db
DB_PORT=5432
ADMIN_PORT=8055
DB_DATABASE=directus
DB_USER=postgres
DB_PASSWORD=12345
DB_SSL=false
DB_SSL__REJECT_UNAUTHORIZED=false
WEBSOCKETS_ENABLED=true
CORS_ENABLED=true
CORS_ORIGIN=http://localhost:3000,http://127.0.0.1:3000
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC=http://localhost:3000
```

**Note**: For production deployments, update the following variables:

- `SECRET` - Generate a new secure secret key
- `ADMIN_PASSWORD` - Use a strong password
- `NEXT_PUBLIC_DIRECTUS_URL` - Point to your production Directus instance
- `CORS_ORIGIN` - Update to your production domain

## 📊 Image Optimization

Custom image loader configured in `next.config.ts` uses `lib/image-loader.ts` for optimized image serving from Directus.

## 🔍 Code Quality

- **ESLint**: Linting with Next.js and TypeScript support
- **Prettier**: Code formatting with import sorting and Tailwind class sorting
- **Husky**: Git hooks for pre-commit checks
- **Lint-Staged**: Run linters on staged files
- **TypeScript**: Full type safety across the project

### Commands

```bash
pnpm run lint          # Check for linting errors
pnpm run lint:fix      # Auto-fix linting issues
pnpm run format        # Format all code
pnpm run ts:check      # Type check entire project
```

## 🎯 Key Features

✅ Headless CMS integration with Directus  
✅ Server-side rendering with Next.js App Router  
✅ Responsive design with Tailwind CSS  
✅ Advanced animations with GSAP  
✅ Type-safe with TypeScript  
✅ Accessible components with Radix UI  
✅ Custom image optimization  
✅ Docker-based local development  
✅ SEO-friendly structure  
✅ Code quality tools (ESLint, Prettier, Husky)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Directus Documentation](https://docs.directus.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## 📄 License

This project is private. All rights reserved.

## 🤝 Contributing

When contributing to this project:

1. Run `pnpm run lint:fix` to fix linting issues
2. Run `pnpm run format` to format your code
3. Run `pnpm run ts:check` to ensure type safety
4. Commit messages follow conventional commits (enforced by Husky)

---

**Project Name**: Zid Grow Website  
**Version**: 0.1.0  
**Created**: 2025

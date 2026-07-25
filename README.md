# Lyon AI — Next.js Full-Stack & Static Export Template

![Lyon AI Logo](./public/lyon-ai-logo.png)

**Lyon AI** is a Next.js application template built with TypeScript, Tailwind CSS, Lucide Icons, and App Router API routes.

This template is configured to support both **Full-Stack Node.js Mode** (with backend API routes) and **Static File Export Mode** (`output: 'export'`) for deployment to GitHub Pages, Cloudflare Pages, Vercel, or AWS S3.

---

## ⚡ Key Features

- **Lyon AI Branding Component (`LyonLogo.tsx`)**: Responsive SVG logo inspired by the metallic speech bubble and neural circuit brain emblem.
- **Interactive AI Playground (`app/page.tsx`)**: Real-time console interface connected to `/api/chat` with client-side fallback handling for static environments.
- **Full-Stack API Routes**: Built-in backend endpoints (`/api/chat` and `/api/status`) for handling prompts, token calculations, and diagnostics.
- **Static Export Ready**: Fully compatible with Next.js static HTML export (`output: 'export'`).
- **Cyberpunk Theme**: Custom Tailwind CSS color extensions (neon cyan `#00f2fe`, vibrant purple `#9d4edd`, and dark slate backgrounds).

---

## 📁 Repository Structure

```text
lyon-ai-app/
├── app/
│   ├── api/
│   │   ├── chat/route.ts       # Full-stack AI chat endpoint
│   │   └── status/route.ts     # Health and diagnostics endpoint
│   ├── globals.css            # Tailwind CSS & custom glow styles
│   ├── layout.tsx             # Root layout & meta tags
│   └── page.tsx               # Main interactive dashboard & playground
├── components/
│   ├── LyonLogo.tsx           # Lyon AI emblem component
│   └── Navbar.tsx             # Top navigation header
├── public/                    # Static assets & logo images
├── next.config.js             # Next.js config (Static export settings)
├── tailwind.config.js         # Custom theme color extensions
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies & build scripts

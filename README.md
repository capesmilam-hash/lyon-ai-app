# Lyon AI - Next.js Full-Stack Application & Static Export Template

![Lyon AI Logo](./public/lyon-ai-logo.png)

Welcome to **Lyon AI**, a full-stack Next.js application template engineered with TypeScript, Tailwind CSS, Lucide Icons, and App Router API routes.

This repository is pre-configured to support both **Full-Stack Node.js Mode** (with backend API endpoints) and **Static File Export Mode** (`output: 'export'`) for hosting on GitHub Pages, Cloudflare Pages, Netlify, or AWS S3.

---

## 🚀 Key Features

- 🧠 **Lyon AI Branding & Logo Component**: Custom React SVG component (`LyonLogo.tsx`) inspired directly by the metallic circuit brain emblem.
- ⚡ **Interactive AI Playground**: Real-time terminal chat UI connected to `/api/chat` with client-side fallback for static export environments.
- 🛠️ **Full-Stack API Routes**: Built-in endpoints `/api/chat` and `/api/status` for processing prompts, token usage calculation, and health checks.
- 🌐 **Static Export Ready**: Configured for Next.js static HTML/CSS/JS export via `output: 'export'`.
- 🎨 **Custom Cyberpunk/Neural Theme**: Extended Tailwind color palette including neon cyan (`#00f2fe`), deep purple (`#9d4edd`), and dark metallic slate backgrounds.

---

## 📁 Project Structure

```
lyon-ai-app/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts       # Full-Stack API Route for AI Chat
│   │   └── status/
│   │       └── route.ts       # System Health API Route
│   ├── globals.css            # Tailwind & Custom Cyber Glow CSS
│   ├── layout.tsx             # Root Layout with Meta tags & Font
│   └── page.tsx               # Main Interactive Dashboard & Playground
├── components/
│   ├── LyonLogo.tsx           # Scalable Lyon AI Metallic Circuit Logo
│   └── Navbar.tsx             # Responsive Navigation Bar
├── public/                    # Static Assets & Logo Images
├── next.config.js             # Next.js Config (Static Export Toggle)
├── tailwind.config.js         # Custom Lyon AI Theme Extensions
├── tsconfig.json              # TypeScript Strict Config
└── package.json               # Dependencies & NPM Scripts
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the Lyon AI dashboard.

### 3. Production Full-Stack Build
To build and run the Node.js production server:
```bash
npm run build
npm run start
```

---

## 📦 Exporting as Static Files (`output: 'export'`)

To build the application as static HTML/JS files for static web hosting:

1. Open `next.config.js`.
2. Uncomment the line `output: 'export'`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     images: { unoptimized: true },
     output: 'export', // <--- Enable Static Export
   };

   module.exports = nextConfig;
   ```
3. Run the build command:
   ```bash
   npm run build
   ```
4. All static files will be compiled into the `/out` directory, ready to deploy to GitHub Pages, Cloudflare Pages, S3, or any web server.

---

## 🔒 License & Credits
Designed & Developed for **Lyon AI Platform** | Built with Next.js 14, React 18, and Tailwind CSS.

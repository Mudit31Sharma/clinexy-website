# Clinexy Website (Next.js Rebuild)

The all-in-one patient growth and practice management platform for solo healthcare professionals. This project has been rebuilt from the original Netlify HTML website to a modern, search-optimized Next.js application adhering to modern web standards.

---

## 🚀 Project Overview
Clinexy is designed from the ground up for solo practices, combining **Practice Operations** (online booking, telehealth, digital prescriptions, patient records, billing) and **Patient Growth** (website builder, local SEO, Google Business Profile, review collection, personal branding) in one flat plan with no commissions.

This project is built to the full Playbook v1.0 specifications, covering over 130 dynamic and static routes (Home, About, Features, Solutions, Compare, Pricing, Guides, Templates, Reports, Compliance, Security, Contact, and why-clinexy).

---

## 🛠️ Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Tooling**: Turbopack & TypeScript
- **Styling**: Custom CSS design system with variables, utility layout helper classes, and custom keyframe transitions (`app/globals.css`).
- **SEO & Search Optimization**: Built-in metadata configurations, canonical links, robot directives, sitemap configurations, and JSON-LD structured schemas.

---

## 📂 Folder Structure
```bash
clinexy/
├── app/                  # Next.js App Router root
│   ├── about/            # About page
│   ├── blog/             # Blog hub and dynamic slug page
│   ├── compare/          # Alternatives comparison matrices
│   ├── compliance/       # ABDM and data compliance frameworks
│   ├── contact/          # Support channels
│   ├── features/         # Features index and product specifics
│   ├── guides/           # SEO and clinic growth guides
│   ├── pricing/          # Regional pricing matrices
│   ├── product/          # Operations and growth details
│   ├── reports/          # 2026 No-show and Acquisition reports
│   ├── solutions/        # Solutions per specialty
│   ├── templates/        # Wording text recall templates
│   ├── why-clinexy/      # Platform differentiators
│   ├── globals.css       # Core stylesheet with tokens and animation keyframes
│   ├── layout.tsx        # Base template importing stylesheet and root elements
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # Dynamic robots.txt generation
│   └── sitemap.ts        # YYYY-MM-DD compliant sitemap.xml generator
├── components/           # Reusable React components
│   ├── ClientEffects.tsx # Replicates script.js reveals, transitions, and FAQ accordion collapses
│   ├── CTABanner.tsx     # Reusable call-to-action block
│   ├── Footer.tsx        # Global footer
│   └── Navbar.tsx        # Dynamic megamenu top navigation
├── public/               # Static assets
│   └── assets/           # Public images, logos, and icons
```

---

## ✨ Features & SEO Implementation
- **Dynamic Sitemap**: Next.js `sitemap.ts` generates clean XML entries for all routes, using uniform `YYYY-MM-DD` last-modified dates and custom priorities.
- **Dynamic Robots**: Next.js `robots.ts` implements crawl guidelines and references the correct sitemap URL path.
- **JSON-LD Schema**: Embedded globally and contextually across routes. This includes:
  - `Organization` & `WebSite` schema
  - `BreadcrumbList` navigation paths
  - `FAQPage` schema mapping to Accordions
  - `SoftwareApplication` & `Article` descriptors where applicable
- **Micro-Animations**: Replicated from the original HTML site's `script.js` behavior:
  - **Scroll Reveal**: Adds `.reveal` and `.in` classes to elements intersecting the viewport using `IntersectionObserver`.
  - **Grid Staggering**: Automatically staggers delay times for card grids and plan matrices.
  - **Accordion Collapses**: Automatically closes sibling items in an FAQ list when a new question details tag is toggled open.
  - **Floating Elements**: CSS Keyframe animations for background blobs and hero visual components.

---

## 💻 Development & Deployment

### 1. Installation & Local Development
Install dependencies and run the local development server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 2. Build & Compiles Validation
Create an optimized production build and check for type/lint errors:
```bash
npm run build
```

### 3. Vercel Deployment
To deploy this project to Vercel:
1. Push your changes to your Git repository (GitHub, GitLab, or Bitbucket).
2. Connect your Git repository in Vercel.
3. Keep default build settings (`next build`). Vercel will automatically parse the App Router and generate the production pages.
4. Set up custom domains if needed. Canonical targets are mapped to `https://www.clinexy.com/`.

---

## 🎨 Reusable Components Notes
- **`ClientEffects`**: Handled via React `useEffect` inside a Client Component. Replaces vanilla DOM listeners from `script.js` to prevent double-registrations or hydration mismatches.
- **`Navbar` & `Footer`**: Standard React components containing interactive elements. Megamenus use local React state (`useState`) to toggle panels.
- **`CTABanner`**: Multi-variant banner referencing demo requests, trial configurations, and on-brand colors.

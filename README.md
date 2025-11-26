# TechVision Solutions - Next.js Migration

This is the Next.js version of the TechVision Solutions website, migrated from the static HTML/CSS/JS implementation.

## Project Structure

```
techvision-nextjs/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with Header/Footer
│   │   ├── page.tsx         # Home page
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── process/        # Process page
│   │   ├── journey/        # Journey page
│   │   └── contact/        # Contact page
│   └── components/          # Reusable React components
│       ├── Header.tsx       # Navigation header
│       ├── Footer.tsx       # Site footer
│       ├── AnimatedBackground.tsx
│       └── ClientScripts.tsx  # Client-side interactions
├── public/
│   └── assets/              # Static assets (images, videos, icons)
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

### Static Export

This project is configured for static export. To generate static HTML:

```bash
npm run build
```

The output will be in the `out/` directory.

## Migration Status

### ✅ Completed
- [x] Project structure setup
- [x] Next.js configuration
- [x] Global styles migration (styles.css → globals.css)
- [x] Assets migration (images, videos, icons)
- [x] Header component with navigation
- [x] Footer component
- [x] Animated background
- [x] Client-side scripts (scroll animations, counters, parallax)
- [x] Home page with hero, about, services, and process sections

### 🚧 In Progress
- [ ] Complete About page content
- [ ] Complete Services page content
- [ ] Complete Process page content
- [ ] Complete Journey page content
- [ ] Complete Contact page with form handling

## Key Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Static Site Generation** (SSG) - can be deployed anywhere
- **Responsive Design** - works on all devices
- **Client-Side Animations** - scroll animations, parallax effects, counter animations
- **SEO Optimized** - proper meta tags and semantic HTML

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Static Hosts

After running `npm run build`, deploy the `out/` directory to:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe development
- **Google Fonts** - Poppins and Orbitron fonts
- **CSS** - Custom styles from original implementation

## Notes

- The original website's interactivity (scroll animations, parallax, counters) has been preserved using React hooks
- All assets are in the `public/assets` directory and referenced with absolute paths (`/assets/...`)
- The site is configured for static export, making it ideal for hosting on any static server
- Font families are loaded via Next.js font optimization

## Original Implementation

The original static website can be found in the `Implementation/` directory.

## License

© 2025 TechVision Solutions. All rights reserved.

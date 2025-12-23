# Tillet & Saunders - Premium Building & Construction Website

A hyper-professional website for Tillet & Saunders, a building company specializing in general housing work including kitchen fitting, extensions, flooring, plastering, and more.

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Playfair Display (headings) + Instrument Sans (body)
- **Language**: TypeScript

## 🎨 Design Features

- **Color Scheme**: Deep burgundy (#7A0025) with gold accents
- **Typography**: Elegant serif headings with clean sans-serif body text
- **Animations**: Smooth scroll-based and hover animations throughout
- **Responsive**: Fully responsive design for all screen sizes
- **Professional Aesthetic**: Modern luxury feel with attention to detail

## 📄 Pages

1. **Home** - Hero section, stats, services preview, featured projects, testimonials, and CTA
2. **About** - Company story, values, timeline, team members, and accreditations
3. **Services** - Detailed service descriptions with features and process explanation
4. **Projects** - Filterable portfolio with project modals and image galleries
5. **Contact** - Contact form, company information, map, and FAQs

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## 🎯 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-burgundy: #7A0025;
  --color-burgundy-dark: #5A001C;
  --color-burgundy-light: #9A0030;
  /* ... other colors */
}
```

### Content
All content is currently using placeholder/dummy data. To update:
- Contact information in `Header.tsx`, `Footer.tsx`, and `contact/page.tsx`
- Services in `page.tsx` (home) and `services/page.tsx`
- Projects in `projects/page.tsx`
- Team members in `about/page.tsx`
- Testimonials in `page.tsx` (home)

### Images
Replace Unsplash placeholder images with actual project photography for production use.

## 📝 License

© Tillet & Saunders. All rights reserved.

# 🍳 Fly Kitchen - Cloud Kitchen Platform

A modern, bilingual (Arabic/English) cloud kitchen platform built with Next.js, offering comprehensive solutions for restaurant owners looking to expand their delivery operations across Saudi Arabia.

## ✨ Features

### 🌐 Multilingual Support

- **Arabic (RTL)** and **English (LTR)** language support
- Dynamic text direction with proper RTL layout handling
- Localized content with comprehensive translation system

### 🎨 Modern Design

- **Glassmorphic UI** with backdrop blur effects
- **Gradient overlays** and **animated floating elements**
- **Dark/Light theme** support with custom CSS variables
- **Responsive design** optimized for all device sizes
- **Micro-interactions** and **hover animations**

### 📱 Responsive Components

- **Hero Section** - Eye-catching landing with animated slogans
- **Features Section** - Highlight key platform benefits
- **Solutions Section** - Problems solved with icon-based list layout
- **Branches Section** - Geographic coverage with Google Maps integration
- **About Us Page** - Company story, statistics, and team information
- **FAQ Page** - Accordion-style frequently asked questions
- **Join/Login Pages** - User registration and authentication forms

### 🔧 Technical Features

- **Server-side rendering** with Next.js App Router
- **Internationalization** with next-intl
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Custom animations** with CSS keyframes
- **SEO optimized** with proper meta tags
- **Accessibility features** with ARIA attributes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yussif20/fly-kitchen.git
   cd fly-kitchen
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fly-kitchen/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── about/          # About us page
│   │   ├── branches/       # Branches listing page
│   │   ├── faq/           # FAQ page
│   │   ├── join/          # Registration page
│   │   ├── login/         # Login page
│   │   ├── solutions/     # Solutions page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles and theme variables
│   └── favicon.ico
├── components/            # Reusable UI components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── MobileNavigation.tsx
│   ├── LanguageSelector.tsx
│   ├── Logo.tsx
│   └── ThemeSwitcher.jsx
├── sections/              # Main page sections
│   ├── Hero.tsx          # Hero section component
│   ├── Features.tsx      # Features section component
│   ├── Solutions.tsx     # Solutions section component
│   ├── Branches.tsx      # Branches section component
│   └── index.ts          # Barrel exports
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── i18n/                # Internationalization config
│   ├── request.ts
│   └── routing.ts
├── public/              # Static assets
│   ├── hero.webp
│   ├── branches.webp
│   ├── solutions.webp
│   ├── map.svg
│   └── solutions/       # Solution icons
└── middleware.ts        # Next.js middleware for i18n
```

## 🎨 Theming

### CSS Variables

The project uses CSS custom properties for consistent theming:

```css
:root {
  --theme-primary-yellow: #f2c928;
  --theme-dark-bg: #1a1a1a;
  /* ... more variables */
}
```

### Tailwind Configuration

Custom colors are defined in `tailwind.config.ts`:

- `primary-yellow`: Main brand color
- `dark-bg`: Dark theme background
- Custom animations: `pulse-slow`, `pulse-slower`

## 🌍 Internationalization

### Languages

- **English** (en) - Default locale
- **Arabic** (ar) - RTL support

### Translation Structure

```json
{
  "Header": { "home": "Home", "about": "About" },
  "Hero": { "title": "Welcome", "subtitle": "Description" },
  "Features": { "feature1": "...", "feature2": "..." },
  "Solutions": { "title": "Problems we solve" },
  "Branches": { "title": "Our Branches" },
  "About": { "mission": "Our Mission" },
  "FAQ": { "question1": "How does it work?" }
}
```

### Adding New Languages

1. Create new translation file in `messages/[locale].json`
2. Add locale to `i18n/routing.ts`
3. Update middleware configuration

## 🎯 Key Components

### Sections Architecture

Reusable section components in `/sections`:

- **Modular design** - Each section is self-contained
- **Barrel exports** - Clean imports via `@/sections`
- **Consistent props** - Language and theme aware

### Form Handling

- **Client-side validation** with real-time feedback
- **File upload support** for documents
- **Accessibility** with proper ARIA attributes
- **Loading states** and **error handling**

### Navigation

- **Responsive design** with mobile hamburger menu
- **Active state indication** for current page
- **Language switcher** with flag icons
- **Theme toggle** for dark/light mode

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting (if configured)

### Performance Optimizations

- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **Lazy loading** for images and components
- **Tree shaking** for smaller bundle sizes

## 🌟 Features in Detail

### Hero Section

- **Animated slogans** with typewriter effect
- **Glassmorphic design** with backdrop blur
- **Call-to-action** buttons with hover animations
- **Responsive imagery** with WebP format

### Solutions Section

- **Icon-based list** instead of cards for better readability
- **Hover effects** with smooth translations
- **RTL-aware animations** for Arabic layout
- **Problem-solution pairing** with clear hierarchy

### Branches Section

- **Interactive map** integration with Google Maps
- **Regional organization** of locations
- **Click-to-navigate** functionality for each branch
- **Decorative elements** that respect text direction

### Forms (Join/Login)

- **Multi-step validation** with real-time feedback
- **File upload** with drag-and-drop support
- **Password visibility** toggle
- **Loading states** during submission

## 🚀 Deployment

### Build Process

```bash
npm run build
```

### Environment Variables

Create `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Deployment Platforms

- **Vercel** (recommended) - Optimized for Next.js
- **Netlify** - Alternative with good Next.js support
- **Custom server** - VPS or dedicated hosting

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow **TypeScript** best practices
- Maintain **accessibility** standards
- Ensure **RTL compatibility** for new features
- Add **translations** for both languages
- Test on **multiple devices** and browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for utility-first styling
- **next-intl** for internationalization support
- **Vercel** for hosting and deployment platform

## 📞 Support

For support and questions:

- **Email**: [Your email]
- **GitHub Issues**: [Repository Issues](https://github.com/Yussif20/fly-kitchen/issues)
- **Documentation**: [Project Wiki](https://github.com/Yussif20/fly-kitchen/wiki)

---

Built with ❤️ for the Saudi Arabian cloud kitchen market

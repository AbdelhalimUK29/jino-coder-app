# JinoCoder 🦸‍♂️ - The Anime Coding Dojo

> **Learn to code with legendary super heroes. Level up your coding journey with the guidance of anime programming hero JinoCoder.**

A professionally designed, cyberpunk-themed landing page for an immersive AI-powered coding education platform where iconic anime heroes teach programming concepts and guide users on their journey from apprentice to coding master.

---

## 🌟 What is JinoCoder?

JinoCoder is a revolutionary coding education platform combining:

- **🎮 Immersive Super Hero Theme** - Learn alongside legendary anime programming heroes
- **📈 Gamified Progression** - Level up as you master new concepts
- **🏆 Structured Learning Paths** - Clear tiers from Beginner to Grandmaster
- **⚡ Modern Tech Stack** - Built with cutting-edge frameworks
- **🎨 Cyberpunk Aesthetic** - Futuristic, high-impact visual design

The platform transforms traditional coding education into an action-packed adventure where every lesson, exercise, and milestone is framed within a compelling anime narrative arc.

---

## 🚀 Tech Stack

### Core Framework
- **Next.js 16** - React framework with server components
- **React 19** - Latest React features and hooks
- **TypeScript** - Type-safe development

### Frontend & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 13** - Smooth animations and transitions
- **Lucide React** - Beautiful, lightweight icons

### Typography
- **Inter** - Clean, modern sans-serif
- **Space Grotesk** - Technical yet approachable
- **Orbitron** - Futuristic display font
- **JetBrains Mono** - Coding-focused monospaced font

---

## 📦 Getting Started

### Prerequisites

- Node.js 20+ and npm/pnpm/yarn/bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd jino-coder

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build

```bash
# Create production build
npm run build
# or
pnpm build
# or
yarn build
# or
bun build

# Start production server
npm start
# or
pnpm start
# or
yarn start
# or
bun start
```

### Lint

```bash
# Run ESLint
npm run lint
# or
pnpm lint
# or
yarn lint
# or
bun lint
```

---

## 🏗️ Project Structure

```
jino-coder/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx            # Root layout with font configuration
│   └── page.tsx              # Main page composition
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── hero-section.tsx      # Hero section with JinoCoder showcase
│   ├── workspace-section.tsx # Interactive workspace preview
│   ├── training-section.tsx  # Learning modules preview
│   ├── pillars-section.tsx   # Platform core pillars
│   ├── path-section.tsx      # Learning journey visualization
│   ├── footer.tsx            # Page footer
│   └── ui/
│       └── button.tsx        # Reusable button component
├── public/
│   └── assets/               # Hero images and mockups
├── .claude/                  # Claude Code configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
├── eslint.config.mjs         # ESLint configuration
└── postcss.config.mjs        # PostCSS configuration
```

---

## 🎨 Design Philosophy

### Visual Style
- **Cyberpunk Aesthetic** - Neon accents, dark backgrounds, futuristic UI
- **Strong Contrast** - High readability with vibrant accent colors
- **Dynamic Typography** - Scale, weight, and spacing create visual hierarchy
- **Micro-interactions** - Hover states, smooth transitions, animated elements

### Motion & Animation
- Framer Motion for buttery-smooth component animations
- Scroll-triggered reveal effects
- Interactive cursor and hover states
- Progressive content loading animations

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Respects `prefers-reduced-motion`

---

## 🎯 Key Features

### 🦸 Hero Section
- Bold, captivating headline
- 3D hero character showcase
- Key value propositions with animated counters
- Primary CTA with hover effects

### 📊 Learning Modules
- Interactive learning path visualization
- Skill tier progression display
- Module previews with categorization
- Time commitment estimates

### 💻 Workspace Preview
- Real-time code editor mockup
- Split-screen design showing IDE features
- Command palette demonstration
- File explorer and terminal

### 🏆 Core Pillars
- Gamification highlights
- Expert hero mentoring
- Community features
- Progress tracking

### 🗺️ Learning Journey
- Step-by-step curriculum overview
- Challenge and mastery levels
- Stats and achievements display
- Scholarly community integration

---

## 🚧 Roadmap

### Phase 1 - Foundation ✅
- Landing page MVP
- Core hero section
- Responsive design
- Cyberpunk visual identity

## 🔧 Configuration

### Fonts
The project uses four Google Fonts with CSS variables for easy customization:

```css
--font-inter
--font-space-grotesk
--font-orbitron
--font-jetbrains-mono
```

### Colors (Tailwind theme)
- Primary: Neon blue/purple accents
- Background: Deep dark themes
- Text: High-contrast white/light gray
- Emphasis: Neon gradients and glows

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🌐 Deployment

### Vercel (Recommended)

The simplest way to deploy to production:

```bash
# 1. Push code to GitHub
git push origin main

# 2. Import project to Vercel
# Visit https://vercel.com/new and import your repository

# 3. Vercel automatically detects Next.js
# No additional configuration needed
```

### Manual Deployment

Build the application and serve with Node.js:

```bash
# Build
npm run build

# Start production server
npm start
```

Or configure your preferred web server (nginx, Apache, etc.) to serve the `.next` directory.

---

## 📝 Development Guidelines

### Component Structure
- All components are represented by PascalCase
- Props are typed with explicit TypeScript interfaces
- Components are organized by feature/section
- Reusable UI elements are in `components/ui/`

### State Management
- Client components use `useState` and `useEffect` hooks
- Avoid prop-drilling with strategic state lifting
- prefer local state over global state unless shared across components

### Styling
- Use Tailwind CSS utility classes
- Custom animations are in component modules
- Design tokens are defined in `globals.css`
- Avoid inline styles — use CSS classes

### Code Quality
- ESLint enforces React best practices
- TypeScript provides type safety
- Follow [ECC Coding Standards](./rules/ecc)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

Follow conventional commits:

```
<type>: <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Anime Heroes** - The legendary characters who inspire coding excellence
- **Next.js Team** - For the incredible React framework
- **Tailwind CSS** - For utility-first CSS power
- **Framer Motion** - For beautiful animations
- **Lucide Icons** - For elegant iconography

---

## 📞 Contact

For questions or support:
- **Project**: [Project Repository Link]
- **Documentation**: [Documentation Link]
- **Issues**: [GitHub Issues Link]

---

<div align="center">

**🦸‍♂️ Level Up Your Coding Journey with JinoCoder!**

[Start Learning](#getting-started) · [View Demo](#whatis-jinocoder) · [Contribute](#contributing)

Made with ❤️ by the JinoCoder Team

</div>
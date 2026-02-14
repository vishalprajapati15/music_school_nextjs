# 🎵 Music School - Modern Music Education Platform

A cutting-edge music education platform built with Next.js 16, featuring stunning UI animations, 3D card effects, and an immersive learning experience for music enthusiasts of all levels.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Features

✨ **Modern UI/UX**
- Gradient backgrounds and smooth transitions
- 3D card effects with hover animations
- Animated meteors and wavy backgrounds
- Infinite scrolling testimonials
- Grid pattern backgrounds

🎓 **Course Management**
- Featured and regular course listings
- Advanced filtering system
- Detailed course information with pricing
- Interactive 3D course cards

📧 **Contact System**
- Beautiful contact form with validation
- Real-time form state management
- Animated meteor effects
- Office hours and location info

👨‍🏫 **Instructor Showcase**
- Animated instructor cards
- Interactive tooltips
- Wavy background effects

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe development

### Styling & Animations
- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion (Framer Motion) 12.34.0** - Advanced animations
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Additional Libraries
- **simplex-noise 4.0.3** - Wavy background animations

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS transformations
- **TypeScript** - Static type checking

---

## 📁 Folder Structure

```
music/
├── public/                          # Static assets
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── contact/               # Contact page
│   │   │   └── page.tsx
│   │   ├── courses/               # Courses page
│   │   │   └── page.tsx
│   │   ├── globals.css            # Global styles & animations
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   │
│   ├── components/                 # React components
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── 3d-card.tsx       # 3D card effect
│   │   │   ├── animated-tooltip.tsx
│   │   │   ├── background-gradient.tsx
│   │   │   ├── card-hover-effect.tsx
│   │   │   ├── GridBackground.tsx
│   │   │   ├── infinite-moving-cards.tsx
│   │   │   ├── meteors.tsx       # Meteor animation
│   │   │   ├── moving-border.tsx
│   │   │   ├── navbar-menu.tsx
│   │   │   ├── Spotlight.tsx
│   │   │   ├── sticky-scroll-reveal.tsx
│   │   │   └── wavy-background.tsx
│   │   │
│   │   ├── FeaturedCourses.tsx    # Featured courses section
│   │   ├── Footer.tsx             # Footer component
│   │   ├── HeroSection.tsx        # Hero section
│   │   ├── Instructor.tsx         # Instructor showcase
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── TestimonialCards.tsx   # Testimonials section
│   │   ├── UpComingWebinar.tsx    # Webinars section
│   │   └── WhyChooseUs.tsx        # Features section
│   │
│   ├── data/                       # Static data
│   │   └── music_courses.json     # Course catalog
│   │
│   └── utils/                      # Utility functions
│       └── cn.ts                  # className utility
│
├── .gitignore
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md
```

---

## 🎨 Key Components

### UI Components

| Component | Description |
|-----------|-------------|
| `3d-card.tsx` | Interactive 3D card with tilt effect |
| `animated-tooltip.tsx` | Animated tooltips for instructor cards |
| `background-gradient.tsx` | Animated gradient backgrounds |
| `card-hover-effect.tsx` | Hover effects for cards |
| `GridBackground.tsx` | Grid pattern background |
| `infinite-moving-cards.tsx` | Auto-scrolling testimonials |
| `meteors.tsx` | Shooting meteor animation |
| `moving-border.tsx` | Animated border button |
| `navbar-menu.tsx` | Dropdown navigation menu |
| `Spotlight.tsx` | Hero spotlight effect |
| `sticky-scroll-reveal.tsx` | Scroll-based reveal animations |
| `wavy-background.tsx` | Animated wavy background using simplex noise |

### Page Components

- **FeaturedCourses** - Displays featured courses with gradient cards
- **Footer** - Comprehensive footer with links and newsletter
- **HeroSection** - Landing hero with spotlight animation
- **Instructor** - Team showcase with wavy background
- **Navbar** - Responsive navigation with dropdown menus
- **TestimonialCards** - Student testimonials with grid background
- **UpComingWebinar** - Webinar listings with hover cards
- **WhyChooseUs** - Features section with scroll reveal

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd music
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

---

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 🎯 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, featured courses, testimonials |
| `/courses` | All courses with filtering (all/featured) |
| `/contact` | Contact form with meteor animations |

---

## 🎨 Design Features

### Animations
- **Meteor Effects** - Shooting stars background
- **3D Cards** - Interactive tilt and depth effects
- **Wavy Background** - Noise-based wave animations
- **Infinite Scroll** - Auto-scrolling testimonials
- **Spotlight** - Hero section light effect
- **Gradient Backgrounds** - Smooth color transitions

### Color Scheme
- Primary: Teal (#14b8a6)
- Secondary: Blue (#3b82f6)
- Accent: Purple (#a855f7)
- Background: Black/Gray-900
- Text: White/Gray-400

---

## 🔧 Configuration

### Tailwind CSS
Custom animations and utilities are defined in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles and keyframes

### TypeScript
Strict mode enabled with modern ES features.

---

## 📊 Course Data Structure

Courses are stored in `src/data/music_courses.json`:

```json
{
  "id": 1,
  "title": "Course Title",
  "slug": "course-slug",
  "description": "Course description",
  "price": 99.99,
  "instructor": "Instructor Name",
  "isFeatured": true,
  "image": "/path/to/image",
  "ogImage": "https://image-url"
}
```

---

## 👨‍💻 Author

**Vishal Prajapati**

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Aceternity UI](https://ui.aceternity.com/) - UI Components Inspiration

---

## 📧 Support

For support, email vishalprajapati3266@gmail.com or open an issue in the repository.

---

**Made with ❤️ by Vishal Prajapati**

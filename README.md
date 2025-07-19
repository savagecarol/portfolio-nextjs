# 🚀 Kartikeya Sharma - Full Stack Developer Portfolio

A modern, SEO-optimized portfolio website showcasing my work as a Full Stack Developer and Flutter Expert. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 SEO Optimized
- **Meta Tags**: Comprehensive meta descriptions, Open Graph, and Twitter Cards
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap**: Dynamic sitemap generation for all sections
- **Robots.txt**: Proper crawling instructions for search engines
- **Performance Monitoring**: Core Web Vitals tracking (LCP, FID, CLS, TTFB)
- **Semantic HTML**: Proper heading hierarchy and accessibility features
- **Image Optimization**: Next.js Image component with lazy loading and WebP support

### 🛠️ Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Email**: Nodemailer with Gmail SMTP
- **APIs**: YouTube Data API v3, GitHub API
- **Deployment**: Vercel-ready

### 📱 Modern Features
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: System preference detection
- **PWA Ready**: Web manifest and service worker support
- **Performance**: Optimized bundle size and loading
- **Accessibility**: WCAG 2.1 AA compliant
- **Contact Form**: Functional email sending with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gmail account for contact form

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/savagecarol/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=recipient@example.com
   
   # YouTube API
   YOUTUBE_API_KEY=your-youtube-api-key
   
   # GitHub API (optional)
   GITHUB_TOKEN=your-github-token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/                 # API routes
│   │   │   ├── contact/         # Contact form endpoint
│   │   │   ├── youtube/         # YouTube API integration
│   │   │   └── github/          # GitHub API integration
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with SEO
│   │   ├── page.tsx             # Home page
│   │   ├── robots.ts            # Robots.txt generation
│   │   └── sitemap.ts           # Sitemap generation
│   ├── components/              # React components
│   │   ├── Hero.tsx             # Landing section
│   │   ├── About.tsx            # About section
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── Projects.tsx         # Projects grid
│   │   ├── YouTube.tsx          # YouTube integration
│   │   ├── GitHub.tsx           # GitHub integration
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── StructuredData.tsx   # SEO structured data
│   │   ├── SEOImage.tsx         # Optimized images
│   │   └── PerformanceMonitor.tsx # Performance tracking
│   ├── config/                  # Configuration files
│   └── lib/                     # Utility functions
├── public/                      # Static assets
│   ├── site.webmanifest         # PWA manifest
│   └── favicon.ico              # Favicon
└── package.json                 # Dependencies
```

## 🔧 Configuration

### SEO Settings
Update the following files for your domain:
- `src/app/layout.tsx` - Meta tags and structured data
- `src/app/sitemap.ts` - Sitemap URLs
- `src/components/StructuredData.tsx` - Schema markup

### Email Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Add credentials to `.env.local`

### YouTube Integration
1. Create a Google Cloud Project
2. Enable YouTube Data API v3
3. Generate API key and add to `.env.local`

## 📊 Performance

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms

### Optimization Features
- **Image Optimization**: WebP format, lazy loading, responsive sizes
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: Static generation with ISR
- **CDN**: Global edge network deployment

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 📈 SEO Checklist

### ✅ Implemented
- [x] Meta tags and descriptions
- [x] Open Graph and Twitter Cards
- [x] Structured data (JSON-LD)
- [x] Sitemap generation
- [x] Robots.txt
- [x] Semantic HTML structure
- [x] Image optimization
- [x] Performance monitoring
- [x] Mobile responsiveness
- [x] Fast loading times
- [x] Accessibility features

### 🔄 To Do
- [ ] Google Analytics integration
- [ ] Search console verification
- [ ] Social media preview images
- [ ] Blog section for content marketing
- [ ] RSS feed generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: workwithkartikeyasharma@gmail.com
- **LinkedIn**: [Kartikeya Sharma](https://linkedin.com/in/savagecarol)
- **GitHub**: [@savagecarol](https://github.com/savagecarol)
- **YouTube**: [@savagecarol](https://youtube.com/@savagecarol)

---

⭐ **Star this repository if you found it helpful!**

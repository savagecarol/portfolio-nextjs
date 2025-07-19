import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: {
    default: "Kartikeya Sharma - Full Stack Engineer & Tech Educator",
    template: "%s | Kartikeya Sharma"
  },
  description: "Full Stack Engineer and Tech Educator with expertise in backend architecture, system design, gRPC, Git, and AI/ML. Creating in-depth educational content on YouTube (@savagecarol) with 100+ videos helping developers upskill.",
  keywords: [
    "Full Stack Engineer",
    "Tech Educator", 
    "Backend Architecture",
    "System Design",
    "gRPC",
    "Git",
    "AI/ML",
    "YouTube Educator",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Software Engineer",
    "Microservices",
    "API Design"
  ],
  authors: [{ name: "Kartikeya Sharma", url: "https://github.com/savagecarol" }],
  creator: "Kartikeya Sharma",
  publisher: "Kartikeya Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://savagecarol.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savagecarol.dev",
    title: "Kartikeya Sharma - Full Stack Engineer & Tech Educator",
    description: "Full Stack Engineer and Tech Educator with expertise in backend architecture, system design, gRPC, Git, and AI/ML. Creating in-depth educational content on YouTube (@savagecarol) with 100+ videos helping developers upskill.",
    siteName: "Kartikeya Sharma Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kartikeya Sharma - Full Stack Engineer & Tech Educator Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikeya Sharma - Full Stack Engineer & Tech Educator",
    description: "Full Stack Engineer and Tech Educator with expertise in backend architecture, system design, gRPC, Git, and AI/ML. Creating in-depth educational content on YouTube (@savagecarol) with 100+ videos helping developers upskill.",
    creator: "@savagecarol",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#f97316',
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googleapis.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kartikeya Sharma",
              "alternateName": "SavageCarol",
              "url": "https://savagecarol.dev",
              "image": "https://savagecarol.dev/og-image.png",
              "sameAs": [
                "https://github.com/savagecarol",
                "https://linkedin.com/in/savagecarol",
                "https://youtube.com/@savagecarol",
                "https://medium.com/@savagecarol"
              ],
              "jobTitle": "Full Stack Engineer & Tech Educator",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "Backend Architecture",
                "System Design",
                "gRPC",
                "Git",
                "AI/ML",
                "React",
                "Next.js", 
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Microservices",
                "API Design"
              ],
              "description": "Full Stack Engineer and Tech Educator with expertise in backend architecture, system design, gRPC, Git, and AI/ML. Creating in-depth educational content on YouTube (@savagecarol) with 100+ videos helping developers upskill."
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kartikeya Sharma Portfolio",
              "url": "https://savagecarol.dev",
              "logo": "https://savagecarol.dev/logo.png",
              "sameAs": [
                "https://github.com/savagecarol",
                "https://linkedin.com/in/savagecarol"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <StructuredData />
          <PerformanceMonitor />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

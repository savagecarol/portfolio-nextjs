import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import PerformanceMonitor from "@/components/PerformanceMonitor";

export const metadata: Metadata = {
  title: {
    default: "Kartikeya Sharma - Full Stack Developer & Flutter Expert",
    template: "%s | Kartikeya Sharma"
  },
  description: "Full Stack Developer and Flutter Expert with 3+ years of experience. Specializing in React, Next.js, TypeScript, and mobile app development. Creating scalable, modern web and mobile applications.",
  keywords: [
    "Full Stack Developer",
    "Flutter Developer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Software Engineer",
    "UI/UX Developer",
    "Cross-platform Development"
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
    title: "Kartikeya Sharma - Full Stack Developer & Flutter Expert",
    description: "Full Stack Developer and Flutter Expert with 3+ years of experience. Specializing in React, Next.js, TypeScript, and mobile app development.",
    siteName: "Kartikeya Sharma Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kartikeya Sharma - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikeya Sharma - Full Stack Developer & Flutter Expert",
    description: "Full Stack Developer and Flutter Expert with 3+ years of experience. Specializing in React, Next.js, TypeScript, and mobile app development.",
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
              "image": "https://savagecarol.dev/profile-image.jpg",
              "sameAs": [
                "https://github.com/savagecarol",
                "https://linkedin.com/in/savagecarol",
                "https://youtube.com/@savagecarol",
                "https://medium.com/@savagecarol"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "React",
                "Next.js", 
                "Flutter",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Mobile App Development",
                "Web Development"
              ],
              "description": "Full Stack Developer and Flutter Expert with 3+ years of experience specializing in modern web and mobile technologies."
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
        <StructuredData />
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}

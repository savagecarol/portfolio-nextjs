export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://savagecarol.dev/#website",
        "url": "https://savagecarol.dev",
        "name": "Kartikeya Sharma Portfolio",
        "description": "Full Stack Developer and Flutter Expert Portfolio",
        "publisher": {
          "@id": "https://savagecarol.dev/#person"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://savagecarol.dev/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://savagecarol.dev/#person",
        "name": "Kartikeya Sharma",
        "alternateName": "SavageCarol",
        "url": "https://savagecarol.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://savagecarol.dev/profile-image.jpg",
          "width": 400,
          "height": 400
        },
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
        "description": "Full Stack Developer and Flutter Expert with 3+ years of experience specializing in modern web and mobile technologies.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Delhi Technological University"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://savagecarol.dev/#webpage",
        "url": "https://savagecarol.dev",
        "name": "Kartikeya Sharma - Full Stack Developer & Flutter Expert",
        "description": "Full Stack Developer and Flutter Expert with 3+ years of experience. Specializing in React, Next.js, TypeScript, and mobile app development.",
        "isPartOf": {
          "@id": "https://savagecarol.dev/#website"
        },
        "about": {
          "@id": "https://savagecarol.dev/#person"
        },
        "author": {
          "@id": "https://savagecarol.dev/#person"
        },
        "breadcrumb": {
          "@id": "https://savagecarol.dev/#breadcrumb"
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://savagecarol.dev"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://savagecarol.dev/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://savagecarol.dev"
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://savagecarol.dev/#creativework",
        "name": "Portfolio Website",
        "author": {
          "@id": "https://savagecarol.dev/#person"
        },
        "creator": {
          "@id": "https://savagecarol.dev/#person"
        },
        "dateCreated": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "genre": "Portfolio",
        "keywords": "Full Stack Developer, Flutter Developer, React Developer, Next.js Developer, TypeScript Developer, Mobile App Developer, Web Developer"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 
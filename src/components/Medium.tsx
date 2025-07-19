'use client';

import { useEffect, useState } from 'react';

interface MediumArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
  categories: string[];
}

export default function Medium() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/medium');
        if (!response.ok) {
          throw new Error('Failed to fetch Medium data');
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        // Fallback to placeholder data
        setArticles([
          {
            title: 'Top Article from karthiksharma1411.medium.com',
            link: 'https://karthiksharma1411.medium.com/',
            description: 'Amazing article about technology and development from your Medium blog.',
            pubDate: new Date().toISOString(),
            author: 'Karthik Sharma',
            categories: ['Technology', 'Development']
          },
          {
            title: 'Another Great Article',
            link: 'https://karthiksharma1411.medium.com/',
            description: 'More insightful content about modern web development and best practices.',
            pubDate: new Date().toISOString(),
            author: 'Karthik Sharma',
            categories: ['Web Development', 'Best Practices']
          },
          {
            title: 'Must Read Content',
            link: 'https://karthiksharma1411.medium.com/',
            description: 'Essential reading for developers interested in cutting-edge technologies.',
            pubDate: new Date().toISOString(),
            author: 'Karthik Sharma',
            categories: ['Programming', 'Innovation']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <section id="medium" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Medium Blog
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Loading your latest articles from karthiksharma1411.medium.com...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="medium" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Medium Blog
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Read my latest articles and insights on technology, development, and more
          </p>
        </div>

        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              {error} - Showing placeholder content
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const cleanDescription = stripHtml(article.description);
            const readingTime = getReadingTime(cleanDescription);
            
            return (
              <div key={index} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 bg-yellow-primary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-black mb-4 line-clamp-3">
                    {cleanDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black">{readingTime}</span>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-600 font-medium transition-colors"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-black">
                    <span>{formatDate(article.pubDate)}</span>
                    <span>By {article.author}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://karthiksharma1411.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-yellow-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Follow on Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
} 
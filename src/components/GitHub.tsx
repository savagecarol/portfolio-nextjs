'use client';

import { useEffect, useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  private: boolean;
  updated_at: string;
}

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  following: number;
}

interface LanguageStat {
  name: string;
  percentage: number;
}

export default function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [languageStats, setLanguageStats] = useState<LanguageStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const data = await response.json();
        
        setProfile(data.profile);
        setRepos(data.repos);
        setStats(data.stats);
        setLanguageStats(data.languageStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        // Fallback to placeholder data
        setProfile({
          login: 'savagecarol',
          name: 'Your Name',
          bio: 'Full Stack Developer & Content Creator',
          avatar_url: '/api/placeholder/avatar',
          public_repos: 50,
          followers: 100,
          following: 50,
          html_url: 'https://github.com/savagecarol'
        });
        setRepos([
          {
            id: 1,
            name: 'portfolio-website',
            description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
            html_url: 'https://github.com/savagecarol/portfolio-website',
            stargazers_count: 15,
            forks_count: 5,
            language: 'JavaScript',
            private: false,
            updated_at: new Date().toISOString()
          },
          {
            id: 2,
            name: 'awesome-project',
            description: 'An amazing project showcasing modern web development techniques.',
            html_url: 'https://github.com/savagecarol/awesome-project',
            stargazers_count: 25,
            forks_count: 8,
            language: 'TypeScript',
            private: false,
            updated_at: new Date().toISOString()
          },
          {
            id: 3,
            name: 'cool-app',
            description: 'A cool application built with React and modern web technologies.',
            html_url: 'https://github.com/savagecarol/cool-app',
            stargazers_count: 10,
            forks_count: 3,
            language: 'Python',
            private: false,
            updated_at: new Date().toISOString()
          }
        ]);
        setStats({
          totalRepos: 50,
          totalStars: 50,
          totalForks: 16,
          followers: 100,
          following: 50
        });
        setLanguageStats([
          { name: 'JavaScript', percentage: 40 },
          { name: 'TypeScript', percentage: 30 },
          { name: 'Python', percentage: 20 },
          { name: 'CSS', percentage: 10 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section id="github" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              GitHub Profile
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Loading your GitHub data...
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
    <section id="github" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            GitHub Profile
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore my open source projects and contributions on GitHub
          </p>
        </div>

        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              {error} - Showing placeholder content
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* GitHub Stats */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                GitHub Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {stats ? formatNumber(stats.totalRepos) : '50+'}
                  </div>
                  <div className="text-black">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {stats ? formatNumber(stats.totalStars) : '100+'}
                  </div>
                  <div className="text-black">Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {stats ? formatNumber(stats.totalForks) : '25+'}
                  </div>
                  <div className="text-black">Forks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {stats ? formatNumber(stats.followers) : '15+'}
                  </div>
                  <div className="text-black">Followers</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Top Languages
              </h3>
              <div className="space-y-4">
                {languageStats.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-black">{lang.name}</span>
                      <span className="text-black">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? 'bg-orange-primary' :
                          index === 1 ? 'bg-red-primary' :
                          index === 2 ? 'bg-yellow-primary' : 'bg-orange-primary'
                        }`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Repositories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">
              Featured Repositories
            </h3>
            
            {repos.map((repo) => (
              <div key={repo.id} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-black">
                    {repo.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    repo.private 
                      ? 'bg-red-100 text-red-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {repo.private ? 'Private' : 'Public'}
                  </span>
                </div>
                <p className="text-black mb-4">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex items-center space-x-4 text-sm text-black">
                  <span>⭐ {formatNumber(repo.stargazers_count)}</span>
                  <span>🔀 {formatNumber(repo.forks_count)}</span>
                  <span>{repo.language || 'Unknown'}</span>
                </div>
                <div className="mt-3 text-xs text-black">
                  Updated {formatDate(repo.updated_at)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href={profile?.html_url || 'https://github.com/savagecarol'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-orange-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
} 
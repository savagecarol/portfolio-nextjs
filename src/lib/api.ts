// API utility functions for fetching data from various platforms

// YouTube API
export async function getYouTubeData(channelId: string) {
  try {
    // Note: You'll need to set up YouTube Data API v3 and get an API key
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch YouTube data');
    }
    
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
}

// Medium API (using RSS feed)
export async function getMediumData(username: string) {
  try {
    // Medium doesn't have a public API, so we'll use RSS feed
    const response = await fetch(
      `https://medium.com/feed/@${username}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium data');
    }
    
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    const articles = Array.from(items).slice(0, 3).map(item => ({
      title: item.querySelector('title')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
      pubDate: item.querySelector('pubDate')?.textContent || '',
    }));
    
    return articles;
  } catch (error) {
    console.error('Error fetching Medium data:', error);
    return [];
  }
}

// GitHub API
export async function getGitHubData(username: string) {
  try {
    const [profile, repos, stats] = await Promise.all([
      // Get user profile
      fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }
      }),
      
      // Get top repositories
      fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=3`, {
        headers: {
          'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }
      }),
      
      // Get contribution stats (using GitHub GraphQL API)
      fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "${username}") {
                contributionsCollection {
                  totalCommitContributions
                  totalIssueContributions
                  totalPullRequestContributions
                }
                repositories(first: 100) {
                  totalCount
                  nodes {
                    stargazerCount
                    forkCount
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          `
        }),
        next: { revalidate: 3600 }
      })
    ]);

    const profileData = await profile.json();
    const reposData = await repos.json();
    const statsData = await stats.json();

    // Calculate language stats
    const languages: Record<string, number> = reposData.reduce((acc: Record<string, number>, repo: any) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const totalRepos = Object.values(languages).reduce((a: number, b: number) => a + b, 0);
    const languageStats = Object.entries(languages).map(([name, count]) => ({
      name,
      percentage: Math.round((count as number / totalRepos) * 100)
    })).sort((a, b) => b.percentage - a.percentage).slice(0, 4);

    return {
      profile: profileData,
      repos: reposData,
      stats: statsData.data?.user,
      languageStats
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      profile: {},
      repos: [],
      stats: {},
      languageStats: []
    };
  }
}

// LinkedIn API (Note: LinkedIn API requires special approval)
export async function getLinkedInData() {
  try {
    // LinkedIn API requires special approval and OAuth setup
    // For now, we'll return a placeholder structure
    // You'll need to implement proper LinkedIn API integration
    return {
      profile: {
        firstName: 'Your',
        lastName: 'Name',
        headline: 'Full Stack Developer & Content Creator',
        summary: 'Experienced Full Stack Developer with a passion for creating innovative digital solutions.',
        connections: 500,
        endorsements: 50
      },
      experience: [
        {
          title: 'Senior Full Stack Developer',
          company: 'Tech Company Inc.',
          duration: '2022 - Present',
          description: 'Leading development of modern web applications using React, Node.js, and cloud technologies.'
        },
        {
          title: 'Full Stack Developer',
          company: 'Startup XYZ',
          duration: '2020 - 2022',
          description: 'Built scalable web applications and contributed to product development and user experience.'
        }
      ],
      education: [
        {
          degree: 'Bachelor of Computer Science',
          school: 'University Name',
          duration: '2016 - 2020',
          description: 'Graduated with honors, specializing in software engineering and web development.'
        }
      ],
      skills: [
        { name: 'JavaScript', endorsements: 25 },
        { name: 'React', endorsements: 20 },
        { name: 'Node.js', endorsements: 18 },
        { name: 'TypeScript', endorsements: 15 }
      ]
    };
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    return {};
  }
}

// Instagram API (Note: Instagram Basic Display API requires special approval)
export async function getInstagramData() {
  try {
    // Instagram API requires special approval and OAuth setup
    // For now, we'll return a placeholder structure
    return {
      posts: [
        {
          id: '1',
          caption: 'Amazing content from @iamsavagecarol',
          media_url: '/api/placeholder/1',
          permalink: 'https://instagram.com/p/example1',
          media_type: 'IMAGE'
        },
        {
          id: '2',
          caption: 'Another great post from @iamsavagecarol',
          media_url: '/api/placeholder/2',
          permalink: 'https://instagram.com/p/example2',
          media_type: 'VIDEO'
        },
        {
          id: '3',
          caption: 'Check out this reel from @iamsavagecarol',
          media_url: '/api/placeholder/3',
          permalink: 'https://instagram.com/p/example3',
          media_type: 'VIDEO'
        }
      ]
    };
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return { posts: [] };
  }
} 
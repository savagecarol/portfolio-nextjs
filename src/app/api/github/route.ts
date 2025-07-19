import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'savagecarol'; // Your GitHub username
    const token = process.env.GITHUB_TOKEN;
    
    if (!token) {
      return NextResponse.json({ 
        error: 'GitHub token not configured',
        message: 'Please add GITHUB_TOKEN to your environment variables'
      }, { status: 500 });
    }

    const headers = {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    };

    // Fetch user profile
    const profileResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 }
    });

    if (!profileResponse.ok) {
      throw new Error(`GitHub API error: ${profileResponse.status} - ${profileResponse.statusText}`);
    }

    // Fetch top repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=3&type=owner`,
      {
        headers,
        next: { revalidate: 3600 }
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status} - ${reposResponse.statusText}`);
    }

    // Fetch all repositories for language stats
    const allReposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
      {
        headers,
        next: { revalidate: 3600 }
      }
    );

    if (!allReposResponse.ok) {
      throw new Error(`GitHub API error: ${allReposResponse.status} - ${allReposResponse.statusText}`);
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const allRepos = await allReposResponse.json();

    // Calculate language statistics
    const languages: Record<string, number> = allRepos.reduce((acc: Record<string, number>, repo: any) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const totalRepos = Object.values(languages).reduce((a: number, b: number) => a + b, 0);
    const languageStats = Object.entries(languages)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count as number / totalRepos) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 4);

    // Calculate total stats
    const totalStars = allRepos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
    const totalForks = allRepos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);

    return NextResponse.json({
      profile,
      repos,
      stats: {
        totalRepos: profile.public_repos,
        totalStars,
        totalForks,
        followers: profile.followers,
        following: profile.following
      },
      languageStats,
      message: 'GitHub data fetched successfully'
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch GitHub data',
      message: error instanceof Error ? error.message : 'Unknown error',
      profile: {},
      repos: [],
      stats: {},
      languageStats: []
    }, { status: 500 });
  }
} 
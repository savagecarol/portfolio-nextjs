import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const channelId = 'UCKP5ZAwrOVCb1P6Mlhxjdmg'; // @savagecarol channel ID
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'YouTube API key not configured',
        message: 'Please add YOUTUBE_API_KEY to your environment variables'
      }, { status: 500 });
    }

    // First, get channel playlists
    const playlistsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=5&key=${apiKey}`
    );

    if (!playlistsResponse.ok) {
      throw new Error('Failed to fetch YouTube playlists');
    }

    const playlistsData = await playlistsResponse.json();
    
    // Get most viewed videos using search with order=viewCount
    const mostViewedResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&maxResults=10&key=${apiKey}`
    );
    
    // Get latest videos using search with order=date
    const latestVideosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=15&key=${apiKey}`
    );
    
    let mostViewedVideos = [];
    let latestVideos = [];
    
    if (mostViewedResponse.ok) {
      const mostViewedData = await mostViewedResponse.json();
      mostViewedVideos = mostViewedData.items || [];
    }
    
    if (latestVideosResponse.ok) {
      const latestVideosData = await latestVideosResponse.json();
      latestVideos = latestVideosData.items || [];
    }

    // Get video details for most viewed videos
    if (mostViewedVideos.length > 0) {
      const videoIds = mostViewedVideos.map((item: any) => item.id?.videoId).join(',');
      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${apiKey}`
      );
      
      if (videoDetailsResponse.ok) {
        const videoDetails = await videoDetailsResponse.json();
        
        mostViewedVideos = mostViewedVideos.map((item: any, index: number) => {
          const details = videoDetails.items?.[index];
          return {
            id: item.id?.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            viewCount: details?.statistics?.viewCount || '0',
            likeCount: details?.statistics?.likeCount || '0',
            url: `https://www.youtube.com/watch?v=${item.id?.videoId}`
          };
        });
      }
    }

    // Get video details for latest videos
    if (latestVideos.length > 0) {
      const videoIds = latestVideos.map((item: any) => item.id?.videoId).join(',');
      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${apiKey}`
      );
      
      if (videoDetailsResponse.ok) {
        const videoDetails = await videoDetailsResponse.json();
        
        latestVideos = latestVideos.map((item: any, index: number) => {
          const details = videoDetails.items?.[index];
          return {
            id: item.id?.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            viewCount: details?.statistics?.viewCount || '0',
            likeCount: details?.statistics?.likeCount || '0',
            url: `https://www.youtube.com/watch?v=${item.id?.videoId}`
          };
        });
      }
    }

    return NextResponse.json({ 
      videos: latestVideos, // Return latest videos as main videos array
      mostViewedVideos, // Also return most viewed videos separately
      playlists: playlistsData.items || [],
      channelId,
      message: 'YouTube data fetched successfully'
    });
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch YouTube data',
      message: error instanceof Error ? error.message : 'Unknown error',
      videos: [],
      mostViewedVideos: [],
      playlists: []
    }, { status: 500 });
  }
} 
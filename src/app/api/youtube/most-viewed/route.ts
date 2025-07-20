import { NextResponse } from 'next/server';

// Helper function to parse YouTube duration and check if it's a short
function isShortVideo(duration: string, title: string): boolean {
  // Check title for shorts indicators
  const titleLower = title.toLowerCase();
  if (titleLower.includes('short') || titleLower.includes('#shorts') || titleLower.includes('shorts') || 
      titleLower.includes('quick') || titleLower.includes('tip') || titleLower.includes('hack')) {
    console.log(`Title contains shorts indicator: ${title}`);
    return true;
  }
  
  // Parse YouTube duration format (PT1M30S = 1 minute 30 seconds)
  const durationMatch = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!durationMatch) {
    console.log(`Could not parse duration: ${duration}`);
    return false;
  }
  
  const hours = parseInt(durationMatch[1] || '0');
  const minutes = parseInt(durationMatch[2] || '0');
  const seconds = parseInt(durationMatch[3] || '0');
  
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
  console.log(`Duration: ${duration} = ${totalSeconds} seconds (${hours}h ${minutes}m ${seconds}s)`);
  
  // Consider videos shorter than 90 seconds as shorts (more aggressive filtering)
  const isShort = totalSeconds < 90;
  if (isShort) {
    console.log(`Video is short: ${title} (${totalSeconds} seconds)`);
  }
  
  return isShort;
}

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



    // Get most viewed videos using search with order=viewCount, excluding shorts
    const mostViewedResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&maxResults=30&key=${apiKey}`
    );
    
    let mostViewedVideos = [];
    
    if (mostViewedResponse.ok) {
      const mostViewedData = await mostViewedResponse.json();
      mostViewedVideos = mostViewedData.items || [];
      console.log(`Found ${mostViewedVideos.length} most viewed videos from search`);
    }

    // Filter out shorts (videos with duration less than 90 seconds or title contains "short")
    if (mostViewedVideos.length > 0) {
      const videoIds = mostViewedVideos.map((item: any) => item.id?.videoId).join(',');
      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=${videoIds}&key=${apiKey}`
      );
      
      if (videoDetailsResponse.ok) {
        const videoDetails = await videoDetailsResponse.json();
        console.log(`Got details for ${videoDetails.items?.length || 0} most viewed videos`);
        
        // Filter out shorts and format videos
        const filteredVideos = mostViewedVideos
          .map((item: any, index: number) => {
            const details = videoDetails.items?.[index];
            if (!details) {
              console.log(`No details for most viewed video ${index}`);
              return null;
            }
            
            // Check if it's a short using improved detection
            const duration = details.contentDetails?.duration || '';
            const title = item.snippet.title;
            const isShort = isShortVideo(duration, title);
            
            if (isShort) {
              console.log(`Excluding short from most viewed: ${title} (duration: ${duration})`);
              return null;
            }
            
            console.log(`Including most viewed video: ${title} (duration: ${duration})`);
            
            return {
              id: item.id?.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
              publishedAt: item.snippet.publishedAt,
              channelTitle: item.snippet.channelTitle,
              viewCount: details?.statistics?.viewCount || '0',
              likeCount: details?.statistics?.likeCount || '0',
              duration: duration, // Include duration for debugging
              url: `https://www.youtube.com/watch?v=${item.id?.videoId}`
            };
          })
          .filter(Boolean) // Remove null values
          .slice(0, 3); // Take only top 3
        
        console.log(`Final filtered most viewed videos: ${filteredVideos.length}`);
        mostViewedVideos = filteredVideos;
      }
    }

    // Update the response with actual data
    const responseData = { 
      videos: mostViewedVideos,
      channelId,
      message: 'Most viewed videos fetched successfully'
    };
    
    const response = NextResponse.json(responseData);
    response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    response.headers.set('Expires', new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString());
    
    return response;
  } catch (error) {
    console.error('Error fetching most viewed videos:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch most viewed videos',
      message: error instanceof Error ? error.message : 'Unknown error',
      videos: []
    }, { status: 500 });
  }
} 
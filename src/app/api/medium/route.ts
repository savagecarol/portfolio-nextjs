import { NextResponse } from 'next/server';
import { parseString } from 'xml2js';

export async function GET() {
  try {
    const username = 'karthiksharma1411';
    const response = await fetch(`https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Medium data');
    }

    const xmlText = await response.text();
    
    // Parse XML to JSON
    const articles = await new Promise((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const items = result.rss.channel[0].item || [];
          const parsedArticles = items.slice(0, 3).map((item: any) => {
            const content = item['content:encoded'] ? item['content:encoded'][0] : item.description[0];
            
            // Extract image from content
            const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : null;
            
            return {
              title: item.title[0],
              link: item.link[0],
              description: content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
              pubDate: item.pubDate[0],
              author: item['dc:creator'] ? item['dc:creator'][0] : 'Unknown',
              categories: item.category || [],
              thumbnail: thumbnail
            };
          });
          resolve(parsedArticles);
        }
      });
    });

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching Medium data:', error);
    return NextResponse.json({ error: 'Failed to fetch Medium data' }, { status: 500 });
  }
} 
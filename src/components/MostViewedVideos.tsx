'use client';

import { motion } from 'framer-motion';
import { useCachedApi } from '../lib/useCachedApi';
import { CACHE_KEYS } from '../lib/cache';
import { fadeInUp, staggerContainer, scaleIn, cardHover, buttonHover } from '../lib/animations';
import { useScrollAnimation } from '../lib/useScrollAnimation';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
  viewCount: string;
  likeCount: string;
  url: string;
}

export default function MostViewedVideos() {
  const { ref, isInView } = useScrollAnimation();
  const fallbackVideos: YouTubeVideo[] = [
    {
      id: '1',
      title: 'Most Popular Video from @savagecarol',
      description: 'This is my most viewed video with amazing content and insights',
      thumbnail: '/api/placeholder/youtube1',
      publishedAt: new Date().toISOString(),
      channelTitle: '@savagecarol',
      viewCount: '50000',
      likeCount: '2500',
      url: 'https://youtube.com/@savagecarol'
    },
    {
      id: '2',
      title: 'Second Most Popular Video',
      description: 'Another highly viewed video from my channel',
      thumbnail: '/api/placeholder/youtube2',
      publishedAt: new Date().toISOString(),
      channelTitle: '@savagecarol',
      viewCount: '35000',
      likeCount: '1800',
      url: 'https://youtube.com/@savagecarol'
    },
    {
      id: '3',
      title: 'Third Most Popular Video',
      description: 'This video also performed really well',
      thumbnail: '/api/placeholder/youtube3',
      publishedAt: new Date().toISOString(),
      channelTitle: '@savagecarol',
      viewCount: '25000',
      likeCount: '1200',
      url: 'https://youtube.com/@savagecarol'
    }
  ];

  const { data, loading, error } = useCachedApi<{ videos: YouTubeVideo[] }>({
    cacheKey: CACHE_KEYS.YOUTUBE_MOST_VIEWED,
    apiUrl: '/api/youtube/most-viewed',
    expiryHours: 24,
    fallbackData: { videos: fallbackVideos }
  });

  const videos = data?.videos || fallbackVideos;

  const formatNumber = (num: string) => {
    const number = parseInt(num);
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
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
      <section id="most-viewed" className="py-20 bg-gray-50">
        <motion.div 
          ref={ref}
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Most Viewed Videos
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Loading your most popular videos from @savagecarol...
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            variants={fadeInUp}
          >
            <motion.div 
              className="rounded-full h-12 w-12 border-2 border-orange-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="most-viewed" className="py-20 bg-gray-50">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Most Viewed Videos
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Check out my most popular videos from @savagecarol
          </p>
        </motion.div>

        {error && (
          <motion.div 
            className="text-center mb-8 p-4 bg-yellow-50 rounded-lg"
            variants={fadeInUp}
          >
            <p className="text-yellow-800">
              {error} - Showing placeholder content
            </p>
          </motion.div>
        )}

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {videos.map((video, index) => (
            <motion.div 
              key={`most-viewed-${video.id}`} 
              className="bg-white rounded-xl shadow-lg overflow-hidden relative"
              variants={scaleIn}
              whileHover={cardHover}
            >
              {/* Ranking Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  index === 0 ? 'bg-yellow-500' : 
                  index === 1 ? 'bg-gray-400' : 'bg-orange-600'
                }`}>
                  {index + 1}
                </div>
              </div>
              
              <div className="relative h-48 bg-red-primary">
                {video.thumbnail && video.thumbnail !== '/api/placeholder/youtube' + (index + 1) ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {formatNumber(video.viewCount)} views
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-3 line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-black mb-4 line-clamp-3">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-sm text-black mb-4">
                  <span>{formatDate(video.publishedAt)}</span>
                  <span>❤️ {formatNumber(video.likeCount)}</span>
                </div>
                <motion.a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-orange-primary font-medium"
                  whileHover={{ color: '#ea580c' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch on YouTube</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <motion.a
            href="https://youtube.com/@savagecarol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe to @savagecarol</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 
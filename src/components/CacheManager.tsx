'use client';

import { useState, useEffect } from 'react';
import { LocalStorageCache, CACHE_KEYS } from '../lib/cache';

export default function CacheManager() {
  const [cacheInfo, setCacheInfo] = useState<Record<string, { timestamp: number; expiresAt: number } | null>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get cache info for all YouTube cache keys
    const info = {
      [CACHE_KEYS.YOUTUBE_LATEST]: LocalStorageCache.getInfo(CACHE_KEYS.YOUTUBE_LATEST),
      [CACHE_KEYS.YOUTUBE_MOST_VIEWED]: LocalStorageCache.getInfo(CACHE_KEYS.YOUTUBE_MOST_VIEWED)
    };
    setCacheInfo(info);
  }, []);

  const clearAllCache = () => {
    LocalStorageCache.clear();
    setCacheInfo({});
    alert('Cache cleared successfully!');
  };

  const clearSpecificCache = (key: string) => {
    LocalStorageCache.remove(key);
    setCacheInfo(prev => ({ ...prev, [key]: null }));
    alert(`Cache for ${key} cleared successfully!`);
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const getTimeUntilExpiry = (expiresAt: number) => {
    const now = Date.now();
    const diff = expiresAt - now;
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    }
    return `${minutes}m remaining`;
  };

  const getCacheStatus = (key: string) => {
    const info = cacheInfo[key];
    if (!info) return 'No cache';
    
    const now = Date.now();
    if (now > info.expiresAt) return 'Expired';
    return 'Valid';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-orange-primary hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        title="Cache Manager"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>

      {/* Cache Manager Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Cache Manager</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {/* Latest Videos Cache */}
            <div className="border border-gray-200 rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">Latest Videos</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  getCacheStatus(CACHE_KEYS.YOUTUBE_LATEST) === 'Valid' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {getCacheStatus(CACHE_KEYS.YOUTUBE_LATEST)}
                </span>
              </div>
              {cacheInfo[CACHE_KEYS.YOUTUBE_LATEST] && (
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Cached: {formatTime(cacheInfo[CACHE_KEYS.YOUTUBE_LATEST]!.timestamp)}</div>
                  <div>Expires: {getTimeUntilExpiry(cacheInfo[CACHE_KEYS.YOUTUBE_LATEST]!.expiresAt)}</div>
                </div>
              )}
              <button
                onClick={() => clearSpecificCache(CACHE_KEYS.YOUTUBE_LATEST)}
                className="mt-2 text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded transition-colors"
              >
                Clear Cache
              </button>
            </div>

            {/* Most Viewed Videos Cache */}
            <div className="border border-gray-200 rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">Most Viewed Videos</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  getCacheStatus(CACHE_KEYS.YOUTUBE_MOST_VIEWED) === 'Valid' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {getCacheStatus(CACHE_KEYS.YOUTUBE_MOST_VIEWED)}
                </span>
              </div>
              {cacheInfo[CACHE_KEYS.YOUTUBE_MOST_VIEWED] && (
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Cached: {formatTime(cacheInfo[CACHE_KEYS.YOUTUBE_MOST_VIEWED]!.timestamp)}</div>
                  <div>Expires: {getTimeUntilExpiry(cacheInfo[CACHE_KEYS.YOUTUBE_MOST_VIEWED]!.expiresAt)}</div>
                </div>
              )}
              <button
                onClick={() => clearSpecificCache(CACHE_KEYS.YOUTUBE_MOST_VIEWED)}
                className="mt-2 text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded transition-colors"
              >
                Clear Cache
              </button>
            </div>

            {/* Clear All Button */}
            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={clearAllCache}
                className="w-full bg-orange-primary hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
              >
                Clear All Cache
              </button>
            </div>

            {/* Info */}
            <div className="text-xs text-gray-500 text-center">
              Cache expires after 24 hours to save API quota
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
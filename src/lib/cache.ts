interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export class LocalStorageCache {
  private static readonly DEFAULT_EXPIRY_HOURS = 24;

  /**
   * Get cached data if it exists and hasn't expired
   */
  static get<T>(key: string): T | null {
    if (typeof window === 'undefined') {
      return null; // Server-side rendering
    }

    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;

      const item: CacheItem<T> = JSON.parse(cached);
      const now = Date.now();

      // Check if cache has expired
      if (now > item.expiresAt) {
        localStorage.removeItem(key);
        return null;
      }

      return item.data;
    } catch (error) {
      console.error('Error reading from cache:', error);
      localStorage.removeItem(key);
      return null;
    }
  }

  /**
   * Store data in cache with expiration
   */
  static set<T>(key: string, data: T, expiryHours: number = this.DEFAULT_EXPIRY_HOURS): void {
    if (typeof window === 'undefined') {
      return; // Server-side rendering
    }

    try {
      const now = Date.now();
      const expiresAt = now + (expiryHours * 60 * 60 * 1000);

      const item: CacheItem<T> = {
        data,
        timestamp: now,
        expiresAt
      };

      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Error writing to cache:', error);
    }
  }

  /**
   * Remove item from cache
   */
  static remove(key: string): void {
    if (typeof window === 'undefined') {
      return; // Server-side rendering
    }

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from cache:', error);
    }
  }

  /**
   * Clear all cached items
   */
  static clear(): void {
    if (typeof window === 'undefined') {
      return; // Server-side rendering
    }

    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  /**
   * Check if cache has valid data for a key
   */
  static has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * Get cache info (timestamp and expiration)
   */
  static getInfo(key: string): { timestamp: number; expiresAt: number } | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;

      const item: CacheItem<any> = JSON.parse(cached);
      return {
        timestamp: item.timestamp,
        expiresAt: item.expiresAt
      };
    } catch (error) {
      console.error('Error reading cache info:', error);
      return null;
    }
  }
}

// Cache keys for YouTube data
export const CACHE_KEYS = {
  YOUTUBE_LATEST: 'youtube_latest_videos',
  YOUTUBE_MOST_VIEWED: 'youtube_most_viewed_videos'
} as const; 
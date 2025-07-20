import { useState, useEffect } from 'react';
import { LocalStorageCache } from './cache';

interface UseCachedApiOptions<T> {
  cacheKey: string;
  apiUrl: string;
  expiryHours?: number;
  fallbackData?: T;
  onError?: (error: string) => void;
}

interface UseCachedApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  clearCache: () => void;
}

export function useCachedApi<T>({
  cacheKey,
  apiUrl,
  expiryHours = 24,
  fallbackData,
  onError
}: UseCachedApiOptions<T>): UseCachedApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first (unless forcing refresh)
      if (!forceRefresh) {
        const cachedData = LocalStorageCache.get<T>(cacheKey);
        if (cachedData) {
          console.log(`Using cached data for ${cacheKey}`);
          setData(cachedData);
          setLoading(false);
          return;
        }
      }

      // Fetch from API
      console.log(`Fetching data from API for ${cacheKey}`);
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiData = await response.json();
      
      if (apiData.error) {
        throw new Error(apiData.message || apiData.error);
      }

      // Cache the successful response
      LocalStorageCache.set(cacheKey, apiData, expiryHours);
      
      setData(apiData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
      
      // Use fallback data if available
      if (fallbackData) {
        setData(fallbackData);
      }
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => fetchData(true);
  
  const clearCache = () => {
    LocalStorageCache.remove(cacheKey);
  };

  useEffect(() => {
    fetchData();
  }, [cacheKey, apiUrl]); // Re-fetch if cache key or API URL changes

  return {
    data,
    loading,
    error,
    refetch,
    clearCache
  };
} 
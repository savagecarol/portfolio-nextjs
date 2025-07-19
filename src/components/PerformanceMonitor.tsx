'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Report to analytics if needed
        if (lastEntry.startTime < 2500) {
          console.log('✅ LCP is good');
        } else {
          console.log('⚠️ LCP needs improvement');
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as any;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', fid);
          
          if (fid < 100) {
            console.log('✅ FID is good');
          } else {
            console.log('⚠️ FID needs improvement');
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            console.log('CLS:', clsValue);
            
            if (clsValue < 0.1) {
              console.log('✅ CLS is good');
            } else {
              console.log('⚠️ CLS needs improvement');
            }
          }
        });
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const navEntry = entry as any;
          const ttfb = navEntry.responseStart - navEntry.requestStart;
          console.log('TTFB:', ttfb);
          
          if (ttfb < 600) {
            console.log('✅ TTFB is good');
          } else {
            console.log('⚠️ TTFB needs improvement');
          }
        });
      });
      
      navigationObserver.observe({ entryTypes: ['navigation'] });
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log('Page Load Time:', loadTime);
      
      if (loadTime < 3000) {
        console.log('✅ Page load time is good');
      } else {
        console.log('⚠️ Page load time needs improvement');
      }
    });
  }, []);

  return null; // This component doesn't render anything
} 
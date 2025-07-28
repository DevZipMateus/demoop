
import { useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceOptimizer = () => {
  const { metrics, isLoading } = usePerformance();

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      ];

      criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'style';
        document.head.appendChild(link);
      });
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();

    // Monitor performance
    if (metrics && !isLoading) {
      console.log('Performance optimization applied');
      
      // Warn about slow loading
      if (metrics.loadTime > 3000) {
        console.warn('Page load time is slow:', metrics.loadTime, 'ms');
      }
    }
  }, [metrics, isLoading]);

  return null;
};

export default PerformanceOptimizer;

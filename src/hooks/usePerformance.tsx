
import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  connectionType: string;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const collectMetrics = useCallback(() => {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get connection info safely
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint,
        firstContentfulPaint,
        connectionType: connection ? connection.effectiveType : 'unknown',
      };
      
      setMetrics(performanceMetrics);
      setIsLoading(false);
      
      // Log metrics for debugging only in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceMetrics);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error collecting performance metrics:', error);
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Wait for page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      const handleLoad = () => {
        // Small delay to ensure all metrics are available
        setTimeout(collectMetrics, 100);
      };
      
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [collectMetrics]);

  return { metrics, isLoading };
};


import { useEffect } from 'react';
import { registerServiceWorker } from '../utils/serviceWorker';
import { updateCacheHeaders } from '../utils/cacheManager';

const CacheManager = () => {
  useEffect(() => {
    const initializeCacheManagement = async () => {
      // Register service worker
      await registerServiceWorker();
      
      // Update cache headers on mount
      updateCacheHeaders();
      
      // Add version parameter to prevent caching issues
      const version = Date.now();
      const meta = document.createElement('meta');
      meta.name = 'cache-control';
      meta.content = 'no-cache, no-store, must-revalidate';
      document.head.appendChild(meta);
      
      // Add pragma meta tag
      const pragma = document.createElement('meta');
      pragma.httpEquiv = 'pragma';
      pragma.content = 'no-cache';
      document.head.appendChild(pragma);
      
      // Add expires meta tag
      const expires = document.createElement('meta');
      expires.httpEquiv = 'expires';
      expires.content = '0';
      document.head.appendChild(expires);
      
      // Add version to body for cache busting
      document.body.dataset.version = version.toString();
    };
    
    initializeCacheManagement();
  }, []);

  return null;
};

export default CacheManager;

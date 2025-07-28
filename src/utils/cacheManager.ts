
// Cache management utilities
export const clearBrowserCache = (): void => {
  // Clear various browser storage
  if ('caches' in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
  }
  
  // Clear localStorage
  localStorage.clear();
  
  // Clear sessionStorage
  sessionStorage.clear();
  
  console.log('Browser cache cleared');
};

export const getCacheInfo = async (): Promise<any> => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    const cacheInfo = await Promise.all(
      cacheNames.map(async (cacheName) => {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        return {
          name: cacheName,
          entries: keys.length,
          urls: keys.map(key => key.url),
        };
      })
    );
    return cacheInfo;
  }
  return [];
};

export const updateCacheHeaders = (): void => {
  // Force cache refresh by appending timestamp to URLs
  const timestamp = Date.now();
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  
  links.forEach((link: any) => {
    const href = link.href;
    const separator = href.includes('?') ? '&' : '?';
    link.href = `${href}${separator}v=${timestamp}`;
  });
};


// Service Worker registration utility
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      
      if (import.meta.env.DEV) {
        console.log('Service Worker registered successfully:', registration);
      }
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available, prompt user to refresh
              if (confirm('Nova versão disponível! Deseja atualizar?')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        }
      });
      
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }
};

export const unregisterServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(registration => registration.unregister()));
      if (import.meta.env.DEV) {
        console.log('Service Worker unregistered successfully');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Service Worker unregistration failed:', error);
      }
    }
  }
};

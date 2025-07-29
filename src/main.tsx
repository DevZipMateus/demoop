
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is available globally for debugging and library compatibility
if (typeof window !== 'undefined') {
  (window as any).React = React;
  (window as any).ReactDOM = { createRoot };
}

// Wait for React to be fully available before proceeding
const waitForReact = () => {
  return new Promise<void>((resolve) => {
    const checkReact = () => {
      const reactAvailable = React && 
        React.useState && 
        React.useEffect && 
        React.createElement &&
        typeof React.useState === 'function';
      
      if (reactAvailable) {
        console.log('React is fully available:', {
          React: !!React,
          useState: !!React?.useState,
          useEffect: !!React?.useEffect,
          createElement: !!React?.createElement
        });
        resolve();
      } else {
        console.warn('React not fully available yet, retrying...');
        setTimeout(checkReact, 10);
      }
    };
    checkReact();
  });
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

// Add error boundary for debugging
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Global error caught:', error);
      setHasError(true);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  if (hasError) {
    return <div>Something went wrong. Check the console for details.</div>;
  }
  
  return <>{children}</>;
};

// Initialize the app only after React is fully available
waitForReact().then(() => {
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}).catch((error) => {
  console.error('Failed to initialize React:', error);
  document.getElementById("root")!.innerHTML = '<div>Failed to load application. Check console for details.</div>';
});

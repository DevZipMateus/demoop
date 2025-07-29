
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is available globally for debugging and library compatibility
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

// Add additional safety checks
console.log('React availability check:', {
  React: !!React,
  useState: !!React?.useState,
  useEffect: !!React?.useEffect,
  createElement: !!React?.createElement
});

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

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

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

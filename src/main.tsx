
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Security check to ensure React is properly loaded
if (typeof React === 'undefined' || !React.useState) {
  console.error('React is not properly loaded');
  throw new Error('React initialization failed');
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

// Ensure React is fully initialized before creating root
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

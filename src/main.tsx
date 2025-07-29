
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("main.tsx: Starting main.tsx execution");
console.log("main.tsx: React object:", React);

// Add comprehensive safety checks
if (!React) {
  console.error("React is not available");
  throw new Error("React is not available");
}

if (!React.useState || typeof React.useState !== 'function') {
  console.error("React hooks are not available");
  throw new Error("React hooks are not available");
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

console.log("main.tsx: Container found, creating root");

// Additional safety check before creating root
try {
  const root = createRoot(container);
  console.log("main.tsx: Root created, about to render App");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("main.tsx: App rendered");
} catch (error) {
  console.error("Error during root creation or rendering:", error);
  // Fallback rendering without StrictMode
  const root = createRoot(container);
  root.render(<App />);
}

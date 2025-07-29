
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("main.tsx: Starting main.tsx execution");
console.log("main.tsx: React object:", React);

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

console.log("main.tsx: Container found, creating root");
const root = createRoot(container);

console.log("main.tsx: Root created, about to render App");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log("main.tsx: App rendered");

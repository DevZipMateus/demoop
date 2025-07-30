
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("Main.tsx loading...");

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log("Creating React root...");
  const root = createRoot(rootElement);
  
  console.log("Rendering App component...");
  root.render(<App />);
  
  console.log("App successfully rendered");
} catch (error) {
  console.error("Error in main.tsx:", error);
}

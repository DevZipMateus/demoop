
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CacheManager from './components/CacheManager.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CacheManager />
    <App />
  </StrictMode>
);

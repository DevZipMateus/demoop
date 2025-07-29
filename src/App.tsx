
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

console.log("App.tsx: Starting to render App component");

const queryClient = new QueryClient();

const App = () => {
  console.log("App.tsx: Inside App component render");
  
  // Enhanced safety checks for React hooks availability
  if (!React) {
    console.error('React is not available');
    return <div>Loading React...</div>;
  }
  
  if (!React.useState || typeof React.useState !== 'function') {
    console.error('React hooks not available in App');
    return <div>Initializing...</div>;
  }

  if (!React.useEffect || typeof React.useEffect !== 'function') {
    console.error('React useEffect not available in App');
    return <div>Loading hooks...</div>;
  }

  // Additional check for React context
  if (!React.createContext || typeof React.createContext !== 'function') {
    console.error('React context not available in App');
    return <div>Loading context...</div>;
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

console.log("App.tsx: App component defined");

export default App;

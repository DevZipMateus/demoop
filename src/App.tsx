
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
  
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available in App, returning minimal structure');
    return <div>Loading...</div>;
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

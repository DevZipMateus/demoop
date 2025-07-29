
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

console.log("App component loading - checking for Radix imports...");

// Check if any Radix components are accidentally imported
console.log("Checking window object for Radix components:", typeof window !== 'undefined' && window);

const App = () => {
  console.log("App component rendering - starting render process...");
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalogo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("Error in App component render:", error);
    throw error;
  }
};

export default App;

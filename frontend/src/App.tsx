
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./hooks/useTheme";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Vizalar from "./pages/Vizalar";
import Ariza from "./pages/Ariza";
import Status from "./pages/Status";
import Narxlar from "./pages/Narxlar";
import Aloqa from "./pages/Aloqa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="evisa-saudi-theme">
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vizalar" element={<Vizalar />} />
                <Route path="/ariza" element={<Ariza />} />
                <Route path="/status" element={<Status />} />
                <Route path="/narxlar" element={<Narxlar />} />
                <Route path="/aloqa" element={<Aloqa />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

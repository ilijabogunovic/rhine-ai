import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import IlijaBogunovic from "./pages/profiles/IlijaBogunovic";
import WilliamBankes from "./pages/profiles/WilliamBankes";
import ShyamSundharRamesh from "./pages/profiles/ShyamSundharRamesh";
import XiaohangTang from "./pages/profiles/XiaohangTang";
import TheoBrown from "./pages/profiles/TheoBrown";
import SeongHo from "./pages/profiles/SeongHo";
import ZheWang from "./pages/profiles/ZheWang";
import AhmetHGuzel from "./pages/profiles/AhmetHGuzel";
import AbdelhamidEzzerg from "./pages/profiles/AbdelhamidEzzerg";
import SangwoongYoon from "./pages/profiles/SangwoongYoon";
import ColinDoumont from "./pages/profiles/ColinDoumont";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/rhine-ai">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/team/ilija-bogunovic" element={<IlijaBogunovic />} />
          <Route path="/team/william-bankes" element={<WilliamBankes />} />
          <Route path="/team/shyam-sundhar-ramesh" element={<ShyamSundharRamesh />} />
          <Route path="/team/xiaohang-tang" element={<XiaohangTang />} />
          <Route path="/team/theo-brown" element={<TheoBrown />} />
          <Route path="/team/seong-ho" element={<SeongHo />} />
          <Route path="/team/zhe-wang" element={<ZheWang />} />
          <Route path="/team/ahmet-h-guzel" element={<AhmetHGuzel />} />
          <Route path="/team/abdelhamid-ezzerg" element={<AbdelhamidEzzerg />} />
          <Route path="/team/sangwoong-yoon" element={<SangwoongYoon />} />
          <Route path="/team/colin-doumont" element={<ColinDoumont />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import Index from "./pages/Index";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Teaching from "./pages/Teaching";
import TeachingCourse from "./pages/TeachingCourse";
import TeachingCourses from "./pages/teaching/Courses";
import TeachingArchive from "./pages/teaching/Archive";
import TeachingTopics from "./pages/teaching/Topics";
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
import RobinFaro from "./pages/profiles/RobinFaro";
import AndreaMiele from "./pages/profiles/AndreaMiele";
import AntonioLopardo from "./pages/profiles/AntonioLopardo";
import News from "./pages/News";
import ICLR2026 from "./pages/news/ICLR2026";
import Icml2026 from "./pages/news/Icml2026";
import Icml2026Lab from "./pages/news/Icml2026Lab";
import Macroscopic2026 from "./pages/news/macroscopic2026";
import Neurips2026 from "./pages/news/Neurips2026";
import SnsfProjectGrant2026 from "./pages/news/SnsfProjectGrant2026";
import ErcStartingGrant2026 from "./pages/news/ErcStartingGrant2026";
import PhdPostdocDiffusionLLM2026 from "./pages/news/PhdPostdocDiffusionLLM2026";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/teaching/courses" element={<TeachingCourses />} />
          <Route path="/teaching/archive" element={<TeachingArchive />} />
          <Route path="/teaching/topics" element={<TeachingTopics />} />
          <Route path="/teaching/:slug" element={<TeachingCourse />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/iclr2026" element={<ICLR2026 />} />
          <Route path="/news/macroscopic2026" element={<Macroscopic2026 />} />
          <Route path="/news/neurips-2026" element={<Neurips2026 />} />
          <Route path="/news/snsf-project-grant-2026" element={<SnsfProjectGrant2026 />} />
          <Route path="/news/erc-starting-grant-2026" element={<ErcStartingGrant2026 />} />
          <Route path="/news/phd-postdoc-diffusion-llm-2026" element={<PhdPostdocDiffusionLLM2026 />} />
          <Route path="/news/icml-2026-lab" element={<Icml2026Lab />} />
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
          <Route path="/team/robin-faro" element={<RobinFaro />} />
          <Route path="/team/andrea-miele" element={<AndreaMiele />} />
          <Route path="/team/antonio-lopardo" element={<AntonioLopardo />} />
          <Route path="/news/icml-2026" element={<Icml2026 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

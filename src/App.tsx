import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Core Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Product from "./pages/Product";
import Partnership from "./pages/Partnership";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Selected Work Case Studies
import WorkIndex from "./pages/work/WorkIndex";
import WeatherPipeline from "./pages/work/WeatherPipeline";
import HealthcareQA from "./pages/work/HealthcareQA";
import MyGuardianCaseStudy from "./pages/work/MyGuardianCaseStudy";
import CivicOperations from "./pages/work/CivicOperations";
import ScadaAutomation from "./pages/work/ScadaAutomation";

// Services Pages
import ServicesIndex from "./pages/services/ServicesIndex";
import AiService from "./pages/services/AiService";
import CloudService from "./pages/services/CloudService";
import MobileService from "./pages/services/MobileService";
import WebService from "./pages/services/WebService";
import QaService from "./pages/services/QaService";
import CustomSoftwareService from "./pages/services/CustomSoftwareService";
import CivicTechService from "./pages/services/CivicTechService";

const queryClient = new QueryClient();

const App = () => {
  /* ---------------- AdSense Script Loader (SPA Safe) ---------------- */
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1316110662854881";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#060913] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
            <Header />
            <main className="flex-1">
              <Routes>
                {/* Primary Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />

                {/* Case Studies */}
                <Route path="/work" element={<WorkIndex />} />
                <Route path="/work/weather-pipeline" element={<WeatherPipeline />} />
                <Route path="/work/healthcare-qa" element={<HealthcareQA />} />
                <Route path="/work/my-guardian" element={<MyGuardianCaseStudy />} />
                <Route path="/work/civic-operations" element={<CivicOperations />} />
                <Route path="/work/scada-automation" element={<ScadaAutomation />} />

                {/* Services Architecture */}
                <Route path="/services" element={<ServicesIndex />} />
                <Route path="/services/ai" element={<AiService />} />
                <Route path="/services/cloud" element={<CloudService />} />
                <Route path="/services/mobile" element={<MobileService />} />
                <Route path="/services/web" element={<WebService />} />
                <Route path="/services/qa-automation" element={<QaService />} />
                <Route path="/services/custom-software" element={<CustomSoftwareService />} />
                <Route path="/services/civic-tech" element={<CivicTechService />} />

                {/* 404 Catch-All */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

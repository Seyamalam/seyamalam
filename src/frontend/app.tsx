import { BrowserRouter, Route, Routes } from "react-router";
import { Navigation } from "@/components/navigation";
import { HomePage } from "@/components/pages/home";
import { AboutPage } from "@/components/pages/about";
import Research from "@/components/pages/research";
import { ProjectsPage } from "@/components/pages/projects";
import { ExperiencePage } from "@/components/pages/experience";
import { ContactPage } from "@/components/pages/contact";
import NotFound from "@/app/not-found";
import { PerformanceMonitor } from "@/components/performance-monitor";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <PerformanceMonitor />
        <Navigation />
        <main className="pt-16">          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

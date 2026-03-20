import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Learning from "./pages/Learning";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import CertificateView from "./pages/CertificateView";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="portfolio-shell">
        <div className="portfolio-cursor-glow" aria-hidden="true" />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificate" element={<CertificateView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

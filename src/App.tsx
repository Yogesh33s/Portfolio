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
import { PortfolioContentProvider } from "./contexts/PortfolioContentContext";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import AdminLoginModal, { ADMIN_ROUTE } from "./components/admin/AdminLoginModal";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "./components/ui/toaster";

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
          <PortfolioContentProvider>
            <AdminAuthProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/certificate" element={<CertificateView />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path={ADMIN_ROUTE}
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <AdminLoginModal />
              <Toaster />
            </AdminAuthProvider>
          </PortfolioContentProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

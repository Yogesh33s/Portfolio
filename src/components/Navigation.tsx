
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Learning", path: "/learning" },
  { name: "Contact", path: "/contact" },
];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="theme-nav fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="theme-nav-brand text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            Yogesh<span className="text-cyan-400"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "theme-nav-link nav-link-active text-cyan-400 font-medium"
                    : "theme-nav-link nav-link text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition-all hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition-all hover:border-cyan-300/40 hover:bg-cyan-300/10"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="theme-nav-button md:hidden text-white hover:text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="theme-mobile-nav md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "theme-nav-link nav-link-active text-cyan-400 font-medium"
                      : "theme-nav-link nav-link text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

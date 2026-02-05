import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Sparkles, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Yogesh<span className="text-cyan-400">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/skills" className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</Link>
              <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Welcome to my Portfolio
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">
                  <span className="block">HI, I'M</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                    YOGESH
                  </span>
                </h1>
                
                {/* Subtitle with typing effect styling */}
                <div className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <span>Full Stack Developer</span>
                  <span className="text-cyan-400">|</span>
                  <Database className="w-6 h-6 text-cyan-400" />
                  <span>Data Science Enthusiast</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                I'm a passionate <span className="text-cyan-400 font-semibold">B.Tech Computer Science student</span> with a minor in Data Science. 
                Currently in my 3rd year, I'm constantly striving to sharpen my skills through hands-on projects, 
                internships, and real-world experience.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105">
                  <Link to="/projects" className="flex items-center gap-3">
                    View My Work
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-10 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300">
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <a href="#" className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:yogeshranwa33@gmail.com" className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Enhanced Profile Section */}
            <div className="relative animate-scale-in lg:justify-self-end">
              {/* Main Profile Circle */}
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 shadow-2xl shadow-cyan-400/20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-4 border-gray-700/50">
                    <img
                        src="./public/myphoto.jpg"
                            alt="Yogesh Profile"
                            className="w-80 h-80 rounded-full object-cover shadow-inner"
                          />

                  </div>
                </div>
                
                {/* Floating Elements */}
                
                
                
                
              </div>
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">CGPA</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-gray-300">Active Internships</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:yogeshranwa33@gmail.com" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-gray-300 hover:text-cyan-400 transition-all">
              <Mail className="w-5 h-5" />
              <span>yogeshranwa33@gmail.com</span>
            </a>
            <a href="tel:7495086033" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-gray-300 hover:text-cyan-400 transition-all">
              <Phone className="w-5 h-5" />
              <span>7495086033</span>
            </a>
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-gray-300 hover:text-cyan-400 transition-all">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-gray-300 hover:text-cyan-400 transition-all">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

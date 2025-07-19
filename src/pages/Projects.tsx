
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Globe, BarChart3, GitBranch, Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description: "A modern, responsive restaurant website with menu display, reservation system, and contact information. Built with clean UI/UX principles.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: Utensils,
      color: "from-orange-500 to-red-500",
      category: "Web Development"
    },
    {
      title: "Bubble Sort Visualization",
      description: "Interactive visualization of the bubble sort algorithm with step-by-step animation to help understand sorting mechanisms.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS", "Algorithm Visualization"],
      icon: Code,
      color: "from-blue-500 to-purple-500",
      category: "Algorithm Visualization"
    },
    {
      title: "Python Data Visualization",
      description: "Comprehensive data visualization project using Python libraries to create insightful charts and interactive dashboards.",
      tech: ["Python", "Matplotlib", "Pandas", "Seaborn", "Plotly"],
      icon: BarChart3,
      color: "from-green-500 to-blue-500",
      category: "Data Science"
    },
    {
      title: "Resource Allocation Graph & Dashboard",
      description: "Visual representation of resource allocation in operating systems with an interactive dashboard for monitoring.",
      tech: ["Python", "Data Structures", "Graph Theory", "Visualization"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      category: "System Programming"
    },
    {
      title: "First Semester Webpage",
      description: "My first web development project showcasing basic HTML, CSS, and JavaScript skills learned during first semester.",
      tech: ["HTML", "CSS", "JavaScript", "Basic Web Design"],
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      category: "Web Development"
    },
    {
      title: "Skillcraft Intern Projects",
      description: "EDA and data handling projects completed during internship, focusing on real-world data analysis and insights.",
      tech: ["Python", "Pandas", "NumPy", "EDA", "Data Cleaning"],
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      category: "Data Science"
    },
    {
      title: "Codeteck DevOps Tasks",
      description: "GitHub Actions and CI/CD pipeline projects focusing on automation and deployment processes.",
      tech: ["GitHub Actions", "CI/CD", "YAML", "Automation", "DevOps"],
      icon: GitBranch,
      color: "from-emerald-500 to-teal-500",
      category: "DevOps"
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "DevOps", "Algorithm Visualization", "System Programming"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">My <span className="text-cyan-400">Projects</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my technical projects, internship work, and learning journey
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-cyan-400 hover:bg-cyan-500 text-gray-900" 
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.title} 
                className="group bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-cyan-400 font-medium">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gray-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Want to see more?</h2>
              <p className="text-gray-300 mb-6">
                Check out my GitHub profile for more projects and contributions
              </p>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

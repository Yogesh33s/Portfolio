import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  BarChart3,
  Utensils,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description:
        "Responsive restaurant website with menu display, reservation system and elegant UI layout.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive"],
      icon: Utensils,
      color: "from-orange-500 to-red-500",
      category: "Web Development",
      github: "https://github.com/Yogesh33s/Reastaurant-website",
      live: "https://yogesh33s.github.io/Reastaurant-website/",
    },
    {
      title: "Bubble Sort Visualization",
      description:
        "Interactive visualization showing step-by-step bubble sort algorithm animation.",
      tech: ["JavaScript", "HTML Canvas", "CSS"],
      icon: Code,
      color: "from-blue-500 to-purple-500",
      category: "Algorithms",
      github: "https://github.com/Yogesh33s/bubble-sort-visualization",
      linkedin:
        "https://www.linkedin.com/posts/yogesh33_python-datavisualization-learningwithcode-activity-7334129335458562048-ranG",
    },
    {
      title: "Python Data Visualization",
      description:
        "Data visualization dashboards using Python libraries for analysis and insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: BarChart3,
      color: "from-green-500 to-blue-500",
      category: "Data Science",
      github: "https://github.com/Yogesh33s/python-Data-visualization",
      linkedin:
        "https://www.linkedin.com/posts/yogesh33_python-dataanalysis-eda-activity-7317387150524665859-Z4dS",
    },
    {
      title: "Resource Allocation Graph",
      description:
        "Operating system resource allocation graph with visualization dashboard used to illustrate process-resource relationships and detect potential deadlocks.",
      tech: ["Python", "Graph Theory", "Visualization"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      category: "System Programming",
      github: "https://github.com/Yogesh33s/resource-allocation-graph",
      live: "https://yogesh33s.github.io/Resource-allocation-graph/",
    },
    {
      title: "Ecommerce Website",
      description:
        "Responsive ecommerce website showcasing product listings, modern UI layout, and interactive shopping interface for browsing and exploring products.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      category: "Web Development",
      github: "https://github.com/Yogesh33s/Ecommerce",
      live: "https://yogesh33s.github.io/Ecommerce/",
    },
    {
      title: "Certificate Management System",
      description:
        "Flask + Oracle based system for managing student records and generating Bonafide, Academic, and Event certificates with PDF download support.",
      tech: [
        "Python",
        "Flask",
        "Oracle XE 21c",
        "PL/SQL",
        "ReportLab",
        "HTML",
        "Bootstrap",
      ],
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      category: "Full Stack Application",
      github: "https://github.com/Yogesh33s/Certificate-System",
      live: "https://certificate-system-jper.onrender.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navigation />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Projects</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my development work including web projects,
              data science tasks and algorithm visualizations.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="text-white w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-400">{project.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    </a>
                  )}

                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black">
                        LinkedIn
                      </Button>
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>

          {/* GitHub Section */}
          <div className="mt-24 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Explore More Projects
              </h2>

              <p className="text-gray-400 mb-6">
                Visit my GitHub profile to explore more development work,
                experiments and open-source contributions.
              </p>

              <a
                href="https://github.com/Yogesh33s?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3">
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
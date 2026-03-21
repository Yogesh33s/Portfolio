import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  BarChart3,
  Utensils,
  Sparkles,
} from "lucide-react";
import { FaCss3Alt, FaFlask, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import Navigation from "@/components/Navigation";

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  Python: FaPython,
  Flask: FaFlask,
  "Oracle XE 21c": Database,
  "PL/SQL": Database,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  Pandas: SiPandas,
  Matplotlib: BarChart3,
  Seaborn: FaPython,
  "HTML Canvas": Code,
  "Graph Theory": Database,
  Visualization: BarChart3,
  Responsive: Globe,
};

const statusStyles = {
  Live: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20",
  Completed: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20",
  "Learning Project": "bg-amber-500/15 text-amber-300 border border-amber-400/20",
  "In Progress": "bg-orange-500/15 text-orange-300 border border-orange-400/20",
};

const previewStyles = {
  dashboard: "from-cyan-500/30 via-sky-500/20 to-blue-500/30",
  analytics: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  commerce: "from-blue-500/30 via-indigo-500/20 to-cyan-500/30",
  system: "from-fuchsia-500/30 via-violet-500/20 to-slate-500/30",
  algorithm: "from-purple-500/30 via-blue-500/20 to-cyan-500/30",
  restaurant: "from-orange-500/30 via-rose-500/20 to-red-500/30",
} as const;

const Projects = () => {
  const projects = [
    {
      title: "Certificate Management System",
      category: "Full Stack Application",
      status: "Live" as const,
      featured: true,
      description:
        "Built a full-stack certificate workflow for managing student records and generating Bonafide, Academic, and Event certificates with downloadable PDF output.",
      highlights: [
        "Automated certificate generation with PDF export support",
        "Centralized student record management using Oracle XE 21c",
        "Connected Flask routes, templates, and database workflows into one system",
      ],
      tech: ["Python", "Flask", "Oracle XE 21c", "PL/SQL", "HTML"],
      icon: Database,
      preview: "dashboard" as const,
      screenshots: {
        main: "/cer1(1).png",
      },
      github: "https://github.com/Yogesh33s/Certificate-System",
      live: "https://certificate-system.vercel.app/",
    },
    {
      title: "Crop Recommendation System",
      category: "Machine Learning",
      status: "Live" as const,
      featured: true,
      description:
        "Built a machine learning-based crop recommendation system that predicts the most suitable crop using environmental factors such as NPK values, temperature, humidity, pH, and rainfall.",
      highlights: [
        "Preprocessed the dataset using median missing-value filling, outlier trimming, and StandardScaler.",
        "Trained and compared Decision Tree, Random Forest, Gradient Boosting, and SVM models for crop prediction.",
        "Data source: Kaggle Crop Prediction dataset.",
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      icon: BarChart3,
      preview: "analytics" as const,
      screenshots: {
        main: "/placeholder.svg",
      },
      github: "https://github.com/Yogesh33s/crop-predection",
      live: "https://crop-predection.vercel.app/",
    },
    {
      title: "Ecommerce Website",
      category: "Web Development",
      status: "Live" as const,
      featured: true,
      description:
        "Built a responsive e-commerce website with product listings, category-based browsing, and a streamlined shopping flow for faster product discovery.",
      highlights: [
        "Implemented responsive product grids and reusable UI sections for desktop and mobile layouts.",
        "Built category-wise product navigation and featured product sections to improve discoverability.",
        "Deployed the project on GitHub Pages with optimized static assets for fast page load.",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      preview: "commerce" as const,
      github: "https://github.com/Yogesh33s/Ecommerce",
      live: "https://yogesh33s.github.io/Ecommerce/",
    },
    {
      title: "Python Data Visualization",
      category: "Data Science",
      status: "Completed" as const,
      description:
        "Created Python-based visual analysis work to turn raw data into charts and dashboards that communicate patterns and insights more clearly.",
      highlights: [
        "Used Pandas for data preparation and analysis workflows",
        "Built visual storytelling using Matplotlib and Seaborn",
        "Improved confidence in exploratory data analysis and dashboard thinking",
      ],
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: BarChart3,
      preview: "analytics" as const,
      screenshots: {
        main: "/pythondata.png",
      },
      github: "https://github.com/Yogesh33s/python-Data-visualization",
      linkedin:
        "https://www.linkedin.com/posts/yogesh33_python-datavisualization-learningwithcode-activity-7334129335458562048-ranG",
    },
    {
      title: "Bubble Sort Visualization",
      category: "Algorithms",
      status: "Learning Project" as const,
      description:
        "Built an interactive algorithm visualizer that demonstrates bubble sort step by step, making comparisons and swaps easier to understand visually.",
      highlights: [
        "Visualized algorithm flow in a beginner-friendly format",
        "Improved understanding of sorting logic through animation",
        "Focused on translating core DSA ideas into UI interaction",
      ],
      tech: ["JavaScript", "HTML Canvas", "CSS"],
      icon: Code,
      preview: "algorithm" as const,
      screenshots: {
        main: "/bubblesort.png",
      },
      github: "https://github.com/Yogesh33s/BubbleSort-Visualization",
      linkedin:
        "https://www.linkedin.com/posts/yogesh33_python-datavisualization-learningwithcode-activity-7334129335458562048-ranG",
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      status: "Live" as const,
      description:
        "Developed a responsive restaurant website with menu presentation, reservation-oriented sections, and an elegant landing page experience.",
      highlights: [
        "Designed a modern menu browsing experience",
        "Balanced visuals and readability for better first impressions",
        "Improved responsiveness across desktop and mobile layouts",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Responsive"],
      icon: Utensils,
      preview: "restaurant" as const,
      github: "https://github.com/Yogesh33s/Reastaurant-website",
      live: "https://yogesh33s.github.io/Reastaurant-website/",
    },
    {
      title: "Resource Allocation Graph",
      category: "System Programming",
      status: "Completed" as const,
      description:
        "Created an operating system visualization project to map process-resource relationships and illustrate how deadlock scenarios can be identified.",
      highlights: [
        "Explained system concepts using graph-based visualization",
        "Connected theory with a more intuitive visual representation",
        "Strengthened understanding of process and resource dependencies",
      ],
      tech: ["Python", "Graph Theory", "Visualization"],
      icon: Database,
      preview: "system" as const,
      github: "https://github.com/Yogesh33s/resource-allocation-graph",
      live: "https://yogesh33s.github.io/Resource-allocation-graph/",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navigation />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Projects</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A portfolio of full-stack, web, data, and visualization work presented in a cleaner case-study format for faster recruiter scanning.
            </p>
          </div>

          <section className="space-y-8 mb-16">
            <div className="flex items-center gap-3">
              <Sparkles className="text-amber-300" />
              <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col md:flex-row gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-cyan-400/40"
                >
                  <div className="md:w-1/3 w-full">
                    <div className={`relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${previewStyles[project.preview]} ${project.screenshots ? "p-3" : "p-6"}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]" />
                      <div className={`relative flex h-full flex-col ${project.screenshots ? "gap-3" : "justify-between"}`}>
                        <div className="flex items-center justify-between">
                          <div className="rounded-xl bg-black/25 p-3">
                            <project.icon className="h-8 w-8 text-white" />
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                            {project.status}
                          </span>
                        </div>

                        <div className={`rounded-2xl border border-white/10 bg-black/30 ${project.screenshots ? "p-0 mt-3" : "px-4 pb-4 pt-6"}`}>
                          {project.live ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                              aria-label={`Open ${project.title} live project`}
                            >
                              <div className="browser-frame relative overflow-hidden rounded-2xl pt-6">
                                <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
                                  <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                  </div>
                                  <div className="h-3 w-24 rounded-full bg-white/10" />
                                </div>
                                <iframe
                                  src={project.live}
                                  title={`${project.title} live preview`}
                                  className="pointer-events-none absolute left-0 top-6 z-10 h-[768px] w-[1366px] origin-top-left scale-[0.3] rounded-b-2xl border-0 transition-transform duration-500 ease-out group-hover:scale-[0.31]"
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="h-[254px] w-full rounded-b-2xl" />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                              </div>
                            </a>
                          ) : project.screenshots ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                              aria-label={`Open ${project.title} project`}
                            >
                              <div className="browser-frame relative overflow-hidden rounded-2xl bg-slate-900 pt-6">
                                <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
                                  <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                  </div>
                                  <div className="h-3 w-24 rounded-full bg-white/10" />
                                </div>
                                <img
                                  src={project.screenshots.main}
                                  alt={`${project.title} main screen`}
                                  className="h-[254px] w-full rounded-b-2xl object-cover object-[50%_16%] opacity-100 transition-transform duration-500 ease-out group-hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                              </div>
                            </a>
                          ) : (
                            <div className="grid grid-cols-3 gap-3">
                              <div className="h-16 rounded-xl bg-white/10" />
                              <div className="h-16 rounded-xl bg-white/5" />
                              <div className="h-16 rounded-xl bg-white/10" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 w-full flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-cyan-400">{project.category}</p>

                      <p className="mt-4 text-gray-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                          Key Highlights
                        </h4>
                        <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-gray-400">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => {
                          const TechIcon = techIcons[tech] ?? Code;

                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-sm text-gray-200"
                            >
                              <TechIcon className="h-4 w-4" />
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-black hover:from-cyan-400 hover:to-blue-400">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>

                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button className="border border-cyan-500 bg-transparent px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                          </Button>
                        </a>
                      )}

                      {project.linkedin && (
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button className="border border-blue-500 bg-transparent px-5 py-2 text-blue-300 hover:bg-blue-500 hover:text-black">
                            View Details
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">More Projects</h2>

            <div className="space-y-6">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col md:flex-row gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.01] hover:border-cyan-400/30"
                >
                  <div className="md:w-1/3 w-full">
                    <div className={`relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${previewStyles[project.preview]} p-5`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_40%)]" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <div className="rounded-xl bg-black/25 p-3">
                            <project.icon className="h-7 w-7 text-white" />
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                            {project.status}
                          </span>
                        </div>

                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                            aria-label={`Open ${project.title} live project`}
                          >
                            <div className="browser-frame relative overflow-hidden rounded-2xl pt-6">
                              <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="h-3 w-24 rounded-full bg-white/10" />
                              </div>
                              <iframe
                                src={project.live}
                                title={`${project.title} live preview`}
                                className="pointer-events-none absolute left-0 top-6 z-10 h-[768px] w-[1366px] origin-top-left scale-[0.3] rounded-b-2xl border-0 transition-transform duration-500 ease-out group-hover:scale-[0.31]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                              <div className="h-[254px] w-full rounded-b-2xl" />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                            </div>
                          </a>
                        ) : project.screenshots ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                            aria-label={`Open ${project.title} repository`}
                          >
                            <div className="browser-frame relative overflow-hidden rounded-2xl bg-slate-900 pt-6">
                              <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="h-3 w-24 rounded-full bg-white/10" />
                              </div>
                              <img
                                src={project.screenshots.main}
                                alt={`${project.title} preview`}
                                className="h-[254px] w-full rounded-b-2xl object-cover object-top transition-transform duration-500 ease-out hover:scale-105"
                                loading="lazy"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                            </div>
                          </a>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                            aria-label={`Open ${project.title} project`}
                          >
                            <div className="browser-frame relative overflow-hidden rounded-2xl bg-slate-900 pt-6">
                              <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="h-3 w-24 rounded-full bg-white/10" />
                              </div>
                              <div className="h-[254px] w-full rounded-b-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 w-full flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-cyan-400">{project.category}</p>

                      <p className="mt-4 text-gray-300 leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="mt-4 ml-5 list-disc space-y-2 text-sm text-gray-400">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => {
                          const TechIcon = techIcons[tech] ?? Code;

                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-sm text-gray-200"
                            >
                              <TechIcon className="h-4 w-4" />
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-black hover:from-cyan-400 hover:to-blue-400">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>

                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button className="border border-cyan-500 bg-transparent px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                          </Button>
                        </a>
                      )}

                      {project.linkedin && (
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button className="border border-blue-500 bg-transparent px-5 py-2 text-blue-300 hover:bg-blue-500 hover:text-black">
                            View Details
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Explore More Projects</h2>
              <p className="text-gray-400 mb-6">
                Visit my GitHub profile to explore more development work, experiments, and ongoing learning projects.
              </p>
              <a
                href="https://github.com/Yogesh33s?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-black hover:from-cyan-400 hover:to-blue-400">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;

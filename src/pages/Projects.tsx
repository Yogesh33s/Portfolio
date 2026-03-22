import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Code,
  Database,
  ExternalLink,
  Github,
  Globe,
  Sparkles,
  Utensils,
} from "lucide-react";
import { FaCss3Alt, FaFlask, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { SiNumpy, SiPandas } from "react-icons/si";

import Navigation from "@/components/Navigation";
import { usePortfolioContent } from "@/contexts/PortfolioContentContext";
import type { ProjectItem } from "@/types/portfolio";

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  Python: FaPython,
  Flask: FaFlask,
  "Oracle XE 21c": Database,
  "PL/SQL": Database,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Matplotlib: BarChart3,
  Seaborn: FaPython,
  "HTML Canvas": Code,
  "Graph Theory": Database,
  Visualization: BarChart3,
  Responsive: Globe,
  "Scikit-learn": BarChart3,
};

const projectIcons = { BarChart3, Code, Database, Globe, Utensils };

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20",
  Completed: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20",
  "Learning Project": "bg-amber-500/15 text-amber-300 border border-amber-400/20",
  "In Progress": "bg-orange-500/15 text-orange-300 border border-orange-400/20",
};

const Projects = () => {
  const { content } = usePortfolioContent();
  const featuredProjects = content.projects.items.filter((project) => project.featured);
  const otherProjects = content.projects.items.filter((project) => !project.featured);

  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navigation />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Projects</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">{content.projects.subtitle}</p>
          </div>

          <section className="space-y-8 mb-16">
            <div className="flex items-center gap-3">
              <Sparkles className="text-amber-300" />
              <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">More Projects</h2>

            <div className="space-y-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const Icon = projectIcons[project.iconKey as keyof typeof projectIcons] || Code;
  const statusClass = statusStyles[project.status] || statusStyles["In Progress"];

  return (
    <article className="group flex flex-col md:flex-row gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-cyan-400/40">
      <div className="md:w-1/3 w-full">
        <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-500/20 p-5">
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-black/25 p-3">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}>{project.status}</span>
            </div>

            {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="mt-4 h-[180px] w-full rounded-2xl object-cover object-top" />}
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}>{project.status}</span>
          </div>
          <p className="mt-1 text-sm text-cyan-400">{project.category}</p>

          <p className="mt-4 text-gray-300 leading-relaxed">{project.description}</p>

          <ul className="mt-4 ml-5 list-disc space-y-2 text-sm text-gray-400">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const TechIcon = techIcons[tech] ?? Code;
              return (
                <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-sm text-gray-200">
                  <TechIcon className="h-4 w-4" />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-black hover:from-cyan-400 hover:to-blue-400">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          </a>

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="border border-cyan-500 bg-transparent px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;

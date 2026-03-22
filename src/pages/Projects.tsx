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

const projectIcons = {
  BarChart3,
  Code,
  Database,
  Globe,
  Utensils,
};

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20",
  Completed: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20",
  "Learning Project": "bg-amber-500/15 text-amber-300 border border-amber-400/20",
  "In Progress": "bg-orange-500/15 text-orange-300 border border-orange-400/20",
};

const previewStyles: Record<string, string> = {
  dashboard: "from-cyan-500/30 via-sky-500/20 to-blue-500/30",
  analytics: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  commerce: "from-blue-500/30 via-indigo-500/20 to-cyan-500/30",
  system: "from-fuchsia-500/30 via-violet-500/20 to-slate-500/30",
  algorithm: "from-purple-500/30 via-blue-500/20 to-cyan-500/30",
  restaurant: "from-orange-500/30 via-rose-500/20 to-red-500/30",
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

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {content.projects.subtitle}
            </p>
          </div>

          <section className="space-y-8 mb-16">
            <div className="flex items-center gap-3">
              <Sparkles className="text-amber-300" />
              <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">More Projects</h2>

            <div className="space-y-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
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

const ProjectCard = ({ project, featured }: { project: ProjectItem; featured: boolean }) => {
  const Icon = projectIcons[project.iconKey as keyof typeof projectIcons] || Code;
  const previewStyle = previewStyles[project.previewKey] || previewStyles.dashboard;
  const statusClass = statusStyles[project.status] || statusStyles["In Progress"];

  return (
    <article
      className={
        featured
          ? "group flex flex-col md:flex-row gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-cyan-400/40"
          : "flex flex-col md:flex-row gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.01] hover:border-cyan-400/30"
      }
    >
      <div className="md:w-1/3 w-full">
        <div
          className={`relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${previewStyle} ${project.imageUrl || project.liveUrl ? "p-3" : "p-5"}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-black/25 p-3">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}>
                {project.status}
              </span>
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                aria-label={`Open ${project.title} live project`}
              >
                <BrowserFrame>
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} live preview`}
                    className="pointer-events-none absolute left-0 top-6 z-10 h-[768px] w-[1366px] origin-top-left scale-[0.3] rounded-b-2xl border-0 transition-transform duration-500 ease-out group-hover:scale-[0.31]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="h-[254px] w-full rounded-b-2xl" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </BrowserFrame>
              </a>
            ) : project.imageUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image block rounded-[18px] p-1.5 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,255,200,0.1)]"
                aria-label={`Open ${project.title} project`}
              >
                <BrowserFrame>
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="h-[254px] w-full rounded-b-2xl object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </BrowserFrame>
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

      <div className="md:w-2/3 w-full flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}>
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

          {project.linkedinUrl && (
            <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button className="border border-blue-500 bg-transparent px-5 py-2 text-blue-300 hover:bg-blue-500 hover:text-black">
                View Details
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const BrowserFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="browser-frame relative overflow-hidden rounded-2xl bg-slate-900 pt-6">
    <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center gap-3 border-b border-white/10 bg-slate-900/95 px-3">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="h-3 w-24 rounded-full bg-white/10" />
    </div>
    {children}
  </div>
);

export default Projects;

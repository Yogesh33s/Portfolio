import { Brain, BookOpen, Sparkles, Users } from "lucide-react";
import { FaGitAlt, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiGooglecolab, SiMongodb, SiNumpy, SiPandas } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import Navigation from "@/components/Navigation";
import { usePortfolioContent } from "@/contexts/PortfolioContentContext";

const iconMap = {
  Brain,
  BookOpen,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  SiC,
  SiCplusplus,
  SiGooglecolab,
  SiMongodb,
  SiNumpy,
  SiPandas,
  Sparkles,
  Users,
  VscVscode,
};

const styles = [
  {
    accent: "text-cyan-300",
    sectionClass: "border-cyan-400/25 bg-cyan-500/5 shadow-[0_0_30px_rgba(34,211,238,0.08)]",
    titleClass: "text-cyan-100",
    cardClass:
      "border-cyan-400/20 bg-cyan-500/10 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]",
  },
  {
    accent: "text-fuchsia-300",
    sectionClass: "border-fuchsia-400/25 bg-fuchsia-500/5 shadow-[0_0_30px_rgba(217,70,239,0.08)]",
    titleClass: "text-fuchsia-100",
    cardClass:
      "border-fuchsia-400/20 bg-fuchsia-500/10 hover:border-fuchsia-300 hover:shadow-[0_0_28px_rgba(217,70,239,0.25)]",
  },
  {
    accent: "text-emerald-300",
    sectionClass: "border-emerald-400/25 bg-emerald-500/5 shadow-[0_0_30px_rgba(52,211,153,0.08)]",
    titleClass: "text-emerald-100",
    cardClass:
      "border-emerald-400/20 bg-emerald-500/10 hover:border-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.25)]",
  },
  {
    accent: "text-amber-300",
    sectionClass: "border-yellow-400/35 bg-yellow-500/5 shadow-[0_0_34px_rgba(250,204,21,0.1)]",
    titleClass: "text-yellow-50",
    cardClass:
      "border-yellow-400 bg-gradient-to-br from-yellow-500/20 via-orange-500/15 to-emerald-500/20 shadow-lg shadow-yellow-500/20 hover:border-yellow-300 hover:shadow-[0_0_36px_rgba(250,204,21,0.35)]",
    highlight: true,
  },
];

const Skills = () => {
  const { content } = usePortfolioContent();

  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{content.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {content.skills.sections.map((section, index) => {
              const style = styles[index % styles.length];
              return (
                <section
                  key={section.id}
                  className={`rounded-[2rem] border p-5 md:p-6 backdrop-blur-xl ${style.sectionClass} ${section.title === "Additional Competencies" ? "xl:col-span-2" : ""}`}
                >
                  <div className="space-y-5">
                    <div className={`flex items-center justify-between gap-4 px-1 py-1 ${style.titleClass}`}>
                      <div>
                        <h2 className="text-2xl font-black uppercase tracking-[0.08em] md:text-3xl">{section.title}</h2>
                      </div>
                      {style.highlight && <Sparkles className="shrink-0 text-amber-200" size={32} />}
                    </div>

                    <div className={section.title === "Additional Competencies" ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "grid grid-cols-2 gap-4 sm:grid-cols-2"}>
                      {section.items.map((skill) => {
                        const Icon = iconMap[skill.iconKey as keyof typeof iconMap] || Sparkles;
                        return (
                          <div key={skill.id} className={`group rounded-[1.1rem] border px-3 py-2 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl ${style.cardClass} ${skill.description ? "min-h-[96px]" : ""}`}>
                            <div className="flex items-center gap-1.5">
                              <div className="text-sm text-white">
                                <Icon />
                              </div>
                              <h3 className="text-xs font-medium leading-none text-white whitespace-nowrap sm:text-sm">{skill.name}</h3>
                            </div>
                            {skill.description && <p className="mt-2 text-[11px] leading-4 text-gray-400">{skill.description}</p>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

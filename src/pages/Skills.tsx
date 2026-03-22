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
    divider: "from-cyan-500/0 via-cyan-400/80 to-cyan-500/0",
    cardClass:
      "border-cyan-400/20 bg-cyan-500/10 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]",
  },
  {
    accent: "text-fuchsia-300",
    divider: "from-fuchsia-500/0 via-fuchsia-400/80 to-fuchsia-500/0",
    cardClass:
      "border-fuchsia-400/20 bg-fuchsia-500/10 hover:border-fuchsia-300 hover:shadow-[0_0_28px_rgba(217,70,239,0.25)]",
  },
  {
    accent: "text-emerald-300",
    divider: "from-emerald-500/0 via-emerald-400/80 to-emerald-500/0",
    cardClass:
      "border-emerald-400/20 bg-emerald-500/10 hover:border-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.25)]",
  },
  {
    accent: "text-amber-300",
    divider: "from-amber-500/0 via-amber-400/80 to-amber-500/0",
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

          <div className="space-y-12">
            {content.skills.sections.map((section, index) => {
              const style = styles[index % styles.length];
              return (
                <section key={section.id} className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className={`text-2xl font-bold ${style.accent}`}>{section.title}</h2>
                      {style.highlight && <Sparkles className="text-amber-300" size={22} />}
                    </div>
                    <div className={`h-px w-full bg-gradient-to-r ${style.divider}`} />
                  </div>

                  <div className={section.title === "Additional Competencies" ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"}>
                    {section.items.map((skill) => {
                      const Icon = iconMap[skill.iconKey as keyof typeof iconMap] || Sparkles;
                      return (
                        <div key={skill.id} className={`group rounded-2xl border p-5 backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-xl ${style.cardClass} ${section.title === "Additional Competencies" ? "min-h-[190px]" : ""}`}>
                          <div className="mb-4">
                            <div className="w-fit rounded-xl bg-black/20 p-3 text-3xl text-white">
                              <Icon />
                            </div>
                          </div>
                          <h3 className={`font-semibold text-white ${section.title === "Additional Competencies" ? "text-base whitespace-nowrap" : "text-lg"}`}>{skill.name}</h3>
                          {skill.description && <p className="mt-2 text-sm text-gray-400">{skill.description}</p>}
                        </div>
                      );
                    })}
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

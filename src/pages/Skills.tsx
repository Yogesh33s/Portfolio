import { Brain, Users, BookOpen, Sparkles } from "lucide-react";
import { FaPython, FaJava, FaGitAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiC, SiGooglecolab, SiPandas, SiNumpy, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Navigation from "@/components/Navigation";

const Skills = () => {
  const skillSections = [
    {
      title: "Programming Languages",
      accent: "text-cyan-300",
      divider: "from-cyan-500/0 via-cyan-400/80 to-cyan-500/0",
      cardClass:
        "border-cyan-400/20 bg-cyan-500/10 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]",
      items: [
        { name: "Java", icon: FaJava },
        { name: "Python", icon: FaPython },
        { name: "C++", icon: SiCplusplus },
        { name: "C", icon: SiC },
      ],
    },
    {
      title: "Tools & Platforms",
      accent: "text-fuchsia-300",
      divider: "from-fuchsia-500/0 via-fuchsia-400/80 to-fuchsia-500/0",
      cardClass:
        "border-fuchsia-400/20 bg-fuchsia-500/10 hover:border-fuchsia-300 hover:shadow-[0_0_28px_rgba(217,70,239,0.25)]",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: VscVscode },
        { name: "Google Colab", icon: SiGooglecolab },
      ],
    },
    {
      title: "Libraries / Frameworks",
      accent: "text-emerald-300",
      divider: "from-emerald-500/0 via-emerald-400/80 to-emerald-500/0",
      cardClass:
        "border-emerald-400/20 bg-emerald-500/10 hover:border-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.25)]",
      items: [
        { name: "NumPy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
        { name: "Matplotlib", icon: FaPython },
        { name: "Seaborn", icon: FaPython },
      ],
    },
    {
      title: "Currently Learning",
      accent: "text-amber-300",
      divider: "from-amber-500/0 via-amber-400/80 to-amber-500/0",
      cardClass:
        "border-yellow-400 bg-gradient-to-br from-yellow-500/20 via-orange-500/15 to-emerald-500/20 shadow-lg shadow-yellow-500/20 hover:border-yellow-300 hover:shadow-[0_0_36px_rgba(250,204,21,0.35)]",
      highlight: true,
      items: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MERN Stack", icon: SiMongodb },
      ],
    },
    {
      title: "Additional Competencies",
      accent: "text-cyan-300",
      divider: "from-cyan-500/0 via-cyan-400/80 to-cyan-500/0",
      cardClass:
        "border-cyan-400/20 bg-cyan-500/10 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]",
      items: [
        {
          name: "Problem Solving",
          description: "DSA-based problem solving with a LeetCode-focused approach",
          icon: Brain,
        },
        {
          name: "Collaboration & Coordination",
          description: "Team collaboration, event execution, and shared ownership",
          icon: Users,
        },
        {
          name: "Actively Learning Full-Stack Development",
          description: "Building stronger frontend and backend fundamentals every week",
          icon: BookOpen,
        },
      ],
    },
  ];

  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Skills</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A growing toolkit of languages, platforms, and frameworks I use while building toward full-stack development
            </p>
          </div>

          <div className="space-y-12">
            {skillSections.map((section) => (
              <section key={section.title} className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h2 className={`text-2xl font-bold ${section.accent}`}>
                      {section.title}
                    </h2>
                    {section.highlight && <Sparkles className="text-amber-300" size={22} />}
                  </div>
                  <div className={`h-px w-full bg-gradient-to-r ${section.divider}`} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {section.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className={`group rounded-2xl border p-5 backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-xl ${section.cardClass}`}
                      >
                        <div className="mb-4">
                          <div className="w-fit rounded-xl bg-black/20 p-3 text-3xl text-white">
                            <Icon />
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h3>
                        {skill.description && (
                          <p className="mt-2 text-sm text-gray-400">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;

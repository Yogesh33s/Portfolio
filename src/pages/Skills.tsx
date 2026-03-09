import { Brain, Users, BookOpen } from "lucide-react";
import { FaPython, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiC, SiGooglecolab, SiPandas, SiNumpy } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Navigation from "@/components/Navigation";

const Skills = () => {

  const skills = [
    { name: "Java", level: 90, icon: FaJava },
    { name: "Python", level: 85, icon: FaPython },
    { name: "C++", level: 70, icon: SiCplusplus },
    { name: "C", level: 65, icon: SiC },
    { name: "Git", level: 80, icon: FaGitAlt },
    { name: "GitHub", level: 80, icon: FaGithub },
    { name: "VS Code", level: 90, icon: VscVscode },
    { name: "Google Colab", level: 85, icon: SiGooglecolab },
    { name: "NumPy", level: 70, icon: SiNumpy },
    { name: "Pandas", level: 75, icon: SiPandas },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Skills</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build impactful solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {skills.map((skill) => {
              const Icon = skill.icon;

              const radius = 32;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={skill.name}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition duration-300"
                >

                  {/* Progress Ring */}
                  <div className="relative w-24 h-24 mb-4">

                    <svg className="w-24 h-24 rotate-[-90deg]">

                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="#374151"
                        strokeWidth="8"
                        fill="transparent"
                      />

                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="#22d3ee"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 group-hover:stroke-cyan-300"
                      />

                    </svg>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-3xl text-cyan-400">
                      <Icon />
                    </div>

                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {skill.level}% proficiency
                  </p>

                </div>
              );
            })}

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-16"></div>

          {/* Additional Competencies */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10">

            <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <Brain className="text-cyan-400" />
              Additional Competencies
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">

              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition hover:scale-105">
                <Brain className="mx-auto text-cyan-400 mb-4" size={28}/>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Problem Solving
                </h3>
                <p className="text-gray-400 text-sm">
                  Analytical thinking and creative solutions
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition hover:scale-105">
                <Users className="mx-auto text-cyan-400 mb-4" size={28}/>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Team Leadership
                </h3>
                <p className="text-gray-400 text-sm">
                  Event management and team coordination
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition hover:scale-105">
                <BookOpen className="mx-auto text-cyan-400 mb-4" size={28}/>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Continuous Learning
                </h3>
                <p className="text-gray-400 text-sm">
                  Always staying updated with latest technologies
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
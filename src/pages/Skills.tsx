
import { Code, Database, GitBranch, Monitor, Wrench, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 85, description: "Data analysis, automation, web development" },
        { name: "Java", level: 75, description: "Object-oriented programming, enterprise applications" },
        { name: "C++", level: 70, description: "System programming, competitive programming" },
        { name: "C", level: 65, description: "System-level programming, embedded systems" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git & GitHub", level: 80, description: "Version control, collaboration, CI/CD" },
        { name: "VS Code", level: 90, description: "Primary development environment" },
        { name: "Google Colab", level: 85, description: "Data science, machine learning experiments" },
        { name: "Excel", level: 70, description: "Data analysis, reporting, visualization" },
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Data Visualization", level: 80, description: "Creating insightful charts and dashboards" },
        { name: "EDA", level: 85, description: "Exploratory data analysis and insights" },
        { name: "Statistical Analysis", level: 75, description: "Data interpretation and modeling" },
        { name: "Machine Learning", level: 70, description: "Predictive modeling and algorithms" },
      ]
    },
    {
      title: "DevOps & Development",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "GitHub Actions", level: 75, description: "CI/CD pipeline automation" },
        { name: "Web Development", level: 80, description: "Frontend and backend development" },
        { name: "Automation", level: 85, description: "Process automation and scripting" },
        { name: "Project Management", level: 70, description: "Planning and execution" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">My <span className="text-cyan-400">Skills</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="bg-gray-800/50 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-cyan-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                          <div 
                            className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="bg-gray-800/50 rounded-2xl p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="text-cyan-400" />
              Additional Competencies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Problem Solving</h3>
                <p className="text-gray-400">Analytical thinking and creative solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Team Leadership</h3>
                <p className="text-gray-400">Event management and team coordination</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning</h3>
                <p className="text-gray-400">Always staying updated with latest technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

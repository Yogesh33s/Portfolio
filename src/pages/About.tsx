
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">About <span className="text-cyan-400">Me</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate about technology, driven by curiosity, and always eager to learn and grow.
            </p>
          </div>

          {/* Bio Section */}
          <div className="bg-gray-800/50 rounded-2xl p-8 mb-12 animate-scale-in">
            <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Yogesh, a passionate and ambitious B.Tech Computer Science student with a minor in Data Science. 
              I'm currently in my 3rd year at Lovely Professional University and constantly striving to sharpen my skills 
              through hands-on projects, internships, and real-world experience. I aim to build a strong technical foundation 
              while working toward a future filled with impact, innovation, and success.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" />
              Education
            </h2>
            <div className="bg-gray-800/50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    B.Tech Computer Science Engineering + Data Science Minor
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">Lovely Professional University</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2022 - 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Punjab, India
                    </span>
                  </div>
                  <p className="text-gray-300 mt-3">
                    Currently in 3rd year, focusing on computer science fundamentals with specialized 
                    knowledge in data science, machine learning, and modern software development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-cyan-400" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {/* DevOps Intern */}
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">DevOps Intern</h3>
                    <p className="text-green-400 font-medium mb-2">Codeteck</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        June 2025 - Present
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Working on GitHub Actions, CI/CD pipelines, and automation tasks. 
                      Gaining hands-on experience with modern DevOps practices and tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Science Intern */}
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Science Intern</h3>
                    <p className="text-blue-400 font-medium mb-2">Skillcraft Technologies</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        June 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Worked on EDA (Exploratory Data Analysis) and data handling projects. 
                      Applied statistical analysis and data visualization techniques to real-world datasets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Manager */}
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Event Manager & Student Organizer</h3>
                    <p className="text-purple-400 font-medium mb-2">Pentaomnia, LPU</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        ~6 months
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Organized and managed university events, coordinated with student teams, 
                      and developed leadership and project management skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3 text-lg font-semibold">
              <Link to="/contact">
                Let's Work Together
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

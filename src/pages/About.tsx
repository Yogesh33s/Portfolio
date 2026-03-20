import Navigation from "@/components/Navigation";
import { BookOpen, Rocket, Sparkles, Target } from "lucide-react";

const About = () => {
  return (
    <div className="theme-page min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_20%),linear-gradient(160deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
      <Navigation />

      <div className="relative px-6 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-25"></div>
          <div className="absolute left-[10%] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl hero-float"></div>
          <div className="absolute right-[8%] top-56 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl hero-float-delayed"></div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <section className="mb-10 text-center animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2.5 text-sm text-cyan-200 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              About Me
            </div>
          </section>

          <section className="mx-auto max-w-5xl" data-reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="min-h-[21rem] rounded-[1.8rem] border border-cyan-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,255,255,0.04))] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-white">My Story</h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  I got interested in technology by exploring how websites and applications work behind
                  the scenes. Over time, this curiosity turned into a strong interest in building real
                  solutions. I enjoy breaking problems into smaller parts and turning ideas into working
                  products.
                </p>
              </div>

              <div className="min-h-[21rem] rounded-[1.8rem] border border-blue-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(255,255,255,0.04))] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-400/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.18)]">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-white">My Aim</h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  My goal is to become a skilled Full Stack Developer who can build efficient, scalable,
                  and user-focused applications. I aim to create solutions that are clean, intuitive,
                  and impactful.
                </p>
              </div>

              <div className="min-h-[21rem] rounded-[1.8rem] border border-violet-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(167,139,250,0.14),rgba(255,255,255,0.04))] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-400/15 text-violet-200 shadow-[0_0_24px_rgba(167,139,250,0.18)]">
                  <Rocket className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-white">What I&apos;m Doing</h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  I am building projects using React and Tailwind CSS while learning backend development
                  and databases. I also practice DSA regularly to improve problem-solving and understand
                  how real-world systems are designed.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-slate-300 sm:text-lg">
              I believe in learning by building and improving through consistency.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

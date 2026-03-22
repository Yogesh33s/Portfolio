import Navigation from "@/components/Navigation";
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  Database,
  GraduationCap,
  Lightbulb,
  MapPin,
  School,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { usePortfolioContent } from "@/contexts/PortfolioContentContext";

const iconMap = { Briefcase, Database, GraduationCap, School };

const Learning = () => {
  const { content } = usePortfolioContent();
  const learning = content.education;

  return (
    <div className="theme-page min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_20%),linear-gradient(160deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
      <Navigation />
      <div className="relative px-6 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-25"></div>
          <div className="absolute left-[10%] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl hero-float"></div>
          <div className="absolute right-[8%] top-56 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl hero-float-delayed"></div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <section className="mb-10 text-center animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2.5 text-sm text-cyan-200 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Learning
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">{learning.heroTitle}</h1>
          </section>

          <section className="mb-8 rounded-[2rem] border border-blue-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(255,255,255,0.04))] p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20" data-reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>

            <div className="relative grid gap-6">
              <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-gradient-to-b from-cyan-300/50 via-blue-400/40 to-white/0 sm:block"></div>
              {learning.educationEntries.map((entry) => {
                const Icon = iconMap[entry.iconKey as keyof typeof iconMap] || School;
                return (
                  <div key={entry.id} className="relative rounded-[1.7rem] border border-blue-300/12 bg-slate-950/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/25 hover:bg-white/[0.07]">
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm uppercase tracking-[0.22em] text-cyan-300">{entry.label}</p>
                        <h3 className="mb-1 text-xl font-semibold text-white">{entry.title}</h3>
                        <p className="mb-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{entry.period}</span>
                          {entry.location && <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{entry.location}</span>}
                          {entry.metric && <span className="flex items-center gap-1"><Lightbulb className="h-4 w-4" />{entry.metric}</span>}
                          {entry.stream && <span className="flex items-center gap-1"><Database className="h-4 w-4" />{entry.stream}</span>}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-300">{entry.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {learning.trainingEntries.map((entry) => {
            const Icon = iconMap[entry.iconKey as keyof typeof iconMap] || Database;
            return (
              <section key={entry.id} className="mb-8 rounded-[2rem] border border-violet-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(167,139,250,0.14),rgba(255,255,255,0.04))] p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/20" data-reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                  <Database className="h-4 w-4" />
                  Training
                </div>
                <div className="rounded-[1.7rem] border border-violet-300/12 bg-slate-950/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-violet-300/30 hover:bg-white/[0.07]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm uppercase tracking-[0.22em] text-cyan-300">{entry.label}</p>
                      <h3 className="mb-1 text-xl font-semibold text-white">{entry.title}</h3>
                      <p className="mb-3 flex items-center gap-1 text-sm text-slate-400"><Calendar className="h-4 w-4" />{entry.period}</p>
                      <ul className="space-y-2 leading-relaxed text-slate-300">
                        {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                      {entry.summary && <p className="mt-4 text-sm font-medium text-violet-200">{entry.summary}</p>}
                      {entry.certificateTitle && entry.certificateIssuer && entry.certificateImage && (
                        <Link
                          to={`/certificate?title=${encodeURIComponent(entry.certificateTitle)}&issuer=${encodeURIComponent(entry.certificateIssuer)}&image=${encodeURIComponent(entry.certificateImage)}&source=learning`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-violet-400/15"
                        >
                          View Certificate
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {learning.experienceEntries.map((entry) => {
            const Icon = iconMap[entry.iconKey as keyof typeof iconMap] || Briefcase;
            return (
              <section key={entry.id} className="rounded-[2rem] border border-emerald-400/15 border-l-4 bg-[linear-gradient(135deg,rgba(52,211,153,0.14),rgba(255,255,255,0.04))] p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20" data-reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                  <Briefcase className="h-4 w-4" />
                  Event Management
                </div>
                <div className="rounded-[1.7rem] border border-emerald-300/12 bg-slate-950/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-300/30 hover:bg-white/[0.07]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm uppercase tracking-[0.22em] text-cyan-300">{entry.label}</p>
                      <h3 className="mb-1 text-xl font-semibold text-white">{entry.title}</h3>
                      <p className="mb-3 flex items-center gap-1 text-sm text-slate-400"><Calendar className="h-4 w-4" />{entry.period}</p>
                      <ul className="space-y-2 leading-relaxed text-slate-300">
                        {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learning;

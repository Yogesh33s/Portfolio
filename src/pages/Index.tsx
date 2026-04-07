import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  Laptop,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { usePortfolioContent } from "@/contexts/PortfolioContentContext";

const statIcons = [GraduationCap, Code2, Laptop] as const;

const Index = () => {
  const { content } = usePortfolioContent();
  const home = content.home;

  const roleMeta = [
    { icon: Code2 },
    { icon: Database },
  ] as const;

  const socialIconMap = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  } as const;

  const connectIconMap = {
    LinkedIn: Linkedin,
    GitHub: Github,
    Email: Mail,
  } as const;

  return (
    <div className="theme-page min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_18%,_rgba(56,189,248,0.2),_transparent_20%),radial-gradient(circle_at_80%_14%,_rgba(168,85,247,0.16),_transparent_22%),radial-gradient(circle_at_50%_100%,_rgba(14,165,233,0.12),_transparent_26%),linear-gradient(145deg,_#020617_0%,_#0b1220_38%,_#111827_100%)]">
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-bg absolute inset-0"></div>
          <div className="hero-grid absolute inset-0 opacity-30"></div>
          <div className="light-wallpaper absolute inset-0 opacity-0"></div>
          <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_transparent_58%)] blur-3xl"></div>
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_42%)]"></div>
          <div className="absolute left-[2%] top-20 h-64 w-64 rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] blur-[2px]"></div>
          <div className="absolute right-[5%] top-16 h-72 w-72 rounded-[2.5rem] border border-fuchsia-300/10 bg-fuchsia-300/[0.03] rotate-12"></div>
          <div className="absolute left-[15%] bottom-16 h-52 w-52 rounded-[2rem] border border-white/10 bg-white/[0.03] -rotate-12"></div>
          <div className="absolute right-[18%] bottom-14 h-36 w-36 rounded-full border border-sky-300/10 bg-sky-300/[0.04]"></div>
          <div className="absolute left-[8%] top-24 h-80 w-80 rounded-full bg-cyan-400/14 blur-3xl hero-float"></div>
          <div className="absolute right-[8%] top-36 h-96 w-96 rounded-full bg-violet-500/12 blur-3xl hero-float-delayed"></div>
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl hero-float"></div>
        </div>

        <section className="relative px-6 pb-20 pt-28 sm:pt-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-16">
            <div className="space-y-8 animate-fade-in lg:pr-10">
              <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-cyan-200 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                {home.badge}
              </div>

              <div className="hero-reveal hero-copy space-y-6">
                <h1 className="leading-[0.92] text-white">
                  <span className="block text-xl font-semibold text-cyan-300 sm:text-2xl">
                    {home.intro}
                  </span>
                  <span className="hero-name mt-1 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text px-[2px] pb-[6px] text-7xl font-black text-transparent sm:text-8xl lg:text-[7rem]">
                    {home.name}
                  </span>
                  <span className="hero-role mt-4 flex max-w-3xl flex-wrap items-center gap-2 text-base font-semibold text-slate-200 sm:text-lg lg:flex-nowrap lg:text-[1.35rem]">
                    {home.roles.map((role, index) => {
                      const Icon = roleMeta[index]?.icon ?? Code2;
                      return (
                        <Fragment key={`${role}-${index}`}>
                          {index > 0 ? <span className="text-cyan-300 whitespace-nowrap">|</span> : null}
                          <span className="inline-flex items-center gap-2 whitespace-nowrap">
                            <Icon className="h-5 w-5 text-cyan-300" />
                            {role}
                          </span>
                        </Fragment>
                      );
                    })}
                  </span>
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
                  {home.summary}
                </p>
              </div>

              <div className="hero-reveal grid max-w-xl gap-4 sm:grid-cols-2">
                <Button className="btn-primary rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 py-6 text-lg font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(37,99,235,0.36)]">
                  <Link to={home.primaryCtaUrl} className="flex items-center justify-center gap-2">
                    {home.primaryCtaLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <a href={home.resumeUrl} download className="w-full">
                  <Button
                    variant="outline"
                    className="btn-outline w-full rounded-full border border-white/15 bg-white/5 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {home.resumeLabel}
                  </Button>
                </a>
              </div>

              <div className="hero-reveal flex flex-wrap gap-4">
                {home.socialLinks.map((item) => {
                  const Icon = socialIconMap[item.label as keyof typeof socialIconMap] ?? Mail;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      className="social-icon flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-cyan-200"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative mx-auto flex w-full justify-center animate-scale-in lg:justify-self-end lg:translate-x-10 xl:translate-x-14">
              <div className="absolute -top-8 left-4 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl"></div>
              <div className="absolute -bottom-8 right-4 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"></div>

              <div className="relative w-full max-w-md">
                <div className="portfolio-orb absolute -inset-6 rounded-[2.5rem] opacity-80"></div>
                <div className="absolute -inset-2 rounded-[2.4rem] bg-gradient-to-br from-cyan-300/15 via-transparent to-blue-500/15 blur-xl"></div>
                <div className="profile-backplate absolute inset-4 rounded-[2.1rem]"></div>
                <div className="profile-glint absolute left-6 top-10 h-3 w-3 rounded-full"></div>
                <div className="profile-glint profile-glint-delayed absolute right-10 top-24 h-2.5 w-2.5 rounded-full"></div>
                <div className="profile-glint absolute bottom-24 left-8 h-2.5 w-2.5 rounded-full"></div>
                <div className="absolute right-2 top-6 rounded-full border border-cyan-300/20 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-md">
                  {home.availabilityText}
                </div>
                <div className="profile-card profile-frame home-surface group relative overflow-hidden rounded-[2.3rem] border border-blue-400/20 bg-white/5 p-2 shadow-[0_28px_70px_rgba(8,47,73,0.42)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(34,211,238,0.22)]">
                  <img
                    src={home.imageUrl}
                    alt={home.imageAlt}
                    className="profile-img h-[28rem] w-full rounded-[1.9rem] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] sm:h-[31rem]"
                  />
                  <div className="absolute inset-0 rounded-[1.9rem] border border-white/10"></div>
                  <div className="absolute inset-x-6 top-0 h-20 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="absolute inset-0 rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_26%,rgba(3,7,18,0.28)_100%)]"></div>
                  <div className="home-surface absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-4 backdrop-blur-md">
                    <div className="mb-2 flex items-center gap-2 text-cyan-200">
                      <MapPin className="h-4 w-4" />
                      {home.location}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {home.imageCardText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-10" data-reveal>
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {home.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Laptop;
              return (
              <div
                key={stat.id}
                className="card reveal-block stat-card group rounded-[1.8rem] border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-4xl font-black text-cyan-200">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
              </div>
            )})}
          </div>
        </section>

        <section className="relative px-6 pb-20 pt-8" data-reveal>
          <div className="connect-panel reveal-block mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-300">{home.connectBadge}</p>
                <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">{home.connectTitle}</h2>
                <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                  {home.connectDescription}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {home.connectLinks.map((item) => {
                  const Icon = connectIconMap[item.label as keyof typeof connectIconMap] ?? Mail;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      className="connect-card rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200"
                    >
                      <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                      <div className="text-lg font-semibold text-white">{item.label}</div>
                      <div className="mt-1 text-sm break-all">{item.displayText || item.url}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

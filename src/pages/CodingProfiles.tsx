import { ArrowUpRight, Award, Code2, ExternalLink, Star, Trophy } from "lucide-react";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    name: "HackerRank",
    handle: "@yogeshranwa33",
    url: "https://www.hackerrank.com/profile/yogeshranwa33",
    icon: Trophy,
    accent:
      "border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(255,255,255,0.05))] hover:shadow-emerald-500/20",
    badge: "Problem Solving",
    description:
      "Track my HackerRank profile for coding challenges, badges, and hands-on practice across core programming topics.",
    badgeRatings: [
      { title: "Problem Solving", stars: 3 },
      { title: "C++", stars: 3 },
      { title: "Java", stars: 4 },
    ],
    certificates: [
      "Java Basic",
      "C++ Basic",
      "Problem Solving Basic",
      "Problem Solving Intermediate",
    ],
  },
  {
    name: "LeetCode",
    handle: "@9v26obPPgG",
    url: "https://leetcode.com/u/9v26obPPgG/",
    icon: Code2,
    accent:
      "border-amber-400/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(255,255,255,0.05))] hover:shadow-amber-500/20",
    badge: "DSA Practice",
    description:
      "Visit my LeetCode profile to see my algorithm practice journey and problem-solving progress.",
    badgeRatings: [],
    certificates: [],
  },
];

const CodingProfiles = () => {
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
          <section className="mb-14 text-center animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2.5 text-sm text-cyan-200 backdrop-blur-md">
              <Award className="h-4 w-4" />
              Coding Profiles
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Competitive coding and problem-solving profiles.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Explore my coding practice platforms where I keep improving problem-solving, DSA thinking, and consistency.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2" data-reveal>
            {profiles.map((profile) => {
              const Icon = profile.icon;

              return (
                <article
                  key={profile.name}
                  className={`rounded-[2rem] border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${profile.accent}`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950/50 text-white shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                      {profile.badge}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-white">{profile.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-300">{profile.handle}</p>
                  <p className="mt-5 text-base leading-7 text-slate-300">{profile.description}</p>

                  {profile.badgeRatings.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                        Professional Badges
                      </h3>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {profile.badgeRatings.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                          >
                            <div className="text-sm font-semibold text-white">{item.title}</div>
                            <div className="mt-2 flex items-center gap-1">
                              {Array.from({ length: item.stars }).map((_, index) => (
                                <span
                                  key={`${item.title}-filled-${index}`}
                                  className="inline-flex items-center justify-center text-yellow-300"
                                >
                                  <Star className="h-3 w-3 fill-current" />
                                </span>
                              ))}
                              {Array.from({ length: 5 - item.stars }).map((_, index) => (
                                <span
                                  key={`${item.title}-empty-${index}`}
                                  className="inline-flex items-center justify-center text-slate-500"
                                >
                                  <Star className="h-3 w-3" />
                                </span>
                              ))}
                              <span className="ml-2 text-sm font-semibold text-amber-300">
                                {item.stars}/5
                              </span>
                            </div>
                            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-300">
                              Rating
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {profile.certificates.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                        Certificates
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                        {profile.certificates.map((item) => (
                          <li
                            key={item}
                            className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))] px-4 py-3"
                          >
                            <span className="font-medium text-cyan-200">Certificate:</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-slate-950 hover:from-cyan-400 hover:to-blue-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Profile
                      </Button>
                    </a>

                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                    >
                      Open in new tab
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;

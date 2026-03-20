import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const CertificateView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const title = params.get("title") ?? "Certificate";
  const issuer = params.get("issuer") ?? "Certificate";
  const image = params.get("image") ?? "";
  const source = params.get("source") ?? "certificates";
  const backPath = source === "learning" ? "/learning" : "/certificates";
  const backLabel = source === "learning" ? "Back to Learning" : "Back to Certificates";

  return (
    <div className="theme-page min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_20%),linear-gradient(160deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
      <Navigation />

      <div className="relative px-4 pb-10 pt-28 sm:px-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-20"></div>
          <div className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
          <div className="absolute right-[8%] top-40 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Certificate Preview</p>
              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{title}</h1>
              <p className="mt-1 text-sm text-slate-400">{issuer}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={backPath}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200"
              >
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            </div>
          </div>

          <div className="mx-auto w-fit rounded-[1.8rem] border border-white/10 bg-black/35 p-3 backdrop-blur-md shadow-[0_24px_70px_rgba(8,47,73,0.32)] sm:p-4">
            {image ? (
              <img
                src={image}
                alt={title}
                className="block max-h-[calc(100vh-12rem)] max-w-full rounded-[1.2rem] border border-white/10 bg-white object-contain"
              />
            ) : (
              <div className="rounded-[1.2rem] border border-white/10 px-6 py-20 text-center text-slate-300">
                Certificate preview is not available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;

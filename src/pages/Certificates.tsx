import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

import { usePortfolioContent } from "@/contexts/PortfolioContentContext";

const Certificates = () => {
  const { content } = usePortfolioContent();

  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-cyan-400">Certificates</span>
            </h1>

            <p className="text-gray-300 mt-4">{content.certificates.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {content.certificates.items.map((cert) => (
              <div key={cert.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300">
                <Link
                  to={`/certificate?title=${encodeURIComponent(cert.title)}&issuer=${encodeURIComponent(cert.issuer)}&image=${encodeURIComponent(cert.image)}&source=certificates`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
                </Link>

                <div className="p-5 text-center min-h-[150px]">
                  <h3 className="text-white font-semibold text-lg">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">{cert.summary}</p>
                </div>
              </div>
            ))}

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-16"></div>

            <div className="flex justify-center px-1">
              <div className="text-center max-w-xl">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Keep <span className="text-cyan-400">Growing</span>
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Learning never stops. I continue exploring new technologies, improving my skills and building impactful solutions every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

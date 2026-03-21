import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    image: "/NPTEL.png",
    summary: "Learned cloud service models, deployment models, and scalable architecture basics.",
  },
  {
    title: "PL/SQL & Data Science Bootcamp",
    issuer: "Centre for Professional Enhancement - LPU",
    image: "/PL_SQL.png",
    summary: "Built SQL and PL/SQL foundations with data handling and analysis workflows.",
  },
  {
    title: "Java Programming",
    issuer: "Lovely Professional University",
    image: "/Java.png",
    summary: "Covered Java fundamentals, OOP concepts, and practical coding exercises.",
  },
  {
    title: "Code-A-Hunt Hackathon",
    issuer: "CodingBlocks LPU",
    image: "/Code-a-hunt.png",
    summary: "Participated in a coding challenge focused on speed, logic, and team execution.",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Lovely Professional University",
    image: "/DSA.png",
    summary: "Strengthened problem-solving using core data structures and algorithmic thinking.",
  },
  {
    title: "Object Oriented Programming",
    issuer: "Lovely Professional University",
    image: "/OOPS.png",
    summary: "Applied OOP principles for modular design, abstraction, and code reusability.",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "University of Colorado - Coursera",
    image: "/Computer Communications.png",
    summary: "Explored networking protocols, communication layers, and internet fundamentals.",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google - Coursera",
    image: "/Bits.png",
    summary: "Understood practical networking concepts including routing, addressing, and tools.",
  },
  {
    title: "Packet Switching Networks",
    issuer: "University of Colorado - Coursera",
    image: "/Packet Switching.png",
    summary: "Learned packet-switched network behavior and performance-focused communication.",
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado - Coursera",
    image: "/TCP_IP.png",
    summary: "Studied TCP/IP internals, reliability mechanisms, and protocol-level design.",
  },
  {
    title: "Digital Systems: Logic Gates to Processors",
    issuer: "Universitat Autonoma de Barcelona - Coursera",
    image: "/Logic gates.png",
    summary: "Covered digital logic from gates and circuits to processor architecture basics.",
  },
  {
    title: "Data Science Internship",
    issuer: "SkillCraft Technology",
    image: "/Skillcraft.png",
    summary: "Worked on real-world data tasks involving preprocessing, analysis, and reporting.",
  },
];

const Certificates = () => {
  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-cyan-400">Certificates</span>
            </h1>

            <p className="text-gray-300 mt-4">
              Certifications and achievements from courses, internships and competitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300"
              >
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

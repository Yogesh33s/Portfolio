import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const certificates = [
    {
    title: "Cloud Computing",
    issuer: "NPTEL • IIT Kharagpur",
    image: "/NPTEL.png",
  },
  {
    title: "PL/SQL & Data Science Bootcamp",
    issuer: "Centre for Professional Enhancement • LPU",
    image: "/PL_SQL.png",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Lovely Professional University",
    image: "/DSA.png",
  },
  {
    title: "Java Programming",
    issuer: "Lovely Professional University",
    image: "/Java.png",
  },
  {
    title: "Object Oriented Programming",
    issuer: "Lovely Professional University",
    image: "/OOPS.png",
  },
   {
    title: "Computer Communications Specialization",
    issuer: "University of Colorado • Coursera",
    image: "/Computer Communications.png",
  },
  {
    title: "Code-A-Hunt Hackathon",
    issuer: "CodingBlocks LPU",
    image: "/Code-a-hunt.png",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google • Coursera",
    image: "/Bits.png",
  },
  {
    title: "Packet Switching Networks",
    issuer: "University of Colorado • Coursera",
    image: "/Packet Switching.png",
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado • Coursera",
    image: "/TCP_IP.png",
  },
  {
    title: "Digital Systems: Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona • Coursera",
    image: "/Logic gates.png",
  },
  
  {
    title: "Data Science Internship",
    issuer: "SkillCraft Technology",
    image: "/Skillcraft.png",
  },
];

const Certificates = () => {
  return (
    <div className="theme-page min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white">
              My <span className="text-cyan-400">Certificates</span>
            </h1>

            <p className="text-gray-300 mt-4">
              Certifications and achievements from courses, internships and competitions
            </p>
          </div>

          {/* Certificates Grid */}
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
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-60 object-cover"
                  />
                </Link>

                <div className="p-5 text-center">

                  <h3 className="text-white font-semibold text-lg">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {cert.issuer}
                  </p>

                </div>

              </div>
            ))}


            
                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-16"></div>

                        {/* Closing Quote */}
                        <div className="flex justify-center px-1">
                        <div className="text-center max-w-xl">

                            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Keep <span className="text-cyan-400">Growing</span> 🚀
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

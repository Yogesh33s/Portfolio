import type { PortfolioContent } from "@/types/portfolio";

export const defaultPortfolioContent: PortfolioContent = {
  about: {
    badge: "About Me",
    quote: "I believe in learning by building and improving through consistency.",
    cards: [
      {
        id: "about-story",
        title: "My Story",
        body:
          "I got interested in technology by exploring how websites and applications work behind the scenes. Over time, this curiosity turned into a strong interest in building real solutions. I enjoy breaking problems into smaller parts and turning ideas into working products.",
        iconKey: "BookOpen",
      },
      {
        id: "about-aim",
        title: "My Aim",
        body:
          "My goal is to become a skilled Full Stack Developer who can build efficient, scalable, and user-focused applications. I aim to create solutions that are clean, intuitive, and impactful.",
        iconKey: "Target",
      },
      {
        id: "about-current",
        title: "What I'm Doing",
        body:
          "I am building projects using React and Tailwind CSS while learning backend development and databases. I also practice DSA regularly to improve problem-solving and understand how real-world systems are designed.",
        iconKey: "Rocket",
      },
    ],
  },
  skills: {
    subtitle:
      "A growing toolkit of languages, platforms, and frameworks I use while building toward full-stack development",
    sections: [
      {
        id: "skill-programming",
        title: "Programming Languages",
        items: [
          { id: "java", name: "Java", iconKey: "FaJava" },
          { id: "python", name: "Python", iconKey: "FaPython" },
          { id: "cpp", name: "C++", iconKey: "SiCplusplus" },
          { id: "c", name: "C", iconKey: "SiC" },
        ],
      },
      {
        id: "skill-tools",
        title: "Tools & Platforms",
        items: [
          { id: "git", name: "Git", iconKey: "FaGitAlt" },
          { id: "github", name: "GitHub", iconKey: "FaGithub" },
          { id: "vscode", name: "VS Code", iconKey: "VscVscode" },
          { id: "colab", name: "Google Colab", iconKey: "SiGooglecolab" },
        ],
      },
      {
        id: "skill-libraries",
        title: "Libraries / Frameworks",
        items: [
          { id: "numpy", name: "NumPy", iconKey: "SiNumpy" },
          { id: "pandas", name: "Pandas", iconKey: "SiPandas" },
          { id: "matplotlib", name: "Matplotlib", iconKey: "FaPython" },
          { id: "seaborn", name: "Seaborn", iconKey: "FaPython" },
        ],
      },
      {
        id: "skill-learning",
        title: "Currently Learning",
        items: [
          { id: "react", name: "React", iconKey: "FaReact" },
          { id: "node", name: "Node.js", iconKey: "FaNodeJs" },
          { id: "mern", name: "MERN Stack", iconKey: "SiMongodb" },
        ],
      },
      {
        id: "skill-additional",
        title: "Additional Competencies",
        items: [
          {
            id: "problem-solving",
            name: "Problem Solving",
            description: "DSA-based problem solving with a LeetCode-focused approach",
            iconKey: "Brain",
          },
          {
            id: "teamwork",
            name: "Collaboration & Teamwork",
            description: "Team collaboration, event execution, and shared ownership",
            iconKey: "Users",
          },
          {
            id: "learning",
            name: "Full-Stack Learning",
            description: "Building stronger frontend and backend fundamentals every week",
            iconKey: "BookOpen",
          },
        ],
      },
    ],
  },
  projects: {
    subtitle:
      "A portfolio of full-stack, web, data, and visualization work presented in a cleaner case-study format for faster recruiter scanning.",
    items: [
      {
        id: "project-certificate-system",
        title: "Certificate Management System",
        category: "Full Stack Application",
        status: "Live",
        featured: true,
        description:
          "Built a full-stack certificate workflow for managing student records and generating Bonafide, Academic, and Event certificates with downloadable PDF output.",
        highlights: [
          "Automated certificate generation with PDF export support",
          "Centralized student record management using Oracle XE 21c",
          "Connected Flask routes, templates, and database workflows into one system",
        ],
        tech: ["Python", "Flask", "Oracle XE 21c", "PL/SQL", "HTML"],
        iconKey: "Database",
        previewKey: "dashboard",
        imageUrl: "/cer1(1).png",
        githubUrl: "https://github.com/Yogesh33s/Certificate-System",
        liveUrl: "https://certificate-system.vercel.app/",
      },
      {
        id: "project-crop",
        title: "Crop Recommendation System",
        category: "Machine Learning",
        status: "Live",
        featured: true,
        description:
          "Built a machine learning-based crop recommendation system that predicts the most suitable crop using environmental factors such as NPK values, temperature, humidity, pH, and rainfall.",
        highlights: [
          "Preprocessed the dataset using median missing-value filling, outlier trimming, and StandardScaler.",
          "Trained and compared Decision Tree, Random Forest, Gradient Boosting, and SVM models for crop prediction.",
          "Data source: Kaggle Crop Prediction dataset.",
        ],
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        iconKey: "BarChart3",
        previewKey: "analytics",
        imageUrl: "/placeholder.svg",
        githubUrl: "https://github.com/Yogesh33s/crop-predection",
        liveUrl: "https://crop-predection.vercel.app/",
      },
      {
        id: "project-ecommerce",
        title: "Ecommerce Website",
        category: "Web Development",
        status: "Live",
        featured: true,
        description:
          "Built a responsive e-commerce website with product listings, category-based browsing, and a streamlined shopping flow for faster product discovery.",
        highlights: [
          "Implemented responsive product grids and reusable UI sections for desktop and mobile layouts.",
          "Built category-wise product navigation and featured product sections to improve discoverability.",
          "Deployed the project on GitHub Pages with optimized static assets for fast page load.",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        iconKey: "Globe",
        previewKey: "commerce",
        githubUrl: "https://github.com/Yogesh33s/Ecommerce",
        liveUrl: "https://yogesh33s.github.io/Ecommerce/",
      },
      {
        id: "project-python-visualization",
        title: "Python Data Visualization",
        category: "Data Science",
        status: "Completed",
        featured: false,
        description:
          "Created Python-based visual analysis work to turn raw data into charts and dashboards that communicate patterns and insights more clearly.",
        highlights: [
          "Used Pandas for data preparation and analysis workflows",
          "Built visual storytelling using Matplotlib and Seaborn",
          "Improved confidence in exploratory data analysis and dashboard thinking",
        ],
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        iconKey: "BarChart3",
        previewKey: "analytics",
        imageUrl: "/pythondata.png",
        githubUrl: "https://github.com/Yogesh33s/python-Data-visualization",
        linkedinUrl:
          "https://www.linkedin.com/posts/yogesh33_python-datavisualization-learningwithcode-activity-7334129335458562048-ranG",
      },
      {
        id: "project-bubble-sort",
        title: "Bubble Sort Visualization",
        category: "Algorithms",
        status: "Learning Project",
        featured: false,
        description:
          "Built an interactive algorithm visualizer that demonstrates bubble sort step by step, making comparisons and swaps easier to understand visually.",
        highlights: [
          "Visualized algorithm flow in a beginner-friendly format",
          "Improved understanding of sorting logic through animation",
          "Focused on translating core DSA ideas into UI interaction",
        ],
        tech: ["JavaScript", "HTML Canvas", "CSS"],
        iconKey: "Code",
        previewKey: "algorithm",
        imageUrl: "/bubblesort.png",
        githubUrl: "https://github.com/Yogesh33s/BubbleSort-Visualization",
        linkedinUrl:
          "https://www.linkedin.com/posts/yogesh33_python-datavisualization-learningwithcode-activity-7334129335458562048-ranG",
      },
      {
        id: "project-restaurant",
        title: "Restaurant Website",
        category: "Web Development",
        status: "Live",
        featured: false,
        description:
          "Developed a responsive restaurant website with menu presentation, reservation-oriented sections, and an elegant landing page experience.",
        highlights: [
          "Designed a modern menu browsing experience",
          "Balanced visuals and readability for better first impressions",
          "Improved responsiveness across desktop and mobile layouts",
        ],
        tech: ["HTML", "CSS", "JavaScript", "Responsive"],
        iconKey: "Utensils",
        previewKey: "restaurant",
        githubUrl: "https://github.com/Yogesh33s/Reastaurant-website",
        liveUrl: "https://yogesh33s.github.io/Reastaurant-website/",
      },
      {
        id: "project-resource-allocation",
        title: "Resource Allocation Graph",
        category: "System Programming",
        status: "Completed",
        featured: false,
        description:
          "Created an operating system visualization project to map process-resource relationships and illustrate how deadlock scenarios can be identified.",
        highlights: [
          "Explained system concepts using graph-based visualization",
          "Connected theory with a more intuitive visual representation",
          "Strengthened understanding of process and resource dependencies",
        ],
        tech: ["Python", "Graph Theory", "Visualization"],
        iconKey: "Database",
        previewKey: "system",
        githubUrl: "https://github.com/Yogesh33s/resource-allocation-graph",
        liveUrl: "https://yogesh33s.github.io/Resource-allocation-graph/",
      },
    ],
  },
  certificates: {
    subtitle: "Certifications and achievements from courses, internships and competitions",
    items: [
      { id: "cert-cloud", title: "Cloud Computing", issuer: "NPTEL - IIT Kharagpur", image: "/NPTEL.png", summary: "Learned cloud service models, deployment models, and scalable architecture basics." },
      { id: "cert-plsql", title: "PL/SQL & Data Science Bootcamp", issuer: "Centre for Professional Enhancement - LPU", image: "/PL_SQL.png", summary: "Built SQL and PL/SQL foundations with data handling and analysis workflows." },
      { id: "cert-java", title: "Java Programming", issuer: "Lovely Professional University", image: "/Java.png", summary: "Covered Java fundamentals, OOP concepts, and practical coding exercises." },
      { id: "cert-hackathon", title: "Code-A-Hunt Hackathon", issuer: "CodingBlocks LPU", image: "/Code-a-hunt.png", summary: "Participated in a coding challenge focused on speed, logic, and team execution." },
      { id: "cert-dsa", title: "Data Structures and Algorithms", issuer: "Lovely Professional University", image: "/DSA.png", summary: "Strengthened problem-solving using core data structures and algorithmic thinking." },
      { id: "cert-oops", title: "Object Oriented Programming", issuer: "Lovely Professional University", image: "/OOPS.png", summary: "Applied OOP principles for modular design, abstraction, and code reusability." },
      { id: "cert-computer-communications", title: "Computer Communications Specialization", issuer: "University of Colorado - Coursera", image: "/Computer Communications.png", summary: "Explored networking protocols, communication layers, and internet fundamentals." },
      { id: "cert-bits-and-bytes", title: "Bits and Bytes of Computer Networking", issuer: "Google - Coursera", image: "/Bits.png", summary: "Understood practical networking concepts including routing, addressing, and tools." },
      { id: "cert-packet-switching", title: "Packet Switching Networks", issuer: "University of Colorado - Coursera", image: "/Packet Switching.png", summary: "Learned packet-switched network behavior and performance-focused communication." },
      { id: "cert-tcp-ip", title: "TCP/IP and Advanced Topics", issuer: "University of Colorado - Coursera", image: "/TCP_IP.png", summary: "Studied TCP/IP internals, reliability mechanisms, and protocol-level design." },
      { id: "cert-digital-systems", title: "Digital Systems: Logic Gates to Processors", issuer: "Universitat Autonoma de Barcelona - Coursera", image: "/Logic gates.png", summary: "Covered digital logic from gates and circuits to processor architecture basics." },
      { id: "cert-skillcraft", title: "Data Science Internship", issuer: "SkillCraft Technology", image: "/Skillcraft.png", summary: "Worked on real-world data tasks involving preprocessing, analysis, and reporting." },
    ],
  },
  education: {
    heroTitle: "Education, training, and practical experience.",
    educationEntries: [
      {
        id: "edu-lpu",
        label: "B.Tech CSE + Data Science Minor",
        title: "Lovely Professional University",
        period: "2023 - 2027",
        location: "Punjab, India",
        metric: "CGPA: 8.26",
        description: "Focused on software development, data structures, and real-world problem solving.",
        iconKey: "GraduationCap",
      },
      {
        id: "edu-12th",
        label: "Senior Secondary",
        title: "12th Standard",
        period: "Year: 2022",
        metric: "Percentage: 82%",
        stream: "Stream: Science(PCM)",
        description:
          "Focused on the science stream with an emphasis on mathematics, enhancing analytical abilities and cultivating an interest in technology and computing.",
        iconKey: "School",
      },
      {
        id: "edu-10th",
        label: "Secondary",
        title: "10th Standard",
        period: "Year: 2020",
        metric: "Percentage: 88%",
        description:
          "Completed foundational education with a focus on core subjects like mathematics, science, and languages. Built strong analytical and problem-solving skills.",
        iconKey: "School",
      },
    ],
    trainingEntries: [
      {
        id: "training-plsql",
        label: "Database Programming",
        title: "PL/SQL Training",
        period: "June 2025 - July 2026",
        bullets: [
          "Designed and executed complex SQL queries.",
          "Implemented stored procedures, triggers, and functions.",
          "Worked with Oracle Database for relational data management.",
        ],
        summary: "Improved understanding of backend data handling and database optimization.",
        certificateTitle: "PL/SQL Training Certificate",
        certificateIssuer: "Centre for Professional Enhancement - LPU",
        certificateImage: "/PL_SQL.png",
        iconKey: "Database",
      },
    ],
    experienceEntries: [
      {
        id: "exp-pentaomnia",
        label: "Pentaomnia, LPU",
        title: "Event Manager & Student Organizer",
        period: "Aug 2024 - Feb 2025",
        bullets: [
          "Managed event planning and on-ground execution.",
          "Coordinated with teams to ensure smooth operations.",
          "Developed leadership, communication, and team management skills.",
        ],
        iconKey: "Briefcase",
      },
    ],
  },
};

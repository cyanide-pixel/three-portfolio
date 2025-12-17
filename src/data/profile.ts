export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type Project = {
  name: string;
  tech: string;
  highlights: string[];
  link?: string; // optional
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  links: Link[];
  skills: { group: string; items: string[] }[];
  experience: Experience[];
  projects: Project[];
  contact: {
    email?: string; // keep optional; add if you want it public on the site
  };
};

// Edit this file to personalize the site content.
export const profile: Profile = {
  name: "Arpit Mishra",
  role: "Software Development Engineer",
  location: "Bangalore, India",
  summary:
    "Software Development Engineer with 2+ years of experience building scalable financial products. Strong in CS fundamentals, DSA, and OOP; comfortable owning features end-to-end from design to deployment in agile environments.",
  links: [
    { label: "Portfolio", href: "https://portfolio-cyanide2001.vercel.app" },
    { label: "GitHub", href: "https://github.com/cyanide-pixel" },
    { label: "LeetCode", href: "https://leetcode.com/c_y_a_n_i_d_e/" },
    { label: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/arpitmishra2001/profile" }
  ],
  skills: [
    { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "C++", "Dart", "SQL"] },
    { group: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST APIs"] },
    { group: "Frontend", items: ["React", "Next.js", "React Native", "HTML", "CSS"] },
    { group: "Databases", items: ["MySQL", "SQLite", "MongoDB", "Redis"] },
    { group: "System Design", items: ["Data Modeling", "OOP", "Design Patterns", "Microservices", "API Design"] },
    { group: "Tools", items: ["Git", "Docker", "Linux/Unix", "AWS", "Agile/Scrum", "Jira"] }
  ],
  experience: [
    {
      company: "Tata Digital Pvt Ltd",
      title: "Software Development Engineer I",
      location: "Bangalore",
      dates: "Jul 2023 — Present",
      highlights: [
        "Owned end-to-end architecture and development of Fixed Deposit and Bonds platforms serving 1M+ users.",
        "Designed scalable transaction systems and optimized data models to reduce latency by ~30%.",
        "Implemented interest calculation algorithms and improved optimal time/space complexity in core computations.",
        "Applied SOLID principles and design patterns (Factory, Observer, Strategy) for maintainable modules.",
        "Engineered database schemas/queries to improve throughput by ~40% and added monitoring/logging for analytics."
      ]
    }
  ],
  projects: [
    {
      name: "AiFalcon — Multi‑Domain POS System",
      tech: "React Native, Node.js, Express, MongoDB, Square Terminal SDK",
      highlights: [
        "Built a scalable POS system supporting multiple domains (grocery, lounges, gas stations, jewelry).",
        "Implemented real‑time payment processing with a fault‑tolerant design.",
        "Designed modular architecture enabling easy addition of new business domains."
      ]
    },
    {
      name: "AR Music Application",
      tech: "AR.js, A‑Frame, Three.js, Howler.js",
      highlights: [
        "Built a marker‑based AR experience with real‑time instrument simulation.",
        "Optimized audio processing for low‑latency playback on mobile devices."
      ]
    }
  ],
  contact: {
    email: "arpitmishra2001@gmail.com"
  }
};



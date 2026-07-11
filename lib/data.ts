import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Medal,
  Server,
  Sparkles,
  Trophy,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/Aditya0007-cloud", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-pareek04/", icon: Globe2 },
  { label: "Email", href: "mailto:pareekaditya0007@gmail.com", icon: Mail }
] as const;

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    level: 88,
    focus: "Java-first problem solving with scripting and query fluency.",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Web Development",
    icon: Layers3,
    level: 88,
    focus: "End-to-end product interfaces, APIs, and responsive web apps.",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "HTML", "CSS", "REST APIs"]
  },
  {
    title: "Backend",
    icon: Server,
    level: 84,
    focus: "Secure APIs, authentication flows, and service-oriented logic.",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication"]
  },
  {
    title: "Database",
    icon: Database,
    level: 76,
    focus: "Relational modeling, analytics queries, and document storage.",
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: Wrench,
    level: 82,
    focus: "Version control, collaboration, API testing, and delivery workflow.",
    skills: ["Git", "GitHub", "Postman"]
  },
  {
    title: "Concepts",
    icon: BrainCircuit,
    level: 86,
    focus: "CS fundamentals for interviews, systems, and ML-heavy products.",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Probability & Statistics",
      "Linear Algebra",
      "Artificial Intelligence",
      "Machine Learning"
    ]
  },
  {
    title: "AI & NLP",
    icon: Sparkles,
    level: 84,
    focus: "Prompted AI features, TF-IDF ranking, and ML data workflows.",
    skills: ["Machine Learning", "TF-IDF", "OpenAI API Integration", "Prompt Engineering", "Scikit-Learn", "NumPy", "Pandas"]
  }
] as const;

export const projects = [
  {
    title: "AI-Powered Finance Tracker",
    category: "AI",
    period: "Jun '26 - Jun '26",
    description:
      "Engineered an AI-powered finance tracking platform with automated categorization for 500+ transactions, real-time analytics under 100ms, Prisma-backed PostgreSQL schemas, and secure Supabase RLS policies.",
    impact: "500+ transactions · under 100ms analytics · 60% less manual tracking",
    tech: ["Next.js", "Supabase", "Prisma ORM", "PostgreSQL", "Gemini API"],
    github: "https://github.com/Aditya0007-cloud/AI-Powered-Finance-Tracker-",
    accent: "from-cyan-400 via-blue-500 to-violet-500"
  },
  {
    title: "Machine Learning Resume Screening System",
    category: "AI",
    period: "May '26 - Jun '26",
    description:
      "Built an AI-powered resume screening and ranking platform using TF-IDF matching, ATS scoring across 100+ resume-job description pairs, 8+ REST APIs, analytics dashboards, and candidate shortlisting.",
    impact: "70% faster screening · 100+ resume pairs · 8+ APIs",
    tech: ["Next.js", "FastAPI", "Python", "OpenAI", "TF-IDF"],
    github: "https://github.com/Aditya0007-cloud/resume-screening-system",
    accent: "from-violet-400 via-fuchsia-500 to-blue-500"
  },
  {
    title: "Config-Driven Full Stack App Runtime",
    category: "Full Stack",
    period: "Apr '26 - May '26",
    description:
      "Engineered a config-driven platform that generated 20+ UI modules and APIs from JSON configurations, automated schema generation and CRUD operations for 15+ entities, and enabled no-code customization with secure authentication.",
    impact: "20+ UI modules · 15+ entities · 80% less backend setup",
    tech: ["React", "Node.js", "PostgreSQL", "JSON Configs", "Authentication"],
    github: "https://github.com/Aditya0007-cloud/app-generator",
    accent: "from-blue-400 via-sky-500 to-cyan-400"
  }
] as const;

export const achievements = [
  {
    title: "Oracle Certified Professional: Java SE 21 Developer",
    detail:
      "Official Oracle University certification issued July 03, 2026, validating Java SE 21 knowledge and modern Java programming concepts.",
    icon: Code2
  },
  {
    title: "Google AI Professional Certificate",
    detail: "Completed Google AI certification focused on practical AI foundations and applied workflows.",
    icon: Medal
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    detail: "Completed AWS training covering core cloud concepts, services, and cloud operating models.",
    icon: Cloud
  },
  {
    title: "AWS Academy Graduate - Generative AI Foundations",
    detail: "Completed AWS Academy training in generative AI concepts and cloud-based AI foundations.",
    icon: Sparkles
  },
  {
    title: "450+ LeetCode Problems",
    detail: "Solved 450+ problems and built strong proficiency in Java, data structures, and algorithms.",
    icon: Code2
  },
  {
    title: "1700+ LeetCode Contest Rating",
    detail: "Achieved a 1700+ contest rating, placing in the Top 12%.",
    icon: Trophy
  },
  {
    title: "GSSoC 2026 Open Source Contributor",
    detail: "Selected for GirlScript Summer of Code 2026, contributing features, bug fixes, and pull requests.",
    icon: Layers3
  }
] as const;

export const experiences = [
  {
    role: "Full Stack Development Intern",
    organization: "Decode Labs",
    location: "Remote",
    period: "May '26 - Jun '26",
    description:
      "Built backend models, REST APIs, reusable UI components, and production fixes across full stack workflows.",
    highlights: [
      "Engineered PostgreSQL database models and optimized data retrieval for core workflows.",
      "Built and integrated 10+ REST APIs for secure authentication and data management.",
      "Architected 15+ reusable UI components, improving frontend development velocity by 20%.",
      "Resolved 25+ frontend and backend issues through debugging and collaborative code reviews."
    ]
  },
  {
    role: "Technical Team Member",
    organization: "Microsoft Student Chapter, VIT-AP",
    location: "Amaravati, India",
    period: "Sep '25 - Present",
    description:
      "Help organize technical workshops, hackathons, coding events, and student-led technology initiatives.",
    highlights: [
      "Organized 5+ technical workshops, hackathons, and coding events for 100+ students.",
      "Collaborated with student leaders to execute technology initiatives across campus."
    ]
  }
] as const;

export const githubStats = [
  { label: "LeetCode Problems", value: "450+", icon: Code2 },
  { label: "Contest Rating", value: "1700+", icon: Trophy },
  { label: "Open Source", value: "GSSoC '26", icon: Github },
  { label: "VIT-AP GPA", value: "8.73/10", icon: GraduationCap }
] as const;

// ============================================================
// Portfolio Data — Single source of truth for all content
// ============================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Distributed Systems" | "AI & Multi-Agent" | "Full Stack & APIs";
  badge: string;
  metrics: { label: string; value: string }[];
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture?: string;
  challenges?: string[];
  agentWorkflow?: { step: string; description: string }[];
}

export interface Achievement {
  platform: string;
  title: string;
  stats: { label: string; value: string | number; suffix?: string }[];
  icon: string;
}

export interface Award {
  title: string;
  event: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

// ── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
  name: "Arun R S",
  greeting: "Hi, I'm Arun R S 👋",
  title: "Backend Engineer & AI Engineer",
  roles: [
    "Backend Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "System Design Enthusiast",
  ],
  intro:
    "I build scalable backend systems, distributed applications, AI-powered solutions, and intelligent agent-based systems.",
  email: "arunramamoorthi05@gmail.com",
  phone: "6374475344",
  profileImage: "/person.png",
  resumeUrl: "https://drive.google.com/file/d/10Cb8M8RHQewE9Gmc63CK1lQqWIjEPjof/view?usp=drive_link",
};

// ── Social Links ───────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/2005arun", icon: "github" },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/arun-r-s19102005",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/2005arun/",
    icon: "code",
  },
  {
    name: "Email",
    url: "mailto:arunramamoorthi05@gmail.com",
    icon: "mail",
  },
];

// ── Navigation ─────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Internship", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ── About ──────────────────────────────────────────────────────
export const aboutText = [
  "I am a B.Tech Artificial Intelligence and Data Science student at Sri Eshwar College of Engineering with a strong interest in Backend Engineering, Artificial Intelligence, Distributed Systems, and System Design.",
  "I enjoy building scalable applications, designing microservices architectures, working with event-driven systems, and developing AI-powered applications.",
  "I am passionate about solving complex problems and continuously improving my knowledge in software engineering.",
];

export const education: Education = {
  degree: "B.Tech — AI & Data Science",
  institution: "Sri Eshwar College of Engineering",
  period: "2023 – 2027",
  cgpa: "7.89",
};

// ── Skills ─────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code-2",
    skills: ["C", "C++", "Python", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0", "OpenID Connect"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    title: "System Design",
    icon: "network",
    skills: [
      "SOLID Principles",
      "Design Patterns",
      "Microservices",
      "Caching",
      "Rate Limiting",
      "Load Balancing",
    ],
  },
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      "AI Agents",
      "LangChain",
      "LangGraph",
      "RAG",
      "Transformers",
      "Prompt Engineering",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "container",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "RabbitMQ",
      "Postman",
      "VS Code",
      "Power BI",
    ],
  },
  {
    title: "Testing",
    icon: "test-tubes",
    skills: ["Jest", "Supertest", "Unit Testing", "Integration Testing"],
  },
];

// ── Experience ─────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: "Backend AI Engineer Intern",
    company: "Digital Back Office",
    duration: "January 2026 – March 2026",
    description:
      "Developed a Generative AI-based Legal Document Summarizer.",
    contributions: [
      "Extracted important information from lengthy legal documents",
      "Reduced manual document review effort significantly",
      "Optimized prompts for better summarization quality",
      "Improved summarization accuracy and context retention by 30% for complex legal language",
    ],
    technologies: [
      "Generative AI",
      "Prompt Engineering",
      "NLP",
      "Vector Database",
      "Text Summarization",
      "Python",
      "API Integration",
    ],
  },
];

// ── Projects ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "cinemovie",
    title: "CineMovie",
    subtitle: "Distributed Movie Ticket Booking System",
    category: "Distributed Systems",
    badge: "Distributed Microservices",
    metrics: [
      { label: "Microservices", value: "7 Services" },
      { label: "Architecture", value: "Event-Driven" },
      { label: "Deployment", value: "Docker + Nginx" },
    ],
    description:
      "Designed and developed a microservices-based movie ticket booking platform with a comprehensive distributed architecture.",
    highlights: [
      "Built 7 independent microservices",
      "Implemented an API Gateway for centralized routing",
      "Designed a two-tier Nginx load balancing architecture",
      "Built an Event-Driven Architecture using RabbitMQ",
      "Managed asynchronous workflows: booking confirmation, ticket generation, email notifications",
      "Containerized the entire system using Docker Compose",
      "Deployed services using Railway",
      "Used PostgreSQL, Redis, and RabbitMQ cloud services",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Nginx",
      "REST APIs",
      "JWT",
      "Google OAuth 2.0",
    ],
    githubUrl:
      "https://github.com/2005arun/Distributed_Movie_Booking_System",
    architecture:
      "Microservices architecture with API Gateway, Nginx load balancing, RabbitMQ event bus, and containerized deployment.",
    challenges: [
      "Managing distributed transactions across 7 microservices",
      "Implementing reliable event-driven communication",
      "Designing a scalable load balancing strategy",
      "Handling race conditions in ticket booking",
    ],
  },
  {
    id: "autositegen",
    title: "AutoSiteGen",
    subtitle: "Multi-Agent AI Website Generator",
    category: "AI & Multi-Agent",
    badge: "Multi-Agent AI Pipeline",
    metrics: [
      { label: "Orchestration", value: "LangGraph" },
      { label: "LLM Model", value: "Llama 3.3 70B" },
      { label: "Autonomous Pipeline", value: "4 Agents" },
    ],
    description:
      "Developed an AI-powered website generation system that transforms user prompts into fully functional websites using collaborative AI agents.",
    highlights: [
      "Multiple AI agents collaborate to generate complete websites",
      "Planner Agent analyzes user requirements",
      "Architect Agent designs the structure",
      "Coder Agent generates the code",
      "Validator Agent ensures quality",
      "End-to-end automated website generation pipeline",
    ],
    techStack: [
      "LangGraph",
      "Llama 3.3 70B Versatile",
      "Python",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/2005arun/Autositegen",
    agentWorkflow: [
      { step: "User Prompt", description: "User describes the desired website" },
      { step: "Planner Agent", description: "Analyzes requirements & creates plan" },
      { step: "Architect Agent", description: "Designs structure & layout" },
      { step: "Coder Agent", description: "Generates HTML, CSS, JavaScript code" },
      { step: "Validator Agent", description: "Reviews & ensures code quality" },
      { step: "Generated Website", description: "Fully functional website output" },
    ],
    challenges: [
      "Orchestrating multiple AI agents with LangGraph",
      "Ensuring generated code quality and consistency",
      "Handling complex user requirements through prompt engineering",
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "Full Stack Task Management System",
    category: "Full Stack & APIs",
    badge: "High-Throughput Full Stack",
    metrics: [
      { label: "Query Optimization", value: "+35% Faster" },
      { label: "Scale Capacity", value: "10K+ Tasks" },
      { label: "Security", value: "JWT + bcrypt" },
    ],
    description:
      "Built a multi-user CRUD task management application with robust authentication, priority-based workflows, and optimized database performance.",
    highlights: [
      "User authentication with JWT security",
      "Priority-based task management",
      "Full CRUD operations",
      "Secure password hashing with bcrypt",
      "Multi-user support",
      "Optimized MySQL performance by 35%",
      "Designed to handle 10K+ task records efficiently",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "bcrypt",
    ],
    githubUrl:
      "https://github.com/2005arun/TaskFlow/tree/main/Arun-main",
    challenges: [
      "Optimizing MySQL queries for large datasets",
      "Implementing secure multi-user authentication",
      "Designing an intuitive priority-based task workflow",
    ],
  },
];

// ── Achievements ───────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    platform: "LeetCode",
    title: "KNIGHT",
    stats: [
      { label: "Max Rating", value: 1855 },
      { label: "Top", value: 5, suffix: "%" },
      { label: "Contests", value: 73 },
    ],
    icon: "leetcode",
  },
  {
    platform: "CodeChef",
    title: "2 Star",
    stats: [
      { label: "Max Rating", value: 1519 },
      { label: "Contests", value: 32 },
    ],
    icon: "codechef",
  },
  {
    platform: "HackerRank",
    title: "Five Star in C++",
    stats: [{ label: "Badges", value: 5 }],
    icon: "hackerrank",
  },
];

export const awards: Award[] = [
  {
    title: "Best Team Spirit Award",
    event: "SICPC Contest",
    institution: "Sri Eshwar College of Engineering",
    year: "2025",
  },
  {
    title: "Second Place",
    event: "Coding Contest",
    institution: "Coimbatore Institute of Technology",
    year: "2025",
  },
];

// ── Certifications ─────────────────────────────────────────────
export const certifications: Certification[] = [
  { name: "Human Computer Interaction", issuer: "NPTEL", year: "2026" },
  { name: "Cloud Practitioner", issuer: "AWS", year: "2026" },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  { name: "AI Agent", issuer: "Simplilearn", year: "2025" },
  {
    name: "Data Structures & Algorithms using C/C++",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    year: "2023",
  },
];

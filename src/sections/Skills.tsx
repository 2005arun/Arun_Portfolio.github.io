import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Network,
  Brain,
  Container,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import {
  CIcon,
  CppIcon,
  PythonIcon,
  JavaScriptIcon,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MySQLIcon,
  PostgresIcon,
  FirebaseIcon,
  RedisIcon,
  GitIcon,
  GithubIcon,
  DockerIcon,
  AwsIcon,
  RabbitMQIcon,
  LangChainIcon,
  LangGraphIcon,
  JestIcon,
  PostmanIcon,
  NginxIcon,
} from "../components/Icons";
import "../styles/skills.css";

interface CategoryMeta {
  title: string;
  count: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  accentLineColor: string;
  skills: string[];
}

const skillCategoriesData: CategoryMeta[] = [
  {
    title: "Programming",
    count: "5 skills",
    description: "Languages I use to build, ship, and scale application",
    icon: <Code2 size={20} />,
    iconBg: "bg-purple-600/15",
    iconBorder: "border-purple-500/30",
    iconColor: "text-purple-400",
    accentLineColor: "from-purple-500 to-indigo-500",
    skills: ["C", "C++", "Python", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    count: "6 skills",
    description: "Building scalable, reliable, and distributed backend systems.",
    icon: <Server size={20} />,
    iconBg: "bg-indigo-600/15",
    iconBorder: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    accentLineColor: "from-indigo-500 to-purple-500",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "OpenID Connect",
    ],
  },
  {
    title: "Databases",
    count: "4 skills",
    description: "Data storage, caching, and scalable database solutions.",
    icon: <Database size={20} />,
    iconBg: "bg-cyan-600/15",
    iconBorder: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    accentLineColor: "from-cyan-400 to-blue-500",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    title: "System Design",
    count: "6 skills",
    description: "Designing resilient, distributed, and high-throughput systems.",
    icon: <Network size={20} />,
    iconBg: "bg-amber-600/15",
    iconBorder: "border-amber-500/30",
    iconColor: "text-amber-400",
    accentLineColor: "from-amber-400 to-orange-500",
    skills: [
      "SOLID Principles",
      "Design Patterns",
      "Microservices",
      "Caching",
    ],
  },
  {
    title: "AI / ML",
    count: "6 skills",
    description: "Building intelligent systems with LLMs and modern AI tools.",
    icon: <Brain size={20} />,
    iconBg: "bg-emerald-600/15",
    iconBorder: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    accentLineColor: "from-emerald-400 to-teal-500",
    skills: [
      "AI Agents",
      "LangChain",
      "LangGraph",
      "RAG",
      "Transformers",
    ],
  },
  {
    title: "DevOps & Tools",
    count: "8 skills",
    description: "Tools for development, deployment, and infrastructure.",
    icon: <Container size={20} />,
    iconBg: "bg-sky-600/15",
    iconBorder: "border-sky-500/30",
    iconColor: "text-sky-400",
    accentLineColor: "from-sky-400 to-indigo-500",
    skills: ["Git", "GitHub", "Docker", "AWS", "RabbitMQ"],
  },
];

const skillLogos: Record<string, React.ReactNode> = {
  C: <CIcon size={16} />,
  "C++": <CppIcon size={16} />,
  Python: <PythonIcon size={16} />,
  JavaScript: <JavaScriptIcon size={16} />,
  React: <ReactIcon size={16} />,
  "Node.js": <NodeIcon size={16} />,
  "Express.js": <ExpressIcon size={16} />,
  MySQL: <MySQLIcon size={16} />,
  PostgreSQL: <PostgresIcon size={16} />,
  Firebase: <FirebaseIcon size={16} />,
  Redis: <RedisIcon size={16} />,
  Git: <GitIcon size={16} />,
  GitHub: <GithubIcon size={16} className="text-white" />,
  Docker: <DockerIcon size={16} />,
  AWS: <AwsIcon size={16} />,
  RabbitMQ: <RabbitMQIcon size={16} />,
  LangChain: <LangChainIcon size={16} />,
  LangGraph: <LangGraphIcon size={16} />,
  Jest: <JestIcon size={16} />,
  Postman: <PostmanIcon size={16} />,
  Nginx: <NginxIcon size={16} />,
};

const filterTabs = [
  "All",
  "Programming",
  "Backend Development",
  "Databases",
  "System Design",
  "AI / ML",
  "DevOps & Tools",
  "Testing",
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const displayedCategories =
    activeFilter === "All"
      ? skillCategoriesData
      : skillCategoriesData.filter((c) => c.title === activeFilter);

  return (
    <section id="skills" className="section-padding skills-section relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] rounded-full bg-purple-600/[0.06] blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          badge="04 / EXPERTISE"
          title="My Engineering Toolkit"
          subtitle="The technologies I work with across backend development, AI engineering, databases, and distributed systems."
          align="center"
        />

        {/* Filter Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filterTabs.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/40"
                    : "bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {filter === "All" && <Sparkles size={13} />}
                <span>{filter}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 6 Cards 3x2 Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="toolkit-card group"
              >
                {/* Header: Icon, Title, Count */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${cat.iconBg} border ${cat.iconBorder} ${cat.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] whitespace-nowrap">
                    {cat.count}
                  </span>
                </div>

                {/* Subtitle Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {cat.description}
                </p>

                {/* Glowing Horizontal Accent Line */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-[2.5px] rounded-full bg-gradient-to-r ${cat.accentLineColor} shadow-[0_0_8px_rgba(168,85,247,0.5)]`}
                  />
                </div>

                {/* Skills Chips Wrap */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all"
                    >
                      {skillLogos[skill] && (
                        <span className="flex-shrink-0">{skillLogos[skill]}</span>
                      )}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ArrowUpRight,
  Zap,
  BarChart2,
  CheckCircle2,
  Copy,
  Check,
  Eye,
  ListTodo,
  ShieldCheck,
  Network,
  Cpu,
  Radio,
  Clapperboard,
  Monitor,
  Code,
  Settings,
  Boxes,
} from "lucide-react";
import {
  GithubIcon,
  NodeIcon,
  ExpressIcon,
  ReactIcon,
  PostgresIcon,
  RedisIcon,
  RabbitMQIcon,
  DockerIcon,
  NginxIcon,
  PythonIcon,
  LangGraphIcon,
  MySQLIcon,
} from "../components/Icons";
import { projects } from "../data/portfolio";
import ProjectModal from "../components/ProjectModal";
import SectionHeading from "../components/SectionHeading";
import type { Project } from "../data/portfolio";
import "../styles/projects.css";

const techIcons: Record<string, React.ReactNode> = {
  "Node.js": <NodeIcon size={14} />,
  "Express.js": <ExpressIcon size={14} />,
  React: <ReactIcon size={14} />,
  "React.js": <ReactIcon size={14} />,
  PostgreSQL: <PostgresIcon size={14} />,
  Redis: <RedisIcon size={14} />,
  RabbitMQ: <RabbitMQIcon size={14} />,
  Docker: <DockerIcon size={14} />,
  Nginx: <NginxIcon size={14} />,
  Python: <PythonIcon size={14} />,
  LangGraph: <LangGraphIcon size={14} />,
  MySQL: <MySQLIcon size={14} />,
};

// Architecture pipeline strings
const pipelines: Record<string, string> = {
  cinemovie: "Nginx → Gateway → RabbitMQ → Microservices",
  autositegen: "User Prompt → LangGraph Router → Planner → Generator → Docker Sandbox",
  taskflow: "Client App → API Gateway → Task Queue → Worker Cluster → Redis Cache",
};

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("cinemovie");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const currentProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  const autositegenProject = projects.find((p) => p.id === "autositegen");
  const taskflowProject = projects.find((p) => p.id === "taskflow");

  const handleCopyPipeline = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentPipeline =
    pipelines[currentProject.id] || "Nginx → Gateway → RabbitMQ → Microservices";

  return (
    <section id="projects" className="section-padding projects-section relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-[-10%] w-[55rem] h-[35rem] rounded-full bg-purple-600/[0.09] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[50rem] h-[30rem] rounded-full bg-blue-600/[0.07] blur-[140px] pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          badge="03 / BUILDING"
          title="From Idea to Architecture"
          subtitle="Turning challenging problems into working systems through thoughtful architecture, intelligent automation, and clean engineering."
          align="center"
          hideUnderline={true}
        />

        {/* ── Project Switcher Tabs matching Reference ── */}
        <div className="flex justify-center -mt-4 mb-9">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#0d1322] border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            {/* Tab 1: CineMovie */}
            <button
              onClick={() => setSelectedProjectId("cinemovie")}
              className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedProjectId === "cinemovie"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {selectedProjectId === "cinemovie" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Clapperboard size={15} className={selectedProjectId === "cinemovie" ? "text-white" : "text-slate-400"} />
              <span>CineMovie</span>
            </button>

            {/* Tab 2: AutoSiteGen */}
            <button
              onClick={() => setSelectedProjectId("autositegen")}
              className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedProjectId === "autositegen"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {selectedProjectId === "autositegen" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Monitor size={15} className={selectedProjectId === "autositegen" ? "text-white" : "text-slate-400"} />
              <span>AutoSiteGen</span>
            </button>

            {/* Tab 3: TaskFlow */}
            <button
              onClick={() => setSelectedProjectId("taskflow")}
              className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedProjectId === "taskflow"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {selectedProjectId === "taskflow" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <ListTodo size={15} className={selectedProjectId === "taskflow" ? "text-white" : "text-slate-400"} />
              <span>TaskFlow</span>
            </button>
          </div>
        </div>

        {/* ── Featured Architecture Showcase Card matching Reference ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="project-showcase-container group relative"
          >
            {/* Top-Right Arrow Action Button */}
            <button
              onClick={() => setModalProject(currentProject)}
              className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] hover:border-purple-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer z-20 group-hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              title="Inspect Case Study"
            >
              <ArrowUpRight size={17} />
            </button>

            {/* Main 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative items-start">
              {/* ── Left Column (7 cols): Header, Narrative, Bullets, Tech Chips, CTAs ── */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Badge Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-semibold uppercase tracking-wider">
                    <Layers size={12} className="text-purple-400" />
                    <span>{currentProject.badge}</span>
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400 text-xs font-mono">
                    Featured Architecture
                  </span>
                </div>

                {/* Title row with Project Icon */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                    {currentProject.id === "cinemovie" ? (
                      <Clapperboard size={22} />
                    ) : currentProject.id === "autositegen" ? (
                      <Monitor size={22} />
                    ) : (
                      <Layers size={22} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {currentProject.title}
                    </h3>
                    <p className="text-purple-400 font-semibold text-sm sm:text-base">
                      {currentProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 mb-5">
                  {currentProject.description}
                </p>

                {/* 3 Bullets with Checkmarks */}
                <div className="space-y-2.5 mb-6">
                  {currentProject.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips Grid (arranged matching reference) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.035] hover:bg-purple-500/10 border border-white/[0.08] hover:border-purple-500/30 text-slate-300 hover:text-white text-xs font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] cursor-default"
                    >
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons matching Reference */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all cursor-pointer group/btn"
                  >
                    <Eye size={15} />
                    <span>Inspect Case Study</span>
                    <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                  </button>

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} className="text-slate-400" />
                  </a>
                </div>
              </div>

              {/* ── Center Divider with Glowing Purple Node (Desktop) ── */}
              <div className="hidden lg:flex absolute left-[57%] top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center pointer-events-none">
                <div className="w-[1px] flex-1 bg-gradient-to-b from-transparent via-white/[0.08] to-white/[0.08]" />
                <div className="w-5 h-5 rounded-full bg-[#0b101d] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.9)] my-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <div className="w-[1px] flex-1 bg-gradient-to-b from-white/[0.08] via-white/[0.08] to-transparent" />
              </div>

              {/* ── Right Column (5 cols): Benchmarks, Architecture Preview, System Specs ── */}
              <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-6">
                {/* Performance Benchmarks Card */}
                <div className="p-5 rounded-2xl bg-[#0e1628]/60 border border-white/[0.07] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                        <BarChart2 size={15} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-200">
                        Performance Benchmarks
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-semibold">
                      <CheckCircle2 size={11} />
                      <span>Tested &amp; Verified</span>
                    </span>
                  </div>

                  {/* 3 Metric Boxes matching reference */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Box 1: 7 Services / Microservices */}
                    <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center flex flex-col justify-between">
                      <div className="w-6 h-6 rounded-md bg-purple-500/15 text-purple-400 flex items-center justify-center mx-auto mb-1.5">
                        <Layers size={13} />
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-white">
                        {currentProject.metrics[0]?.value || "7 Services"}
                      </p>
                      <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                        MICROSERVICES
                      </p>
                    </div>

                    {/* Box 2: Event-Driven / Architecture */}
                    <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center flex flex-col justify-between">
                      <div className="w-6 h-6 rounded-md bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto mb-1.5">
                        <Zap size={13} />
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-white truncate">
                        {currentProject.metrics[1]?.value || "Event-Driven"}
                      </p>
                      <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                        ARCHITECTURE
                      </p>
                    </div>

                    {/* Box 3: Docker + Nginx / Deployment */}
                    <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center flex flex-col justify-between">
                      <div className="w-6 h-6 rounded-md bg-cyan-500/15 text-cyan-400 flex items-center justify-center mx-auto mb-1.5">
                        <Boxes size={13} />
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-white truncate">
                        {currentProject.metrics[2]?.value || "Docker + Nginx"}
                      </p>
                      <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                        DEPLOYMENT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture Preview Box matching reference */}
                <div className="p-4 rounded-2xl bg-[#0e1628]/60 border border-white/[0.07] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-300 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-purple-500/15 text-purple-400 flex items-center justify-center">
                        <Code size={12} />
                      </div>
                      <span>Architecture Preview</span>
                    </div>
                    <button
                      onClick={() => handleCopyPipeline(currentPipeline)}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] hover:border-purple-500/30 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-[11px] font-mono"
                      title="Copy Architecture Pipeline"
                    >
                      {copied ? (
                        <>
                          <Check size={11} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-slate-300 break-words">
                    {currentPipeline}
                  </div>
                </div>

                {/* System Specifications 2x2 Grid matching reference */}
                <div className="p-4 rounded-2xl bg-[#0e1628]/60 border border-white/[0.07] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-1.5">
                    <Settings size={12} />
                    <span>SYSTEM SPECIFICATIONS</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                      <Network size={13} className="text-purple-400 flex-shrink-0" />
                      <span className="truncate">Two-Tier Nginx Load Balan...</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                      <Radio size={13} className="text-amber-400 flex-shrink-0" />
                      <span className="truncate">RabbitMQ Event-Driven Pu...</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                      <ShieldCheck size={13} className="text-emerald-400 flex-shrink-0" />
                      <span className="truncate">JWT &amp; Google OAuth 2.0 G...</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                      <Cpu size={13} className="text-cyan-400 flex-shrink-0" />
                      <span className="truncate">Docker Compose Multi-Co...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── More Production Architectures Section matching Reference Image Exactly ── */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <h4 className="text-white font-display font-bold text-lg sm:text-xl tracking-tight">
                More Production Architectures
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Click any card to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ── Card 1: AutoSiteGen (Multi-Agent AI Pipeline) ── */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProjectId("autositegen")}
              className="p-6 rounded-2xl bg-[#0c1222]/85 hover:bg-[#10182e]/90 border border-purple-500/30 hover:border-purple-400/60 transition-all cursor-pointer backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(168,85,247,0.1)] flex flex-col justify-between group/card1"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px] font-mono">
                    Multi-Agent AI Pipeline
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProjectId("autositegen");
                    }}
                    className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Switch to Featured</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>

                {/* Title row with icon */}
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white tracking-tight group-hover/card1:text-purple-300 transition-colors">
                      AutoSiteGen
                    </h4>
                    <p className="text-purple-400 font-semibold text-xs mt-0.5">
                      Multi-Agent AI Website Generator
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Developed an AI-powered website generation system that transforms user prompts into fully functional websites using collaborative AI agents.
                </p>

                {/* Badges rows matching reference */}
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">LangGraph</strong> <span className="text-slate-400">(Orchestration)</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">Llama 3.3 70B</strong> <span className="text-slate-400">(LLM Model)</span>
                    </span>
                  </div>
                  <div>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">4 Agents</strong> <span className="text-slate-400">(Autonomous Pipeline)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom action row */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 mt-auto">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    <LangGraphIcon size={12} />
                    <span>LangGraph</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    Llama 3.3 70B
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    <PythonIcon size={12} />
                    <span>Python</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    React.js
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">+3 more</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (autositegenProject) setModalProject(autositegenProject);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all flex-shrink-0 cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Case Study →</span>
                </button>
              </div>
            </motion.div>

            {/* ── Card 2: TaskFlow (High-Throughput Full Stack) ── */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProjectId("taskflow")}
              className="p-6 rounded-2xl bg-[#0c1222]/85 hover:bg-[#10182e]/90 border border-blue-500/30 hover:border-blue-400/60 transition-all cursor-pointer backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.1)] flex flex-col justify-between group/card2"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px] font-mono">
                    High-Throughput Full Stack
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProjectId("taskflow");
                    }}
                    className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Switch to Featured</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>

                {/* Title row with icon */}
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white tracking-tight group-hover/card2:text-cyan-300 transition-colors">
                      TaskFlow
                    </h4>
                    <p className="text-purple-400 font-semibold text-xs mt-0.5">
                      Full Stack Task Management System
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Built a multi-user CRUD task management application with robust authentication, priority-based workflows, and optimized database performance.
                </p>

                {/* Badges rows matching reference */}
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">+35% Faster</strong> <span className="text-slate-400">(Query Optimization)</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">10K+ Tasks</strong> <span className="text-slate-400">(Scale Capacity)</span>
                    </span>
                  </div>
                  <div>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      <strong className="text-white">JWT + bcrypt</strong> <span className="text-slate-400">(Security)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom action row */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 mt-auto">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    React.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    Express.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px]">
                    MySQL
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">+2 more</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (taskflowProject) setModalProject(taskflowProject);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-all flex-shrink-0 cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Case Study →</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}

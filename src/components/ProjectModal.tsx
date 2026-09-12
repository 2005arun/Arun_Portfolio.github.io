import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Zap,
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data/portfolio";

interface Props {
  project: Project;
  onClose: () => void;
}

// Architecture diagrams per project
const architectureDiagrams: Record<string, React.ReactNode> = {
  cinemovie: (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {[
          "Client (React)",
          "API Gateway",
          "Auth Service",
          "Movie Service",
          "Booking Service",
          "Ticket Service",
          "Email Service",
        ].map((node, i, arr) => (
          <div key={node} className="flex items-center gap-1.5">
            <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs font-semibold text-center font-mono">
              {node}
            </div>
            {i < arr.length - 1 && (
              <ChevronRight size={12} className="text-purple-400/50" />
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
        {[
          ["Nginx LB", "2-tier load balancing & reverse proxy"],
          ["RabbitMQ", "Asynchronous event-driven message bus"],
          ["Docker Compose", "Multi-service container orchestration"],
          ["PostgreSQL", "ACID compliant relational database"],
          ["Redis Cache", "Low-latency seat & session cache"],
          ["Railway Cloud", "Continuous delivery pipeline"],
        ].map(([name, desc]) => (
          <div
            key={name}
            className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left"
          >
            <p className="text-xs font-bold text-white font-mono">{name}</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
  autositegen: (
    <div className="space-y-2">
      {[
        {
          step: "01",
          name: "User Prompt Input",
          color: "bg-blue-500/10 border-blue-500/20 text-blue-300",
          desc: "Natural language input specifying desired website layout & goals",
        },
        {
          step: "02",
          name: "Planner Agent",
          color: "bg-purple-500/10 border-purple-500/20 text-purple-300",
          desc: "Deconstructs prompts into functional requirements & design tokens",
        },
        {
          step: "03",
          name: "Architect Agent",
          color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
          desc: "Designs semantic HTML skeleton, responsive grid, and wireframe",
        },
        {
          step: "04",
          name: "Coder Agent",
          color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
          desc: "Synthesizes modern CSS styles and interactive vanilla JavaScript",
        },
        {
          step: "05",
          name: "Validator Agent",
          color: "bg-amber-500/10 border-amber-500/20 text-amber-300",
          desc: "Performs syntax linting, accessibility checks, and responsive validation",
        },
        {
          step: "06",
          name: "Generated Production Artifact",
          color: "bg-green-500/10 border-green-500/20 text-green-300",
          desc: "Complete, deployable website rendered live in the user workspace",
        },
      ].map((node) => (
        <div
          key={node.step}
          className={`flex items-center gap-3.5 p-3 rounded-xl border ${node.color}`}
        >
          <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0">
            {node.step}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold font-mono">{node.name}</p>
            <p className="text-[11px] text-slate-300 mt-0.5 leading-normal">
              {node.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  ),
  taskflow: (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {[
        ["JWT Auth", "Stateless token-based security", "text-purple-300"],
        ["bcrypt Hashing", "Salted crypt password protection", "text-blue-300"],
        ["MySQL Indexes", "+35% execution optimization", "text-cyan-300"],
        ["React UI", "Priority filtered responsive boards", "text-emerald-300"],
        ["Node REST API", "Modular MVC controllers & routes", "text-amber-300"],
        ["High Scale", "Benchmarked for 10K+ concurrent tasks", "text-rose-300"],
      ].map(([name, desc, color]) => (
        <div
          key={name}
          className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-left"
        >
          <p className={`text-xs font-bold font-mono ${color}`}>{name}</p>
          <p className="text-[11px] text-slate-400 mt-1 leading-normal">{desc}</p>
        </div>
      ))}
    </div>
  ),
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0b18] border border-purple-500/20 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 border-b border-white/[0.07] bg-[#0b0b18]/95 backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                  {project.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Case Study Dossier
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all flex-shrink-0 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6 space-y-7">
            {/* Section 1: Overview & Metrics */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
                <Sparkles size={13} />
                01 / Project Overview
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-2.5">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-3.5 rounded-xl bg-purple-500/[0.04] border border-purple-500/15"
                  >
                    <p className="font-display text-base sm:text-lg font-extrabold text-purple-300">
                      {m.value}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Architecture */}
            {architectureDiagrams[project.id] && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2.5 flex items-center gap-2">
                  <Layers size={13} />
                  02 / Architecture &amp; Dataflow
                </h4>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  {architectureDiagrams[project.id]}
                </div>
              </div>
            )}

            {/* Section 3: Key Highlights */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2.5 flex items-center gap-2">
                <CheckCircle2 size={13} />
                03 / Key Implementation Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.04]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-purple-400 mt-0.5 flex-shrink-0"
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Engineering Challenges */}
            {project.challenges && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
                  <AlertCircle size={13} />
                  04 / Engineering Challenges &amp; Solutions
                </h4>
                <div className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed p-2.5 rounded-xl bg-amber-500/[0.03] border border-amber-500/15"
                    >
                      <span className="text-amber-400 font-mono mt-0.5 flex-shrink-0 text-xs">
                        ▸
                      </span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 5: Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Zap size={13} />
                05 / Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 z-20 flex items-center gap-3 px-6 sm:px-8 py-4 border-t border-white/[0.07] bg-[#0b0b18]/95 backdrop-blur-xl">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-center justify-center"
            >
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center justify-center"
              >
                <ExternalLink size={16} />
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

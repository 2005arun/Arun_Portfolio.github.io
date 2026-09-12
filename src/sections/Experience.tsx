import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Database,
  Brain,
  FileText,
  Terminal,
  Network,
  Copy,
  Check,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { PythonIcon } from "../components/Icons";
import { experiences, personalInfo } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import "../styles/experience.css";

interface ExperienceProps {
  onNavigate?: (id: string) => void;
}

const techBadgeIcons: Record<string, React.ReactNode> = {
  Python: <PythonIcon size={14} />,
  "Generative AI": <Sparkles size={14} className="text-purple-400" />,
  "Prompt Engineering": <Terminal size={14} className="text-indigo-400" />,
  NLP: <Brain size={14} className="text-pink-400" />,
  "Vector Database": <Database size={14} className="text-cyan-400" />,
  "Text Summarization": <FileText size={14} className="text-emerald-400" />,
  "API Integration": <Network size={14} className="text-blue-400" />,
};

export default function Experience({ onNavigate }: ExperienceProps = {}) {
  const [pipelineCopied, setPipelineCopied] = useState(false);
  const exp = experiences[0];

  const pipelineText =
    "Legal Document → Text Chunking → Vector Embeddings → Prompt Pipeline → Structured Summary";

  const handleCopyPipeline = () => {
    navigator.clipboard.writeText(pipelineText);
    setPipelineCopied(true);
    setTimeout(() => setPipelineCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" className="section-padding experience-section relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] rounded-full bg-purple-600/[0.08] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[25rem] rounded-full bg-indigo-600/[0.05] blur-[130px] pointer-events-none" />
      <div id="internship" className="absolute -top-24 pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          badge="02 / EXPERIENCE"
          title="Professional Journey"
          subtitle="Real-world experience, meaningful projects, and continuous learning."
          align="center"
        />

        {/* ── Main Enhanced Showcase Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="experience-hero-card group relative"
        >
          {/* Subtle Top-Right Accent Tag */}
          <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-semibold uppercase tracking-wider">
                <Sparkles size={12} className="text-purple-400" />
                <span>Featured Engineering Internship</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Cpu size={13} className="text-indigo-400" />
                <span>Generative AI &amp; Legal Tech</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-slate-300 text-xs font-mono">
              <Calendar size={13} className="text-purple-400" />
              <span>{exp.duration}</span>
            </div>
          </div>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ── Left Column (7 cols): Role info, Narrative, Bullets, Tech Stack ── */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold text-base sm:text-lg mt-0.5 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Completed" />
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {exp.description}
                </p>
              </div>

              {/* Responsibilities & Achievements with checkmarks */}
              <div className="space-y-3 pt-1">
                {exp.contributions.map((c, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + ci * 0.06 }}
                    className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed group/item"
                  >
                    <span className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-purple-500/30 group-hover/item:scale-110 transition-all">
                      <CheckCircle2 size={13} className="text-purple-300" />
                    </span>
                    <span>{c}</span>
                  </motion.div>
                ))}
              </div>

              {/* Technologies & Methods Tray with Authentic Icons */}
              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <span>Technologies &amp; Methods</span>
                  <span className="text-slate-600">({exp.technologies.length})</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.035] hover:bg-purple-500/10 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] cursor-default"
                    >
                      {techBadgeIcons[tech]}
                      <span>{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column (5 cols): Impact Metrics, Pipeline Preview, Key Engineering Takeaway ── */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-4">
              {/* Card 1: Key Impact & Performance Metrics */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                      <TrendingUp size={15} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-200">
                      Engineering Impact
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-semibold">
                    <ShieldCheck size={11} />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center">
                    <p className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                      +30%
                    </p>
                    <p className="text-[10px] font-mono uppercase text-slate-400 mt-1 font-semibold leading-tight">
                      Context Retention
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center">
                    <p className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                      85%
                    </p>
                    <p className="text-[10px] font-mono uppercase text-slate-400 mt-1 font-semibold leading-tight">
                      Time Saved
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center">
                    <p className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                      &lt; 5s
                    </p>
                    <p className="text-[10px] font-mono uppercase text-slate-400 mt-1 font-semibold leading-tight">
                      Pipeline Speed
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Pipeline Flow Preview with 1-click Copy */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                    <Zap size={14} className="text-amber-400" />
                    <span>Inference &amp; RAG Flow</span>
                  </div>
                  <button
                    onClick={handleCopyPipeline}
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] hover:border-purple-500/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                    title="Copy Pipeline String"
                  >
                    {pipelineCopied ? (
                      <Check size={13} className="text-emerald-400" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                  <p className="text-xs font-mono text-slate-300 leading-relaxed break-words">
                    {pipelineText}
                  </p>
                </div>
              </div>

              {/* Card 3: Engineering Takeaway */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/[0.07] to-indigo-500/[0.03] border border-purple-500/20">
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;Engineered high-accuracy document ingestion pipelines that bridge unstructured legal documents with fast, context-aware LLM retrieval.&rdquo;
                </p>
                <p className="text-[11px] font-mono text-purple-300 font-semibold mt-2">
                  // Core Focus: Zero Clause Drift &amp; Low Latency
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Career Readiness & Opportunities Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-500/[0.08] via-[#0e1628] to-indigo-500/[0.06] border border-purple-500/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Sparkles size={22} />
            </span>
            <div>
              <h4 className="text-white font-display font-bold text-base sm:text-lg">
                Available for Backend &amp; AI Engineering Roles
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Looking for opportunities to build high-throughput backend services, distributed systems, and LLM applications.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto justify-end">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-4"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="btn-secondary text-xs py-2.5 px-4 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-secondary text-xs py-2.5 px-4 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

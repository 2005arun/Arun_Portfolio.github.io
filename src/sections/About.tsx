import { motion } from "framer-motion";
import {
  GraduationCap,
  Download,
  ExternalLink,
  Mail,
  Quote,
  Brain,
  Network,
  Server,
  Layers,
  Terminal,
  Trophy,
  BarChart3,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionHeading from "../components/SectionHeading";
import "../styles/about.css";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Production Projects",
    icon: Terminal,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    value: 1,
    suffix: "",
    label: "Engineering Internship",
    icon: GraduationCap,
    color: "text-purple-300",
    bg: "bg-purple-500/10",
  },
  {
    value: 100,
    suffix: "+",
    label: "Competitive Contests",
    icon: Trophy,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    value: 7,
    suffix: ".89",
    label: "Academic CGPA",
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const floatingOverlays = [
  {
    label: "AI",
    icon: <Brain size={16} className="text-purple-400" />,
    className: "top-6 left-6",
    delay: 0.2,
  },
  {
    label: "System Design",
    icon: <Network size={16} className="text-indigo-400" />,
    className: "top-6 right-6",
    delay: 0.3,
  },
  {
    label: "Backend",
    icon: <Server size={16} className="text-blue-400" />,
    className: "bottom-14 left-6",
    delay: 0.4,
  },
  {
    label: "Distributed Systems",
    icon: <Layers size={16} className="text-cyan-400" />,
    className: "bottom-14 right-6",
    delay: 0.5,
  },
];

const aboutParagraphs = [
  "I'm a B.Tech Artificial Intelligence and Data Science student at Sri Eshwar College of Engineering, driven by curiosity about what happens behind the applications we use every day.",
  "My interests sit at the intersection of Backend Engineering, Artificial Intelligence, Distributed Systems, and System Design. I enjoy turning ideas into reliable software—from designing APIs and microservices to experimenting with event-driven architectures and AI-powered applications.",
  "I'm particularly interested in understanding how systems scale, communicate, and make intelligent decisions. Whether I'm building a backend service, integrating an LLM, or designing a distributed workflow, I like digging into the problem, understanding the trade-offs, and finding a practical solution.",
];

interface AboutProps {
  onNavigate?: (id: string) => void;
}

export default function About({ onNavigate }: AboutProps = {}) {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding about-section relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[50rem] h-[50rem] rounded-full bg-purple-600/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] rounded-full bg-indigo-600/[0.05] blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeading
          badge="01 / ABOUT"
          title="About the Engineer"
          subtitle="Curiosity today. Scalable solutions tomorrow."
          align="left"
        />

        <div className="about-grid">
          {/* Left Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="about-narrative"
          >
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-slate-300 text-[15px] sm:text-base leading-[1.8]"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="about-stats-grid mt-6"
            >
              {stats.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="about-stat-card group"
                  >
                    <span
                      className={`w-9 h-9 rounded-xl ${s.bg} ${s.color} border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent size={16} />
                    </span>
                    <div className="flex flex-col">
                      <span className="about-stat-value">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </span>
                      <p className="about-stat-label">{s.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-5"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={15} />
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="btn-secondary cursor-pointer"
              >
                <ExternalLink size={15} />
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="btn-secondary cursor-pointer"
              >
                <Mail size={15} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Illustration + Overlaid Glass Badges + Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="about-right-col"
          >
            {/* Hero Image Container with Overlaid Badges */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_60px_rgba(168,85,247,0.15)] group">
              <img
                src="/about-hero.jpg"
                alt="Arun R S - Engineering Workspace"
                className="w-full h-auto object-cover rounded-2xl block group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c16]/90 via-transparent to-transparent pointer-events-none" />

              {/* 4 Overlaid Glass Badges matching reference */}
              {floatingOverlays.map((badge, idx) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: badge.delay }}
                  animate={{ y: [0, idx % 2 === 0 ? -4 : 4, 0] }}
                  // @ts-ignore
                  transition={{
                    y: {
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute ${badge.className} hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1628]/85 backdrop-blur-md border border-white/[0.12] shadow-[0_8px_20px_rgba(0,0,0,0.4)] z-10`}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="about-quote-card"
            >
              <Quote size={22} className="text-purple-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-slate-200 text-sm leading-relaxed font-medium">
                  Not just writing code,
                  <br />
                  but building systems that make a difference.
                </p>
                <span className="text-xs text-slate-400 font-mono mt-1.5 block">
                  // Arun
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

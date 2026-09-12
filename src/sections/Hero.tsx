import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolio";
import "../styles/hero.css";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Engineer",
  "System Design Enthusiast",
];

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(target.slice(0, i + 1));
        i++;
        if (i > target.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(target.slice(0, i));
        i--;
        if (i < 0) {
          clearInterval(interval);
          setRoleIdx((p) => (p + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 60 : 32);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  const scrollToProjects = () => {
    if (onNavigate) {
      onNavigate("projects");
      return;
    }
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      {/* Ambient background glow */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container">
        <div className="hero-grid">
          {/* ── Left Column: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-content"
          >
            {/* Greeting */}
            <div className="hero-greeting">
              <span>{personalInfo.greeting}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Backend <br />
              Engineer <span className="hero-gradient-ai">&amp; AI</span> <br />
              <span className="hero-gradient-engineer">Engineer</span>
            </h1>

            {/* Typewriter role */}
            <div className="hero-typewriter-wrap">
              <span className="hero-terminal-chevron">&gt; </span>
              <span>{displayed}</span>
              <span className="hero-blinking-cursor">|</span>
            </div>

            {/* Intro Narrative */}
            <p className="hero-bio-text">
              {personalInfo.intro}
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions-row">
              <button onClick={scrollToProjects} className="hero-btn-work">
                <span>View My Work</span>
                <span className="hero-arrow-pill">↓</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-resume-alt"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="hero-social-strip">
              <a
                href="https://github.com/2005arun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hero-mini-social"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="http://www.linkedin.com/in/arun-r-s19102005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hero-mini-social"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="hero-mini-social"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Circular Profile Centerpiece ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="hero-visual-col"
          >
            <div className="hero-avatar-frame">
              {/* Neon halo ring */}
              <div className="hero-avatar-halo" />

              {/* Orbit dots */}
              <div className="hero-dot-cyan" />
              <div className="hero-dot-purple" />

              {/* Profile Image */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="hero-avatar-img"
              />

              {/* Top-Right Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="hero-badge-top"
              >
                <Zap size={13} className="text-purple-400 fill-purple-400" />
                <span>System Design</span>
              </motion.div>

              {/* Bottom-Left Badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="hero-badge-bottom"
              >
                <span className="hero-beacon-dot" />
                <span>Generative AI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

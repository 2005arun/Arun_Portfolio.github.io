import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, User, Wrench, Briefcase, FolderGit2, Trophy, Award, Mail,
  Menu, X, ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { navItems, personalInfo } from "../data/portfolio";
import "../styles/sidenav.css";

const sectionIcons: Record<string, React.ReactNode> = {
  home: <Home size={18} />,
  about: <User size={18} />,
  skills: <Wrench size={18} />,
  experience: <Briefcase size={18} />,
  projects: <FolderGit2 size={18} />,
  achievements: <Trophy size={18} />,
  certifications: <Award size={18} />,
  contact: <Mail size={18} />,
};

interface SideNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function SideNav({ activeSection, onNavigate }: SideNavProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  // Mobile: show first 4 + more button
  const mobileVisible = navItems.slice(0, 4);

  return (
    <>
      {/* ── Desktop: Right-side vertical nav ── */}
      <nav className="sidenav" aria-label="Section navigation">
        <div className="sidenav-inner">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`sidenav-btn ${isActive ? "active" : ""}`}
                aria-label={item.label}
              >
                {sectionIcons[id] || <Home size={18} />}
                <AnimatePresence>
                  {hoveredId === id && (
                    <motion.span
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.15 }}
                      className="sidenav-tooltip"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}

          <div className="sidenav-divider" />

          <a href="https://github.com/2005arun" target="_blank" rel="noopener noreferrer" className="sidenav-social" aria-label="GitHub">
            <GithubIcon size={14} />
          </a>
          <a href="http://www.linkedin.com/in/arun-r-s19102005" target="_blank" rel="noopener noreferrer" className="sidenav-social" aria-label="LinkedIn">
            <LinkedinIcon size={14} />
          </a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="sidenav-social" aria-label="Resume" title="Download Resume">
            <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      {/* ── Mobile: Bottom action bar ── */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {mobileVisible.map((item) => {
          const id = item.href.replace("#", "");
          return (
            <button
              key={id}
              onClick={() => handleNavClick(item.href)}
              className={`mobile-nav-btn ${activeSection === id ? "active" : ""}`}
            >
              {sectionIcons[id]}
              <span>{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`mobile-nav-btn ${mobileMenuOpen ? "active" : ""}`}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          <span>More</span>
        </button>
      </nav>

      {/* Mobile expanded menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-panel"
            >
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(item.href)}
                    className={`mobile-menu-item ${activeSection === id ? "active" : ""}`}
                  >
                    {sectionIcons[id]}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

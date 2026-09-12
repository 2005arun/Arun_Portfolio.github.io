import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../components/Icons";
import { navItems, personalInfo } from "../data/portfolio";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    if (onNavigate) {
      onNavigate(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#070712]/90 backdrop-blur-xl">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-300 font-display font-extrabold text-sm">
              A
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white tracking-tight">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400">
                Backend Engineer &amp; AI Engineer
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(item.href)}
                  className="text-xs text-slate-400 hover:text-white transition-colors font-medium cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/2005arun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href="http://www.linkedin.com/in/arun-r-s19102005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href="https://leetcode.com/u/2005arun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all"
              >
                <LeetCodeIcon size={14} />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all cursor-pointer"
              >
                <ArrowUp size={14} />
              </button>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              © {new Date().getFullYear()} Arun R S. Designed for scale &amp; performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

interface NavbarProps {
  activePage?: string;
  onNavigate?: (pageId: string) => void;
}

export default function Navbar({
  activePage = "home",
  onNavigate,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#080c16]/90 backdrop-blur-md border-b border-white/[0.08] transition-all">
        {/* Full-width container: small left padding, very small right padding */}
        <div className="w-full h-16 flex items-center justify-between pl-6 sm:pl-8 pr-3 sm:pr-4">
          {/* Left Text: Small, clean, vertically centered "hii,Iam Arun" */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleNav("#home")}
              className="text-slate-300 hover:text-white transition-colors text-xs sm:text-[13px] font-medium tracking-normal select-none cursor-pointer bg-transparent border-none p-0 flex items-center"
              aria-label="hii,Iam Arun"
            >
              hii,Iam Arun
            </button>
          </div>

          {/* Right-aligned Navigation Group (Large empty space to the left, 28px uniform gap between all items) */}
          <nav
            className="hidden md:flex items-center ml-auto"
            style={{ gap: "28px" }}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive =
                activePage === targetId ||
                (targetId === "internship" && activePage === "experience") ||
                (targetId === "experience" && activePage === "internship");

              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none bg-transparent border-none ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-[#182133] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Theme / Status Indicator Pill */}
            <div className="relative group">
              <div
                className="px-2.5 py-2 rounded-lg bg-[#141b28] border border-white/[0.1] hover:border-white/[0.2] flex items-center justify-center cursor-pointer transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                title="Theme & Status"
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-tr from-[#00d2ff] to-[#00f2fe] shadow-[0_0_8px_rgba(0,210,255,0.85)]"></span>
                </span>
              </div>
              {/* Tooltip */}
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block pointer-events-none z-50">
                <div className="bg-[#0e1626] border border-white/[0.12] text-xs text-slate-200 px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap">
                  Open to Opportunities
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Actions: Status Indicator + Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <div className="px-2 py-1.5 rounded-lg bg-[#141b28] border border-white/[0.1] flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-tr from-[#00d2ff] to-[#00f2fe]"></span>
              </span>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-50 bg-[#080c16]/98 border-b border-white/[0.1] md:hidden px-6 py-4 shadow-2xl flex flex-col gap-1"
            >
              {navItems.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive =
                  activePage === targetId ||
                  (targetId === "internship" && activePage === "experience") ||
                  (targetId === "experience" && activePage === "internship");

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNav(item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#182133] text-white border border-white/[0.1]"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
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

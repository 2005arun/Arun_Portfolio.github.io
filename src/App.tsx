import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  const [activePage, setActivePage] = useState<string>(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash) return hash;
    }
    return "home";
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActivePage(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <div className="relative z-10 min-h-screen flex flex-col pt-16">
        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1"
            >
              {(activePage === "home" || !activePage) && (
                <Hero onNavigate={handleNavigate} />
              )}
              {activePage === "about" && <About onNavigate={handleNavigate} />}
              {(activePage === "internship" || activePage === "experience") && (
                <Experience onNavigate={handleNavigate} />
              )}
              {activePage === "projects" && <Projects />}
              {activePage === "skills" && <Skills />}
              {activePage === "achievements" && (
                <div className="space-y-12 pb-12">
                  <Achievements />
                  <Certifications />
                </div>
              )}
              {activePage === "contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <BackToTop />
    </>
  );
}

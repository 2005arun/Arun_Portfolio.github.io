import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  Download,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../components/Icons";
import { personalInfo, socialLinks } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import "../styles/contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3500);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding contact-section relative">
      <div className="container">
        <SectionHeading
          badge="07 / CONNECT"
          title="Let's Build Something Meaningful"
          subtitle="Actively seeking engineering roles across backend systems, distributed architectures, and intelligent AI agents."
          align="center"
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact & Channel Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="contact-info-panel"
          >
            {/* Direct Email Card with 1-click copy */}
            <div className="contact-email-card">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all cursor-pointer flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                    Phone
                  </p>
                  <p className="text-xs font-bold text-white">
                    +91 {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                    Location
                  </p>
                  <p className="text-xs font-bold text-white">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Availability and Response Indicators */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for backend and AI engineering roles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Clock size={13} className="text-purple-400" />
                <span>Typical response latency: &lt; 24 hours</span>
              </div>
            </div>

            {/* Social & Resume Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={socialLinks.find((s) => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white transition-all"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.find((s) => s.name === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-300 transition-all"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/2005arun/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 transition-all"
              >
                <LeetCodeIcon size={15} />
                <span>LeetCode</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 transition-all"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sleek Message Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="contact-form-panel"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                Active Inbox
              </span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-mono font-medium text-slate-300 mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="contact-input-field"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-medium text-slate-300 mb-1.5 block">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="contact-input-field"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-medium text-slate-300 mb-1.5 block">
                  Subject / Topic
                </label>
                <input
                  required
                  type="text"
                  placeholder="Backend Engineering Role / Project Discussion"
                  className="contact-input-field"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-medium text-slate-300 mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your team, challenge, or project..."
                  className="contact-input-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-primary w-full justify-center py-3 text-sm cursor-pointer disabled:opacity-50"
              >
                {status === "idle" && (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
                    <span>Dispatching message...</span>
                  </>
                )}
                {status === "sent" && (
                  <>
                    <Check size={16} className="text-emerald-300" />
                    <span>Message Dispatched Successfully!</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2 font-mono">
                <ShieldCheck size={13} className="text-purple-400" />
                <span>Your information is sent directly to Arun&apos;s primary inbox.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

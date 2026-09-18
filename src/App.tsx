import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import portrait from "./assets/person.png";
import codechefImage from "./assets/codechef.png";
import githubImage from "./assets/github.png";
import hackerrankImage from "./assets/hackerrank.jpg";
import leetcodeImage from "./assets/leetcode.png";
import linkedinImage from "./assets/linkedin.png";

const projects = [
  {
    name: "CineMovie",
    type: "Distributed systems",
    year: "2026",
    number: "01",
    description: "A resilient movie ticket booking platform designed as seven focused services with asynchronous workflows for confirmations, tickets, and email notifications.",
    github: "https://github.com/2005arun/Distributed_Movie_Booking_System.git",
    stack: ["Node.js", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    accent: "coral",
  },
  {
    name: "AutoSiteGen",
    type: "AI product",
    year: "2025",
    number: "02",
    description: "A multi-agent website generator that turns natural-language prompts into validated React sites through a Planner, Architect, Coder, and Validator workflow.",
    github: "https://github.com/2005arun/Autositegen.git",
    stack: ["Python", "LangGraph", "FastAPI", "Groq", "React"],
    accent: "blue",
  },
  {
    name: "TaskFlow",
    type: "Full-stack product",
    year: "2025",
    number: "03",
    description: "A focused task workspace with Kanban workflow, search, filtering, and OAuth, backed by a normalized and indexed PostgreSQL schema.",
    github: "https://github.com/2005arun/TaskFlow/tree/main/Arun-main",
    stack: ["React", "Express.js", "PostgreSQL", "JWT", "Neon"],
    accent: "lime",
  },
];

const skillGroups = [
  { label: "Build", items: ["C", "C++", "Python", "JavaScript", "Java", "Data Structures", "OOPs"] },
  { label: "Ship", items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0", "Docker", "AWS"] },
  { label: "Think", items: ["AI Agents", "LangChain", "LangGraph", "RAG", "Prompt Engineering", "System Design"] },
  { label: "Store", items: ["PostgreSQL", "MySQL", "Firebase", "Redis", "RabbitMQ", "Caching", "Rate Limiting"] },
];

const certifications = ["Human Computer Interaction · NPTEL", "Cloud Practitioner · AWS", "Networking Basics · Cisco", "AI Agent · Simplilearn", "DSA using C/C++ · Udemy"];
const profiles = [
  { name: "LeetCode", image: leetcodeImage, href: "https://leetcode.com/u/2005arun/" },
  { name: "CodeChef", image: codechefImage, href: "https://www.codechef.com/users/arunrs2023" },
  { name: "HackerRank", image: hackerrankImage, href: "https://www.hackerrank.com/profile/arun_rs2023ai_ds" },
  { name: "GitHub", image: githubImage, href: "https://github.com/2005arun" },
  { name: "LinkedIn", image: linkedinImage, href: "https://www.linkedin.com/in/arun-r-s19102005/" },
];
const navItems = ["work", "skills", "story", "proof", "contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const filters = ["All", ...Array.from(new Set(projects.map((project) => project.type)))];
  const visibleProjects = projectFilter === "All" ? projects : projects.filter((project) => project.type === projectFilter);
  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const updateBackground = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    event.currentTarget.style.setProperty("--pointer-x", `${clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${clientY}px`);
  };

  return (
    <div className="site-shell" onMouseMove={updateBackground}>
      <header className="topbar">
        <button className="wordmark" onClick={() => navigate("top")} aria-label="Back to top"><span>AR</span> ARUN R S</button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          {navItems.map((item, index) => <button key={item} onClick={() => navigate(item)}><span>0{index + 1}</span>{item}</button>)}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <button className="top-cta" onClick={() => navigate("contact")}>Let's talk <ArrowUpRight size={16} /></button>
      </header>

      <main id="top">
        <section className="hero-section content-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="kicker"><span className="live-dot" /> Available for backend & AI opportunities</p>
            <h1>Building systems<br /><em>people can trust.</em></h1>
            <p className="hero-intro">I&apos;m Arun, a backend-focused AI engineer who turns complicated ideas into clear, scalable products.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => navigate("work")}>Explore my work <MoveUpRight size={17} /></button><a className="text-link" href="https://drive.google.com/file/d/10Cb8M8RHQewE9Gmc63CK1lQqWIjEPjof/view?usp=sharing" target="_blank" rel="noreferrer">Download resume <Download size={15} /></a></div>
            <div className="hero-meta"><span><strong>01</strong> / 03<br /><small>Years building</small></span><span><strong>07</strong><br /><small>Services in production</small></span><span><strong>1855</strong><br /><small>Max LeetCode rating</small></span></div>
          </motion.div>
          <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <div className="portrait-label"><span>COIMBATORE, IN</span><span>2026 ↗</span></div>
            <img src={portrait} alt="Illustrated portrait of Arun R S" />
            <div className="portrait-note">Curious by nature.<br /><strong>Precise by craft.</strong></div>
          </motion.div>
        </section>

        <section className="marquee-band" aria-label="Specialties"><div>BACKEND ENGINEERING <i>✦</i> AI SYSTEMS <i>✦</i> PRODUCT THINKING <i>✦</i> BACKEND ENGINEERING <i>✦</i> AI SYSTEMS <i>✦</i></div></section>

        <section className="section content-grid" id="work">
          <div className="section-intro"><p className="eyebrow">Selected work</p><h2>Made to move<br /><em>the needle.</em></h2><p className="muted">A few things I&apos;ve designed, built, and shipped. Each one started with a messy problem.</p></div>
          <div className="work-area"><div className="filter-row">{filters.map((filter) => <button key={filter} className={projectFilter === filter ? "filter active" : "filter"} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div><div className="project-list">{visibleProjects.map((project) => <motion.button layout key={project.name} className={`project-card ${project.accent}`} onClick={() => setActiveProject(project)}><span className="project-number">{project.number}</span><div><p className="project-type">{project.type} · {project.year}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="project-repo">GitHub repository <ArrowUpRight size={13} /></span></div><ArrowUpRight className="project-arrow" size={22} /></motion.button>)}</div></div>
        </section>

        <section className="skills-section section" id="skills"><div className="content-grid"><div className="section-intro"><p className="eyebrow">The toolkit</p><h2>Good tools.<br /><em>Better judgment.</em></h2></div><div className="skills-grid">{skillGroups.map((group, index) => <motion.div className="skill-group" key={group.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="skill-heading"><Code2 size={18} /><span>0{index + 1}</span><h3>{group.label}</h3></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>)}</div></div></section>

        <section className="section story-section content-grid" id="story"><div className="section-intro"><p className="eyebrow">The short story</p><h2>Still learning.<br /><em>Already shipping.</em></h2></div><div className="story-content"><p className="story-lede">I&apos;m currently pursuing a B.Tech in Artificial Intelligence & Data Science at Sri Eshwar College of Engineering. My sweet spot is where thoughtful architecture meets useful AI.</p><div className="timeline"><div className="timeline-item"><span>2026</span><div><h3>Backend AI Engineer Intern</h3><p>Digital Back Office · Built a generative AI legal document summarizer that reduced manual review time and improved context retention by 30%.</p></div></div><div className="timeline-item"><span>2023 — 27</span><div><h3>B.Tech · AI & Data Science</h3><p>Sri Eshwar College of Engineering · CGPA 7.89</p></div></div></div><div className="wins"><div><strong>Top 5%</strong><span>LeetCode · 73 contests</span></div><div><strong>2★</strong><span>CodeChef · 32 contests</span></div><div><strong>5★</strong><span>HackerRank C++</span></div></div></div></section>

        <section className="proof-section section" id="proof"><div className="proof-grid"><div><p className="eyebrow">Proof of work</p><h2>Signals that<br /><em>matter.</em></h2><p className="muted">The certificates, competitions, infrastructure, and communities behind the projects.</p></div><div className="proof-columns"><div className="proof-block"><p className="proof-label">Certifications</p><div className="certificate-list">{certifications.map((certificate, index) => <div key={certificate}><span>0{index + 1}</span><strong>{certificate}</strong></div>)}</div></div><div className="proof-block"><p className="proof-label">Recognition</p><div className="recognition-list"><div><strong>02</strong><span>Second Place<br />CIT Coding Contest · 2025</span></div><div><strong>01</strong><span>Best Team Spirit<br />SICPC · 2025</span></div></div></div><div className="proof-block"><p className="proof-label">Deployment fluency</p><div className="deployment-tags"><span>Railway</span><span>Vercel</span><span>Render</span><span>Neon</span><span>CloudAMQP</span><span>Upstash</span></div></div><div className="proof-block"><p className="proof-label">Find me online</p><div className="profile-list">{profiles.map((profile) => <a key={profile.name} className="profile-link" href={profile.href} target="_blank" rel="noreferrer"><img src={profile.image} alt={`${profile.name} profile`} /><span>{profile.name}<ArrowUpRight size={13} /></span></a>)}</div></div></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-inner"><p className="eyebrow">Have a hard problem?</p><h2>Let&apos;s make it<br /><em>beautifully simple.</em></h2><a className="contact-email" href="mailto:arunramamoorthi05@gmail.com">arunramamoorthi05@gmail.com <ArrowUpRight size={22} /></a><div className="contact-bottom"><span><BriefcaseBusiness size={16} /> Open to opportunities</span><div><a href="https://github.com/2005arun" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a><a href="https://www.linkedin.com/in/arun-r-s19102005/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a><a href="mailto:arunramamoorthi05@gmail.com" aria-label="Email"><Mail size={20} /></a></div></div></div></section>
      </main>

      <footer><span>ARUN R S © 2026</span><span>Built with intent / Coimbatore, India</span></footer>

      <AnimatePresence>{activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}><motion.div className="project-modal" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><p className="eyebrow">{activeProject.type} · {activeProject.year}</p><h2>{activeProject.name}</h2><p>{activeProject.description}</p><div className="modal-stack">{activeProject.stack.map((tech) => <span key={tech}><Check size={13} />{tech}</span>)}</div><div className="modal-actions"><a className="button button-dark" href={activeProject.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a><button className="button button-light" onClick={() => setActiveProject(null)}>Close details</button></div></motion.div></motion.div>}</AnimatePresence>
    </div>
  );
}

import { motion } from "framer-motion";
import { Trophy, ExternalLink, Award } from "lucide-react";
import { achievements, awards } from "../data/portfolio";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionHeading from "../components/SectionHeading";
import { LeetCodeIcon, CodeChefIcon, HackerRankIcon } from "../components/Icons";
import "../styles/achievements.css";

const platformDetails: Record<
  string,
  {
    icon: React.ReactNode;
    url: string;
    badge: string;
    accentColor: string;
  }
> = {
  leetcode: {
    icon: <LeetCodeIcon size={24} />,
    url: "https://leetcode.com/u/2005arun/",
    badge: "Top 5% Global",
    accentColor: "text-amber-400",
  },
  codechef: {
    icon: <CodeChefIcon size={24} />,
    url: "https://www.codechef.com/users/2005arun",
    badge: "Div-2 Competitor",
    accentColor: "text-amber-300",
  },
  hackerrank: {
    icon: <HackerRankIcon size={24} />,
    url: "https://www.hackerrank.com/profile/arun_rs2023ai_ds",
    badge: "5-Star Gold Badge",
    accentColor: "text-emerald-400",
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding achievements-section relative"
    >
      <div className="container">
        <SectionHeading
          badge="05 / HONORS"
          title="Competitive Programming & Awards"
          subtitle="Algorithmic problem-solving under real-time constraints, contest performance, and hackathon recognitions."
          align="center"
        />

        {/* 3-Column Platforms Grid */}
        <div className="achievements-platform-grid">
          {achievements.map((ach, index) => {
            const meta = platformDetails[ach.icon] || {
              icon: <Award size={24} />,
              url: "#",
              badge: "Verified Profile",
              accentColor: "text-purple-400",
            };

            return (
              <motion.div
                key={ach.platform}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ach-platform-card"
              >
                <div>
                  <div className="ach-platform-header">
                    <div className="ach-platform-meta">
                      <div className="ach-platform-icon">{meta.icon}</div>
                      <div>
                        <h3 className="ach-platform-name">{ach.platform}</h3>
                        <p className="ach-platform-rank">{ach.title}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                      {meta.badge}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="ach-stats-grid">
                    {ach.stats.map((s) => (
                      <div key={s.label} className="ach-stat-cell">
                        <p className="ach-stat-number">
                          <AnimatedCounter
                            value={Number(s.value)}
                            suffix={s.suffix ?? ""}
                          />
                        </p>
                        <p className="ach-stat-title">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ach-verify-link"
                >
                  <span>Verify Profile</span>
                  <ExternalLink size={13} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon & Contest Honors Section */}
        <div className="mt-8">
          <div className="awards-subheading">
            <span className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center flex-shrink-0">
              <Trophy size={16} />
            </span>
            <div>
              <h3 className="text-white font-display text-lg sm:text-xl font-bold">
                Contest Honors &amp; Hackathon Awards
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Collegiate level recognitions in competitive programming and hackathons
              </p>
            </div>
          </div>

          <div className="awards-grid">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="award-box"
              >
                <div className="award-badge-icon">
                  <Trophy size={20} />
                </div>
                <div className="award-content">
                  <div className="award-title-row">
                    <h4 className="award-title">{award.title}</h4>
                    <span className="award-year">{award.year}</span>
                  </div>
                  <p className="award-event">{award.event}</p>
                  <p className="award-institution">{award.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

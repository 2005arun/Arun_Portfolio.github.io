import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import { certifications } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import {
  AwsIcon,
  CiscoIcon,
  NptelIcon,
  UdemyIcon,
  SimplilearnIcon,
} from "../components/Icons";
import "../styles/certifications.css";

const issuerMeta: Record<
  string,
  {
    icon: React.ReactNode;
    color: string;
    bg: string;
    border: string;
  }
> = {
  AWS: {
    icon: <AwsIcon size={22} />,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  "Cisco Networking Academy": {
    icon: <CiscoIcon size={22} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  NPTEL: {
    icon: <NptelIcon size={22} />,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  Udemy: {
    icon: <UdemyIcon size={22} />,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  Simplilearn: {
    icon: <SimplilearnIcon size={22} />,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding certifications-section relative"
    >
      <div className="container">
        <SectionHeading
          badge="06 / CREDENTIALS"
          title="Industry Certifications & Training"
          subtitle="Accredited technical qualifications spanning cloud architectures, networking foundations, and algorithms."
          align="center"
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const meta = issuerMeta[cert.issuer] || {
              icon: <Award size={22} />,
              color: "text-purple-400",
              bg: "bg-purple-500/10",
              border: "border-purple-500/20",
            };

            return (
              <motion.div
                key={cert.name + cert.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="cert-item-card"
              >
                <div>
                  <div className="cert-header-row">
                    <div
                      className={`cert-icon-container border ${meta.bg} ${meta.border} ${meta.color}`}
                    >
                      {meta.icon}
                    </div>
                    <span className="cert-year-tag">{cert.year}</span>
                  </div>

                  <h3 className="cert-title-text">{cert.name}</h3>
                  <p className="cert-issuer-name">{cert.issuer}</p>
                </div>

                <div className="cert-footer-row">
                  <span className="cert-verified-badge">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Institutionally Verified</span>
                  </span>

                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {cert.issuer.split(" ")[0]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

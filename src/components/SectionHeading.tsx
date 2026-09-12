import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  hideUnderline?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  hideUnderline = false,
}: Props) {
  const isCenter = align === "center";

  // Split title to give the last word the vibrant gradient
  const words = title.split(" ");
  const mainWords = words.slice(0, -1).join(" ");
  const gradientWord = words[words.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative mb-12 sm:mb-16 ${isCenter ? "text-center" : "text-left"}`}
    >
      {/* HUD Accent lines on sides for centered headers */}
      {isCenter && (
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-40 hidden lg:flex">
          {/* Left HUD Line */}
          <div className="flex items-center gap-1.5 w-32">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/80 to-transparent" />
          </div>
          {/* Right HUD Line */}
          <div className="flex items-center gap-1.5 w-32 justify-end">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-purple-500/80 to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
          </div>
        </div>
      )}

      {/* Badge Pill */}
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            {badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {mainWords && <span>{mainWords} </span>}
        <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
          {gradientWord}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-slate-400 text-sm sm:text-base mt-3 leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Glowing horizontal underline bar for centered layout */}
      {isCenter && !hideUnderline && (
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </div>
      )}
    </motion.div>
  );
}

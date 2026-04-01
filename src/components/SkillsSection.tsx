import { motion } from "framer-motion";

const skills = [
  { name: "C", level: 85 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
];

const SkillOrb = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center gap-3 group"
  >
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Outer ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
        <motion.circle
          cx="60" cy="60" r="52"
          fill="none"
          stroke="hsl(var(--crimson))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 52}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - skill.level / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.15 }}
          className="drop-shadow-[0_0_6px_hsl(var(--crimson)/0.5)]"
        />
      </svg>
      {/* Center */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:glow-crimson transition-all duration-500">
        <span className="text-sm font-bold text-foreground font-display">{skill.level}%</span>
      </div>
    </div>
    <span className="text-sm font-display tracking-wider text-foreground/80 group-hover:text-gradient-crimson transition-colors">
      {skill.name}
    </span>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-16"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((skill, i) => (
          <SkillOrb key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

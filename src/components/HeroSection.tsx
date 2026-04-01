import { motion } from "framer-motion";

const Sharingan = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`animate-sharingan-spin ${className}`}
  >
    <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(0 72% 45% / 0.3)" strokeWidth="2" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(0 72% 45% / 0.5)" strokeWidth="2" />
    <circle cx="100" cy="100" r="20" fill="hsl(0 72% 45% / 0.8)" />
    <circle cx="100" cy="100" r="8" fill="hsl(0 0% 4%)" />
    {[0, 120, 240].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 60 * Math.cos(rad);
      const y = 100 + 60 * Math.sin(rad);
      return (
        <g key={angle}>
          <circle cx={x} cy={y} r="10" fill="hsl(0 72% 45%)" />
          <circle cx={x} cy={y} r="5" fill="hsl(0 0% 4%)" />
        </g>
      );
    })}
  </svg>
);

const CrowSVG = ({ style }: { style: React.CSSProperties }) => (
  <svg width="30" height="20" viewBox="0 0 30 20" style={style} className="absolute pointer-events-none">
    <path
      d="M15 10 Q5 0 0 5 Q5 3 10 8 L15 10 Q20 3 25 5 Q20 0 15 10Z"
      fill="hsl(0 0% 90% / 0.15)"
    />
  </svg>
);

const HeroSection = () => {
  const crows = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${20 + Math.random() * 60}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
    x: (Math.random() - 0.5) * 600,
    y: -200 - Math.random() * 300,
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sharingan-bg">
      {/* Background Sharingan */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Sharingan size={500} />
      </div>

      {/* Crows */}
      {crows.map((crow) => (
        <motion.div
          key={crow.id}
          className="absolute"
          style={{ left: crow.left, top: crow.top }}
          animate={{
            x: [0, crow.x],
            y: [0, crow.y],
            opacity: [0, 0.6, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: crow.duration,
            delay: crow.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <CrowSVG style={{}} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Sharingan size={80} className="mx-auto animate-sharingan-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-wider mb-4 text-gradient-crimson"
        >
          Pamula Sindhu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-2 tracking-wide"
        >
          Aspiring Software Engineer | CSE Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm md:text-base text-muted-foreground/70 italic max-w-lg mx-auto mb-10"
        >
          "Those who cannot acknowledge themselves will eventually fail."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#skills"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display tracking-wider text-sm hover:glow-crimson transition-all duration-300 hover:scale-105"
          >
            View Skills
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass border-primary/30 font-display tracking-wider text-sm chakra-glow hover:scale-105"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

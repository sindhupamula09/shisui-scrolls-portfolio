import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech CSE",
    institution: "Madanapalle Institute of Technology & Science",
    period: "2025 – 2029",
    grade: "8.7 SGPA",
    rank: "Genin → Chūnin",
  },
  {
    title: "Intermediate",
    institution: "Sri Chaitanya Junior College",
    period: "2023 – 2025",
    grade: "83%",
    rank: "Academy Student",
  },
  {
    title: "SSC",
    institution: "Anantha Vidya Niketan",
    period: "2023",
    grade: "71%",
    rank: "Academy Entry",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6 sharingan-bg">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-16 text-center"
      >
        Ninja Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative mb-12 md:w-1/2 pl-16 md:pl-0 ${
              i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Node */}
            <div className={`absolute top-2 w-3 h-3 rounded-full bg-primary glow-crimson left-5 md:left-auto ${
              i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
            }`} />

            <div className="glass-hover rounded-xl p-6">
              <span className="text-xs text-primary font-display tracking-widest uppercase">{edu.rank}</span>
              <h3 className="text-lg font-display font-semibold text-foreground mt-1">{edu.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
              <div className="flex gap-3 mt-2 text-xs text-muted-foreground justify-start md:justify-end">
                <span>{edu.period}</span>
                <span className="text-primary font-semibold">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

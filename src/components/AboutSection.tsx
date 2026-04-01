import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6 sharingan-bg">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass-hover rounded-2xl p-8 md:p-12"
      >
        <p className="text-foreground/80 leading-relaxed text-lg mb-6">
          Computer Science Engineering undergraduate with strong foundations in C and Web Technologies.
          A calm mind with a relentless drive to learn, build, and evolve — one line of code at a time.
        </p>
        <p className="text-muted-foreground italic text-sm border-l-2 border-primary/50 pl-4">
          "Knowledge and awareness are vague, and perhaps better called illusions.
          But through code, we create something real."
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

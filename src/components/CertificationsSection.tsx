import { motion } from "framer-motion";
import { Award, ScrollText } from "lucide-react";

const certs = [
  { title: "Workshop in Web Development", icon: ScrollText },
  { title: "ADCA – Sri Good Will Computers", icon: Award },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-16"
      >
        Mission Scrolls
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-hover rounded-xl p-8 flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <cert.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-sm tracking-wider text-foreground/90">{cert.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;

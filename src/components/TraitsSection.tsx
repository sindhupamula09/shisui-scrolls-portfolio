import { motion } from "framer-motion";
import { Users, Lightbulb, CalendarCheck, Shuffle, Code, BookOpen, Music, ChefHat } from "lucide-react";

const traits = [
  { name: "Adaptability", icon: Shuffle },
  { name: "Leadership", icon: Users },
  { name: "Event Planning", icon: CalendarCheck },
  { name: "Problem Solving", icon: Lightbulb },
];

const interests = [
  { name: "Coding", icon: Code },
  { name: "Reading", icon: BookOpen },
  { name: "Music", icon: Music },
  { name: "Cooking", icon: ChefHat },
];

const TraitsSection = () => (
  <section id="traits" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      {/* Traits */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-12 text-center"
      >
        Attributes
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {traits.map((trait, i) => (
          <motion.div
            key={trait.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-hover rounded-xl p-6 flex flex-col items-center gap-3 text-center"
          >
            <trait.icon className="w-6 h-6 text-primary" />
            <span className="text-xs font-display tracking-wider text-foreground/80">{trait.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Interests */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-12 text-center"
      >
        Interests
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {interests.map((interest, i) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass-hover rounded-xl p-6 flex flex-col items-center gap-3 text-center"
          >
            <interest.icon className="w-6 h-6 text-primary" />
            <span className="text-xs font-display tracking-wider text-foreground/80">{interest.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TraitsSection;

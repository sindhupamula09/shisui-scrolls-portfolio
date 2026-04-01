import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "A dark-themed responsive portfolio with smooth animations, built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Interactive Quiz App",
    desc: "A dynamic quiz application with score tracking, timer, and responsive design using vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Weather Dashboard",
    desc: "A clean weather app that fetches real-time data from an API and displays it with beautiful UI components.",
    tags: ["JavaScript", "API", "CSS"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 sharingan-bg">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-gradient-crimson mb-16 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-hover rounded-xl p-6 flex flex-col group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-gradient-crimson transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-display tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

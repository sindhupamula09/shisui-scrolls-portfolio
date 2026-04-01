import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:sindhupamula@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 px-6 sharingan-bg">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-gradient-crimson mb-16 text-center"
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-muted-foreground italic text-sm">
              "People's lives don't end when they die. It ends when they lose faith."
              <br />— Reach out. Let's build something real.
            </p>

            <a
              href="mailto:sindhupamula@gmail.com"
              className="flex items-center gap-3 glass-hover rounded-xl p-4 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors">
                sindhupamula@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/pamula-sindhu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass-hover rounded-xl p-4 group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors">
                Pamula Sindhu
              </span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-hover rounded-xl p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display tracking-wider text-sm hover:glow-crimson transition-all duration-300 hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certs = [
  "MERN Stack & DSA",
  "Cisco IoT Fundamentals",
  "Advanced Java Programming",
];

const Education = () => (
  <section id="education" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 hover-glow"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold">Education</h3>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 border-l-2 border-primary/30">
            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
            <div>
              <p className="text-sm text-secondary font-medium mb-1">2021 – 2025</p>
              <h4 className="font-heading font-semibold">B.Tech in Computer Science</h4>
              <p className="text-sm text-muted-foreground mt-1">CGPA: <span className="text-foreground font-medium">8.4 / 10</span></p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 hover-glow"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Award className="text-accent" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold">Certifications</h3>
          </div>

          <div className="space-y-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;

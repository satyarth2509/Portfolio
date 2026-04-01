import { motion } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, readable, and efficient code." },
  { icon: Layers, title: "Scalable Systems", desc: "Building applications that grow with user demand." },
  { icon: Sparkles, title: "Problem Solving", desc: "500+ DSA problems solved across platforms." },
];

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
      </motion.div>

      <div className="max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed text-center"
        >
          Aspiring Full Stack Developer with strong skills in the MERN stack and Java ecosystem,
          focused on building scalable and efficient applications. I'm passionate about clean architecture,
          problem solving, and creating seamless user experiences that make a real impact.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="glass p-8 text-center hover-glow group cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;

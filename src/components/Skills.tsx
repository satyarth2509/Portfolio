import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", pct: 85 },
      { name: "JavaScript", pct: 90 },
      { name: "TypeScript", pct: 80 },
      { name: "SQL", pct: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", pct: 90 },
      { name: "Next.js", pct: 75 },
      { name: "Tailwind CSS", pct: 90 },
      { name: "HTML/CSS", pct: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", pct: 85 },
      { name: "Express.js", pct: 85 },
      { name: "Spring Boot", pct: 75 },
      { name: "REST APIs", pct: 90 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", pct: 85 },
      { name: "MySQL", pct: 80 },
      { name: "PostgreSQL", pct: 70 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass p-6 hover-glow"
          >
            <h3 className="font-heading text-lg font-semibold mb-5 text-secondary">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1 + si * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

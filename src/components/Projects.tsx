import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Connectify",
    subtitle: "Real-Time Chat App",
    desc: "A full-featured real-time chat application with JWT authentication, online user tracking, and responsive design powered by Socket.io.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Zustand", "Tailwind"],
    github: "https://github.com/satyarth",
    live: "#",
    color: "from-primary to-accent",
  },
  {
    title: "Product Store",
    subtitle: "E-Commerce CRUD App",
    desc: "A modern product management app with full CRUD operations, image display, and RESTful API integration built with the MERN stack.",
    tech: ["React", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/satyarth",
    live: "#",
    color: "from-secondary to-primary",
  },
  {
    title: "Online Bookstore",
    subtitle: "Management System",
    desc: "A robust bookstore management system with secure REST APIs, Spring Security authentication, and complete inventory management.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    github: "https://github.com/satyarth",
    live: "#",
    color: "from-accent to-secondary",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass overflow-hidden group"
          >
            {/* Color header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />

            <div className="p-6">
              <h3 className="font-heading text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-secondary mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

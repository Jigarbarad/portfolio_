import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { Button } from "../ui/button";
const projects = [
  {
    id: 1,
    title: "Image Classification using CNN",
    description: "Implemented CNN with preprocessing, augmentation, andhyperparameter tuning to achieve high accuracy in image classification tasks.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    github: null,
    live: null,
    private: false,
  },
  {
    id: 2,
    title: "Online Payment Fraud Detection",
    description: "Designed deep learning model handling class imbalance to improvefraud precision-recall performance in financial transactions.",
    tech: ["Python", "Deep Learning", "TensorFlow", "Pandas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Jigarbarad/Online_payment_fraud_detection",
    live: null,
    private: false,
  },
  {
    id: 3,
    title: "Sports Academy Management System",
    description: "Cricket academy management platform with player registration,scheduling, and performance tracking for coaches and administrators.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Jigarbarad",
    live: "https://hrsportzzdesktop.netlify.app/",
    private: false,
  },
  {
    id: 4,
    title: "Food Restaurant Web Application",
    description: "Online ordering system with reservation management and admindashboard for seamless restaurant operations.",
    tech: ["TypeScript", "React", "FastAPI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    github: "https://github.com/Jigarbarad/FoodFactory",
    live: "https://street-food-app-3.preview.emergentagent.com/",
    private: false,
  },
];
const Projects = () => {
  return (
    <section id="projects" className="relative section-padding bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400mb-4 block">Portfolio</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing AI/ML solutions and full-stack applications
          </p>
        </motion.div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass project-card${index === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent" />
              </div>
              {/* Content */}
              <div className="relative p-6 md:p-8 min-h-[300px] md:min-h-[350px] flex flex-col justify-end">
                {/* Private Badge */}
                {project.private && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 rounded-full">
                    <Lock className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs font-mono text-yellow-400">Private
                      Repository</span>
                  </div>
                )}
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-purple-500/20text-purple-300 rounded-full">{tech}</span>
                  ))}
                </div>
                {/* Title */}
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>
                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github ? (
                    <Button asChild variant="outline" size="sm" className="border-purple-500/50 text-white hover:bg-purple-500/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />GitHub
                      </a>
                    </Button>
                  ) : (
                    <span className="text-xs text-gray-500 font-mono"> {/* "Available on request"  */}  </span>
                  )}
                  {project.live && (
                    <Button asChild size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="border-purple-500/50text-white hover:bg-purple-500/10 rounded-full px-8">
            <a href="https://github.com/Jigarbarad" target="_blank" rel="noopenernoreferrer">
              <Github className="w-5 h-5 mr-2" />View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
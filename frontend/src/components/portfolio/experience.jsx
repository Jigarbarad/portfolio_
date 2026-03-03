import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    company: "The Skybrisk",
    location: "Remote",
    period: "July 2025 – December 2025",
    description: [
      "Built Spring Boot backend systems with scalable architecture",
      "Developed and maintained REST APIs for various applications",
      "Worked in Agile workflow with cross-functional teams",
      "Implemented database optimizations and caching strategies",
    ],
    type: "Full-time",
  },
  {
    id: 2,
    title: "AI-ML Engineer",
    company: "Rooman Technologies",
    location: "India",
    period: "Sept 2024 – March 2025",
    description: [
      "Built deep learning models for production environments",
      "Applied MLOps practices for model deployment and monitoring",
      "Developed data pipelines for large-scale processing",
      "Collaborated with data science teams on model optimization",
    ],
    type: "Full-time",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative section-padding bg-gradient-to-b from-[#030014] via-[#0a0118] to-[#030014]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400 mb-4 block">Career Journey</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Building production-grade systems and intelligent solutions</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent md:-translate-x-px" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)] md:ml-auto"}`}
            >
              {/* Timeline Node */}
              <div className={`absolute top-0 ${index % 2 === 0 ? "left-0 md:right-0 md:left-auto md:translate-x-1/2" : "left-0 md:-translate-x-1/2"} w-4 h-4 rounded-full bg-purple-500 pulse-glow md:left-1/2`} />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 glass rounded-2xl p-6 hover:border-purple-500/40 transition-all ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                {/* Badge */}
                <span className="inline-block px-3 py-1 text-xs font-mono bg-purple-500/20 text-purple-300 rounded-full mb-4">{exp.type}</span>

                {/* Title & Company */}
                <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">{exp.title}</h3>
                <div className={`flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-purple-400" />{exp.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-cyan-400" />{exp.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-green-400" />{exp.period}</span>
                </div>

                {/* Description */}
                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono bg-cyan-500/20 text-cyan-300 rounded-full mb-4">Education</span>
          <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-2">MSc Advanced Computer Science</h3>
          <p className="text-purple-400 font-space mb-4">University of Leicester</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            Focused on AI/ML, distributed systems, and advanced software engineering. Building the foundation for cutting-edge technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
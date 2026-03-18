import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "Deep Learning", level: 75 },
      { name: "MLOps", level: 75 },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "AWS", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding bg-gradient-to-b from-[#030014] via-[#0a0118] to-[#030014]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400 mb-4 block">
            Technical Expertise
          </span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development and AI/ML engineering
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Tilt options={{ max: 10, scale: 1.02, speed: 400 }} className="skill-card-container">
                <div className="glass rounded-2xl p-6 h-full hover:border-purple-500/40 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                    <h3 className="font-syne font-bold text-xl text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-space text-sm text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Tags */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["REST APIs", "Agile", "CI/CD", "Testing", "System Design", "Microservices"].map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 glass rounded-full text-sm font-mono text-gray-400 hover:text-white hover:border-purple-500/40 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;